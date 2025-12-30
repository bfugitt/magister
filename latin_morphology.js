/**
 * LATIN MORPHOLOGY ENGINE
 * Generates declension and conjugation tables based on simple lemma inputs.
 */

const LatinMorph = {

    // --- UTILITIES ---

    // Helper to detect stem for 2nd Declension -r nouns (puer vs ager)
    // Since the DB doesn't have genitive sing, we use a "drop e" list for common beginner words.
    getStem2ndMasculine: (lat) => {
        if (lat.endsWith("us")) return lat.slice(0, -2); // serv-us
        if (lat.endsWith("ir")) return lat; // vir
        
        // Handling -er nouns
        if (lat.endsWith("er")) {
            const dropEWords = ["ager", "magister", "liber", "aper", "cancer", "caper", "faber"];
            // If it's in the list, drop the 'e' (ager -> agr)
            if (dropEWords.some(w => lat.includes(w))) {
                return lat.slice(0, -2) + "r";
            }
            // Otherwise keep it (puer -> puer)
            return lat;
        }
        return lat;
    },

    getStemNoun: (word) => {
        const { lat, decl } = word;
        if (decl == 1) return lat.slice(0, -1); // agricola -> agricol
        if (decl == 2) return LatinMorph.getStem2ndMasculine(lat);
        // For 3rd declension, guessing stem from Nom Sg is impossible without a dictionary.
        // We will return NULL to signal the UI to skip this word in grammar mode,
        // unless you add a 'stem' property to your DB later.
        if (word.stem) return word.stem;
        if (decl == 3) return null; 
        
        return lat; // Fallback
    },

    // --- NOUN DECLENSIONS ---

    declension1: (stem) => ({
        "Nom Sg": stem + "a",   "Nom Pl": stem + "ae",
        "Gen Sg": stem + "ae",  "Gen Pl": stem + "ārum",
        "Dat Sg": stem + "ae",  "Dat Pl": stem + "īs",
        "Acc Sg": stem + "am",  "Acc Pl": stem + "ās",
        "Abl Sg": stem + "ā",   "Abl Pl": stem + "īs"
    }),

    declension2M: (stem, originalWord) => ({
        // Nom Sg is the original word (puer, ager, servus)
        "Nom Sg": originalWord, "Nom Pl": stem + "ī",
        "Gen Sg": stem + "ī",   "Gen Pl": stem + "ōrum",
        "Dat Sg": stem + "ō",   "Dat Pl": stem + "īs",
        "Acc Sg": stem + "um",  "Acc Pl": stem + "ōs",
        "Abl Sg": stem + "ō",   "Abl Pl": stem + "īs"
    }),

    declension2N: (stem) => ({
        "Nom Sg": stem + "um",  "Nom Pl": stem + "a",
        "Gen Sg": stem + "ī",   "Gen Pl": stem + "ōrum",
        "Dat Sg": stem + "ō",   "Dat Pl": stem + "īs",
        "Acc Sg": stem + "um",  "Acc Pl": stem + "a",
        "Abl Sg": stem + "ō",   "Abl Pl": stem + "īs"
    }),

    // --- VERB CONJUGATIONS (Present System Only for Beginners) ---

    getVerbStem: (lat, conj) => {
        // Simple heuristic for Present Stem
        if (conj == 1) return lat.slice(0, -1) + "a"; // amo -> ama
        if (conj == 2) return lat.slice(0, -2); // moneo -> mone
        if (conj == 3) return lat.slice(0, -1); // duco -> duc (Consonant stem)
        // 3rd -io? (capio)
        if (lat.endsWith("io") && conj == 3) return lat.slice(0, -2) + "i"; 
        if (conj == 4) return lat.slice(0, -1); // audio -> audi
        return lat;
    },

    conjugate: (word) => {
        const stem = LatinMorph.getVerbStem(word.lat, word.conj);
        let forms = {};
        const c = word.conj;
        const is3io = word.lat.endsWith("io") && c == 3;

        // PRESENT INDICATIVE ACTIVE
        if (c == 1) {
            forms = {
                "Pres Ind 1sg": word.lat, // amo (special case 1st person)
                "Pres Ind 2sg": stem + "s", "Pres Ind 3sg": stem + "t",
                "Pres Ind 1pl": stem + "mus", "Pres Ind 2pl": stem + "tis", "Pres Ind 3pl": stem + "nt"
            };
        } else if (c == 2) {
            forms = {
                "Pres Ind 1sg": word.lat, // moneo
                "Pres Ind 2sg": stem + "s", "Pres Ind 3sg": stem + "t",
                "Pres Ind 1pl": stem + "mus", "Pres Ind 2pl": stem + "tis", "Pres Ind 3pl": stem + "nt"
            };
        } else if (c == 3 && !is3io) { // duco, ducere, duc-
            // duc-o, duc-is, duc-it...
            forms = {
                "Pres Ind 1sg": word.lat,
                "Pres Ind 2sg": stem + "is", "Pres Ind 3sg": stem + "it",
                "Pres Ind 1pl": stem + "imus", "Pres Ind 2pl": stem + "itis", "Pres Ind 3pl": stem + "unt"
            };
        } else if (c == 4 || is3io) { // audio/capio
             // audi-o, audi-s, audi-t... audi-unt
             // capi-o, capi-s, capi-t... capi-unt
             forms = {
                "Pres Ind 1sg": word.lat,
                "Pres Ind 2sg": stem + "s", "Pres Ind 3sg": stem + "t",
                "Pres Ind 1pl": stem + "mus", "Pres Ind 2pl": stem + "tis", "Pres Ind 3pl": stem + "unt"
            };
        }

        // IMPERFECT INDICATIVE ACTIVE (ba)
        // 1/2: stem + ba
        // 3/4: stem + e + ba
        let impStem = stem;
        if (c == 3 && !is3io) impStem = stem + "ē"; // duc-e-ba
        else if (c == 3 && is3io) impStem = stem + "ē"; // capi-e-ba
        else if (c == 4) impStem = stem + "ē"; // audi-e-ba
        else impStem = stem + "ba"; // ama-ba, mone-ba

        forms["Imp Ind 1sg"] = impStem + "m";
        forms["Imp Ind 2sg"] = impStem + "s";
        forms["Imp Ind 3sg"] = impStem + "t";
        forms["Imp Ind 1pl"] = impStem + "mus";
        forms["Imp Ind 2pl"] = impStem + "tis";
        forms["Imp Ind 3pl"] = impStem + "nt";

        // FUTURE INDICATIVE ACTIVE
        // 1/2: bo/bis/bit
        // 3/4: am/es/et (The "Ham and Eggs" rule)
        if (c == 1 || c == 2) {
            forms["Fut Ind 1sg"] = stem + "bō";
            forms["Fut Ind 2sg"] = stem + "bis";
            forms["Fut Ind 3sg"] = stem + "bit";
            forms["Fut Ind 1pl"] = stem + "bimus";
            forms["Fut Ind 2pl"] = stem + "bitis";
            forms["Fut Ind 3pl"] = stem + "bunt";
        } else {
            // 3/4 use e-stem (duc-e-, audi-e-, capi-e-)
            let futStem = stem; 
            if (c == 3 && !is3io) futStem = stem; // duc-am
            if (c == 4 || is3io) futStem = stem; // audi-am / capi-am
            
            // Note: 3rd conj stems logic slightly tricky here, simplifying:
            // duc-am, duc-es...
            // audi-am, audi-es...
            const v = (c==3 && !is3io) ? "" : ""; // vowel handling built into ending usually
            
            // Actually, simply:
            let base = stem;
            if(c==3 && !is3io) base = stem; // duc
            if(c==4 || is3io) base = stem; // audi / capi

            forms["Fut Ind 1sg"] = base + "am";
            forms["Fut Ind 2sg"] = base + "ēs";
            forms["Fut Ind 3sg"] = base + "et";
            forms["Fut Ind 1pl"] = base + "ēmus";
            forms["Fut Ind 2pl"] = base + "ētis";
            forms["Fut Ind 3pl"] = base + "ent";
        }

        return forms;
    },

    // --- MAIN GENERATOR ---

    generateForms: (word) => {
        if (word.pos === 'n') {
            const stem = LatinMorph.getStemNoun(word);
            if (!stem) return null; // Cannot handle (likely 3rd decl without known stem)

            if (word.decl == 1) return LatinMorph.declension1(stem);
            if (word.decl == 2) {
                if (word.gen === 'n') return LatinMorph.declension2N(stem);
                return LatinMorph.declension2M(stem, word.lat);
            }
        }
        
        if (word.pos === 'v') {
            // Only handle conj 1, 2, 3, 4 (skip irregulars like 'sum' for now unless hardcoded)
            if ([1, 2, 3, 4].includes(word.conj)) {
                return LatinMorph.conjugate(word);
            }
        }

        return null; // Not supported yet
    }
};

// attach to window for browser usage
window.LatinMorph = LatinMorph;

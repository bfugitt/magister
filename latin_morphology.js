/**
 * LATIN MORPHOLOGY ENGINE
 * Generates declension and conjugation tables and manages labels/distractors.
 */

const LatinMorph = {

    // --- UTILITIES ---

    // Human readable labels
    getFormattedLabel: (key) => {
        const map = {
            "Nom": "Nominative", "Gen": "Genitive", "Dat": "Dative", "Acc": "Accusative", "Abl": "Ablative",
            "Sg": "Singular", "Pl": "Plural",
            "Pres": "Present", "Imp": "Imperfect", "Fut": "Future",
            "Ind": "Indicative", 
            "1sg": "1st Person Sg", "2sg": "2nd Person Sg", "3sg": "3rd Person Sg",
            "1pl": "1st Person Pl", "2pl": "2nd Person Pl", "3pl": "3rd Person Pl"
        };
        return key.split(' ').map(part => map[part] || part).join(' ');
    },

    // Defines the grid structure for the "Sort" activity
    getChartData: (pos) => {
        if (pos === 'n') {
            return {
                rows: ["Nom", "Gen", "Dat", "Acc", "Abl"],
                cols: ["Sg", "Pl"],
                // Maps grid coordinates back to the keys used in generateForms
                getKey: (r, c) => `${r} ${c}` 
            };
        } else if (pos === 'v') {
            // Group by Tense? For now, we only generate one tense at a time for sorting to keep it simple.
            // Let's default to Present System for now, or just generic 1-3 Person.
            return {
                rows: ["1st", "2nd", "3rd"],
                cols: ["Sg", "Pl"],
                getKey: (r, c, tense = "Pres Ind") => {
                    const pMap = {"1st":"1","2nd":"2","3rd":"3"};
                    const nMap = {"Sg":"sg","Pl":"pl"};
                    return `${tense} ${pMap[r]}${nMap[c]}`;
                }
            };
        }
        return null;
    },

    getStem2ndMasculine: (lat) => {
        if (lat.endsWith("us")) return lat.slice(0, -2); // serv-us
        if (lat.endsWith("ir")) return lat; // vir
        
        // Handling -er nouns
        if (lat.endsWith("er")) {
            const dropEWords = ["ager", "magister", "liber", "aper", "cancer", "caper", "faber"];
            if (dropEWords.some(w => lat.includes(w))) {
                return lat.slice(0, -2) + "r";
            }
            return lat;
        }
        return lat;
    },

    getStemNoun: (word) => {
        const { lat, decl } = word;
        if (decl == 1) return lat.slice(0, -1); // agricola -> agricol
        if (decl == 2) return LatinMorph.getStem2ndMasculine(lat);
        if (word.stem) return word.stem;
        if (decl == 3) return null; 
        return lat; 
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

    // --- VERB CONJUGATIONS ---

    getVerbStem: (lat, conj) => {
        if (conj == 1) return lat.slice(0, -1) + "a"; 
        if (conj == 2) return lat.slice(0, -2); 
        if (conj == 3) return lat.slice(0, -1); 
        if (lat.endsWith("io") && conj == 3) return lat.slice(0, -2) + "i"; 
        if (conj == 4) return lat.slice(0, -1); 
        return lat;
    },

    conjugate: (word) => {
        const stem = LatinMorph.getVerbStem(word.lat, word.conj);
        let forms = {};
        const c = word.conj;
        const is3io = word.lat.endsWith("io") && c == 3;

        // PRESENT
        let pStem = stem;
        if (c==3 && !is3io) { // duco
             forms = { "Pres Ind 1sg": word.lat, "Pres Ind 2sg": stem+"is", "Pres Ind 3sg": stem+"it", "Pres Ind 1pl": stem+"imus", "Pres Ind 2pl": stem+"itis", "Pres Ind 3pl": stem+"unt" };
        } else {
             // 1, 2, 4, 3io
             forms = { 
                 "Pres Ind 1sg": word.lat, "Pres Ind 2sg": stem+"s", "Pres Ind 3sg": stem+"t", 
                 "Pres Ind 1pl": stem+"mus", "Pres Ind 2pl": stem+"tis", "Pres Ind 3pl": stem+"nt" 
             };
        }

        // IMPERFECT (ba)
        let impStem = stem;
        if (c == 3 && !is3io) impStem = stem + "ē"; 
        else if (c == 3 && is3io) impStem = stem + "ē"; 
        else if (c == 4) impStem = stem + "ē"; 
        else impStem = stem + "ba"; 

        ["m","s","t","mus","tis","nt"].forEach((end, i) => {
            const p = ["1sg","2sg","3sg","1pl","2pl","3pl"][i];
            forms[`Imp Ind ${p}`] = impStem + end;
        });

        // FUTURE (bo/bis/bit vs am/es/et)
        if (c == 1 || c == 2) {
            const endings = ["bō","bis","bit","bimus","bitis","bunt"];
            endings.forEach((end, i) => {
                forms[`Fut Ind ${["1sg","2sg","3sg","1pl","2pl","3pl"][i]}`] = stem + end;
            });
        } else {
            let futStem = stem;
            const endings = ["am","ēs","et","ēmus","ētis","ent"];
            endings.forEach((end, i) => {
                forms[`Fut Ind ${["1sg","2sg","3sg","1pl","2pl","3pl"][i]}`] = futStem + end;
            });
        }

        return forms;
    },

    // --- API ---

    generateForms: (word) => {
        if (word.pos === 'n') {
            const stem = LatinMorph.getStemNoun(word);
            if (!stem) return null;
            if (word.decl == 1) return LatinMorph.declension1(stem);
            if (word.decl == 2) {
                if (word.gen === 'n') return LatinMorph.declension2N(stem);
                return LatinMorph.declension2M(stem, word.lat);
            }
        }
        
        if (word.pos === 'v' && [1, 2, 3, 4].includes(word.conj)) {
            return LatinMorph.conjugate(word);
        }

        return null;
    },

    // For Parse Activity:
    // We need to know if "agricolae" appears multiple times in the chart (Gen Sg, Dat Sg, Nom Pl)
    // to avoid creating a distractor that is actually correct.
    getDistractors: (word, correctText) => {
        const forms = LatinMorph.generateForms(word);
        if (!forms) return [];
        
        // Distractors must satisfy: value != correctText
        // (i.e. don't pick Nom Pl as a distractor for Gen Sg if they are both "agricolae")
        const allForms = Object.values(forms);
        const distractors = allForms.filter(f => f !== correctText);
        
        // Remove duplicates and shuffle
        return [...new Set(distractors)].sort(() => Math.random() - 0.5).slice(0, 3);
    },

    // For Parse Activity - Distractor LABELS
    // If the answer is "Gen Sg" (agricolae), we need distractors like "Acc Pl", not "agricolās"
    getParseDistractors: (word, correctKey, correctValue) => {
        const forms = LatinMorph.generateForms(word);
        if (!forms) return [];

        const validKeys = Object.keys(forms);
        
        // A key is a valid distractor if its VALUE is NOT the same as the target value
        // Example: if target is "agricolae" (Gen Sg), then "Nom Pl" (agricolae) is NOT a valid distractor (it's also correct).
        // But "Acc Sg" (agricolam) IS a valid distractor.
        
        const validDistractorKeys = validKeys.filter(k => forms[k] !== correctValue);
        
        return validDistractorKeys.sort(() => Math.random() - 0.5).slice(0, 3);
    }
};

window.LatinMorph = LatinMorph;

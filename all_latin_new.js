/**
 * LATIN VOCABULARY DATABASE - READ ME
 * * Fields:
 * - lat: The Latin lemma (dictionary form).
 * - eng: The English translation.
 * - gen: Gender (m = masculine, f = feminine, n = neuter, x = non-applicable).
 * - pos: Part of Speech (n = noun, v = verb, adj = adjective, adv = adverb, conj = conjunction, prep = preposition).
 * - ch:  Chapter number based on the textbook.
 * - decl: Noun declension (1, 2, 3, 4, 5).
 * - conj: Verb conjugation (1, 2, 3, 3io, 4, irr = irregular).
 * - tags: Special categories (e.g., "i-stem", "plural-only", "impersonal").
 */
window.vocabDB = [
//const vocabDB = [
    // --- CHAPTER 1 VOCABULARY ---
    { lat: "agricola", eng: "farmer", gen: "m", pos: "n", ch: 1, decl: 1 },
    { lat: "amo", eng: "to love", gen: "x", pos: "v", ch: 1, conj: 1 },
    { lat: "ambulo", eng: "to walk", gen: "x", pos: "v", ch: 1, conj: 1 },
    { lat: "aqua", eng: "water", gen: "f", pos: "n", ch: 1, decl: 1 },
    { lat: "athleta", eng: "athlete", gen: "m", pos: "n", ch: 1, decl: 1 },
    { lat: "bene", eng: "well", gen: "x", pos: "adv", ch: 1 },
    { lat: "curo", eng: "to take care of", gen: "x", pos: "v", ch: 1, conj: 1 },
    { lat: "est", eng: "is", gen: "x", pos: "v", ch: 1, conj: "irr" },
    { lat: "et", eng: "and", gen: "x", pos: "conj", ch: 1 },
    { lat: "filia", eng: "daughter", gen: "f", pos: "n", ch: 1, decl: 1 },
    { lat: "itaque", eng: "and so", gen: "x", pos: "conj", ch: 1 },
    { lat: "lupa", eng: "she-wolf", gen: "f", pos: "n", ch: 1, decl: 1 },
    { lat: "nauta", eng: "sailor", gen: "m", pos: "n", ch: 1, decl: 1 },
    { lat: "poeta", eng: "poet", gen: "m", pos: "n", ch: 1, decl: 1 },
    { lat: "postea", eng: "afterwards", gen: "x", pos: "adv", ch: 1 },
    { lat: "puella", eng: "girl", gen: "f", pos: "n", ch: 1, decl: 1 },
    { lat: "Roma", eng: "Rome", gen: "f", pos: "n", ch: 1, decl: 1 },
    { lat: "sunt", eng: "are", gen: "x", pos: "v", ch: 1, conj: "irr" },
    { lat: "terra", eng: "land", gen: "f", pos: "n", ch: 1, decl: 1 },

    // --- CHAPTER 2 VOCABULARY ---
    { lat: "ager", eng: "field", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "amicus", eng: "friend", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "annus", eng: "year", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "campus", eng: "field/plain", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "clamo", eng: "to shout", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "cum", eng: "with", gen: "x", pos: "prep", ch: 2 },
    { lat: "debeo", eng: "to owe/ought", gen: "x", pos: "v", ch: 2, conj: 2 },
    { lat: "deus", eng: "god", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "do", eng: "to give", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "dominus", eng: "master", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "equus", eng: "horse", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "filius", eng: "son", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "gladius", eng: "sword", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "habeo", eng: "to have", gen: "x", pos: "v", ch: 2, conj: 2 },
    { lat: "habito", eng: "to live/dwell", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "laboro", eng: "to work", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "laudo", eng: "to praise", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "legatus", eng: "lieutenant/envoy", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "ludus", eng: "game/school", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "moneo", eng: "to warn", gen: "x", pos: "v", ch: 2, conj: 2 },
    { lat: "narro", eng: "to tell", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "nuntius", eng: "messenger", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "porto", eng: "to carry", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "puer", eng: "boy", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "servus", eng: "slave", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "specto", eng: "to watch", gen: "x", pos: "v", ch: 2, conj: 1 },
    { lat: "sum", eng: "to be", gen: "x", pos: "v", ch: 2, conj: "irr" },
    { lat: "timeo", eng: "to fear", gen: "x", pos: "v", ch: 2, conj: 2 },
    { lat: "video", eng: "to see", gen: "x", pos: "v", ch: 2, conj: 2 },
    { lat: "vir", eng: "man", gen: "m", pos: "n", ch: 2, decl: 2 },
    { lat: "voco", eng: "to call", gen: "x", pos: "v", ch: 2, conj: 1 },

    // --- CHAPTER 3 VOCABULARY ---
    { lat: "ad", eng: "to/toward", gen: "x", pos: "prep", ch: 3 },
    { lat: "altus", eng: "high/deep", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "appello", eng: "to call/name", gen: "x", pos: "v", ch: 3, conj: 1 },
    { lat: "bellum", eng: "war", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "bonus", eng: "good", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "caelum", eng: "sky", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "convoco", eng: "to call together", gen: "x", pos: "v", ch: 3, conj: 1 },
    { lat: "donum", eng: "gift", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "exspecto", eng: "to wait for", gen: "x", pos: "v", ch: 3, conj: 1 },
    { lat: "ferus", eng: "wild", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "frumentum", eng: "grain", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "latus", eng: "wide", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "longus", eng: "long", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "magnus", eng: "large/great", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "malus", eng: "bad/evil", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "meus", eng: "my", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "miser", eng: "wretched", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "multus", eng: "much/many", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "non", eng: "not", gen: "x", pos: "adv", ch: 3 },
    { lat: "oppidum", eng: "town", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "parvus", eng: "small", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "periculum", eng: "danger", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "pulcher", eng: "beautiful", gen: "m", pos: "adj", ch: 3, decl: "1-2" },
    { lat: "regnum", eng: "kingdom", gen: "n", pos: "n", ch: 3, decl: 2 },
    { lat: "tuus", eng: "your", gen: "m", pos: "adj", ch: 3, decl: "1-2" },

    // --- CHAPTER 4 VOCABULARY ---
    { lat: "arma", eng: "weapons/arms", gen: "n", pos: "n", ch: 4, decl: 2, tags: ["plural-only"] },
    { lat: "autem", eng: "however", gen: "x", pos: "conj", ch: 4 },
    { lat: "castra", eng: "camp", gen: "n", pos: "n", ch: 4, decl: 2, tags: ["plural-only"] },
    { lat: "consilium", eng: "plan/advice", gen: "n", pos: "n", ch: 4, decl: 2 },
    { lat: "dolus", eng: "trickery/deception", gen: "m", pos: "n", ch: 4, decl: 2 },
    { lat: "e", eng: "from/out of", gen: "x", pos: "prep", ch: 4 },
    { lat: "exemplum", eng: "example", gen: "n", pos: "n", ch: 4, decl: 2 },
    { lat: "in", eng: "in/on/into", gen: "x", pos: "prep", ch: 4 },
    { lat: "intro", eng: "to enter", gen: "x", pos: "v", ch: 4, conj: 1 },
    { lat: "iubeo", eng: "to order", gen: "x", pos: "v", ch: 4, conj: 2 },
    { lat: "iustus", eng: "just/righteous", gen: "m", pos: "adj", ch: 4, decl: "1-2" },
    { lat: "praeclarus", eng: "famous/distinguished", gen: "m", pos: "adj", ch: 4, decl: "1-2" },
    { lat: "praemium", eng: "reward", gen: "n", pos: "n", ch: 4, decl: 2 },
    { lat: "Romanus", eng: "Roman", gen: "m", pos: "adj", ch: 4, decl: "1-2" },
    { lat: "sed", eng: "but", gen: "x", pos: "conj", ch: 4 },
    { lat: "venenum", eng: "poison", gen: "n", pos: "n", ch: 4, decl: 2 },
    { lat: "vinculum", eng: "chain/fetter", gen: "n", pos: "n", ch: 4, decl: 2 },

    // --- CHAPTER 5 VOCABULARY ---
    { lat: "a", eng: "by/from", gen: "x", pos: "prep", ch: 5 },
    { lat: "auxilium", eng: "help", gen: "n", pos: "n", ch: 5, decl: 2 },
    { lat: "cogito", eng: "to think", gen: "x", pos: "v", ch: 5, conj: 1 },
    { lat: "de", eng: "about/down from", gen: "x", pos: "prep", ch: 5 },
    { lat: "doleo", eng: "to feel pain/hurt", gen: "x", pos: "v", ch: 5, conj: 2 },
    { lat: "epistula", eng: "letter", gen: "f", pos: "n", ch: 5, decl: 1 },
    { lat: "familia", eng: "family/household", gen: "f", pos: "n", ch: 5, decl: 1 },
    { lat: "gaudium", eng: "joy", gen: "n", pos: "n", ch: 5, decl: 2 },
    { lat: "lacrima", eng: "tear", gen: "f", pos: "n", ch: 5, decl: 1 },
    { lat: "longe", eng: "far", gen: "x", pos: "adv", ch: 5 },
    { lat: "nam", eng: "for/in fact", gen: "x", pos: "conj", ch: 5 },
    { lat: "paro", eng: "to prepare", gen: "x", pos: "v", ch: 5, conj: 1 },
    { lat: "semper", eng: "always", gen: "x", pos: "adv", ch: 5 },





/**
 * LATIN VOCABULARY DATABASE - READ ME
 * * Fields:
 * - lat: The Latin lemma (dictionary form).
 * - eng: The English translation.
 * - gen: Gender (m = masculine, f = feminine, n = neuter, x = non-applicable).
 * - pos: Part of Speech (n = noun, v = verb, adj = adjective, adv = adverb, conj = conjunction, prep = preposition).
 * - ch:  Chapter number based on the textbook.
 * - decl: Noun/Adjective declension (1, 2, 3, 4, 5, or "1-2").
 * - conj: Verb conjugation (1, 2, 3, 3io, 4, irr = irregular).
 * - tags: Special categories (e.g., "i-stem", "plural-only", "demonstrative").
 */

    // ... Chapters 1-5 ...

    // --- CHAPTER 6 VOCABULARY ---
    { lat: "disco", eng: "to learn", gen: "x", pos: "v", ch: 6, conj: 3 },
    { lat: "doceo", eng: "to teach", gen: "x", pos: "v", ch: 6, conj: 2 },
    { lat: "dum", eng: "while", gen: "x", pos: "conj", ch: 6 },
    { lat: "firmo", eng: "to strengthen", gen: "x", pos: "v", ch: 6, conj: 1 },
    { lat: "iudico", eng: "to judge", gen: "x", pos: "v", ch: 6, conj: 1 },
    { lat: "littera", eng: "letter (alphabet)", gen: "f", pos: "n", ch: 6, decl: 1 },
    { lat: "maneo", eng: "to remain", gen: "x", pos: "v", ch: 6, conj: 2 },
    { lat: "memoria", eng: "memory", gen: "f", pos: "n", ch: 6, decl: 1 },
    { lat: "multum", eng: "much", gen: "x", pos: "adv", ch: 6 },
    { lat: "possum", eng: "to be able/can", gen: "x", pos: "v", ch: 6, conj: "irr" },
    { lat: "scientia", eng: "knowledge", gen: "f", pos: "n", ch: 6, decl: 1 },
    { lat: "servo", eng: "to save/preserve", gen: "x", pos: "v", ch: 6, conj: 1 },
    { lat: "soleo", eng: "to be accustomed", gen: "x", pos: "v", ch: 6, conj: 2 },
    { lat: "tenebrae", eng: "shadows/darkness", gen: "f", pos: "n", ch: 6, decl: 1, tags: ["plural-only"] },
    { lat: "vita", eng: "life", gen: "f", pos: "n", ch: 6, decl: 1 },

    // --- CHAPTER 7 VOCABULARY ---
    { lat: "aestimo", eng: "to regard/value", gen: "x", pos: "v", ch: 7, conj: 1 },
    { lat: "amor", eng: "love", gen: "m", pos: "n", ch: 7, decl: 3 },
    { lat: "deliciae", eng: "delight/pet", gen: "f", pos: "n", ch: 7, decl: 1, tags: ["plural-only"] },
    { lat: "gremium", eng: "lap", gen: "n", pos: "n", ch: 7, decl: 2 },
    { lat: "invideo", eng: "to envy", gen: "x", pos: "v", ch: 7, conj: 2 },
    { lat: "mel", eng: "honey", gen: "n", pos: "n", ch: 7, decl: 3 },
    { lat: "mellitus", eng: "honey-sweet", gen: "m", pos: "adj", ch: 7, decl: "1-2" },
    { lat: "oculus", eng: "eye", gen: "m", pos: "n", ch: 7, decl: 2 },
    { lat: "passer", eng: "sparrow", gen: "m", pos: "n", ch: 7, decl: 3 },
    { lat: "pax", eng: "peace", gen: "f", pos: "n", ch: 7, decl: 3 },
    { lat: "puto", eng: "to think", gen: "x", pos: "v", ch: 7, conj: 1 },
    { lat: "se", eng: "he/she/they (reflexive)", gen: "x", pos: "n", ch: 7, tags: ["reflexive"] },
    { lat: "senex", eng: "old man", gen: "m", pos: "n", ch: 7, decl: 3 },
    { lat: "severus", eng: "strict/severe", gen: "m", pos: "adj", ch: 7, decl: "1-2" },
    { lat: "soror", eng: "sister", gen: "f", pos: "n", ch: 7, decl: 3 },
    { lat: "verbum", eng: "word", gen: "n", pos: "n", ch: 7, decl: 2 },

    // --- CHAPTER 8 VOCABULARY ---
    { lat: "decerno", eng: "to decide", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "dico", eng: "to say", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "dux", eng: "leader/general", gen: "m", pos: "n", ch: 8, decl: 3 },
    { lat: "gero", eng: "to carry/wage/wear", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "homo", eng: "man/human", gen: "m", pos: "n", ch: 8, decl: 3 },
    { lat: "intellego", eng: "to understand", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "lex", eng: "law", gen: "f", pos: "n", ch: 8, decl: 3 },
    { lat: "miles", eng: "soldier", gen: "m", pos: "n", ch: 8, decl: 3 },
    { lat: "murus", eng: "wall", gen: "m", pos: "n", ch: 8, decl: 2 },
    { lat: "navis", eng: "ship", gen: "f", pos: "n", ch: 8, decl: 3, tags: ["i-stem"] },
    { lat: "oraculum", eng: "oracle", gen: "n", pos: "n", ch: 8, decl: 2 },
    { lat: "peto", eng: "to seek/ask/attack", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "relinquo", eng: "to leave behind", gen: "x", pos: "v", ch: 8, conj: 3 },
    { lat: "saepe", eng: "often", gen: "x", pos: "adv", ch: 8 },
    { lat: "salus", eng: "safety/health", gen: "f", pos: "n", ch: 8, decl: 3 },
    { lat: "tandem", eng: "finally/at last", gen: "x", pos: "adv", ch: 8 },
    { lat: "vinco", eng: "to conquer/defeat", gen: "x", pos: "v", ch: 8, conj: 3 },

    // --- CHAPTER 9 VOCABULARY ---
    { lat: "capio", eng: "to take/seize", gen: "x", pos: "v", ch: 9, conj: "3io" },
    { lat: "civis", eng: "citizen", gen: "m", pos: "n", ch: 9, decl: 3, tags: ["i-stem"] },
    { lat: "coniuratio", eng: "conspiracy", gen: "f", pos: "n", ch: 9, decl: 3 },
    { lat: "corpus", eng: "body", gen: "n", pos: "n", ch: 9, decl: 3 },
    { lat: "hic", eng: "this", gen: "m", pos: "adj", ch: 9, tags: ["demonstrative"] },
    { lat: "ille", eng: "that", gen: "m", pos: "adj", ch: 9, tags: ["demonstrative"] },
    { lat: "impetus", eng: "attack", gen: "m", pos: "n", ch: 9, decl: 4 },
    { lat: "iste", eng: "that (wretched)", gen: "m", pos: "adj", ch: 9, tags: ["demonstrative"] },
    { lat: "ius", eng: "right/law", gen: "n", pos: "n", ch: 9, decl: 3 },
    { lat: "mons", eng: "mountain", gen: "m", pos: "n", ch: 9, decl: 3, tags: ["i-stem"] },
    { lat: "oratio", eng: "speech", gen: "f", pos: "n", ch: 9, decl: 3 },
    { lat: "sentio", eng: "to feel/perceive", gen: "x", pos: "v", ch: 9, conj: 4 },
    { lat: "urbs", eng: "city", gen: "f", pos: "n", ch: 9, decl: 3, tags: ["i-stem"] },
    { lat: "venio", eng: "to come", gen: "x", pos: "v", ch: 9, conj: 4 },

    // --- CHAPTER 10 VOCABULARY ---
    { lat: "acer", eng: "sharp/fierce", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "audax", eng: "bold", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "celeber", eng: "famous/renowned", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "celer", eng: "swift/fast", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "cupio", eng: "to desire/want", gen: "x", pos: "v", ch: 10, conj: "3io" },
    { lat: "facio", eng: "to do/make", gen: "x", pos: "v", ch: 10, conj: "3io" },
    { lat: "felix", eng: "lucky/happy", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "fortis", eng: "brave/strong", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "fugio", eng: "to flee", gen: "x", pos: "v", ch: 10, conj: "3io" },
    { lat: "iacio", eng: "to throw", gen: "x", pos: "v", ch: 10, conj: "3io" },
    { lat: "nobilis", eng: "noble", gen: "m", pos: "adj", ch: 10, decl: 3 },
    { lat: "omnis", eng: "all/every", gen: "m", pos: "adj", ch: 10, decl: 3 },





/**
 * LATIN VOCABULARY DATABASE - READ ME
 * * Fields:
 * - lat: The Latin lemma (dictionary form).
 * - eng: The English translation.
 * - gen: Gender (m = masculine, f = feminine, n = neuter, x = non-applicable).
 * - pos: Part of Speech (n = noun, v = verb, adj = adjective, adv = adverb, conj = conjunction, prep = preposition).
 * - ch:  Chapter number based on the textbook.
 * - decl: Noun/Adjective declension (1, 2, 3, 4, 5, or "1-2").
 * - conj: Verb conjugation (1, 2, 3, 3io, 4, irr = irregular).
 * - tags: Special categories (e.g., "i-stem", "plural-only", "pronoun", "number").
 */

    // ... Chapters 1-10 ...

    // --- CHAPTER 11 VOCABULARY ---
    { lat: "commoveo", eng: "to move/upset", gen: "x", pos: "v", ch: 11, conj: 2 },
    { lat: "deleo", eng: "to destroy", gen: "x", pos: "v", ch: 11, conj: 2 },
    { lat: "dolor", eng: "pain/grief", gen: "m", pos: "n", ch: 11, decl: 3 },
    { lat: "flamma", eng: "flame", gen: "f", pos: "n", ch: 11, decl: 1 },
    { lat: "incendo", eng: "to burn/set on fire", gen: "x", pos: "v", ch: 11, conj: 3 },
    { lat: "navigo", eng: "to sail", gen: "x", pos: "v", ch: 11, conj: 1 },
    { lat: "obsideo", eng: "to besiege", gen: "x", pos: "v", ch: 11, conj: 2 },
    { lat: "regina", eng: "queen", gen: "f", pos: "n", ch: 11, decl: 1 },
    { lat: "specus", eng: "cave", gen: "m", pos: "n", ch: 11, decl: 4 },
    { lat: "tempestas", eng: "storm", gen: "f", pos: "n", ch: 11, decl: 3 },

    // --- CHAPTER 12 VOCABULARY ---
    { lat: "adulescens", eng: "young man/woman", gen: "m", pos: "n", ch: 12, decl: 3, tags: ["i-stem"] },
    { lat: "consumo", eng: "to consume/eat", gen: "x", pos: "v", ch: 12, conj: 3 },
    { lat: "dextra", eng: "right hand", gen: "f", pos: "n", ch: 12, decl: 1 },
    { lat: "ego", eng: "I", gen: "x", pos: "n", ch: 12, tags: ["pronoun"] },
    { lat: "hostis", eng: "enemy", gen: "m", pos: "n", ch: 12, decl: 3, tags: ["i-stem"] },
    { lat: "ignis", eng: "fire", gen: "m", pos: "n", ch: 12, decl: 3, tags: ["i-stem"] },
    { lat: "ira", eng: "anger", gen: "f", pos: "n", ch: 12, decl: 1 },
    { lat: "nos", eng: "we/us", gen: "x", pos: "n", ch: 12, tags: ["pronoun"] },
    { lat: "noster", eng: "our", gen: "m", pos: "adj", ch: 12, decl: "1-2" },
    { lat: "tango", eng: "to touch", gen: "x", pos: "v", ch: 12, conj: 3 },
    { lat: "tu", eng: "you", gen: "x", pos: "n", ch: 12, tags: ["pronoun"] },
    { lat: "vester", eng: "your (plural)", gen: "m", pos: "adj", ch: 12, decl: "1-2" },
    { lat: "vis", eng: "force/violence", gen: "f", pos: "n", ch: 12, decl: 3, tags: ["irregular", "i-stem"] },
    { lat: "vos", eng: "you all", gen: "x", pos: "n", ch: 12, tags: ["pronoun"] },

    // --- CHAPTER 13 VOCABULARY ---
    { lat: "aequus", eng: "even/equal/just", gen: "m", pos: "adj", ch: 13, decl: "1-2" },
    { lat: "cor", eng: "heart", gen: "n", pos: "n", ch: 13, decl: 3 },
    { lat: "delecto", eng: "to delight/please", gen: "x", pos: "v", ch: 13, conj: 1 },
    { lat: "divinus", eng: "divine", gen: "m", pos: "adj", ch: 13, decl: "1-2" },
    { lat: "egeo", eng: "to lack/need", gen: "x", pos: "v", ch: 13, conj: 2 },
    { lat: "fur", eng: "thief", gen: "m", pos: "n", ch: 13, decl: 3 },
    { lat: "furtum", eng: "theft", gen: "n", pos: "n", ch: 13, decl: 2 },
    { lat: "humanus", eng: "human", gen: "m", pos: "adj", ch: 13, decl: "1-2" },
    { lat: "iniquitas", eng: "injustice/mischief", gen: "f", pos: "n", ch: 13, decl: 3 },
    { lat: "lex", eng: "law", gen: "f", pos: "n", ch: 13, decl: 3 },
    { lat: "ludo", eng: "to play", gen: "x", pos: "v", ch: 13, conj: 3 },
    { lat: "noctu", eng: "at night", gen: "x", pos: "adv", ch: 13 },
    { lat: "paene", eng: "almost", gen: "x", pos: "adv", ch: 13 },
    { lat: "pauper", eng: "poor", gen: "m", pos: "adj", ch: 13, decl: 3 },
    { lat: "plenus", eng: "full of", gen: "m", pos: "adj", ch: 13, decl: "1-2" },
    { lat: "pomum", eng: "fruit", gen: "n", pos: "n", ch: 13, decl: 2 },
    { lat: "punio", eng: "to punish", gen: "x", pos: "v", ch: 13, conj: 4 },

    // --- CHAPTER 14 VOCABULARY ---
    { lat: "accuso", eng: "to accuse", gen: "x", pos: "v", ch: 14, conj: 1 },
    { lat: "alienus", eng: "foreign/another's", gen: "m", pos: "adj", ch: 14, decl: "1-2" },
    { lat: "axis", eng: "axle/axis", gen: "m", pos: "n", ch: 14, decl: 3, tags: ["i-stem"] },
    { lat: "circum", eng: "around", gen: "x", pos: "prep", ch: 14 },
    { lat: "constantia", eng: "constancy", gen: "f", pos: "n", ch: 14, decl: 1 },
    { lat: "descendo", eng: "to descend", gen: "x", pos: "v", ch: 14, conj: 3 },
    { lat: "divitiae", eng: "wealth/riches", gen: "f", pos: "n", ch: 14, decl: 1, tags: ["plural-only"] },
    { lat: "eripio", eng: "to snatch away", gen: "x", pos: "v", ch: 14, conj: "3io" },
    { lat: "erro", eng: "to wander/make a mistake", gen: "x", pos: "v", ch: 14, conj: 1 },
    { lat: "externus", eng: "outward/external", gen: "m", pos: "adj", ch: 14, decl: "1-2" },
    { lat: "fortuna", eng: "fortune/luck", gen: "f", pos: "n", ch: 14, decl: 1 },
    { lat: "futurus", eng: "future/about to be", gen: "m", pos: "adj", ch: 14, decl: "1-2" },
    { lat: "honor", eng: "honor/public office", gen: "m", pos: "n", ch: 14, decl: 3 },
    { lat: "muto", eng: "to change", gen: "x", pos: "v", ch: 14, conj: 1 },
    { lat: "possideo", eng: "to possess", gen: "x", pos: "v", ch: 14, conj: 2 },
    { lat: "pro", eng: "for/on behalf of", gen: "x", pos: "prep", ch: 14 },
    { lat: "recipio", eng: "to take back", gen: "x", pos: "v", ch: 14, conj: "3io" },
    { lat: "reprehendo", eng: "to blame/rebuke", gen: "x", pos: "v", ch: 14, conj: 3 },
    { lat: "rota", eng: "wheel", gen: "f", pos: "n", ch: 14, decl: 1 },
    { lat: "tollo", eng: "to lift up/raise", gen: "x", pos: "v", ch: 14, conj: 3 },
    { lat: "ullus", eng: "any", gen: "m", pos: "adj", ch: 14, decl: "1-2", tags: ["pronominal"] },

    // --- CHAPTER 15 VOCABULARY ---
    { lat: "aperio", eng: "to open", gen: "x", pos: "v", ch: 15, conj: 4 },
    { lat: "appareo", eng: "to appear", gen: "x", pos: "v", ch: 15, conj: 2 },
    { lat: "apud", eng: "at/by/near", gen: "x", pos: "prep", ch: 15 },
    { lat: "bovile", eng: "cattle shed", gen: "n", pos: "n", ch: 15, decl: 3, tags: ["i-stem"] },
    { lat: "centum", eng: "hundred", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "decem", eng: "ten", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "duo", eng: "two", gen: "m", pos: "adj", ch: 15, tags: ["number", "irregular"] },
    { lat: "expecto", eng: "to look out for/wait for", gen: "x", pos: "v", ch: 15, conj: 1 },
    { lat: "illuc", eng: "there/to that place", gen: "x", pos: "adv", ch: 15 },
    { lat: "mille", eng: "thousand", gen: "x", pos: "adj", ch: 15, tags: ["number"] },
    { lat: "novem", eng: "nine", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "nubes", eng: "cloud", gen: "f", pos: "n", ch: 15, decl: 3, tags: ["i-stem"] },
    { lat: "octo", eng: "eight", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "onus", eng: "load/burden", gen: "n", pos: "n", ch: 15, decl: 3 },
    { lat: "plaustrum", eng: "wagon/cart", gen: "n", pos: "n", ch: 15, decl: 2 },
    { lat: "praeterea", eng: "besides", gen: "x", pos: "adv", ch: 15 },
    { lat: "procul", eng: "in the distance/far off", gen: "x", pos: "adv", ch: 15 },
    { lat: "pulvis", eng: "dust", gen: "m", pos: "n", ch: 15, decl: 3 },
    { lat: "quattuor", eng: "four", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "quinque", eng: "five", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "septem", eng: "seven", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "sex", eng: "six", gen: "x", pos: "adj", ch: 15, tags: ["number", "indeclinable"] },
    { lat: "tantum", eng: "only", gen: "x", pos: "adv", ch: 15 },
    { lat: "tardus", eng: "slow", gen: "m", pos: "adj", ch: 15, decl: "1-2" },
    { lat: "tres", eng: "three", gen: "m", pos: "adj", ch: 15, decl: 3, tags: ["number"] },
    { lat: "unus", eng: "one", gen: "m", pos: "adj", ch: 15, decl: "1-2", tags: ["number", "pronominal"] },
    { lat: "veho", eng: "to carry/transport", gen: "x", pos: "v", ch: 15, conj: 3 },
    { lat: "villa", eng: "country house", gen: "f", pos: "n", ch: 15, decl: 1 },




/**
 * LATIN VOCABULARY DATABASE - READ ME
 * * Fields:
 * - lat: The Latin lemma (dictionary form).
 * - eng: The English translation.
 * - gen: Gender (m = masculine, f = feminine, n = neuter, x = non-applicable).
 * - pos: Part of Speech (n = noun, v = verb, adj = adjective, adv = adverb, conj = conjunction, prep = preposition).
 * - ch:  Chapter number based on the textbook.
 * - decl: Noun/Adjective declension (1, 2, 3, 4, 5, or "1-2").
 * - conj: Verb conjugation (1, 2, 3, 3io, 4, irr = irregular).
 * - tags: Special categories (e.g., "i-stem", "plural-only", "impersonal", "deponent").
 */

    // ... Chapters 1-15 ...

    // --- CHAPTER 16 VOCABULARY ---
    { lat: "ardeo", eng: "to burn", gen: "x", pos: "v", ch: 16, conj: 2 },
    { lat: "cornu", eng: "horn/wing (of an army)", gen: "n", pos: "n", ch: 16, decl: 4 },
    { lat: "domus", eng: "house/home", gen: "f", pos: "n", ch: 16, decl: 4, tags: ["mixed-declension"] },
    { lat: "exercitus", eng: "army", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "fluctus", eng: "wave", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "genu", eng: "knee", gen: "n", pos: "n", ch: 16, decl: 4 },
    { lat: "impetus", eng: "attack/impetus", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "lego", eng: "to read/choose", gen: "x", pos: "v", ch: 16, conj: 3 },
    { lat: "licet", eng: "it is permitted", gen: "x", pos: "v", ch: 16, conj: 2, tags: ["impersonal"] },
    { lat: "manus", eng: "hand/band of men", gen: "f", pos: "n", ch: 16, decl: 4 },
    { lat: "metus", eng: "fear/dread", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "opprimo", eng: "to overwhelm/crush", gen: "x", pos: "v", ch: 16, conj: 3 },
    { lat: "passus", eng: "pace/step", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "senatus", eng: "senate", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "statim", eng: "immediately", gen: "x", pos: "adv", ch: 16 },
    { lat: "tamen", eng: "however/nevertheless", gen: "x", pos: "adv", ch: 16 },
    { lat: "tumultus", eng: "uproar/confusion", gen: "m", pos: "n", ch: 16, decl: 4 },
    { lat: "vultus", eng: "face/expression", gen: "m", pos: "n", ch: 16, decl: 4 },

    // --- CHAPTER 17 VOCABULARY ---
    { lat: "dies", eng: "day", gen: "m", pos: "n", ch: 17, decl: 5 },
    { lat: "facies", eng: "face/appearance", gen: "f", pos: "n", ch: 17, decl: 5 },
    { lat: "fides", eng: "faith/trust", gen: "f", pos: "n", ch: 17, decl: 5 },
    { lat: "humus", eng: "ground", gen: "f", pos: "n", ch: 17, decl: 2, tags: ["locative-common"] },
    { lat: "incendium", eng: "fire", gen: "n", pos: "n", ch: 17, decl: 2 },
    { lat: "litus", eng: "shore", gen: "n", pos: "n", ch: 17, decl: 3 },
    { lat: "mare", eng: "sea", gen: "n", pos: "n", ch: 17, decl: 3, tags: ["i-stem"] },
    { lat: "meridies", eng: "midday/noon", gen: "m", pos: "n", ch: 17, decl: 5 },
    { lat: "persuadeo", eng: "to persuade", gen: "x", pos: "v", ch: 17, conj: 2 },
    { lat: "precor", eng: "to pray/beg", gen: "x", pos: "v", ch: 17, conj: 1, tags: ["deponent"] },
    { lat: "publicus", eng: "public", gen: "m", pos: "adj", ch: 17, decl: "1-2" },
    { lat: "res", eng: "thing/matter/affair", gen: "f", pos: "n", ch: 17, decl: 5 },
    { lat: "species", eng: "sight/appearance", gen: "f", pos: "n", ch: 17, decl: 5 },
    { lat: "spes", eng: "hope", gen: "f", pos: "n", ch: 17, decl: 5 },
    { lat: "supero", eng: "to overcome/surpass", gen: "x", pos: "v", ch: 17, conj: 1 },
    { lat: "tempto", eng: "to try/attempt", gen: "x", pos: "v", ch: 17, conj: 1 },
    { lat: "tristis", eng: "sad", gen: "m", pos: "adj", ch: 17, decl: 3 },
    { lat: "ventus", eng: "wind", gen: "m", pos: "n", ch: 17, decl: 2 },

    // --- CHAPTER 18 VOCABULARY ---
    { lat: "colloquium", eng: "conversation", gen: "n", pos: "n", ch: 18, decl: 2 },
    { lat: "conspectus", eng: "sight/view", gen: "m", pos: "n", ch: 18, decl: 4 },
    { lat: "excito", eng: "to wake/rouse", gen: "x", pos: "v", ch: 18, conj: 1 },
    { lat: "infelix", eng: "unhappy/unlucky", gen: "m", pos: "adj", ch: 18, decl: 3 },
    { lat: "ita", eng: "thus/so", gen: "x", pos: "adv", ch: 18 },
    { lat: "lucerna", eng: "lamp", gen: "f", pos: "n", ch: 18, decl: 1 },
    { lat: "maritus", eng: "husband", gen: "m", pos: "n", ch: 18, decl: 2 },
    { lat: "oppugno", eng: "to attack", gen: "x", pos: "v", ch: 18, conj: 1 },
    { lat: "parentes", eng: "parents", gen: "m", pos: "n", ch: 18, decl: 3, tags: ["plural-only"] },
    { lat: "quaero", eng: "to look for/search", gen: "x", pos: "v", ch: 18, conj: 3 },
    { lat: "sagitta", eng: "arrow", gen: "f", pos: "n", ch: 18, decl: 1 },
    { lat: "si", eng: "if", gen: "x", pos: "conj", ch: 18 },
    { lat: "somnus", eng: "sleep", gen: "m", pos: "n", ch: 18, decl: 2 },
    { lat: "vox", eng: "voice", gen: "f", pos: "n", ch: 18, decl: 3 },

    // --- CHAPTER 19 VOCABULARY ---
    { lat: "argumentum", eng: "proof/evidence/argument", gen: "n", pos: "n", ch: 19, decl: 2 },
    { lat: "at", eng: "but/mind you", gen: "x", pos: "conj", ch: 19 },
    { lat: "auctor", eng: "author/originator", gen: "m", pos: "n", ch: 19, decl: 3 },
    { lat: "beneficium", eng: "benefit/kindness/favor", gen: "n", pos: "n", ch: 19, decl: 2 },
    { lat: "certus", eng: "definite/sure/certain", gen: "m", pos: "adj", ch: 19, decl: "1-2" },
    { lat: "contra", eng: "against", gen: "x", pos: "prep", ch: 19 },
    { lat: "delecto", eng: "to delight/charm/please", gen: "x", pos: "v", ch: 19, conj: 1 },
    { lat: "Graecia", eng: "Greece", gen: "f", pos: "n", ch: 19, decl: 1 },
    { lat: "gravis", eng: "heavy/serious/severe", gen: "m", pos: "adj", ch: 19, decl: 3 },
    { lat: "iam", eng: "now/already/soon", gen: "x", pos: "adv", ch: 19 },
    { lat: "immortalis", eng: "immortal", gen: "m", pos: "adj", ch: 19, decl: 3 },
    { lat: "iudex", eng: "judge/juror", gen: "m", pos: "n", ch: 19, decl: 3 },
    { lat: "iudicium", eng: "judgment/decision/trial", gen: "n", pos: "n", ch: 19, decl: 2 },
    { lat: "libero", eng: "to free/liberate", gen: "x", pos: "v", ch: 19, conj: 1 },
    { lat: "nisi", eng: "if not/unless/except", gen: "x", pos: "conj", ch: 19 },
    { lat: "quae", eng: "which? (fem adj)", gen: "f", pos: "adj", ch: 19, tags: ["interrogative"] },
    { lat: "qui", eng: "which? (masc adj)", gen: "m", pos: "adj", ch: 19, tags: ["interrogative"] },
    { lat: "quid", eng: "what?", gen: "n", pos: "n", ch: 19, tags: ["interrogative-pronoun"] },
    { lat: "quis", eng: "who?", gen: "x", pos: "n", ch: 19, tags: ["interrogative-pronoun"] },
    { lat: "quod", eng: "which? (neut adj)", gen: "n", pos: "adj", ch: 19, tags: ["interrogative"] },
    { lat: "scelus", eng: "evil deed/crime/wickedness", gen: "n", pos: "n", ch: 19, decl: 3 },

    // --- CHAPTER 20 VOCABULARY ---
    { lat: "abundo", eng: "to abound with", gen: "x", pos: "v", ch: 20, conj: 1 },
    { lat: "celeriter", eng: "quickly", gen: "x", pos: "adv", ch: 20 },
    { lat: "cogo", eng: "to force/compel/collect", gen: "x", pos: "v", ch: 20, conj: 3 },
    { lat: "fortiter", eng: "bravely/forcefully", gen: "x", pos: "adv", ch: 20 },
    { lat: "malo", eng: "to prefer", gen: "x", pos: "v", ch: 20, conj: "irr" },
    { lat: "mortalis", eng: "mortal/human", gen: "m", pos: "adj", ch: 20, decl: 3 },
    { lat: "multitudo", eng: "multitude/great number/crowd", gen: "f", pos: "n", ch: 20, decl: 3 },
    { lat: "nolo", eng: "to be unwilling/not want", gen: "x", pos: "v", ch: 20, conj: "irr" },
    { lat: "numquam", eng: "never", gen: "x", pos: "adv", ch: 20 },
    { lat: "postulo", eng: "to demand/claim", gen: "x", pos: "v", ch: 20, conj: 1 },
    { lat: "sacer", eng: "sacred", gen: "m", pos: "adj", ch: 20, decl: "1-2" },
    { lat: "sapiens", eng: "wise/sensible", gen: "m", pos: "adj", ch: 20, decl: 3 },
    { lat: "sino", eng: "to allow/permit", gen: "x", pos: "v", ch: 20, conj: 3 },
    { lat: "superus", eng: "upper/higher/above", gen: "m", pos: "adj", ch: 20, decl: "1-2" },
    { lat: "talis", eng: "such/of such a kind", gen: "m", pos: "adj", ch: 20, decl: 3 },
    { lat: "veto", eng: "to forbid/order not", gen: "x", pos: "v", ch: 20, conj: 1 },
    { lat: "volo", eng: "to wish/want/be willing", gen: "x", pos: "v", ch: 20, conj: "irr" },

    // --- CHAPTER 21 VOCABULARY ---
    { lat: "accipio", eng: "to accept/receive", gen: "x", pos: "v", ch: 21, conj: "3io" },
    { lat: "asper", eng: "rough/harsh", gen: "m", pos: "adj", ch: 21, decl: "1-2" },
    { lat: "atque", eng: "and also/and even", gen: "x", pos: "conj", ch: 21 },
    { lat: "casa", eng: "house/cottage/hut", gen: "f", pos: "n", ch: 21, decl: 1 },
    { lat: "causa", eng: "cause/reason/case", gen: "f", pos: "n", ch: 21, decl: 1 },
    { lat: "causa", eng: "for the sake of/on account of", gen: "x", pos: "prep", ch: 21, tags: ["postpositive"] },
    { lat: "contineo", eng: "to hold together/contain", gen: "x", pos: "v", ch: 21, conj: 2 },
    { lat: "fenestra", eng: "window", gen: "f", pos: "n", ch: 21, decl: 1 },
    { lat: "finis", eng: "end/limit/boundary", gen: "m", pos: "n", ch: 21, decl: 3, tags: ["i-stem"] },
    { lat: "gens", eng: "clan/race/nation/people", gen: "f", pos: "n", ch: 21, decl: 3, tags: ["i-stem"] },
    { lat: "iterum", eng: "again/a second time", gen: "x", pos: "adv", ch: 21 },
    { lat: "mundus", eng: "world/universe", gen: "m", pos: "n", ch: 21, decl: 2 },
    { lat: "rapio", eng: "to seize/snatch", gen: "x", pos: "v", ch: 21, conj: "3io" },
    { lat: "scio", eng: "to know", gen: "x", pos: "v", ch: 21, conj: 4 },
    { lat: "Troia", eng: "Troy", gen: "f", pos: "n", ch: 21, decl: 1 },
    { lat: "verso", eng: "to turn", gen: "x", pos: "v", ch: 21, conj: 1 },
    { lat: "vicinus", eng: "neighbor", gen: "m", pos: "n", ch: 21, decl: 2 },
    { lat: "vulgus", eng: "common people/mob/rabble", gen: "n", pos: "n", ch: 21, decl: 2, tags: ["irregular"] }
];





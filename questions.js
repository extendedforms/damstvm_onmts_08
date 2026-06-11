// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  {
    id: 1,
    image: "",
    question: "A 7-year-old child presents with recurrent dry, scaly skin, increased transepidermal water loss, and frequent superficial skin infections. Skin biopsy shows defective keratohyalin granules containing filaggrin and reduced secretion of lipid-rich lamellar bodies, leading to impaired epidermal barrier formation.\nWhich epidermal layer is primarily affected?",
    options: [
      "Stratum granulosum",
      "Stratum spinosum",
      "Stratum basale",
      "Stratum lucidum"
    ],
    answerIndex: 0,
    correctAnswerText: "Stratum granulosum"
  },
  {
    id: 2,
    image: "images/IMG_6951.jpeg",
    question: "A 24-year-old male presents with progressive thinning of hair over the frontal scalp. Trichoscopic examination shows miniaturized follicles producing thin, short, non-pigmented, non-medullated hairs that are located more superficially compared to thick scalp hairs.\nWhich type of hair is being described?",
    options: [
      "Lanugo hair",
      "Vellus hair",
      "Terminal hair",
      "Medullated animal hair"
    ],
    answerIndex: 1,
    correctAnswerText: "Vellus hair"
  },
  {
    id: 3,
    image: "images/IMG_6952.jpeg",
    question: "A 28-year-old woman presents with diffuse hair shedding 3 months after delivery. Hair-pull test is positive, and microscopy shows multiple club-shaped hairs. There is no scarring, scaling, or patchy alopecia.\nThe phase predominantly increased in this condition normally lasts for approximately:",
    options: [
      "2–5 years and forms nearly 80% of scalp hair",
      "3 weeks and represents an involutionary phase",
      "3 months and forms nearly 15% of scalp hair",
      "Variable empty follicle interval between shedding and regrowth"
    ],
    answerIndex: 2,
    correctAnswerText: "3 months and forms nearly 15% of scalp hair"
  },
  {
    id: 4,
    image: "images/IMG_6953.jpeg",
    question: "A 32-year-old woman presents with a slowly progressive patch of hair loss over the scalp. On examination, the affected area appears smooth, shiny, and atrophic, with loss of follicular openings. Mild perifollicular erythema and scaling are present at the margins. The dermatologist explains that regrowth is unlikely because the follicular stem cell region has been destroyed.\nWhich of the following conditions belongs to the same category of alopecia?",
    options: [
      "Alopecia areata",
      "Telogen effluvium",
      "Trichotillomania",
      "Lichen planus"
    ],
    answerIndex: 3,
    correctAnswerText: "Lichen planus"
  },
  {
    id: 5,
    image: "images/IMG_6954.jpeg",
    question: "A 19-year-old student presents with sudden onset well-defined patchy hair loss over the scalp. The skin over the patch is smooth, follicular openings are preserved, and dermoscopy shows tapering exclamation-mark hairs. Nail examination shows uniform geometric pitting. Biopsy from the active margin shows dense peribulbar T-lymphocytic infiltrate described as “swarm of bees” appearance.\nWhich is the primary target in this disorder?",
    options: [
      "Pigment-producing cells of the hair bulb",
      "Sebaceous glands around the follicle",
      "Arrector pili muscle of the follicle",
      "Dermal collagen around terminal follicles"
    ],
    answerIndex: 0,
    correctAnswerText: "Pigment-producing cells of the hair bulb"
  },
  {
    id: 6,
    image: "images/IMG_6956.jpeg",
    question: "A 6-month-old infant develops multiple tiny, clear, superficial vesicles over the trunk after a febrile illness in a hot humid climate. The lesions look like dew drops, are non-inflammatory, and rupture easily. The pediatrician explains that this occurs due to obstruction of the eccrine sweat duct at the most superficial epidermal level.\nAt which level is the obstruction most likely present?",
    options: [
      "Stratum corneum",
      "Stratum Malpighian",
      "Dermo-epidermal junction",
      "Deep dermis around apocrine gland"
    ],
    answerIndex: 0,
    correctAnswerText: "Stratum corneum"
  },
  {
    id: 7,
    image: "images/IMG_6960.jpeg",
    question: "A 26-year-old woman complains that her clothes get stained with yellow-green coloured sweat, especially from the axillary region. There is no foul smell, fever, sinus tract, or painful nodules. Histopathology shows accumulation of lipofuscin granules in apocrine secretory cells.\nWhat is the most likely diagnosis?",
    options: [
      "Bromhidrosis",
      "Chromhidrosis",
      "Fox-Fordyce disease",
      "Hidradenitis suppurativa"
    ],
    answerIndex: 1,
    correctAnswerText: "Chromhidrosis"
  },
  {
    id: 8,
    image: "images/IMG_6963.jpeg",
    question: "A 17-year-old boy presents with severe facial acne. Examination shows multiple painful deep lesions with nodules and cysts, along with old scars. The dermatologist explains that this stage occurs due to rupture of hair follicles in the pilosebaceous unit and carries a high risk of permanent scarring.\nWhich is the most appropriate treatment of choice?",
    options: [
      "Topical antibiotics",
      "Topical adapalene",
      "Oral isotretinoin",
      "Oral doxycycline"
    ],
    answerIndex: 2,
    correctAnswerText: "Oral isotretinoin"
  },
  {
    id: 9,
    image: "images/IMG_7097.jpeg",
    question: "A 29-year-old factory worker from an industrial chemical unit presents with sudden onset of multiple uniform acne-like lesions over the face and trunk. Examination shows predominantly monomorphic comedones, with minimal inflammatory papules or pustules. He gives a history of chronic exposure to chlorinated hydrocarbon compounds at work.\nWhat is the most likely diagnosis?",
    options: [
      "Acne excoriée",
      "Acne conglobata",
      "Acne fulminans",
      "Chloracne"
    ],
    answerIndex: 3,
    correctAnswerText: "Chloracne"
  },
  {
    id: 10,
    image: "images/IMG_6965.jpeg",
    question: "A 48-year-old man with chronic illness presents with paired transverse white bands across multiple fingernails. The bands are parallel to the lunula, do not move with nail growth, and become less prominent on applying pressure over the nail plate. Serum albumin is found to be markedly reduced.\nWhich nail finding is most likely present?",
    options: [
      "Muehrcke’s lines",
      "Mees’ lines",
      "Lindsay nails",
      "Onychomycosis"
    ],
    answerIndex: 0,
    correctAnswerText: "Muehrcke’s lines"
  },
  {
    id: 11,
    image: "images/IMG_6968.jpeg",
    question: "A 13-year-old boy develops multiple small erythematous scaly plaques over the trunk 2 weeks after an episode of sore throat. On scraping, the lesions show dry silvery-white micaceous scales. The dermatologist explains that this disorder is a T-cell mediated chronic inflammatory disease precipitated by an external infectious trigger.\nWhich of the following is the most likely trigger in this patient?",
    options: [
      "Staphylococcus aureus",
      "Group A β-hemolytic streptococcus",
      "Pseudomonas aeruginosa",
      "Candida albicans"
    ],
    answerIndex: 1,
    correctAnswerText: "Group A β-hemolytic streptococcus"
  },
  {
    id: 12,
    image: "images/IMG_6969.jpeg",
    question: "A 21-year-old woman presents with an oval erythematous plaque on the trunk followed by multiple smaller lesions along the skin cleavage lines. On close examination, each lesion shows a fine scale attached at the inner margin with free edge directed inward, giving a collar-like appearance.\nWhich of the following conditions is classically associated with this type of scale?",
    options: [
      "Psoriasis",
      "Ichthyosis",
      "Pityriasis rosea",
      "Seborrheic dermatitis"
    ],
    answerIndex: 2,
    correctAnswerText: "Pityriasis rosea"
  },
  {
    id: 13,
    image: "images/IMG_6970.jpeg",
    question: "A 34-year-old man presents with well-defined erythematous plaques over the elbows and knees covered by dry silvery scales. During bedside examination, the dermatologist gently rubs the plaque with a glass slide. The scaling first becomes more prominent, then a thin translucent membrane is exposed, and on further removal of this membrane, multiple pinpoint bleeding spots appear.\nWhich of the following correctly represents the final finding described?",
    options: [
      "Candle wax sign",
      "Bulkley’s membrane",
      "Koebner phenomenon",
      "Auspitz sign"
    ],
    answerIndex: 3,
    correctAnswerText: "Auspitz sign"
  },
  {
    id: 14,
    image: "images/IMG_6972.jpeg",
    question: "A 28-year-old woman with severe psoriasis has generalized pustular lesions involving a large body surface area. She is planned for systemic therapy. The dermatologist chooses an oral retinoid and specifically counsels her to avoid pregnancy for 3 years after stopping the drug.\nWhich drug is most likely being prescribed?",
    options: [
      "Acitretin",
      "Methotrexate",
      "Cyclosporine",
      "Oral corticosteroid"
    ],
    answerIndex: 0,
    correctAnswerText: "Acitretin"
  },
  {
    id: 15,
    image: "images/IMG_6973.jpeg",
    question: "A 42-year-old woman presents with multiple intensely itchy lesions over the flexor aspect of the wrist. Examination shows violaceous, flat-topped, polygonal papules. On close inspection, fine whitish lacy lines are seen over the surface of the lesions.\nWhich of the following best describes the classical morphology of this condition?",
    options: [
      "Painful pustules with purulent crusting",
      "Pruritic purple polygonal planar papules",
      "Photosensitive plaques with greasy yellow scales",
      "Pearly papules with central umbilication"
    ],
    answerIndex: 1,
    correctAnswerText: "Pruritic purple polygonal planar papules"
  },
  {
    id: 16,
    image: "images/IMG_6975.jpeg",
    question: "A 36-year-old woman presents with intensely itchy, violaceous, flat-topped papules over the wrists. On nail examination, there is longitudinal ridging, thinning of the nail plate, and a triangular extension of the proximal nail fold onto the nail plate, which appears to fuse with the nail bed.\nWhich nail finding is most specific for this condition?",
    options: [
      "Uniform geometric nail pitting",
      "Muehrcke’s lines",
      "Dorsal pterygium",
      "Oil-drop sign"
    ],
    answerIndex: 2,
    correctAnswerText: "Dorsal pterygium"
  },
  {
    id: 17,
    image: "images/IMG_6976.jpeg",
    question: "A 9-year-old child presents with generalized rough follicular papules that are red-orange and pointed. Examination shows diffuse erythematous plaques with sharply demarcated normal skin islands within the involved areas. Palms and soles show orangish-yellow thickening, giving a keratoderma-like appearance. Histopathology shows alternating vertical and horizontal zones of orthokeratosis and parakeratosis, producing a checkerboard pattern.\nWhich is the most likely diagnosis?",
    options: [
      "Psoriasis",
      "Pityriasis rosea",
      "Lichen planus",
      "Pityriasis rubra pilaris"
    ],
    answerIndex: 3,
    correctAnswerText: "Pityriasis rubra pilaris"
  },
  {
    id: 18,
    image: "images/IMG_6977.jpeg",
    question: "A 46-year-old woman presents with painful oral erosions followed by multiple flaccid bullae over the trunk. The bullae rupture easily, leaving raw erosions. Biopsy shows loss of cohesion between keratinocytes above the basal layer, while basal cells remain attached to the basement membrane giving a “row of tombstones” appearance.\nWhich immunological abnormality best explains this condition?",
    options: [
      "IgG antibodies against desmoglein 3 causing suprabasal split",
      "IgG antibodies against desmoglein 1 causing subcorneal split",
      "IgA deposition in dermal papillae causing grouped vesicles",
      "IgG antibodies against hemidesmosomes causing subepidermal split"
    ],
    answerIndex: 0,
    correctAnswerText: "IgG antibodies against desmoglein 3 causing suprabasal split"
  },
  {
    id: 19,
    image: "images/IMG_6980.jpeg",
    question: "A 58-year-old man presents with severe, persistent painful oral erosions and widespread polymorphic skin lesions including erosions, crusted plaques, and vesiculobullous lesions. The lesions are unusually resistant to routine therapy. Immunological evaluation shows antibodies against desmoglein 1, desmoglein 3, and plakin group proteins. Further workup is planned to look for an associated internal malignancy.\nWhich of the following malignancies is most commonly associated with this condition?",
    options: [
      "Chronic lymphocytic leukemia",
      "Non-Hodgkin lymphoma",
      "Thymoma",
      "Castleman disease"
    ],
    answerIndex: 1,
    correctAnswerText: "Non-Hodgkin lymphoma"
  },
  {
    id: 20,
    image: "",
    question: "A 44-year-old woman with recurrent painful oral erosions and flaccid bullae is diagnosed with an autoimmune intraepidermal blistering disorder. She was initially started on systemic corticosteroids at 1 mg/kg/day, but due to repeated relapses and steroid-related adverse effects, a biologic agent targeting B lymphocytes is planned.\nWhich of the following drugs acts by blocking the CD20 receptor?",
    options: [
      "Methotrexate",
      "Cyclosporine",
      "Rituximab",
      "Dapsone"
    ],
    answerIndex: 2,
    correctAnswerText: "Rituximab"
  },
  {
    id: 21,
    image: "images/IMG_6981.jpeg",
    question: "A 72-year-old man presents with multiple large tense bullae over the abdomen and thighs. Oral mucosa is spared. Tzanck smear shows no acantholytic cells, but inflammatory cells rich in eosinophils are seen. Skin biopsy shows a subepidermal split, and direct immunofluorescence demonstrates linear IgG deposition along the basement membrane zone, giving a ribbon-like appearance.\nWhich antigen is most commonly targeted in this disorder?",
    options: [
      "Desmoglein 3",
      "Desmoglein 1",
      "Epidermal transglutaminase",
      "BPAg2 hemidesmosomal antigen"
    ],
    answerIndex: 3,
    correctAnswerText: "BPAg2 hemidesmosomal antigen"
  },
  {
    id: 22,
    image: "images/IMG_6982.jpeg",
    question: "A 29-year-old primigravida in her third trimester presents with intensely itchy erythematous plaques around the umbilicus. Over the next few days, she develops tense bullae with surrounding edema. Biopsy shows a subepidermal blister, and immunopathology suggests antibodies cross-reacting with BPAg2 after loss of immune tolerance to fetal tissue.\nWhat is the most likely diagnosis?",
    options: [
      "Pemphigoid gestationis",
      "Polymorphic eruption of pregnancy",
      "Intrahepatic cholestasis of pregnancy",
      "Impetigo herpetiformis"
    ],
    answerIndex: 0,
    correctAnswerText: "Pemphigoid gestationis"
  },
  {
    id: 23,
    image: "images/IMG_7098.jpeg",
    question: "A 5-year-old child presents with recurrent itchy vesiculobullous lesions over the lower trunk and perineal region. Examination shows multiple vesicles arranged in an annular pattern, with newer vesicles forming around older lesions, producing a “string of pearls” / “cluster of jewels” appearance. Immunopathology shows linear IgA deposition targeting BPAg2.\nWhat is the most likely diagnosis?",
    options: [
      "Bullous pemphigoid",
      "Chronic bullous disease of childhood",
      "Pemphigus vulgaris",
      "Dermatitis herpetiformis"
    ],
    answerIndex: 1,
    correctAnswerText: "Chronic bullous disease of childhood"
  },
  {
    id: 24,
    image: "images/IMG_6984.jpeg",
    question: "A 24-year-old man presents with severe itching and recurrent grouped vesicles over both elbows, knees, buttocks, and shoulders. Many lesions are excoriated due to scratching. Biopsy shows a subepidermal split with collections of neutrophils at the tips of dermal papillae. Direct immunofluorescence shows a granular pattern of IgA deposition at the dermal papillary tips.\nWhich of the following is the treatment of choice for rapid symptomatic relief?",
    options: [
      "Rituximab",
      "Oral acitretin",
      "Dapsone",
      "Methotrexate"
    ],
    answerIndex: 2,
    correctAnswerText: "Dapsone"
  },
  {
    id: 25,
    image: "images/IMG_6989.jpeg",
    question: "A 16-year-old boy presents with multiple dark, greasy, hyperkeratotic papules over the neck, upper trunk, and seborrheic areas. The neck appears unclean despite repeated washing. Oral examination shows thickened hard palate with cobblestone appearance, and nails show V-shaped triangular notching at the distal nail margin. Histology reveals suprabasal acantholysis.\nWhich genetic defect is most likely responsible for this disorder?",
    options: [
      "CARD14 gene defect",
      "Filaggrin gene defect",
      "Desmoglein 1 gene defect",
      "ATP2A2 gene defect"
    ],
    answerIndex: 3,
    correctAnswerText: "ATP2A2 gene defect"
  },
  {
    id: 26,
    image: "images/IMG_6990.jpeg",
    question: "A 30-year-old man presents with recurrent painful erosions and macerated plaques in the axilla and groin, worsened by sweating and friction. There is a family history of similar lesions. Biopsy shows suprabasal acantholysis with incomplete separation of keratinocytes, giving a “dilapidated brick wall” appearance. Genetic testing reveals a defect in a calcium channel–related gene.\nWhich is the most likely diagnosis?",
    options: [
      "Hailey-Hailey disease",
      "Darier disease",
      "Pemphigus vulgaris",
      "Bullous pemphigoid"
    ],
    answerIndex: 0,
    correctAnswerText: "Hailey-Hailey disease"
  },
  {
    id: 27,
    image: "images/IMG_6992.jpeg",
    question: "A 41-year-old diabetic man presents with rapidly spreading painful erythematous swelling over the leg associated with fever. Examination shows diffuse warmth, tenderness, and edema of the involved skin without any obvious follicular-centered pustule or boil. The dermatologist classifies it as a progressive non-follicular pyoderma.\nWhich of the following belongs to the same category?",
    options: [
      "Impetigo",
      "Cellulitis",
      "Folliculitis",
      "Furuncle"
    ],
    answerIndex: 1,
    correctAnswerText: "Cellulitis"
  },
  {
    id: 28,
    image: "images/IMG_6993.jpeg",
    question: "A 7-year-old child presents with patchy hair loss over the scalp with broken hairs and mild scaling. On examination in a dark room using a diagnostic lamp emitting 365 nm wavelength, the affected scalp hairs show blue-green fluorescence.\nWhich condition is most likely responsible for this finding?",
    options: [
      "Erythrasma",
      "Pityriasis versicolor",
      "Tinea capitis",
      "Vitiligo"
    ],
    answerIndex: 2,
    correctAnswerText: "Tinea capitis"
  },
  {
    id: 29,
    image: "images/IMG_6996.jpeg",
    question: "A 6-year-old child presents with multiple superficial erosions around the nose and mouth covered by golden honey-coloured crusts. There are no intact bullae. Culture shows predominance of Group A Streptococcus. Two weeks later, the child develops facial puffiness, cola-coloured urine, and hypertension.\nWhich complication is classically associated with this condition?",
    options: [
      "Staphylococcal scalded skin syndrome",
      "Acute rheumatic fever",
      "Secondary complications are rare",
      "Post-streptococcal glomerulonephritis"
    ],
    answerIndex: 3,
    correctAnswerText: "Post-streptococcal glomerulonephritis"
  },
  {
    id: 30,
    image: "images/IMG_6998.jpeg",
    question: "A 2-year-old child develops fever and diffuse painful erythema after a recent ear infection. Within 24 hours, large sheets of superficial skin peel off, giving a “potato-skin peeling” appearance. The child has marked skin tenderness, but the oral mucosa is spared. The causative organism releases a toxin that targets a desmosomal protein in the upper epidermis.\nWhich mechanism best explains this condition?",
    options: [
      "Exfoliative toxin of Staphylococcus aureus binds desmoglein 1 causing subcorneal split",
      "IgG antibody against desmoglein 3 causing suprabasal split",
      "IgG antibody against BPAg2 causing subepidermal split",
      "Streptococcal infection causing honey-coloured crust with renal complication"
    ],
    answerIndex: 0,
    correctAnswerText: "Exfoliative toxin of Staphylococcus aureus binds desmoglein 1 causing subcorneal split"
  },
  {
    id: 31,
    image: "images/IMG_6999.jpeg",
    question: "A 24-year-old man presents with excessive sweating and poor local hygiene. On examination, the axillary hairs are coated with yellowish crust-like concretions. The underlying skin is minimally inflamed. The dermatologist advises improved hygiene and shaving of axillary hair as part of treatment.\nWhich is the most likely diagnosis?",
    options: [
      "Erythrasma",
      "Trichomycosis axillaris",
      "Pitted keratolysis",
      "Pityriasis versicolor"
    ],
    answerIndex: 1,
    correctAnswerText: "Trichomycosis axillaris"
  },
  {
    id: 32,
    image: "images/IMG_7003.jpeg",
    question: "A 58-year-old diabetic woman presents with sudden onset fever and a painful, bright red swelling over the face. Examination shows well-defined erythema with raised margins. The lesion extends over the cheek and also involves the ear pinna. The dermatologist mentions that this ear involvement helps differentiate it from a deeper soft tissue infection.\nWhat is the most likely diagnosis?",
    options: [
      "Cellulitis",
      "Erysipeloid",
      "Erysipelas",
      "Pitted keratolysis"
    ],
    answerIndex: 2,
    correctAnswerText: "Erysipelas"
  },
  {
    id: 33,
    image: "images/IMG_7004.jpeg",
    question: "A 27-year-old veterinary worker develops a painful nodular lesion over the finger after handling goats. The lesion later becomes ulcerated with thick hemorrhagic crusting. There is no generalized illness. Biopsy shows ballooning degeneration of keratinocytes. The dermatologist reassures him that treatment is mainly symptomatic.\nWhich is the most likely causative agent?",
    options: [
      "Streptococcus pyogenes",
      "Pseudomonas aeruginosa",
      "Staphylococcus aureus",
      "Orf virus"
    ],
    answerIndex: 3,
    correctAnswerText: "Orf virus"
  },
  {
    id: 34,
    image: "images/IMG_7006.jpeg",
    question: "A 23-year-old woman presents with recurrent episodes of burning and itching around the angle of the mouth followed by multiple grouped vesicles near the mucocutaneous junction. The lesions heal spontaneously but recur during stress. Tzanck smear shows multinucleated giant cells, and histopathology shows ballooning degeneration with intranuclear inclusion bodies.\nWhat is the most likely diagnosis?",
    options: [
      "Herpes simplex virus infection",
      "Varicella zoster infection",
      "Non-bullous impetigo",
      "Ecthyma contagiosum"
    ],
    answerIndex: 0,
    correctAnswerText: "Herpes simplex virus infection"
  },
  {
    id: 35,
    image: "images/IMG_7007.jpeg",
    question: "A 52-year-old man presents with severe ear pain followed by lower motor neuron facial palsy. Examination shows grouped vesicles in the external auditory canal. He also complains of burning pain before appearance of the vesicles. The physician explains that this occurs due to reactivation of a latent virus causing inflammation of the geniculate ganglion.\nWhat is the most likely diagnosis?",
    options: [
      "Herpes simplex labialis",
      "Ramsay Hunt syndrome",
      "Chickenpox",
      "Non-bullous impetigo"
    ],
    answerIndex: 1,
    correctAnswerText: "Ramsay Hunt syndrome"
  },
  {
    id: 36,
    image: "",
    question: "A 15-year-old athlete presents with a painful hyperkeratotic lesion on the sole, worsened while walking. He has a history of excessive sweating of feet and repeated minor trauma during sports. On paring the lesion, pinpoint black dots are seen. Histopathology shows vacuolated keratinocytes with inclusion bodies.\nWhich HPV type is most commonly associated with this lesion?",
    options: [
      "HPV 2 and 5",
      "HPV 6 and 11",
      "HPV 1",
      "HPV 3 and 10"
    ],
    answerIndex: 2,
    correctAnswerText: "HPV 1"
  },
  {
    id: 37,
    image: "images/IMG_7015.jpeg",
    question: "A 6-year-old child presents with multiple discrete, smooth, flesh-coloured, pearly dome-shaped papules over the trunk. Each lesion has a characteristic central umbilication. Histopathology shows enlarged epidermal cells with intracytoplasmic inclusion bodies and a “smashed potato” appearance.\nWhich of the following is the most characteristic histopathological finding?",
    options: [
      "Koilocytes with perinuclear halo",
      "Multinucleated giant cells",
      "Ballooning degeneration of keratinocytes",
      "Henderson-Patterson bodies"
    ],
    answerIndex: 3,
    correctAnswerText: "Henderson-Patterson bodies"
  },
  {
    id: 38,
    image: "images/IMG_7016.jpeg",
    question: "A 9-year-old child presents with chronic scalp scaling and patchy hair loss. Examination shows multiple yellow, cup-shaped crusted lesions around hair follicles. Some lesions have coalesced, and early scarring alopecia is noted. The dermatologist describes these yellow cup-like crusts as scutula.\nWhich organism is most classically associated with this presentation?",
    options: [
      "Trichophyton schoenleinii",
      "Microsporum canis",
      "Trichophyton tonsurans",
      "Trichophyton mentagrophytes"
    ],
    answerIndex: 0,
    correctAnswerText: "Trichophyton schoenleinii"
  },
  {
  id: 39,
  image: "images/IMG_7021.jpeg",
  question: "A 17-year-old boy from a tropical rural area presents with multiple chronic itchy plaques over the trunk and limbs. Examination shows concentric, overlapping, ring-like scaly lesions giving a target-like / imbricated pattern. KOH mount from the scale confirms dermatophyte infection.\nWhich organism is most likely responsible?",
  options: [
    "Trichophyton rubrum",
    "Trichophyton concentricum",
    "Microsporum canis",
    "Trichophyton schoenleinii"
  ],
  answerIndex: 1,
  correctAnswerText: "Trichophyton concentricum"
  },
  {
    id: 40,
    image: "images/IMG_7022.jpeg",
    question: "A 19-year-old college student presents with multiple discrete-to-confluent hypopigmented perifollicular macules over the upper back and chest. The lesions become more obvious after sun exposure. KOH mount shows short curved hyphae mixed with round spores, giving a “spaghetti and meatball” appearance. Wood’s lamp examination shows yellow fluorescence.\nWhich factor best explains the hypopigmentation in this condition?",
    options: [
      "Porphyrin production by Corynebacterium minutissimum",
      "Autoimmune destruction of melanocytes",
      "Azelaic acid released by Malassezia species",
      "Exfoliative toxin-mediated cleavage of desmoglein 1"
    ],
    answerIndex: 2,
    correctAnswerText: "Azelaic acid released by Malassezia species"
  },
  {
    id: 41,
    image: "images/IMG_7023.jpeg",
    question: "A 38-year-old farmer presents with a chronic swelling of the foot for several years. The lesion is slowly progressive and has multiple discharging sinuses. On examination, there is marked deformity of the foot, and black-coloured granules are seen in the discharge.\nWhich of the following best fits this condition?",
    options: [
      "Actinomycetoma with yellow grains and rapid progression",
      "Botryomycosis due to Staphylococcus aureus",
      "Erysipeloid due to Erysipelothrix rhusiopathiae",
      "Eumycetoma with black grains and slow progression"
    ],
    answerIndex: 3,
    correctAnswerText: "Eumycetoma with black grains and slow progression"
  },
  {
    id: 42,
    image: "images/IMG_7026.jpeg",
    question: "A 45-year-old farmer presents with a slowly enlarging verrucous, cauliflower-like thickened plaque over the extensor surface of the leg. The lesion is chronic and non-healing. Biopsy shows thick-walled, brown, round fungal bodies arranged with internal septations.\nWhich of the following histopathological findings is most characteristic of this condition?",
    options: [
      "Copper penny bodies",
      "Henderson-Patterson bodies",
      "Donovan bodies",
      "Negri bodies"
    ],
    answerIndex: 0,
    correctAnswerText: "Copper penny bodies"
  },
  {
    id: 43,
    image: "images/IMG_7028.jpeg",
    question: "A 35-year-old gardener presents with a painless ulcerated nodule on the hand after a thorn prick while handling rose plants. Over the next few weeks, multiple nodules develop in a linear arrangement along the forearm, following the course of lymphatics. Biopsy shows star-shaped asteroid bodies.\nWhich organism is most likely responsible?",
    options: [
      "Nocardia brasiliensis",
      "Sporothrix schenckii",
      "Mycobacterium marinum",
      "Phialophora verrucosa"
    ],
    answerIndex: 1,
    correctAnswerText: "Sporothrix schenckii"
  },
  {
    id: 44,
    image: "images/IMG_7029.jpeg",
    question: "A 46-year-old homeless man presents with severe generalized itching, multiple excoriations, and secondary bacterial infection over the trunk. Examination reveals lice and nits mainly in the seams of clothing and bedding, while scalp hair and pubic hair are relatively spared. The dermatologist advises disinfection of clothes and bedding as the most important step.\nWhich infestation is most likely responsible?",
    options: [
      "Pediculosis capitis",
      "Pediculosis pubis",
      "Pediculosis corporis",
      "Scabies"
    ],
    answerIndex: 2,
    correctAnswerText: "Pediculosis corporis"
  },
  {
    id: 45,
    image: "images/IMG_7030.jpeg",
    question: "A 28-year-old man presents with intense nocturnal itching involving the wrist, web spaces, axilla, periumbilical area, groin, and elbows. Examination shows burrows, papules, pustules, and excoriations. He also has persistent itchy nodules over the scrotum and penile shaft, explained as a hypersensitivity reaction to mite antigen.\nWhich is the most appropriate treatment for these persistent nodular lesions?",
    options: [
      "Oral acyclovir",
      "Disinfection of clothes and bedding only",
      "Oral terbinafine",
      "Intralesional corticosteroids"
    ],
    answerIndex: 3,
    correctAnswerText: "Intralesional corticosteroids"
  },
  {
    id: 46,
    image: "images/IMG_7032.jpeg",
    question: "A 32-year-old man who was treated for visceral leishmaniasis 3 years ago now presents with multiple hypopigmented macules over the face and trunk, followed later by nodular lesions. There is no active fever or hepatosplenomegaly. The dermatologist explains that this is a delayed dermal manifestation occurring after recovery from kala-azar.\nWhich is the drug of choice for this condition?",
    options: [
      "Oral miltefosine",
      "Oral acyclovir",
      "Intralesional corticosteroid",
      "Oral terbinafine"
    ],
    answerIndex: 0,
    correctAnswerText: "Oral miltefosine"
  },
  {
    id: 47,
    image: "images/IMG_7034.jpeg",
    question: "A 26-year-old woman presents with a slowly enlarging lesion over the buttock. Examination shows a dark brown annular plaque with peripheral extension and central scarring. On pressing the lesion with a glass slide, multiple soft yellow-brown translucent nodules become visible, described as apple-jelly nodules. She is otherwise immunocompetent.\nWhat is the most likely diagnosis?",
    options: [
      "Tuberculosis verrucosa cutis",
      "Lupus vulgaris",
      "Scrofuloderma",
      "Erythema induratum"
    ],
    answerIndex: 1,
    correctAnswerText: "Lupus vulgaris"
  },
  {
    id: 48,
    image: "",
    question: "A 38-year-old man with advanced HIV infection presents with multiple chronic cutaneous nodules and ulcers along with constitutional symptoms. His CD4 count is less than 200 cells/mm³. Imaging suggests disseminated mycobacterial involvement. The physician explains that this atypical mycobacterial infection commonly occurs in immunocompromised patients and usually requires combination therapy.\nWhich organism is most likely responsible?",
    options: [
      "Mycobacterium marinum",
      "Mycobacterium ulcerans",
      "Mycobacterium avium complex",
      "Mycobacterium chelonae / fortuitum"
    ],
    answerIndex: 2,
    correctAnswerText: "Mycobacterium avium complex"
  },
  {
    id: 49,
    image: "images/IMG_7035.jpeg",
    question: "A 27-year-old man presents with generalized lymphadenopathy and hyperpigmented macules over palms and soles. Oral examination shows an asymptomatic mucous patch, and genital examination reveals flat moist lesions in the groin. He also has patchy moth-eaten alopecia. On palpation of the skin lesions, deep dermal tenderness is elicited, known as Ollendorff’s sign.\nWhich pathological process best explains this tenderness?",
    options: [
      "Suprabasal acantholysis",
      "Subepidermal blister formation",
      "Epidermal koilocytosis",
      "Endarteritis"
    ],
    answerIndex: 3,
    correctAnswerText: "Endarteritis"
  },
  {
    id: 50,
    image: "images/IMG_7036.jpeg",
    question: "A 26-year-old man presents with multiple painful genital ulcers after unprotected sexual exposure. The ulcers are soft, non-indurated, and have undermined edges with a dirty necrotic base. He also has painful unilateral inguinal lymph node enlargement. Gram staining of ulcer discharge shows gram-negative coccobacilli arranged in a characteristic pattern.\nWhich of the following findings is most likely seen on Gram stain?",
    options: [
      "School of fish / rail-track appearance",
      "Donovan bodies inside macrophages",
      "Multinucleated giant cells on Tzanck smear",
      "Corkscrew-shaped spirochetes on dark-field microscopy"
    ],
    answerIndex: 0,
    correctAnswerText: "School of fish / rail-track appearance"
  },
  {
    id: 51,
    image: "",
    question: "A 31-year-old man presents with a chronic genital ulcer that is painless, red, exuberant, and bleeds easily on touch. There is no true inguinal lymph node enlargement, but a soft groin swelling resembling a bubo is noted. Giemsa stain from the lesion shows organisms inside macrophages with bipolar staining, giving a safety-pin appearance.\nWhich diagnostic finding is most characteristic of this condition?",
    options: [
      "School of fish appearance",
      "Donovan bodies inside macrophages",
      "Multinucleated giant cells",
      "Corkscrew-shaped spirochetes"
    ],
    answerIndex: 1,
    correctAnswerText: "Donovan bodies inside macrophages"
  },
  {
    id: 52,
    image: "",
    question: "A 29-year-old man presents with a history of a small transient painless genital ulcer that healed spontaneously. Two weeks later, he develops multiple painful inguinal lymph nodes. On examination, enlarged lymph nodes are present both above and below the inguinal ligament, producing a groove-like depression. He later develops chronic genital lymphatic obstruction with elephantiasis-like swelling.\nWhich is the most likely diagnosis?",
    options: [
      "Chancroid",
      "Donovanosis",
      "Lymphogranuloma venereum",
      "Primary syphilis"
    ],
    answerIndex: 2,
    correctAnswerText: "Lymphogranuloma venereum"
  },
  {
    id: 53,
    image: "",
    question: "A 24-year-old man presents with burning micturition and profuse purulent urethral discharge 4 days after unprotected sexual exposure. His partner has features of endocervicitis. Gram stain of the discharge shows numerous pus cells containing intracellular gram-negative diplococci.\nWhich is the most appropriate drug of choice?",
    options: [
      "Doxycycline",
      "Azithromycin",
      "Benzathine penicillin G",
      "Ceftriaxone / Cefixime"
    ],
    answerIndex: 3,
    correctAnswerText: "Ceftriaxone / Cefixime"
  },
  {
    id: 54,
    image: "",
    question: "A 24-year-old woman presents with thin, profuse, watery vaginal discharge. She has a history of early onset of sexual activity and multiple sexual partners. Vaginal pH is 5.2. Addition of KOH to the discharge produces a characteristic fishy odour. Wet mount shows vaginal epithelial cells with borders obscured by numerous adherent bacteria.\nWhich finding is most characteristic of this condition?",
    options: [
      "Clue cells formed by bacteria-coated vaginal epithelial cells",
      "Budding yeast cells with pseudohyphae",
      "Motile flagellated pear-shaped trophozoites",
      "Intracellular gram-negative diplococci in pus cells"
    ],
    answerIndex: 0,
    correctAnswerText: "Clue cells formed by bacteria-coated vaginal epithelial cells"
  },
  {
    id: 55,
    image: "",
    question: "A 23-year-old woman presents to an STI clinic with profuse vaginal discharge and vulvovaginal symptoms. On examination, there is no evidence of cervicitis or pelvic inflammatory disease. Under the NACP colour-coded syndromic management approach, she is diagnosed as vaginal discharge syndrome due to vaginitis.\nWhich colour-coded kit is most appropriate?",
    options: [
      "Kit 1 – Grey kit",
      "Kit 2 – Green kit",
      "Kit 3 – White kit",
      "Kit 6 – Yellow kit"
    ],
    answerIndex: 1,
    correctAnswerText: "Kit 2 – Green kit"
  },
  {
    id: 56,
    image: "",
    question: "A 4-year-old child is brought with generalized absence of skin pigmentation since birth. He has white scalp hair, pale eyelashes and eyebrows, absent iris pigmentation, marked photophobia, and repeated sunburns after minimal sun exposure. Parents are counselled about increased risk of skin malignancy due to defective melanin synthesis.\nWhich enzyme is most likely defective in this child?",
    options: [
      "Myosin Va",
      "ATP2A2 calcium pump",
      "Tyrosinase",
      "Desmoglein 3"
    ],
    answerIndex: 2,
    correctAnswerText: "Tyrosinase"
  },
  {
    id: 57,
    image: "",
    question: "A 17-year-old girl presents with multiple sharply demarcated milky-white depigmented patches over the hands and perioral region. Some lesions appeared after minor trauma. Wood’s lamp accentuates the lesions, and biopsy from the patch shows absence of melanocytes. She also has a family history of autoimmune thyroid disease.\nWhich mechanism best explains this condition?",
    options: [
      "Defective tyrosinase enzyme causing impaired melanin synthesis",
      "Azelaic acid-mediated inhibition of pigmentation by Malassezia",
      "Defective melanosome transport due to myosin abnormality",
      "T-lymphocyte mediated damage to melanocytes"
    ],
    answerIndex: 3,
    correctAnswerText: "T-lymphocyte mediated damage to melanocytes"
  },
  {
    id: 58,
    image: "",
    question: "A 16-year-old girl with depigmented milky-white patches develops new similar lesions exactly along scratch marks after minor trauma. Similar trauma-induced lesions are also classically seen in psoriasis and lichen planus. The dermatologist explains that this is a true isomorphic phenomenon.\nWhich of the following conditions is classically included under true Koebner phenomenon?",
    options: [
      "Vitiligo",
      "Molluscum contagiosum",
      "Viral warts",
      "Impetigo contagiosa"
    ],
    answerIndex: 0,
    correctAnswerText: "Vitiligo"
  },
  {
    id: 59,
    image: "",
    question: "A 19-year-old man presents with a unilateral bluish-grey patch involving the periorbital region, forehead, and cheek. The pigmentation follows the distribution of the trigeminal nerve and is associated with bluish discoloration of the sclera. The dermatologist explains that the pigmentation is due to dermal melanocytes resulting from premature termination of neural crest cell migration.\nWhich is the most likely diagnosis?",
    options: [
      "Nevus of Ito",
      "Nevus of Ota",
      "Mongolian spot",
      "Segmental vitiligo"
    ],
    answerIndex: 1,
    correctAnswerText: "Nevus of Ota"
  },
  {
    id: 60,
    image: "",
    question: "A 32-year-old woman presents with symmetrical brownish hyperpigmented patches over both cheeks and the bridge of the nose. The pigmentation worsens after sunlight exposure. She is currently on hormonal therapy and has a history of hypothyroidism. The dermatologist starts a depigmenting agent but warns that excessive use can cause exogenous ochronosis.\nWhich drug is most likely being prescribed?",
    options: [
      "Methoxsalen",
      "Permethrin",
      "Hydroquinone",
      "Acyclovir"
    ],
    answerIndex: 2,
    correctAnswerText: "Hydroquinone"
  },
  {
    id: 61,
    image: "",
    question: "A 3-year-old child from a low socioeconomic background presents with rough dry skin and grouped, pointed, hyperkeratotic follicular papules over the elbows, knees, anterolateral thighs, and posterolateral arms. The mother also reports that the child has difficulty seeing in dim light. Eye examination shows conjunctival xerosis with foamy white patches.\nWhich of the following is the earliest cutaneous manifestation of this deficiency?",
    options: [
      "Bitot spots",
      "Nyctalopia",
      "Phrynoderma",
      "Asteatosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Asteatosis"
  },
  {
    id: 62,
    image: "",
    question: "A 7-year-old child presents with painful fissuring at the angles of the mouth, cracked lips, and a red sore tongue. Examination also shows greasy erythematous scaling around the nasolabial folds, resembling seborrheic dermatitis. The pediatrician suspects a water-soluble vitamin deficiency and starts supplementation.\nWhich deficiency best explains these findings?",
    options: [
      "Riboflavin deficiency",
      "Niacin deficiency",
      "Vitamin A deficiency",
      "Vitamin C deficiency"
    ],
    answerIndex: 0,
    correctAnswerText: "Riboflavin deficiency"
  },
  {
    id: 63,
    image: "",
    question: "A 36-year-old chronic alcoholic man from a low socioeconomic background presents with photosensitive dermatitis, diarrhea, irritability, and glossitis. His staple diet is mainly jowar and maize with very little animal protein. The physician explains that one component in jowar interferes with tryptophan utilization, reducing NAD synthesis and worsening niacin deficiency.\nWhich dietary factor is most responsible for this mechanism?",
    options: [
      "Poor bioavailability of folate from maize",
      "Excess leucine inhibiting tryptophan uptake",
      "Increased isoleucine promoting NAD degradation",
      "Defective absorption of vitamin B12 from cereals"
    ],
    answerIndex: 1,
    correctAnswerText: "Excess leucine inhibiting tryptophan uptake"
  },
  {
    id: 64,
    image: "",
    question: "A 42-year-old chronic alcoholic presents with photosensitive dark, rough plaques over the dorsum of hands and around the neck. The neck lesion forms a sharply demarcated hyperpigmented collar-like band. He also has diarrhea, depression, irritability, glossitis, and a bald red tongue.\nWhich deficiency best explains this presentation?",
    options: [
      "Vitamin B2 deficiency",
      "Vitamin A deficiency",
      "Vitamin B3 deficiency",
      "Vitamin C deficiency"
    ],
    answerIndex: 2,
    correctAnswerText: "Vitamin B3 deficiency"
  },
  {
    id: 65,
    image: "",
    question: "A 58-year-old strict vegetarian man presents with burning sensation of tongue, recurrent aphthae-like oral lesions, and progressive fatigue. Examination shows symmetrical generalized hyperpigmentation, most prominent over the knuckles, palmar creases, soles, and flexures. Oral cavity shows cheilitis, glossitis, and a red beefy tongue. The deficient nutrient is normally absorbed in the ileum through a receptor-mediated process requiring a gastric glycoprotein.\nWhich deficiency best explains these findings?",
    options: [
      "Vitamin A deficiency",
      "Vitamin B2 deficiency",
      "Vitamin B3 deficiency",
      "Vitamin B12 deficiency"
    ],
    answerIndex: 3,
    correctAnswerText: "Vitamin B12 deficiency"
  },
  {
    id: 66,
    image: "",
    question: "A 68-year-old chronic alcoholic man presents with bleeding gums, foul breath, loosening of teeth, and easy bruising. Examination shows spongy hemorrhagic gingivitis, perifollicular purpura, petechiae, ecchymoses, and corkscrew hairs. Capillary fragility test is positive. The physician explains that the basic defect is impaired formation of supporting connective tissue.\nWhich mechanism best explains these findings?",
    options: [
      "Defective collagen and ground substance formation due to vitamin C deficiency",
      "Defective DNA synthesis due to cobalamin deficiency",
      "Defective NAD synthesis due to niacin deficiency",
      "Defective melanin synthesis due to tyrosinase deficiency"
    ],
    answerIndex: 0,
    correctAnswerText: "Defective collagen and ground substance formation due to vitamin C deficiency"
  },
  {
    id: 67,
    image: "",
    question: "A 9-month-old infant is brought with recurrent diarrhea, irritability, and poor feeding after weaning. Examination shows periorificial dermatitis, erosive lesions over acral areas, alopecia, angular stomatitis, glossitis, paronychia, leukonychia, and conjunctivitis. Serum zinc level is markedly low. The pediatrician explains that the inherited form is autosomal recessive and requires lifelong supplementation.\nWhich molecular defect best explains this condition?",
    options: [
      "Defective intrinsic factor-mediated ileal absorption",
      "Defect in intestinal zinc transporter ZIP4",
      "Defective tyrosinase-mediated melanin synthesis",
      "Excess leucine inhibiting tryptophan uptake"
    ],
    answerIndex: 1,
    correctAnswerText: "Defect in intestinal zinc transporter ZIP4"
  },
  {
    id: 68,
    image: "",
    question: "A 48-year-old man presents with an irregular pigmented lesion that has recently increased in size. He gives a history of repeated short, intense sun exposure during outdoor work. His father had melanoma, and he also has a large congenital melanocytic nevus with excessive hair. Genetic counselling is done because a high-risk susceptibility gene mutation is suspected.\nWhich gene is most strongly associated with high-risk susceptibility to malignant melanoma?",
    options: [
      "ATP2A2 gene",
      "ZIP4 gene",
      "CDKN2A gene",
      "TYR gene"
    ],
    answerIndex: 2,
    correctAnswerText: "CDKN2A gene"
  },
  {
    id: 69,
    image: "",
    question: "A 52-year-old man is diagnosed with malignant melanoma arising from an epidermal melanocyte. Histopathology shows a localized lesion with Breslow thickness of 0.8 mm and no evidence of disseminated disease. The oncologist plans definitive management based on tumour depth.\nWhich is the most appropriate treatment approach?",
    options: [
      "Dacarbazine-based chemotherapy as first-line treatment",
      "Radiotherapy as the treatment of choice for localized disease",
      "Observation only, as the tumour is less than 1 mm thick",
      "Surgical excision with 1 cm clearance"
    ],
    answerIndex: 3,
    correctAnswerText: "Surgical excision with 1 cm clearance"
  },
  {
    id: 70,
    image: "",
    question: "A 67-year-old farmer presents with a slowly enlarging lesion over the face. It began as a small shiny translucent papule and gradually developed central ulceration. On examination, the ulcer has telangiectasia over the surface and rolled, pearly, bead-like margins. There is no significant pain, but the lesion has been progressively enlarging over months.\nWhich type of basal cell carcinoma is most likely?",
    options: [
      "Nodulo-ulcerative basal cell carcinoma",
      "Morpheaform basal cell carcinoma",
      "Superficial basal cell carcinoma",
      "Pigmented basal cell carcinoma"
    ],
    answerIndex: 0,
    correctAnswerText: "Nodulo-ulcerative basal cell carcinoma"
  },
  {
    id: 71,
    image: "",
    question: "A 22-year-old man develops multiple symmetrically distributed lesions over the hands and forearms 1 week after recurrent herpes labialis. Each lesion has a central dusky purpuric zone, a middle pale edematous ring, and an outer erythematous rim with a sharp border. He also has painful oral erosions with hemorrhagic crusting of the lips.\nWhich of the following is the most accurate statement regarding this condition?",
    options: [
      "Drugs are more common triggers than infections",
      "Herpes simplex virus is the most common infectious trigger",
      "Lesions are classically distributed over seborrheic areas",
      "Absence of target lesions is required for diagnosis"
    ],
    answerIndex: 1,
    correctAnswerText: "Herpes simplex virus is the most common infectious trigger"
  },
  {
    id: 72,
    image: "",
    question: "A 35-year-old woman develops fever, malaise, arthralgia, painful oral erosions, conjunctival involvement, and widespread skin tenderness 10 days after starting carbamazepine. Examination shows atypical target lesions, flaccid bullae, and peeling of epidermis in large sheets. The detached epidermal area involves 18% of body surface area.\nWhat is the correct nomenclature for this condition?",
    options: [
      "Erythema multiforme major",
      "Stevens-Johnson syndrome",
      "SJS-TEN overlap",
      "Toxic epidermal necrolysis"
    ],
    answerIndex: 2,
    correctAnswerText: "SJS-TEN overlap"
  },
  {
    id: 73,
    image: "",
    question: "A 6-year-old boy is brought with generalized fish-like scaling since early childhood. Examination shows large dark-black adherent scales involving almost the whole body. His mother also gives history of undescended testis in infancy, and ophthalmic evaluation shows corneal opacity. Skin biopsy shows hypergranulosis.\nWhich underlying defect best explains this condition?",
    options: [
      "Filaggrin defect",
      "ATP2A2 gene defect",
      "ZIP4 transporter defect",
      "Steroid sulfatase deficiency"
    ],
    answerIndex: 3,
    correctAnswerText: "Steroid sulfatase deficiency"
  },
  {
    id: 74,
    image: "",
    question: "A 9-year-old child is brought for evaluation of multiple light-brown skin patches present since early childhood. Examination shows more than six café-au-lait macules, each measuring more than 5 mm, along with axillary freckling. Ophthalmic evaluation later shows iris hamartomas. The margins of the pigmented patches are smooth and regular.\nWhich of the following statements is most appropriate?",
    options: [
      "Smooth-bordered café-au-lait macules suggest Coast of California appearance",
      "One café-au-lait macule more than 5 mm is sufficient for diagnosis",
      "Café-au-lait macules in this condition usually have Coast of Maine appearance",
      "Optic glioma excludes the diagnosis of neurofibromatosis type 1"
    ],
    answerIndex: 0,
    correctAnswerText: "Smooth-bordered café-au-lait macules suggest Coast of California appearance"
  },
  {
    id: 75,
    image: "",
    question: "A 66-year-old man presents with easy fatigability, bilateral carpal tunnel syndrome, enlarged tongue, pedal edema, and recurrent purpuric patches around the eyelids after coughing and minor rubbing. Serum evaluation shows monoclonal light chains. Skin biopsy reveals extracellular eosinophilic amorphous deposits in the papillary dermis.\nWhich finding will most characteristically confirm the diagnosis?",
    options: [
      "Hypergranulosis with large black scales",
      "Green birefringence under polarized light",
      "Absent granular layer with fine scaling",
      "Suprabasal split with acantholytic cells"
    ],
    answerIndex: 1,
    correctAnswerText: "Green birefringence under polarized light"
  },
  {
    id: 76,
    image: "",
    question: "A 32-year-old woman presents with well-defined scaly plaques over the face and scalp. The lesions slowly heal with atrophy, scarring, and pigmentary change. On gently removing the adherent scale, follicular keratotic spikes are seen on its undersurface, giving a carpet tack appearance. Biopsy is planned.\nWhich histopathological finding is most expected in this condition?",
    options: [
      "Subepidermal split with eosinophils",
      "Suprabasal split with acantholytic cells",
      "Epidermal atrophy with basal layer liquefaction and Civatte bodies",
      "Munro microabscess with regular acanthosis"
    ],
    answerIndex: 2,
    correctAnswerText: "Epidermal atrophy with basal layer liquefaction and Civatte bodies"
  },
  {
    id: 77,
    image: "",
    question: "A 41-year-old woman presents with progressive tightening of skin over both hands. She also has Raynaud phenomenon, abnormal nail-fold capillaries, mottled pigmentation, and a small puckered mouth giving a purse-string appearance. On examination, skin thickening of the fingers extends proximal to the metacarpophalangeal joints.\nWhich clinical finding is sufficient by itself to diagnose systemic sclerosis?",
    options: [
      "Raynaud phenomenon with color change of fingers",
      "Abnormal nail-fold capillaries with telangiectasia",
      "Sclerodactyly limited only to fingers distal to MCP joints",
      "Skin thickening of fingers extending proximal to MCP joints"
    ],
    answerIndex: 3,
    correctAnswerText: "Skin thickening of fingers extending proximal to MCP joints"
  },
  {
    id: 78,
    image: "",
    question: "A 24-year-old woman presents with recurrent intensely itchy, pale-pink, well-defined raised lesions over the body. The lesions enlarge after scratching and sometimes coalesce into larger plaques. Each individual lesion disappears completely within a few hours without leaving pigmentation or purpura. There is no fever, arthralgia, or systemic complaint.\nWhich feature best supports simple urticaria rather than urticarial vasculitis?",
    options: [
      "Individual lesions lasting less than 24 hours without post-inflammatory pigmentation",
      "Burning painful lesions persisting for more than 24 hours",
      "Purpuric center with residual pigmentation after resolution",
      "Biopsy showing leukocytoclastic vasculitis"
    ],
    answerIndex: 0,
    correctAnswerText: "Individual lesions lasting less than 24 hours without post-inflammatory pigmentation"
  },
  {
    id: 79,
    image: "",
    question: "A 29-year-old woman presents with recurrent itchy eczematous lesions over exposed areas after repeated outdoor exposure. Allergic contact dermatitis is suspected. Multiple allergens are applied over her upper back using small chambers. The patches are removed after 48 hours, and the final reading is planned later to detect a delayed reaction.\nWhich statement best describes this diagnostic test?",
    options: [
      "It detects IgE-mediated immediate hypersensitivity and is read within 20 minutes",
      "It identifies the causative allergen in allergic contact dermatitis by type IV hypersensitivity",
      "It is mainly used to confirm urticaria and should be read within 90 minutes",
      "It confirms irritant dermatitis only when the reaction is negative on day 4"
    ],
    answerIndex: 1,
    correctAnswerText: "It identifies the causative allergen in allergic contact dermatitis by type IV hypersensitivity"
  },
  {
    id: 80,
    image: "",
    question: "A 58-year-old man presents with sudden-onset dark velvety thickening over the neck folds. On examination, his palms show exaggerated dermatoglyphics giving a tripe-like appearance, and there is an abrupt eruption of multiple seborrheic keratoses over the trunk. He also reports recent weight loss and early satiety.\nWhich underlying malignancy should be strongly suspected?",
    options: [
      "Non-small cell carcinoma of lung",
      "Glucagonoma",
      "Gastric adenocarcinoma",
      "Renal cell carcinoma"
    ],
    answerIndex: 2,
    correctAnswerText: "Gastric adenocarcinoma"
  },
  {
    id: 81,
    image: "",
    question: "A 46-year-old man with past history of irregular treatment for Hansen disease presents with multiple firm, shiny, asymptomatic nodules over the face, ears, trunk, and limbs. The surrounding skin appears diffusely infiltrated and shiny. Slit-skin smear shows very high bacillary load with AFB ++++ arranged in globi.\nWhich variant of leprosy is most likely?",
    options: [
      "Lucio leprosy",
      "Tuberculoid leprosy",
      "Borderline tuberculoid leprosy",
      "Histoid leprosy"
    ],
    answerIndex: 3,
    correctAnswerText: "Histoid leprosy"
  },
  {
    id: 82,
    image: "",
    question: "A 34-year-old man on multidrug therapy for borderline Hansen disease develops sudden redness, swelling, and pain in his pre-existing skin lesions. He also complains of tingling and weakness in the ulnar nerve distribution. There are no crops of new painful nodules over the body.\nWhat is the most appropriate management?",
    options: [
      "Continue MDT with oral corticosteroids",
      "Stop MDT immediately and give only antihistamines",
      "Start thalidomide as the drug of choice",
      "Perform lepromin test to confirm active disease"
    ],
    answerIndex: 0,
    correctAnswerText: "Continue MDT with oral corticosteroids"
  },
  {
    id: 83,
    image: "",
    question: "A patient with post-traumatic deviated nasal septum is planned for septoplasty. During teaching, the resident is asked to identify the main structural framework forming the nasal septum. The consultant emphasizes that the major septal framework is made of two bony parts and one cartilaginous part, while small supporting crests and spines only contribute minor support.\nWhich combination represents the major components of the nasal septum?",
    options: [
      "Palatine bone, spine of maxilla, rostrum of sphenoid",
      "Perpendicular plate of ethmoid, vomer, quadrangular cartilage",
      "Inferior turbinate, nasal bone, cribriform plate of ethmoid",
      "Spine of frontal bone, spine of sphenoid, crest of maxilla"
    ],
    answerIndex: 1,
    correctAnswerText: "Perpendicular plate of ethmoid, vomer, quadrangular cartilage"
  },
  {
    id: 84,
    image: "",
    question: "During endoscopic sinus surgery, a surgeon identifies a posterior ethmoidal air cell extending close to the sphenoid sinus and optic nerve. The senior surgeon warns that this cell is a dangerous landmark because mistaken entry can injure the optic nerve.\nWhich paranasal sinus air cell is being described?",
    options: [
      "Agger nasi cell",
      "Bulla ethmoidalis",
      "Onodi cell",
      "Maxillary sinus"
    ],
    answerIndex: 2,
    correctAnswerText: "Onodi cell"
  },
  {
    id: 85,
    image: "",
    question: "A 28-year-old man with recurrent rhinosinusitis is planned for functional endoscopic sinus surgery. The surgeon explains that the key step is to restore ventilation and drainage by clearing the region where maximum paranasal sinus ostia open, especially the drainage pathway related to the uncinate process, ethmoidal infundibulum, and hiatus semilunaris.\nWhich anatomical region is the surgeon mainly targeting?",
    options: [
      "Sphenoethmoidal recess",
      "Superior meatus",
      "Inferior meatus",
      "Osteomeatal complex"
    ],
    answerIndex: 3,
    correctAnswerText: "Osteomeatal complex"
  },
  {
    id: 86,
    image: "",
    question: "A 62-year-old man is evaluated for gradually progressive loss of smell along with early memory decline. The ENT resident plans a standardized olfactory assessment using “scratch and sniff” booklets, where the patient identifies odorants from multiple choices. The consultant says this test is a commonly used smell identification test and each booklet contains 10 odorants.\nWhich test is being described?",
    options: [
      "University of Pennsylvania Smell Identification Test",
      "Ammonia perception test",
      "Cross-cultural smell identification test",
      "Pure tone audiometry"
    ],
    answerIndex: 0,
    correctAnswerText: "University of Pennsylvania Smell Identification Test"
  },
  {
    id: 87,
    image: "",
    question: "A 7-year-old child with repaired cleft palate is brought with abnormal nasal quality of voice. On speaking, there is excessive nasal resonance and nasal air escape. Examination shows poor palatal closure during phonation, but the nasal cavity is patent with no obstruction.\nWhich mechanism best explains this voice abnormality?",
    options: [
      "Reduced nasal component due to nasal obstruction",
      "Increased nasal component due to palatal insufficiency",
      "Reduced oral and nasal components due to laryngeal paralysis",
      "Increased oral component due to concha bullosa"
    ],
    answerIndex: 1,
    correctAnswerText: "Increased nasal component due to palatal insufficiency"
  },
  {
    id: 88,
    image: "",
    question: "A patient undergoing evaluation for nasal airflow is explained that the narrowest part of the nostril acts like a physiological valve. During inspiration, airflow remains relatively linear, but during expiration it becomes turbulent, which helps in ventilation of the paranasal sinuses.\nWhich statement is most accurate regarding this region?",
    options: [
      "It is formed mainly by the nasolacrimal duct opening into inferior meatus",
      "It is the widest part of the nasal cavity and causes laminar expiration",
      "It is limen nasi, and sinus ventilation occurs mainly during expiration due to turbulent flow",
      "It is bounded only by septum and vomer, with no role of inferior turbinate"
    ],
    answerIndex: 2,
    correctAnswerText: "It is limen nasi, and sinus ventilation occurs mainly during expiration due to turbulent flow"
  },
  {
    id: 89,
    image: "",
    question: "A 35-year-old man presents with nasal blockage, thick mucopurulent nasal discharge, reduced smell, fever, and facial heaviness for 8 days. He says the pain is maximum early morning and gradually reduces by evening after remaining upright. Examination also shows mild swelling of the upper eyelid.\nWhich interpretation is most appropriate?",
    options: [
      "Chronic sinusitis; fever is a major criterion and sphenoid sinus is involved",
      "Maxillary sinusitis; pain is classically retro-orbital and vertex type",
      "Ethmoid sinusitis; pain is maximum in the morning due to pus drainage on standing",
      "Acute frontal sinusitis; diagnosis requires 2 major symptoms with 1 minor symptom"
    ],
    answerIndex: 3,
    correctAnswerText: "Acute frontal sinusitis; diagnosis requires 2 major symptoms with 1 minor symptom"
  },
  {
    id: 90,
    image: "images/IMG_7037.jpeg",
    question: "A 12-year-old child presents with fever, nasal obstruction, facial heaviness, and mucopurulent nasal discharge. Nasal endoscopy shows pus in the middle meatus. Two days later, he develops painful periorbital swelling with restricted eye movements. Imaging shows involvement of the ethmoidal sinus.\nWhich of the following is the most appropriate interpretation?",
    options: [
      "Orbital cellulitis / orbital abscess is commonly associated with ethmoidal sinusitis",
      "Mucocele and pyocele are classically common complications of ethmoidal sinusitis",
      "Pus in middle meatus rules out sinusitis and suggests allergic rhinitis",
      "Open sinus surgery is the routine first-line treatment for uncomplicated sinusitis"
    ],
    answerIndex: 0,
    correctAnswerText: "Orbital cellulitis / orbital abscess is commonly associated with ethmoidal sinusitis"
  },
  {
    id: 91,
    image: "images/IMG_7038.jpeg",
    question: "A 19-year-old woman presents with chronic foul-smelling nasal crusting, anosmia, and a roomy nasal cavity. She is started on regular alkaline nasal douching. The solution advised contains sodium biborate, sodium bicarbonate, and sodium chloride. If she fails medical management, a procedure producing temporary nostril closure is considered, but the surgeon prefers a modification that avoids complete obstruction.\nWhich statement is most appropriate regarding management?",
    options: [
      "The alkaline nasal wash contains sodium biborate, sodium bicarbonate, and sodium chloride in 2:1:1 ratio",
      "Modified Young’s operation leaves a small 3 mm opening instead of complete nostril closure",
      "Classical Young’s operation is preferred nowadays because it is very comfortable for patients",
      "FESS is the routine definitive procedure for atrophic rhinitis with crusting"
    ],
    answerIndex: 1,
    correctAnswerText: "Modified Young’s operation leaves a small 3 mm opening instead of complete nostril closure"
  },
  {
    id: 92,
    image: "",
    question: "A 32-year-old man has long-standing watery rhinorrhea and nasal obstruction, especially triggered by cold air and strong smells. Allergy testing is negative. Examination shows congested nasal mucosa without infection. Medical therapy fails. The surgeon plans a procedure through the region lying behind the maxillary sinus to interrupt parasympathetic supply responsible for excessive vasodilatation.\nWhich structure is targeted in the treatment of this condition?",
    options: [
      "Internal maxillary artery",
      "Nasolacrimal duct",
      "Vidian nerve",
      "Anterior ethmoidal nerve"
    ],
    answerIndex: 2,
    correctAnswerText: "Vidian nerve"
  },
  {
    id: 93,
    image: "images/IMG_7039.jpeg",
    question: "A 24-year-old atopic male presents with long-standing nasal obstruction, foul-smelling nasal discharge, and recurrent nasal polyps. Diagnostic nasal endoscopy reveals thick tenacious peanut-butter-like mucin. CT paranasal sinuses shows areas of heterogeneous opacity with double density. Fungal smear is positive, but there is no tissue invasion.\nWhich of the following best supports the diagnosis?",
    options: [
      "Fungal culture is a major diagnostic criterion and tissue invasion is mandatory",
      "Absence of nasal polyposis rules in allergic fungal rhinosinusitis",
      "Single-density CT opacity with neutrophilic mucin is classical",
      "Type I IgE-mediated hypersensitivity with eosinophilic mucin and positive fungal smear"
    ],
    answerIndex: 3,
    correctAnswerText: "Type I IgE-mediated hypersensitivity with eosinophilic mucin and positive fungal smear"
  },
  {
    id: 94,
    image: "images/IMG_7041.jpeg",
    question: "A 64-year-old man presents with progressive unilateral nasal obstruction, intermittent epistaxis, and facial heaviness. Diagnostic nasal endoscopy shows a friable mass arising from the lateral wall of the nose. CT scan shows extension toward the maxillary sinus with destruction of the maxillary sinus wall.\nWhich is the most likely diagnosis?",
    options: [
      "Squamous cell carcinoma of nose",
      "Inverted papilloma",
      "Juvenile nasopharyngeal angiofibroma",
      "Allergic nasal polyp"
    ],
    answerIndex: 0,
    correctAnswerText: "Squamous cell carcinoma of nose"
  },
  {
    id: 95,
    image: "",
    question: "A 58-year-old carpenter presents with progressive unilateral nasal obstruction, blood-stained nasal discharge, facial fullness, and reduced smell. Imaging shows a mass predominantly involving the ethmoid sinus. Biopsy shows a gland-forming malignant epithelial tumor. The consultant asks the resident to identify the most likely occupational association and tumor ranking among paranasal sinus malignancies.\nWhich statement is most appropriate?",
    options: [
      "It is the most common paranasal sinus malignancy and is classically associated with nickel exposure",
      "It is the second most common paranasal sinus malignancy and is classically associated with wood industry exposure",
      "It is the most common benign tumor of paranasal sinuses and commonly arises from the maxillary sinus",
      "It is best treated with chemotherapy alone using cisplatin and 5-fluorouracil"
    ],
    answerIndex: 1,
    correctAnswerText: "It is the second most common paranasal sinus malignancy and is classically associated with wood industry exposure"
  },
  {
    id: 96,
    image: "images/IMG_7042.jpeg",
    question: "A 24-year-old man presents after a road traffic accident with nasal swelling, epistaxis, and deviation of the nasal dorsum. Lateral view nasal X-ray shows a radiolucent line over the dorsum of the nasal bone. The resident plans manipulation, but the consultant says reduction becomes difficult if edema develops and timing decides the type of reduction.\nWhich of the following is the most appropriate statement?",
    options: [
      "Zygomatic fracture is the most common facial fracture and should always be treated by open reduction immediately",
      "Radiolucency on the lateral aspect of nasal bone always confirms fracture",
      "Nasal bone fracture should ideally be reduced immediately; if edema develops, reduce after 5–7 days, and closed reduction is preferred within 3 weeks",
      "Open reduction is preferred for all nasal bone fractures presenting within the first week"
    ],
    answerIndex: 2,
    correctAnswerText: "Nasal bone fracture should ideally be reduced immediately; if edema develops, reduce after 5–7 days, and closed reduction is preferred within 3 weeks"
  },
  {
    id: 97,
    image: "images/IMG_7043.jpeg",
    question: "A 30-year-old man presents after facial trauma with swelling around the eye, circumorbital ecchymosis, subconjunctival hemorrhage, unilateral epistaxis, and flattening of the cheek prominence. Palpation reveals a step deformity at the infraorbital rim and frontozygomatic suture. X-ray shows a tear drop sign.\nWhich fracture pattern is most likely involved?",
    options: [
      "Isolated nasal bone fracture",
      "Le Fort I fracture",
      "Isolated orbital roof fracture",
      "Zygomatic fracture involving frontozygomatic region, zygomatic arch, and zygomaticotemporal suture"
    ],
    answerIndex: 3,
    correctAnswerText: "Zygomatic fracture involving frontozygomatic region, zygomatic arch, and zygomaticotemporal suture"
  },
  {
    id: 98,
    image: "images/IMG_7045.jpeg",
    question: "A 29-year-old man develops persistent clear watery nasal discharge after a road traffic accident. The discharge increases when he bends forward. When the fluid mixed with blood is placed on tissue paper, it forms a central reddish spot surrounded by a clear outer ring.\nWhich of the following is the most likely explanation?",
    options: [
      "Cribriform plate leak producing double ring / target / halo sign",
      "Frontal sinus osteomyelitis producing single ring sign",
      "Maxillary sinus fracture producing allergic mucin discharge",
      "Nasolacrimal duct injury producing paradoxical CSF rhinorrhea"
    ],
    answerIndex: 0,
    correctAnswerText: "Cribriform plate leak producing double ring / target / halo sign"
  },
  {
    id: 99,
    image: "",
    question: "A 68-year-old hypertensive man presents with recurrent profuse nasal bleeding. Anterior rhinoscopy does not show an obvious bleeding point over the anterior septum. Diagnostic nasal endoscopy localizes the bleeding to the posterior part of the lateral nasal wall. The consultant says this bleeding area is classically venous, unlike the common childhood bleeding site.\nWhich structure is most likely responsible?",
    options: [
      "Little’s area",
      "Woodruff plexus",
      "Retrocolumellar vein",
      "Anterior ethmoidal artery"
    ],
    answerIndex: 1,
    correctAnswerText: "Woodruff plexus"
  },
  {
    id: 100,
    image: "images/IMG_7100.jpeg",
    question: "A 13-year-old boy presents with progressive unilateral nasal obstruction and mouth breathing. Nasal endoscopy shows a single smooth polypoidal mass extending posteriorly toward the choana. The surgeon explains that the lesion arises from the maxillary antrum, passes through the ostium, and has a characteristic trilobed configuration. There is no history of allergy and recurrence is uncommon after complete endoscopic removal.\nWhich diagnosis best fits this presentation?",
    options: [
      "Ethmoidal polyp",
      "Juvenile nasopharyngeal angiofibroma",
      "Antrochoanal polyp",
      "Allergic fungal rhinosinusitis"
    ],
    answerIndex: 2,
    correctAnswerText: "Antrochoanal polyp"
  },
  {
    id: 101,
    image: "images/IMG_7047.jpeg",
    question: "A 38-year-old man presents with chronic nasal obstruction, crusting, occasional epistaxis, and a non-healing ulcerative lesion in the anterior nasal cavity. Examination shows involvement of the cartilaginous septal region near the anterior end of the inferior turbinate. The clinician also mentions that the same region is commonly involved in another chronic granulomatous disease of the nose.\nWhich of the following statements is most accurate?",
    options: [
      "The most common symptom is lacrimation, and the bony septum is the usual site",
      "The most common site is posterior nasal cavity, and nasal obstruction is rare",
      "The most common nasal involvement in tertiary syphilis is the anterior end of inferior turbinate",
      "The most common site is cartilaginous nasal septum with anterior end of inferior turbinate, and the most common symptom is nasal obstruction"
    ],
    answerIndex: 3,
    correctAnswerText: "The most common site is cartilaginous nasal septum with anterior end of inferior turbinate, and the most common symptom is nasal obstruction"
  },
  {
    id: 102,
    image: "images/IMG_7048.jpeg",
    question: "A 34-year-old man from North India presents with long-standing foul-smelling nasal crusting and progressive nasal obstruction. On examination, the nose feels hard and woody. Biopsy from the nasal lesion shows large vacuolated macrophages containing bacilli, along with eosinophilic inclusion bodies.\nWhich of the following is the most appropriate diagnosis?",
    options: [
      "Rhinoscleroma",
      "Atrophic rhinitis",
      "Allergic fungal rhinosinusitis",
      "Tuberculosis of nose"
    ],
    answerIndex: 0,
    correctAnswerText: "Rhinoscleroma"
  },
  {
    id: 103,
    image: "images/IMG_7049.jpeg",
    question: "A 62-year-old debilitated man with poor nasal hygiene presents with foul-smelling nasal discharge, crusting, bleeding, and a crawling sensation inside the nose. On examination, multiple motile larvae are seen within the nasal cavity. The ENT surgeon explains that the causative fly can release hundreds of eggs within a day, and larvae crawl out by the 3rd–4th day.\nWhich of the following is the most appropriate treatment step?",
    options: [
      "Vidian neurectomy through pterygopalatine fossa",
      "Cleaning of nose with chloroform water and removal of maggots",
      "FESS followed by amphotericin B",
      "Modified Young’s operation with 3 mm opening"
    ],
    answerIndex: 1,
    correctAnswerText: "Cleaning of nose with chloroform water and removal of maggots"
  },
  {
    id: 104,
    image: "",
    question: "A 21-year-old man presents with chronic unilateral nasal obstruction and recurrent mouth breathing. He gives a history of nasal deformity since childhood. Examination shows deviation of the nasal septum without external nasal deformity. The consultant says that the corrective procedure should preserve mucoperichondrium as much as possible and remove only the deviated part, thereby reducing the risk of septal perforation.\nWhich of the following is the most appropriate statement?",
    options: [
      "DNS is the most common pathology of nose, and concha bullosa is the second most common",
      "Rhinoplasty is the treatment of choice when only the nasal septum is abnormal",
      "Septoplasty corrects septal abnormality by removing only the deviated part with lower risk of perforation",
      "Submucous resection is preferred because it removes the entire septal cartilage routinely"
    ],
    answerIndex: 2,
    correctAnswerText: "Septoplasty corrects septal abnormality by removing only the deviated part with lower risk of perforation"
  },
  {
    id: 105,
    image: "images/IMG_7050.jpeg",
    question: "A 27-year-old man presents with a depressed nasal bridge after repeated nasal trauma. On examination, there is loss of dorsal nasal support with a characteristic saddle-shaped deformity. The surgeon plans a corrective procedure using autologous graft material.\nWhich of the following is the most appropriate management?",
    options: [
      "Septoplasty alone",
      "Vidian neurectomy",
      "Modified Young’s operation",
      "Augmentation rhinoplasty using iliac crest graft"
    ],
    answerIndex: 3,
    correctAnswerText: "Augmentation rhinoplasty using iliac crest graft"
  },
  {
    id: 106,
    image: "",
    question: "A 35-year-old man with chronic nasal blockage and suspected chronic rhinosinusitis is planned for diagnostic nasal endoscopy. During teaching, the senior surgeon asks the resident to describe the correct order of the three-pass technique of Stammberger. The resident begins with examination of the inferior meatus.\nWhich is the correct sequence of passes?",
    options: [
      "Inferior meatus → superior/supreme meatus and anterior middle meatus → posterior part of middle meatus",
      "Middle meatus posteriorly → inferior meatus → superior meatus",
      "Superior meatus → inferior meatus → anterior part of middle meatus",
      "Posterior choana → sphenoethmoidal recess → inferior meatus"
    ],
    answerIndex: 0,
    correctAnswerText: "Inferior meatus → superior/supreme meatus and anterior middle meatus → posterior part of middle meatus"
  },
  {
    id: 107,
    image: "images/IMG_7051.jpeg",
    question: "A patient with suspected posterior paranasal sinus pathology is advised an X-ray view in which the beam passes from below the chin toward the vertex. The radiology resident says this view is especially useful for evaluating the deeper posterior sinuses, and remembers the visibility sequence as SPM.\nWhich of the following correctly describes this view?",
    options: [
      "Occipitomental view; best for frontal sinus, anterior ethmoid, and maxillary sinus",
      "Basal / submentovertex view; best for sphenoid sinus, posterior ethmoid sinus, and maxillary sinus",
      "Lateral view; best for nasal bone fracture and adenoids only",
      "Caldwell view; best for inferior meatus and nasolacrimal duct opening"
    ],
    answerIndex: 1,
    correctAnswerText: "Basal / submentovertex view; best for sphenoid sinus, posterior ethmoid sinus, and maxillary sinus"
  },
  {
    id: 108,
    image: "",
    question: "A 46-year-old man with long-standing unsafe chronic otitis media is planned for middle ear surgery. During drilling near the superior wall of the tympanic cavity, the surgeon warns the resident that excessive manipulation here may open into the cranial cavity. The same discussion includes that the floor of this cavity is related to the jugular bulb.\nWhich of the following anatomical relations is correctly matched?",
    options: [
      "Lateral wall of middle ear – Inner ear",
      "Medial wall of middle ear – External auditory canal",
      "Roof of middle ear – Middle cranial fossa",
      "Floor of middle ear – Mastoid air cells"
    ],
    answerIndex: 2,
    correctAnswerText: "Roof of middle ear – Middle cranial fossa"
  },
  {
    id: 109,
    image: "images/IMG_7052.jpeg",
    question: "A 14-year-old boy presents with progressive unilateral nasal obstruction and recurrent episodes of profuse epistaxis. Examination shows a reddish mass filling the nasopharynx. CT scan shows anterior bowing of the posterior wall of maxillary sinus. The surgeon warns the resident not to attempt tissue sampling before definitive planning.\nWhich of the following is the most appropriate statement regarding this lesion?",
    options: [
      "It is a benign non-vascular polyp arising from maxillary antrum and biopsy is diagnostic",
      "It is commonly seen in adult females and usually originates from the ethmoid sinus",
      "Debulking surgery is preferred because complete removal causes high recurrence",
      "It is a testosterone-dependent vascular tumor arising near the sphenopalatine foramen, and biopsy is contraindicated"
    ],
    answerIndex: 3,
    correctAnswerText: "It is a testosterone-dependent vascular tumor arising near the sphenopalatine foramen, and biopsy is contraindicated"
  },
  {
    id: 110,
    image: "",
    question: "A 6-year-old child with persistent otitis media with effusion for more than 3 months is planned for grommet insertion. During the procedure, the surgeon chooses the quadrant where the tympanic membrane is thinnest and where the cone of light is normally seen.\nWhich of the following is the most appropriate site for the incision?",
    options: [
      "Anteroinferior quadrant of pars tensa",
      "Posteroinferior quadrant of pars tensa",
      "Pars flaccida near Shrapnell’s membrane",
      "Posterosuperior quadrant near ossicles"
    ],
    answerIndex: 0,
    correctAnswerText: "Anteroinferior quadrant of pars tensa"
  },
  {
    id: 111,
    image: "",
    question: "A patient undergoing middle ear surgery develops sharp pain when the inner surface of the tympanic membrane is manipulated. The surgeon explains that this surface is supplied by the same cranial nerve whose branch also contributes to the tympanic plexus.\nWhich nerve is most likely responsible?",
    options: [
      "Auriculotemporal nerve",
      "Tympanic branch of glossopharyngeal nerve",
      "Auricular branch of vagus nerve",
      "Chorda tympani nerve"
    ],
    answerIndex: 1,
    correctAnswerText: "Tympanic branch of glossopharyngeal nerve"
  },
  {
    id: 112,
    image: "images/IMG_7053.jpeg",
    question: "During tympanoplasty for chronic otitis media, the surgeon finds erosion near the long process of incus. A small terminal knob-like process that normally articulates with the head of stapes is identified as the key structure needed to reconstruct the ossicular chain.\nWhich ossicular part is being referred to?",
    options: [
      "Short process of incus",
      "Anterior process of malleus",
      "Lenticular process of incus",
      "Footplate of stapes"
    ],
    answerIndex: 2,
    correctAnswerText: "Lenticular process of incus"
  },
  {
    id: 113,
    image: "",
    question: "During surgery for chronic otitis media, a resident identifies a nerve plexus lying over the promontory of the middle ear. The consultant explains that this plexus provides sensory innervation to the middle ear mucosa and is mainly contributed by cranial nerves IX and X, with sympathetic fibres from the carotid plexus.\nWhich of the following statements is most accurate?",
    options: [
      "Motor supply of middle ear is mainly by cranial nerves IX and X",
      "Sensory supply of middle ear is mainly by cranial nerves V and VII",
      "Tympanic plexus lies on the lateral wall of middle ear near tympanic membrane",
      "Tympanic plexus lies over the promontory and receives Jacobson’s and Arnold’s fibres"
    ],
    answerIndex: 3,
    correctAnswerText: "Tympanic plexus lies over the promontory and receives Jacobson’s and Arnold’s fibres"
  },
  {
    id: 114,
    image: "",
    question: "A 19-year-old patient undergoes surgery for unsafe chronic otitis media. During follow-up, recurrent disease is suspected despite apparently adequate clearance of the middle ear. The surgeon explains that one narrow hidden recess of the tympanic cavity is notoriously difficult to visualize and clear, making it a common site for residual or recurrent cholesteatoma.\nWhich site is most likely responsible?",
    options: [
      "Sinus tympani",
      "Hypotympanum",
      "Protympanum",
      "Epitympanum"
    ],
    answerIndex: 0,
    correctAnswerText: "Sinus tympani"
  },
  {
    id: 115,
    image: "",
    question: "A 32-year-old woman presents with progressive conductive hearing loss with normal tympanic membrane. Pure tone audiometry shows conductive loss, and stapedial reflex is absent. The surgeon plans a middle ear procedure through the external auditory canal rather than a postaural incision.\nWhich of the following is the most appropriate approach for this surgery?",
    options: [
      "Wilde’s postaural approach",
      "Rosen endomeatal approach",
      "Transpalatal approach",
      "Lateral rhinotomy approach"
    ],
    answerIndex: 1,
    correctAnswerText: "Rosen endomeatal approach"
  },
  {
    id: 116,
    image: "images/IMG_7055.jpeg",
    question: "A 16-year-old boy with recurrent foul-smelling ear discharge is evaluated for unsafe chronic otitis media. Otoscopy shows an attic retraction pocket with collection of white keratin debris. The surgeon explains that this lesion is not a true tumor and develops due to squamous metaplasia/keratinizing squamous epithelium within the middle ear cleft. The earliest site where this process commonly begins is asked.\nWhich of the following is the most likely earliest site for development of this lesion?",
    options: [
      "Sinus tympani",
      "Prussak’s space",
      "Hypotympanum",
      "Protympanum"
    ],
    answerIndex: 1,
    correctAnswerText: "Prussak’s space"
  },
  {
    id: 117,
    image: "",
    question: "A 9-year-old child requires widening of the external auditory canal for better access to the middle ear. The surgeon chooses an endaural incision that begins at a small cartilaginous gap between the helix and tragus. The assistant is asked to identify the incision based on the landmark used.\nWhich incision is being described?",
    options: [
      "Wilde’s postaural incision",
      "Rosen endomeatal incision",
      "Lempert endaural incision",
      "William Wilde’s mastoid incision"
    ],
    answerIndex: 2,
    correctAnswerText: "Lempert endaural incision"
  },
  {
    id: 118,
    image: "",
    question: "A 52-year-old man presents with painless unilateral neck swelling, recurrent epistaxis, and unilateral blocked ear sensation. Otoscopy shows features of serous otitis media due to Eustachian tube obstruction. He later develops ipsilateral facial pain and palatal weakness. EBV association is suspected.\nWhich site is most commonly involved by the primary lesion?",
    options: [
      "Pyriform fossa",
      "Posterior commissure",
      "Fossa of Rosenmuller",
      "Vallecula"
    ],
    answerIndex: 2,
    correctAnswerText: "Fossa of Rosenmuller"
  },
  {
    id: 119,
    image: "",
    question: "During otoscopic examination, a patient suddenly develops cough when the examiner touches the conchal region of the auricle. The consultant explains that this reflex occurs because this auricular area is supplied by a cranial nerve branch that carries vagal sensory fibres.\nWhich nerve is most likely responsible?",
    options: [
      "Auricular branch of vagus nerve",
      "Greater auricular nerve",
      "Lesser occipital nerve",
      "Auriculotemporal nerve"
    ],
    answerIndex: 0,
    correctAnswerText: "Auricular branch of vagus nerve"
  },
  {
    id: 120,
    image: "images/IMG_7056.jpeg",
    question: "A 4-year-old child is brought with sudden ear pain after inserting a small round object into the ear. Otoscopy shows the object impacted at the narrowest part of the external auditory canal, close to the tympanic membrane. X-ray shows a double-ring appearance. The ENT surgeon immediately shifts the child for urgent removal, warning that delay may cause surrounding tissue necrosis and facial nerve palsy.\nWhich is the most dangerous foreign body in the external auditory canal?",
    options: [
      "Pea seed",
      "Button battery",
      "Cotton bud fragment",
      "Live insect"
    ],
    answerIndex: 1,
    correctAnswerText: "Button battery"
  },
  {
    id: 121,
    image: "",
    question: "A patient undergoing temporal bone dissection is shown a cut section of the cochlea. The examiner points to the apical region and asks for the structure through which two perilymph-filled chambers communicate with each other. The same structure is absent at the basal turn and is located at the apex of the cochlear spiral.\nWhich structure is being referred to?",
    options: [
      "Reissner’s membrane",
      "Modiolus",
      "Helicotrema",
      "Basilar membrane"
    ],
    answerIndex: 2,
    correctAnswerText: "Helicotrema"
  },
  {
    id: 122,
    image: "",
    question: "During viva on vestibular physiology, an examiner asks a student to compare the gelatinous structures overlying sensory hair cells in different parts of the inner ear. The student correctly says that in the cochlea it is related to the tectorial membrane and in the macula it is related to the otolithic membrane. The examiner then asks for the corresponding structure in the semicircular canal.\nWhich of the following is the correct structure?",
    options: [
      "Stria vascularis",
      "Basilar membrane",
      "Otolithic membrane",
      "Cupula"
    ],
    answerIndex: 3,
    correctAnswerText: "Cupula"
  },
  {
    id: 123,
    image: "images/IMG_7058.jpeg",
    question: "A child with congenital sensorineural hearing loss undergoes HRCT temporal bone. The report describes an incompletely developed cochlea with only 1.5 turns, instead of the normal 2¾ turns. Vestibular structures are present, and the cochlea is not completely absent.\nWhich congenital inner ear abnormality is most likely present?",
    options: [
      "Mondini dysplasia",
      "Michel aplasia",
      "Scheibe anomaly",
      "Alexander dysplasia"
    ],
    answerIndex: 0,
    correctAnswerText: "Mondini dysplasia"
  },
  {
    id: 124,
    image: "",
    question: "A 36-year-old woman presents with recurrent episodes of severe spinning vertigo lasting for hours, associated with fluctuating hearing loss, tinnitus, and a feeling of fullness in the ear. The consultant explains that the core pathology is increased pressure within the endolymphatic system due to defective fluid handling by the endolymphatic sac.\nWhich of the following best explains the underlying pathology?",
    options: [
      "Leakage of perilymph through oval window",
      "Endolymphatic hydrops",
      "Fixation of stapes footplate",
      "Otoconia displacement into posterior semicircular canal"
    ],
    answerIndex: 1,
    correctAnswerText: "Endolymphatic hydrops"
  },
  {
    id: 125,
    image: "images/IMG_7060.jpeg",
    question: "A 42-year-old man presents with slowly progressive unilateral hearing difficulty, tinnitus, and imbalance. Pure tone audiometry shows sensorineural hearing loss, but speech discrimination is disproportionately poor. MRI shows a cerebellopontine angle lesion arising from the vestibular part of the eighth cranial nerve.\nWhich type of deafness is most classically represented in this patient?",
    options: [
      "Conductive deafness",
      "Sensory cochlear deafness",
      "Neural retrocochlear deafness",
      "Functional deafness"
    ],
    answerIndex: 2,
    correctAnswerText: "Neural retrocochlear deafness"
  },
  {
    id: 126,
    image: "images/IMG_7061.jpeg",
    question: "A 28-year-old woman presents with gradually progressive hearing loss. Otoscopy is normal. Pure tone audiometry shows an air-bone gap, but the examiner also notices a characteristic dip in bone conduction threshold at 2000 Hz. The consultant says this dip is not true cochlear damage and may disappear after successful stapes surgery.\nWhich of the following best explains this finding?",
    options: [
      "True sensory loss due to outer hair cell damage",
      "Neural deafness due to vestibulocochlear nerve compression",
      "Conductive loss with maximum air conduction dip at 4000 Hz",
      "Bone conduction notch at 2000 Hz due to altered ossicular resonance in otosclerosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Bone conduction notch at 2000 Hz due to altered ossicular resonance in otosclerosis"
  },
  {
    id: 127,
    image: "images/IMG_7102.jpeg",
    question: "A 46-year-old factory worker presents with gradually progressive difficulty in hearing after many years of exposure to loud industrial machinery. Pure tone audiometry shows a characteristic dip at 4000 Hz. The examiner explains that this dip is due to early damage to a specific group of cochlear hair cells.\nWhich of the following is the most appropriate explanation?",
    options: [
      "Acoustic notch due to outer hair cell damage in noise-induced hearing loss",
      "Carhart notch due to stapes fixation in otosclerosis",
      "Retrocochlear deafness due to vestibular nerve compression",
      "Endolymphatic hydrops due to defective endolymph absorption"
    ],
    answerIndex: 0,
    correctAnswerText: "Acoustic notch due to outer hair cell damage in noise-induced hearing loss"
  },
  {
    id: 128,
    image: "",
    question: "A newborn fails otoacoustic emission screening and later shows delayed response to sound. There is no history of postnatal meningitis or ototoxic drug exposure. Audiometry performed during evaluation shows a characteristic U-shaped curve. The examiner says this pattern strongly points toward congenital deafness and asks for the most common infective cause associated with this condition.\nWhich of the following is the most likely cause?",
    options: [
      "Congenital rubella infection",
      "Congenital CMV infection",
      "Mumps infection",
      "Herpes simplex infection"
    ],
    answerIndex: 1,
    correctAnswerText: "Congenital CMV infection"
  },
  {
    id: 129,
    image: "",
    question: "A 38-year-old man has complete sensorineural hearing loss in the right ear after vestibular schwannoma surgery. During tuning fork testing, the fork is placed on the right mastoid and the patient says he can hear it, but when it is brought near the right external auditory canal, he cannot hear it. The examiner warns that the result is misleading because the sound is actually being perceived by the opposite cochlea through skull vibration.\nWhat is the best interpretation of this finding?",
    options: [
      "True negative Rinne’s test due to conductive deafness",
      "True positive Rinne’s test due to normal hearing",
      "False negative Rinne’s test due to severe unilateral sensorineural deafness",
      "Positive Rinne’s test due to retrocochlear recruitment"
    ],
    answerIndex: 2,
    correctAnswerText: "False negative Rinne’s test due to severe unilateral sensorineural deafness"
  },
  {
    id: 130,
    image: "",
    question: "A 30-year-old patient is evaluated using a 512 Hz tuning fork. The vibrating fork is placed on the midline forehead, and the patient reports that the sound is heard louder in the right ear. No masking is required for this test. The examiner asks the intern to interpret the possible lesion based only on this finding.\nWhich of the following is the most appropriate interpretation?",
    options: [
      "Right sensorineural deafness or left conductive deafness",
      "Bilaterally normal hearing only",
      "Left conductive deafness or bilateral sensorineural deafness",
      "Right conductive deafness or left sensorineural deafness"
    ],
    answerIndex: 3,
    correctAnswerText: "Right conductive deafness or left sensorineural deafness"
  },
  {
    id: 131,
    image: "",
    question: "A patient with suspected neuromuscular weakness undergoes impedance audiometry. The tympanogram does not show a single smooth peak. Instead, it shows two distinct compliance peaks separated by a central dip, giving a characteristic double-peaked pattern. The examiner asks which condition is classically associated with this tracing.\nWhich of the following is the most appropriate association?",
    options: [
      "Myopathy",
      "Otosclerosis",
      "Secretory otitis media",
      "Ossicular fixation"
    ],
    answerIndex: 0,
    correctAnswerText: "Myopathy"
  },
  {
    id: 132,
    image: "images/IMG_7064.jpeg",
    question: "A 2-month-old infant is evaluated for suspected hearing impairment using a non-invasive objective auditory test. Three electrodes are placed, and the response is recorded as 7 waves generated from sequential auditory pathway stations. The examiner asks the intern to identify the wave that is usually the largest and most clinically reliable in this test.\nWhich wave is being referred to?",
    options: [
      "Wave I",
      "Wave V",
      "Wave III",
      "Wave VII"
    ],
    answerIndex: 1,
    correctAnswerText: "Wave V"
  },
  {
    id: 133,
    image: "images/IMG_7103.jpeg",
    question: "A young adult presents with gradually progressive hearing difficulty. Audiometry suggests conductive hearing loss, and stapes fixation is suspected. On general examination, the patient has blue sclera and gives a history of repeated fractures after trivial trauma.\nWhich syndrome best explains this association?",
    options: [
      "Alport syndrome",
      "Pendred syndrome",
      "Van der Hoeve syndrome",
      "Usher syndrome"
    ],
    answerIndex: 2,
    correctAnswerText: "Van der Hoeve syndrome"
  },
  {
    id: 134,
    image: "",
    question: "A 32-year-old woman presents with slowly progressive conductive hearing loss. Otoscopy is normal, pure tone audiometry shows an air-bone gap, and a Carhart notch is seen at 2000 Hz. The surgeon plans a procedure in which only a small opening is made in the stapes footplate and a prosthesis is inserted. The patient asks whether complete stapes removal is required.\nWhich is the treatment of choice in this condition?",
    options: [
      "Sodium fluoride therapy alone",
      "Complete stapedectomy",
      "Myringotomy with grommet insertion",
      "Stapedotomy with prosthesis placement"
    ],
    answerIndex: 3,
    correctAnswerText: "Stapedotomy with prosthesis placement"
  },
  {
    id: 135,
    image: "",
    question: "A 34-year-old woman complains that when a single musical tone is played, she perceives it as two different tones. She also has episodic vertigo, tinnitus, and fluctuating sensorineural hearing loss. The examiner explains that this occurs due to a mismatch in the refractory behaviour of cochlear hair cells.\nWhat is this abnormal sound perception called?",
    options: [
      "Diplacusis",
      "Recruitment",
      "Hyperacusis",
      "Presbyacusis"
    ],
    answerIndex: 0,
    correctAnswerText: "Diplacusis"
  },
  {
    id: 136,
    image: "",
    question: "A 39-year-old patient with recurrent episodic vertigo, tinnitus, aural fullness, and fluctuating sensorineural hearing loss is diagnosed with Meniere’s disease. Dietary modification and diuretics are tried, but attacks continue. The consultant plans a non-destructive therapy that delivers low-pressure pulses to the middle ear through a ventilation tube before considering endolymphatic sac surgery or intratympanic gentamicin.\nWhich of the following is the device used for this therapy?",
    options: [
      "Robinson prosthesis",
      "Meniett device",
      "Silverstein MicroWick",
      "Grommet alone"
    ],
    answerIndex: 1,
    correctAnswerText: "Meniett device"
  },
  {
    id: 137,
    image: "",
    question: "A 45-year-old patient presents with unilateral sensorineural hearing loss, tinnitus, imbalance, and poor speech discrimination. On examination, there is early loss of corneal reflex. The radiologist describes an enhancing mass extending from the internal auditory canal into the cerebellopontine angle, producing an “ice-cream cone” appearance.\nWhich investigation is the radiological investigation of choice for this condition?",
    options: [
      "HRCT temporal bone",
      "Plain X-ray skull",
      "Gadolinium-enhanced MRI",
      "Pure tone audiometry"
    ],
    answerIndex: 2,
    correctAnswerText: "Gadolinium-enhanced MRI"
  },
  {
    id: 138,
    image: "images/IMG_7068.jpeg",
    question: "A 22-year-old wrestler presents with painful swelling of the pinna after repeated blunt trauma during training. The swelling is fluctuant and lies over the cartilaginous part of the auricle. The surgeon warns that if it is not treated early, it can heal with permanent irregular deformity of the pinna known as cauliflower ear.\nThe collection of blood in this condition is present between which of the following layers?",
    options: [
      "Skin and subcutaneous tissue",
      "Periosteum and temporal bone",
      "Tympanic membrane and malleus handle",
      "Auricular cartilage and perichondrium"
    ],
    answerIndex: 3,
    correctAnswerText: "Auricular cartilage and perichondrium"
  },
  {
    id: 139,
    image: "images/IMG_7071.jpeg",
    question: "A 24-year-old trekker returns after prolonged exposure to freezing temperature. He develops painful swelling of the pinna with erythema, edema, and bullae formation. A few areas later become dusky and necrotic. There is no history of blunt trauma or auricular hematoma.\nWhat is the most appropriate initial management?",
    options: [
      "Rewarming with analgesics and local care; antibiotics/debridement only when infection or necrosis is present",
      "Immediate cosmetic otoplasty with pressure dressing",
      "Incision and drainage between cartilage and perichondrium",
      "Stapedotomy with prosthesis placement"
    ],
    answerIndex: 0,
    correctAnswerText: "Rewarming with analgesics and local care; antibiotics/debridement only when infection or necrosis is present"
  },
  {
    id: 140,
    image: "images/IMG_7072.jpeg",
    question: "A 42-year-old woman presents with recurrent painful redness and swelling of both pinnae. The ear lobule is spared. She also complains of hoarseness and intermittent nasal bridge pain. On evaluation, involvement of septal, laryngeal, tracheal, and costal cartilages is suspected.\nWhich of the following is the treatment of choice during active disease?",
    options: [
      "Incision and drainage with pressure bandage",
      "Systemic corticosteroids",
      "Topical silver nitrate application",
      "Stapedotomy with prosthesis placement"
    ],
    answerIndex: 1,
    correctAnswerText: "Systemic corticosteroids"
  },
  {
    id: 141,
    image: "images/IMG_7073.jpeg",
    question: "A 19-year-old swimmer presents with severe localized ear pain, worsened by touching the tragus. Otoscopy shows a small tender pustular swelling in the cartilaginous part of the external auditory canal, while the tympanic membrane is normal. The lesion is limited to the canal and does not involve the middle ear.\nWhich of the following best explains this condition?",
    options: [
      "Diffuse fungal infection of the external auditory canal",
      "Viral vesicular infection involving facial nerve ganglion",
      "Staphylococcal infection of a hair follicle in the external auditory canal",
      "Autoimmune inflammation of auricular cartilage with lobule sparing"
    ],
    answerIndex: 2,
    correctAnswerText: "Staphylococcal infection of a hair follicle in the external auditory canal"
  },
  {
    id: 142,
    image: "images/IMG_7074.jpeg",
    question: "An elderly diabetic patient presents with persistent foul-smelling ear discharge, severe otalgia, granulation tissue in the external auditory canal, and new-onset facial nerve palsy. Skull base osteomyelitis is suspected. A radionuclide scan is used to establish the diagnosis. After treatment is started, the consultant asks for the best investigation to assess response and prognosis.\nWhich of the following is most useful for monitoring prognosis in this condition?",
    options: [
      "Pure tone audiometry",
      "High-resolution CT temporal bone",
      "Technetium-99 bone scan",
      "Gallium scan"
    ],
    answerIndex: 3,
    correctAnswerText: "Gallium scan"
  },
  {
    id: 143,
    image: "images/IMG_7077.jpeg",
    question: "A 14-year-old boy presents with severe ear pain and conductive hearing difficulty. Otoscopy shows a pearly white mass deeply impacted in the external auditory canal. The lesion is bilateral, and after removal it is found to be made of desquamated epithelial debris. He is started on keratolytic therapy, but persistent obstruction later requires widening of the canal.\nWhat is the most likely diagnosis?",
    options: [
      "Keratosis obturans",
      "External auditory canal cholesteatoma",
      "Malignant otitis externa",
      "Furuncle of external auditory canal"
    ],
    answerIndex: 0,
    correctAnswerText: "Keratosis obturans"
  },
  {
    id: 144,
    image: "images/IMG_7078.jpeg",
    question: "A 17-year-old boy who regularly practices surfing and swimming presents with recurrent ear blockage and episodes of diffuse otitis externa. Otoscopic examination shows bilateral multiple bony swellings arising from the external auditory canal. There is no single pedunculated unilateral mass.\nWhat is the most likely diagnosis?",
    options: [
      "Osteoma of external auditory canal",
      "Exostosis of external auditory canal",
      "Keratosis obturans",
      "Malignant otitis externa"
    ],
    answerIndex: 1,
    correctAnswerText: "Exostosis of external auditory canal"
  },
  {
    id: 145,
    image: "images/IMG_7079.jpeg",
    question: "A 7-year-old school-going child is brought with gradually progressive hearing difficulty noticed by the teacher. There is no fever, no ear pain, and no congestion. Otoscopy shows a dull bluish tympanic membrane with reduced mobility. Thick mucoid fluid is suspected behind the tympanic membrane. The condition has persisted for more than 3 months despite medical treatment.\nWhat is the treatment of choice?",
    options: [
      "Immediate mastoidectomy",
      "Stapedotomy with prosthesis placement",
      "Myringotomy with grommet insertion",
      "Incision and drainage of external auditory canal"
    ],
    answerIndex: 2,
    correctAnswerText: "Myringotomy with grommet insertion"
  },
  {
    id: 146,
    image: "images/IMG_7081.jpeg",
    question: "A 6-year-old school-going child presents with acute severe ear pain, high-grade fever, and irritability. Otoscopy shows a congested, red, bulging tympanic membrane with loss of normal landmarks. The pediatrician explains that if pus is under pressure or complications are suspected, a surgical drainage procedure may be needed using a large circumferential incision in a safe quadrant.\nWhich of the following is the most appropriate management statement?",
    options: [
      "Small radial incision in the anteroinferior quadrant with grommet insertion",
      "Rewarming with analgesics and topical silver nitrate",
      "Keratolytic agents followed by canaloplasty if resistant",
      "Antibiotics with myringotomy using a large posteroinferior circumferential incision"
    ],
    answerIndex: 3,
    correctAnswerText: "Antibiotics with myringotomy using a large posteroinferior circumferential incision"
  },
  {
    id: 147,
    image: "images/IMG_7082.jpeg",
    question: "A 13-year-old child has recurrent ear discharge. Otoscopy shows a pars flaccida perforation with scanty, foul-smelling discharge, attic granulation tissue, and a small aural polyp. The clinician is concerned about cholesteatoma and ossicular erosion.\nWhich diagnosis best fits this presentation?",
    options: [
      "Unsafe atticoantral disease with pars flaccida involvement",
      "Safe tubotympanic disease with central pars tensa perforation",
      "Serous otitis media with bluish tympanic membrane",
      "Acute suppurative otitis media with congested bulging tympanic membrane"
    ],
    answerIndex: 0,
    correctAnswerText: "Unsafe atticoantral disease with pars flaccida involvement"
  },
  {
    id: 148,
    image: "",
    question: "A 28-year-old patient with chronic middle ear disease undergoes surgery after hearing evaluation shows conductive hearing loss. Intraoperatively, the tympanic membrane is damaged and the malleus handle is not usable, but the incus is intact and mobile. The surgeon decides to place the graft in contact with the incus to restore sound conduction.\nWhich type of tympanoplasty is being performed?",
    options: [
      "Type I tympanoplasty – myringoplasty",
      "Type II tympanoplasty – myringo-incudopexy",
      "Type III tympanoplasty – myringostapediopexy",
      "Type IV tympanoplasty – minor cavum effect"
    ],
    answerIndex: 1,
    correctAnswerText: "Type II tympanoplasty – myringo-incudopexy"
  },
  {
    id: 149,
    image: "",
    question: "A 16-year-old boy with long-standing ear discharge has a tympanic membrane perforation. During surgery, a chalky white keratinizing mass is found in the middle ear. The surgeon explains that this lesion developed because squamous epithelium from the external auditory canal migrated through the perforation into the middle ear.\nWhich hypothesis best explains this mechanism?",
    options: [
      "Wittmaack theory",
      "Ruedi theory",
      "Habermann’s hypothesis",
      "Sade theory"
    ],
    answerIndex: 2,
    correctAnswerText: "Habermann’s hypothesis"
  },
  {
    id: 150,
    image: "",
    question: "A 19-year-old patient with long-standing foul-smelling ear discharge and attic cholesteatoma is planned for surgery. The surgeon decides to perform a canal wall down mastoidectomy but wants to preserve healthy middle ear structures and avoid unnecessary destruction of normal tissue. The Eustachian tube is not blocked, and the indication is chronic suppurative otitis media, not malignancy.\nWhich operation is most appropriate?",
    options: [
      "Cortical mastoidectomy",
      "Radical mastoidectomy",
      "Combined approach tympanoplasty",
      "Modified radical mastoidectomy"
    ],
    answerIndex: 3,
    correctAnswerText: "Modified radical mastoidectomy"
  },
  {
    id: 151,
    image: "",
    question: "A 12-year-old child with long-standing intermittent ear discharge presents with fever, worsening otalgia, and tenderness behind the ear. On examination, the pinna appears pushed forward and the postauricular region is swollen. Otoscopy shows narrowing due to sagging of the posterosuperior wall of the external auditory canal.\nWhich of the following is the hallmark finding of this complication?",
    options: [
      "Sagging of posterosuperior wall of external auditory canal",
      "Abscess tracking along sternocleidomastoid muscle",
      "Abscess tracking along digastric muscle",
      "Abscess pointing into the external auditory canal"
    ],
    answerIndex: 0,
    correctAnswerText: "Sagging of posterosuperior wall of external auditory canal"
  },
  {
    id: 152,
    image: "",
    question: "A 15-year-old boy with long-standing foul-smelling ear discharge develops high swinging fever with chills and rigors. Fever spikes occur repeatedly, giving a picket fence pattern. Examination shows edema over the mastoid emissary vein region, and contrast imaging later demonstrates an empty delta sign.\nWhich of the following findings is most characteristic of this complication?",
    options: [
      "Sagging of posterosuperior wall of external auditory canal",
      "Pickett fence fever due to septic thrombophlebitis of lateral sinus",
      "Pearly white mass of desquamated epithelial cells in deep meatus",
      "Bilateral multiple bony swellings in external auditory canal"
    ],
    answerIndex: 1,
    correctAnswerText: "Pickett fence fever due to septic thrombophlebitis of lateral sinus"
  },
{
  id: 153,
  image: "",
  question: "A 10-year-old child with congenital external auditory canal atresia has persistent conductive hearing difficulty. Conventional ear mould fitting is difficult because the external canal is absent. The ENT surgeon plans a device in which a titanium implant is fixed in the mastoid bone, connected through an abutment to an external sound processor.\nWhat is the most common complication of this device?",
  options: [
    "Facial nerve palsy",
    "Recurrent cholesteatoma",
    "Skin / soft tissue reaction around the abutment",
    "Perilymph fistula"
  ],
  answerIndex: 2,
  correctAnswerText: "Skin / soft tissue reaction around the abutment"
  },
  {
    id: 154,
    image: "",
    question: "A 3-year-old child with bilateral severe sensorineural hearing loss is planned for a cochlear implant after inadequate benefit from high-power hearing aids. The surgeon explains that the device has an external processor, an internal receiver-stimulator, and an electrode array that bypasses damaged cochlear hair cells to directly stimulate the auditory nerve.\nDuring implantation, the electrode array is ideally placed through which route and into which chamber?",
    options: [
      "Oval window into scala vestibuli",
      "Helicotrema into scala media",
      "Promontory into vestibule",
      "Round window into scala tympani"
    ],
    answerIndex: 3,
    correctAnswerText: "Round window into scala tympani"
  },
  {
    id: 155,
    image: "",
    question: "A 32-year-old patient presents with sudden-onset lower motor neuron facial palsy. The ENT surgeon explains that edema within the narrowest intratemporal part of the facial canal commonly produces compression of the facial nerve in this condition.\nWhich segment of the facial nerve is most likely involved?",
    options: [
      "Labyrinthine segment",
      "Tympanic segment",
      "Mastoid segment",
      "Extratemporal segment"
    ],
    answerIndex: 0,
    correctAnswerText: "Labyrinthine segment"
  },
  {
    id: 156,
    image: "",
    question: "During vestibular schwannoma surgery, the surgeon reaches the fundus of the internal acoustic canal. A small vertical bony partition is identified in the superior compartment. It separates the facial nerve anteriorly from the superior vestibular nerve posteriorly.\nWhich structure is being described?",
    options: [
      "Transverse crest",
      "Bill’s bar",
      "Promontory",
      "Crista ampullaris"
    ],
    answerIndex: 1,
    correctAnswerText: "Bill’s bar"
  },
  {
    id: 157,
    image: "",
    question: "A 29-year-old patient presents with sudden-onset unilateral lower motor neuron facial palsy. There is no history of trauma or ear surgery. He is started on steroids, acyclovir, vitamin B complex, and physiotherapy. After 3 weeks, there is no clinical improvement. Electrophysiological testing of the facial nerve shows significant degeneration.\nWhat is the next appropriate step?",
    options: [
      "Immediate facial nerve decompression within 24 hours",
      "Continue only conservative therapy for 6 more months",
      "Surgical decompression of facial nerve after 3 weeks",
      "Cochlear implant with round window electrode insertion"
    ],
    answerIndex: 2,
    correctAnswerText: "Surgical decompression of facial nerve after 3 weeks"
  },
  {
    id: 158,
    image: "",
    question: "A 38-year-old patient develops vertigo and nystagmus whenever intermittent pressure is applied to the external auditory canal using a pneumatic speculum. However, imaging and operative evaluation show no labyrinthine fistula. The patient is later found to have inner ear pathology with abnormal pressure sensitivity.\nWhat is this finding called?",
    options: [
      "Greisinger sign",
      "Tobey-Ayer sign",
      "Empty delta sign",
      "Hennebert sign"
    ],
    answerIndex: 3,
    correctAnswerText: "Hennebert sign"
  },
  {
    id: 159,
    image: "",
    question: "A 24-year-old patient with episodic vertigo is advised a vestibular function test. During the test, acoustic stimulation is given and the response is recorded from the ipsilateral sternocleidomastoid muscle. The examiner explains that this test mainly assesses the saccule and its pathway through the inferior vestibular nerve.\nWhich of the following is the correct pairing?",
    options: [
      "cVEMP – ipsilateral SCM – inferior vestibular nerve – inhibitory response",
      "cVEMP – extraocular muscle – superior vestibular nerve – excitatory response",
      "oVEMP – ipsilateral SCM – cochlear nerve – inhibitory response",
      "VEMP – investigation of choice for cochlear hair cell function"
    ],
    answerIndex: 0,
    correctAnswerText: "cVEMP – ipsilateral SCM – inferior vestibular nerve – inhibitory response"
  },
  {
    id: 160,
    image: "",
    question: "A 34-year-old patient presents with recurrent vertigo triggered by loud sounds and pressure changes. He complains that noisy surroundings make him extremely uncomfortable. Pure tone audiometry shows an apparent conductive hearing loss, but otoscopy and middle ear evaluation are normal. HRCT temporal bone shows a bony defect over the superior semicircular canal.\nWhat is the most likely diagnosis?",
    options: [
      "Vestibular schwannoma",
      "Superior semicircular canal dehiscence syndrome",
      "Meniere’s disease",
      "Labyrinthitis ossificans"
    ],
    answerIndex: 1,
    correctAnswerText: "Superior semicircular canal dehiscence syndrome"
  },
  {
    id: 161,
    image: "",
    question: "A 46-year-old woman complains of sudden brief episodes of spinning sensation whenever she turns in bed or looks upward. Each episode lasts only for a few seconds and settles spontaneously. There is no hearing loss, no tinnitus, and no neurological deficit. The ENT resident explains that displaced calcium carbonate particles are irritating the posterior semicircular canal.\nWhich of the following is the investigation of choice for confirming this condition?",
    options: [
      "Caloric test",
      "VEMP",
      "Hallpike maneuver",
      "Gadolinium-enhanced MRI"
    ],
    answerIndex: 2,
    correctAnswerText: "Hallpike maneuver"
  },
  {
    id: 162,
    image: "",
    question: "A 9-year-old child develops sudden severe vertigo with nausea and imbalance for the last 2 days. The mother gives a history of upper respiratory tract infection one week earlier. There is no hearing loss, no tinnitus, no ear discharge, and no focal neurological deficit. Symptoms gradually improve with supportive treatment.\nWhat is the most likely diagnosis?",
    options: [
      "Meniere’s disease",
      "Labyrinthitis",
      "Benign paroxysmal positional vertigo",
      "Vestibular neuronitis"
    ],
    answerIndex: 3,
    correctAnswerText: "Vestibular neuronitis"
  },
  {
    id: 163,
    image: "",
    question: "A 42-year-old woman presents with pulsatile tinnitus and progressive conductive hearing loss. Otoscopy shows a reddish-blue pulsatile mass behind the tympanic membrane. When gentle pressure is applied over the tympanic membrane, the mass temporarily blanches.\nWhich sign is being demonstrated?",
    options: [
      "Brown’s sign",
      "Aquino sign",
      "Phelps sign",
      "Rising sun sign"
    ],
    answerIndex: 0,
    correctAnswerText: "Brown’s sign"
  },
  {
    id: 164,
    image: "",
    question: "A 28-year-old man is brought after road traffic trauma with impact over the occipital region. He develops severe facial nerve palsy, intense vertigo, and hearing assessment shows sensorineural hearing loss. Otoscopy shows an intact tympanic membrane, and there is no obvious middle ear bleeding.\nWhich type of temporal bone fracture best explains this presentation?",
    options: [
      "Longitudinal temporal bone fracture",
      "Transverse temporal bone fracture",
      "Zygomatic arch fracture",
      "Nasal bone fracture"
    ],
    answerIndex: 1,
    correctAnswerText: "Transverse temporal bone fracture"
  },
  {
    id: 165,
    image: "",
    question: "During microlaryngeal examination, a surgeon identifies a small paired elastic cartilage lying within the aryepiglottic fold, producing a subtle elevation anterior to the corniculate cartilage. The professor asks the resident to identify the cartilage also known as the cartilage of Wrisberg.\nWhich cartilage is being described?",
    options: [
      "Thyroid cartilage",
      "Arytenoid cartilage",
      "Cuneiform cartilage",
      "Corniculate cartilage"
    ],
    answerIndex: 2,
    correctAnswerText: "Cuneiform cartilage"
  },
  {
    id: 166,
    image: "",
    question: "A 58-year-old chronic smoker is evaluated for a supraglottic growth involving the lower epiglottis. Contrast imaging shows tumor extension into a fat-filled space located below the hyoepiglottic ligament, bounded anteriorly by the hyoid bone, thyrohyoid membrane, and thyroid cartilage, and posteriorly by the infrahyoid epiglottis.\nWhich space is being involved?",
    options: [
      "Vallecula",
      "Pyriform fossa",
      "Paraglottic space",
      "Preepiglottic space"
    ],
    answerIndex: 3,
    correctAnswerText: "Preepiglottic space"
  },
  {
    id: 167,
    image: "",
    question: "A 45-year-old teacher comes to ENT OPD with chronic hoarseness. The surgeon decides to examine the larynx using a warmed laryngeal mirror while the patient is sitting. The tongue is held with the non-dominant hand, and the mirror is held with the dominant hand. No general anesthesia is required.\nWhich of the following statements is most appropriate for this procedure?",
    options: [
      "It is non-invasive and best visualizes the supraglottic segment",
      "It is done in supine position under general anesthesia",
      "It gives the best view of the whole larynx and allows endotracheal intubation",
      "The laryngoscope is held in the left hand and instruments are held in the right hand"
    ],
    answerIndex: 0,
    correctAnswerText: "It is non-invasive and best visualizes the supraglottic segment"
  },
  {
    id: 168,
    image: "",
    question: "A 41-year-old singer presents with chronic throat clearing, foreign body sensation in throat, intermittent hoarseness, and cough. Laryngoscopy shows posterior commissure hypertrophy, subglottic edema, and ventricular obliteration. She has minimal heartburn. The consultant wants to confirm reflux reaching the hypopharynx behind the laryngeal inlet.\nWhich investigation is the gold standard for diagnosis?",
    options: [
      "Barium swallow",
      "Ambulatory 24-hour double-probe pH monitoring",
      "Plain X-ray neck lateral view",
      "Direct laryngoscopy under general anesthesia"
    ],
    answerIndex: 1,
    correctAnswerText: "Ambulatory 24-hour double-probe pH monitoring"
  },
  {
    id: 169,
    image: "",
    question: "A neonate is brought with abnormal weak cry and episodes of biphasic dyspnea since birth. Flexible laryngoscopy shows a thin membrane involving the glottic area, attached at the anterior commissure. The child has severe hoarseness with moderate dyspnea, but the voice is not completely lost.\nAccording to Cohen classification, which grade is most likely?",
    options: [
      "Grade I",
      "Grade II",
      "Grade III",
      "Grade IV"
    ],
    answerIndex: 2,
    correctAnswerText: "Grade III"
  },
  {
    id: 170,
    image: "",
    question: "A 56-year-old chronic smoker presents with persistent hoarseness. Flexible laryngoscopy shows a small exophytic lesion limited to one true vocal cord with preserved cord mobility. Biopsy confirms squamous cell carcinoma. There is no cartilage invasion, no nodal disease, and the lesion is staged as early glottic carcinoma.\nWhat is the preferred first-line treatment?",
    options: [
      "Total laryngectomy followed by radiotherapy",
      "Concurrent chemoradiation with cisplatin and 5-fluorouracil",
      "Horizontal partial laryngectomy",
      "Radiotherapy"
    ],
    answerIndex: 3,
    correctAnswerText: "Radiotherapy"
  },
  {
    id: 171,
    image: "",
    question: "A 39-year-old woman develops hoarseness after thyroid surgery. Laryngoscopy shows one vocal cord lying close to the midline in a median to paramedian position. The consultant explains that the cord does not fall into a fully lateral cadaveric position because the cricothyroid muscle is still functioning.\nWhich law explains this vocal cord position?",
    options: [
      "Wagner-Grossman law",
      "Boyle’s law",
      "Bell’s law",
      "Weber’s law"
    ],
    answerIndex: 0,
    correctAnswerText: "Wagner-Grossman law"
  },
  {
    id: 172,
    image: "",
    question: "A 48-year-old man with chronic cough, weight loss, and evening rise of temperature presents with gradually progressive weakness of voice. Laryngoscopy shows hyperemia and irregular ulceration in the posterior part of the glottis, giving a mouse-nibbled appearance. The clinician suspects laryngeal involvement by tuberculosis.\nWhich is the most common site of laryngeal involvement in this condition?",
    options: [
      "Epiglottis",
      "Posterior commissure",
      "Anterior commissure",
      "Subglottis"
    ],
    answerIndex: 1,
    correctAnswerText: "Posterior commissure"
  },
  {
    id: 173,
    image: "",
    question: "A 62-year-old man underwent tracheostomy for prolonged pulmonary ventilation. On the 12th postoperative day, the tracheostomy tube accidentally comes out while shifting the patient. The patient is stable, maintaining oxygen saturation, and there is no respiratory distress. The junior resident panics and calls it an airway emergency.\nWhich of the following is the most appropriate statement?",
    options: [
      "Decannulation is always an emergency irrespective of duration",
      "Tracheostomy tract forms within 24 hours after surgery",
      "Decannulation after 10 days is usually not an emergency because a mature tract has formed",
      "Tracheostomy should never be done for pulmonary toilet"
    ],
    answerIndex: 2,
    correctAnswerText: "Decannulation after 10 days is usually not an emergency because a mature tract has formed"
  },
  {
    id: 174,
    image: "",
    question: "A 52-year-old chronic smoker presents with gradually progressive deep hoarse voice. Laryngoscopy shows bilateral diffuse, boggy, polypoidal swelling of the true vocal cords, giving a ballooned appearance. There is no ulceroproliferative growth or neck node. The surgeon plans definitive treatment for this benign vocal cord lesion.\nWhat is the most appropriate treatment?",
    options: [
      "Antitubercular therapy",
      "Radiotherapy",
      "Oral antibiotics with voice rest only",
      "Microlaryngeal stripping"
    ],
    answerIndex: 3,
    correctAnswerText: "Microlaryngeal stripping"
  },
  {
    id: 175,
    image: "",
    question: "A 16-year-old boy is brought by his parents because his voice has remained unusually high-pitched even after puberty. He is emotionally dependent, anxious, and has a history of overprotective parenting. Laryngeal examination is normal, but during phonation the vocal cords remain excessively tense. No structural lesion is identified.\nWhich of the following is the most appropriate management?",
    options: [
      "Psychotherapy with speech therapy",
      "Microlaryngeal stripping",
      "Radiotherapy",
      "Antitubercular therapy"
    ],
    answerIndex: 0,
    correctAnswerText: "Psychotherapy with speech therapy"
  },
  {
    id: 176,
    image: "",
    question: "A 7-year-old child presents with gradually progressive hoarseness and intermittent breathing difficulty. Laryngoscopy shows multiple wart-like lesions arising near the anterior commissure. The lesions are recurrent, and the causative virus is suspected to be a low-risk HPV type.\nWhich of the following is the treatment of choice?",
    options: [
      "Cidofovir injection",
      "CO₂ laser excision",
      "Radiotherapy",
      "Antitubercular therapy"
    ],
    answerIndex: 1,
    correctAnswerText: "CO₂ laser excision"
  },
  {
    id: 177,
    image: "",
    question: "A 2-year-old child is brought with low-grade fever, inspiratory stridor, hoarseness, and a harsh barking cough. The child is not toxic-looking and has gradually worsening respiratory symptoms. X-ray neck shows tapering of the subglottic airway resembling a church steeple.\nWhich of the following is the most likely diagnosis and radiological sign?",
    options: [
      "Acute epiglottitis – Thumb sign on lateral view",
      "Retropharyngeal abscess – Widened prevertebral shadow",
      "Laryngotracheobronchitis – Steeple sign on AP view",
      "Foreign body aspiration – Hyperinflation on expiratory film"
    ],
    answerIndex: 2,
    correctAnswerText: "Laryngotracheobronchitis – Steeple sign on AP view"
  },
  {
    id: 178,
    image: "",
    question: "A 55-year-old diabetic man presents with rapidly progressive woody swelling below the chin, fever, dysphagia, raised floor of mouth, and difficulty in tongue movement. History reveals recent infection of a lower molar tooth. The surgeon explains that the infection entered the submandibular region because of the relation of the tooth root to the mylohyoid muscle.\nWhich anatomical explanation is most appropriate?",
    options: [
      "Premolar roots lie below mylohyoid and cause submandibular abscess",
      "Mylohyoid muscle divides the parapharyngeal space into upper and lower compartments",
      "Molar roots lie above mylohyoid and cause isolated sublingual abscess",
      "Molar roots lie below mylohyoid and infection spreads to submaxillary space"
    ],
    answerIndex: 3,
    correctAnswerText: "Molar roots lie below mylohyoid and infection spreads to submaxillary space"
  },
  {
    id: 179,
    image: "",
    question: "A 10-year-old child with recurrent tonsillitis is planned for tonsillectomy. After induction of anesthesia, the surgeon asks the assistant to position the child so that the tonsillar bed becomes better exposed by extension of the neck.\nWhich position is classically used during tonsillectomy?",
    options: [
      "Rose position",
      "Trendelenburg position",
      "Fowler position",
      "Lithotomy position"
    ],
    answerIndex: 0,
    correctAnswerText: "Rose position"
  },
  {
    id: 180,
    image: "",
    question: "A 12-year-old child underwent tonsillectomy for recurrent tonsillitis. On the 6th postoperative day, he develops fresh bleeding from the tonsillar fossa with fever and foul breath. There was no bleeding on the operation table or during the first 24 hours.\nWhich of the following best explains this complication?",
    options: [
      "Primary hemorrhage due to vessel injury, treated by ligation of vessel",
      "Secondary hemorrhage due to infection, treated with intravenous antibiotics",
      "Reactionary hemorrhage due to ligature slippage, treated only by observation",
      "Grisel’s syndrome due to C1-C2 subluxation, treated by vessel ligation"
    ],
    answerIndex: 1,
    correctAnswerText: "Secondary hemorrhage due to infection, treated with intravenous antibiotics"
  }
];

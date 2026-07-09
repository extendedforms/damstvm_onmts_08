// Format: { id, image, question, options[], answerIndex, correctAnswerText }
window.questions = [
  {
    id: 1,
    image: "",
    question: "A researcher is analyzing the association between smoking (yes/no) and lung cancer (yes/no) in a case-control study. What is the degree of freedom for this data table?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answerIndex: 0,
    correctAnswerText: "1"
  },
  {
    id: 2,
    image: "",
    question: "A 45-year-old man undergoes a novel screening test for a severe disease, and the result comes back normal. However, a subsequent biopsy, which is the gold standard, confirms the presence of the disease. What does the initial screening test result represent, and why is it considered the most dangerous outcome?",
    options: [
      "False Positive",
      "False Negative",
      "True Negative",
      "True Positive"
    ],
    answerIndex: 1,
    correctAnswerText: "False Negative"
  },
  {
    id: 3,
    image: "",
    question: "A 50-year-old man tests positive on a newly introduced prostate cancer screening test. He anxiously asks his physician, \"Doctor, since my test result is positive, what are the actual chances that I have prostate cancer?\" Which of the following epidemiological parameters is the physician trying to explain to the patient?",
    options: [
      "Sensitivity",
      "Specificity",
      "Positive Predictive Value",
      "Positive Likelihood Ratio"
    ],
    answerIndex: 2,
    correctAnswerText: "Positive Predictive Value"
  },
  {
    id: 4,
    image: "",
    question: "A new rapid diagnostic test for a respiratory virus is deployed in two different regions. Region X is currently experiencing a severe outbreak of the virus, while Region Y has nearly eradicated it. Which of the following parameters of this diagnostic test will remain exactly the same in both regions regardless of the outbreak status?",
    options: [
      "Positive Predictive Value",
      "Negative Predictive Value",
      "Post-test probability",
      "Specificity"
    ],
    answerIndex: 3,
    correctAnswerText: "Specificity"
  },
  {
    id: 5,
    image: "",
    question: "A hospital protocol for evaluating presumptive tuberculosis requires patients to first undergo a sputum smear. Only those who test positive on the smear proceed to get a chest X-ray. What is the overall effect of this sequential testing strategy on diagnostic parameters compared to using a single test?",
    options: [
      "Decreased sensitivity and increased specificity",
      "Increased sensitivity and decreased specificity",
      "Increased sensitivity and increased specificity",
      "Decreased specificity and decreased predictive value"
    ],
    answerIndex: 0,
    correctAnswerText: "Decreased sensitivity and increased specificity"
  },
  {
    id: 6,
    image: "",
    question: "A patient is diagnosed with pancreatic cancer through a novel screening program 8 months earlier than the usual clinical presentation. Despite aggressive early treatment, his overall age at death remains exactly the same as historical controls. Which phenomenon explains this false impression of increased survival time?",
    options: [
      "Length bias",
      "Lead time bias",
      "Volunteer bias",
      "Overdiagnosis bias"
    ],
    answerIndex: 1,
    correctAnswerText: "Lead time bias"
  },
  {
    id: 7,
    image: "",
    question: "According to the Wilson Jungner criteria, a disease must have a latent or early asymptomatic phase to be eligible for a screening program. Which of the following infectious diseases lacks this phase and therefore does NOT exhibit the \"Iceberg Phenomenon\"?",
    options: [
      "Poliomyelitis",
      "Tuberculosis",
      "Rabies",
      "Hepatitis B"
    ],
    answerIndex: 2,
    correctAnswerText: "Rabies"
  },
  {
    id: 8,
    image: "",
    question: "A health department is introducing a newly developed screening test for a highly fatal, treatable infectious disease. To maximize its screening utility, the researchers intentionally set the diagnostic cutoff value at a very low level. What is the primary epidemiological effect of this adjustment?",
    options: [
      "Decreases Sensitivity",
      "Decreases False Positives",
      "Increases Specificity",
      "Decreases False Negatives"
    ],
    answerIndex: 3,
    correctAnswerText: "Decreases False Negatives"
  },
  {
    id: 9,
    image: "",
    question: "A researcher records the hospital stay duration (in days) for 50 patients post-appendectomy. Most patients are discharged within 2 to 4 days, but three patients suffered severe complications and stayed for 28, 32, and 45 days respectively. Which measure of central tendency is the most preferred to accurately summarize this dataset?",
    options: [
      "Median",
      "Arithmetic Mean",
      "Mode",
      "Geometric Mean"
    ],
    answerIndex: 0,
    correctAnswerText: "Median"
  },
  {
    id: 10,
    image: "",
    question: "A researcher is evaluating a cohort of metabolic syndrome patients and wants to compare the variability of their fasting blood sugar (measured in mg/dL) with their systolic blood pressure (measured in mmHg). Which statistical tool is the most appropriate to compare the dispersion of these two dissimilar variables?",
    options: [
      "Standard Error of Mean",
      "Coefficient of Variation",
      "Standard Deviation",
      "Z-score"
    ],
    answerIndex: 1,
    correctAnswerText: "Coefficient of Variation"
  },
  {
    id: 11,
    image: "",
    question: "The birth weights of full-term neonates in a community follow a perfect Normal (Gaussian) distribution with a mean of 3.0 kg and a standard deviation (SD) of 0.4 kg. If a pediatrician wants to define the normal clinical reference range for this population covering weights exactly between 2.2 kg and 3.8 kg, what percentage of the neonates will fall into this category?",
    options: [
      "68%",
      "84%",
      "95%",
      "99%"
    ],
    answerIndex: 2,
    correctAnswerText: "95%"
  },
  {
    id: 12,
    image: "",
    question: "A public health researcher analyzes the age of onset for a specific neurodegenerative disease. The data shows that the vast majority of patients develop symptoms in their late 70s, but a few rare genetic cases present in early childhood. This creates a frequency curve with a long tail extending toward the lower ages. Which of the following correctly represents the relationship between the measures of central tendency in this dataset?",
    options: [
      "Mean = Median = Mode",
      "Mode < Median < Mean",
      "Mean = Median ≠ Mode",
      "Mean < Median < Mode"
    ],
    answerIndex: 3,
    correctAnswerText: "Mean < Median < Mode"
  },
  {
    id: 13,
    image: "",
    question: "An ICU resident records a patient's heart rate as 85 beats/min and systolic blood pressure as 120 mmHg. In biostatistics, how are these specific clinical variables classified based on their underlying measurement scales?",
    options: [
      "Heart rate is discrete; Blood pressure is continuous",
      "Heart rate is continuous; Blood pressure is discrete",
      "Both are discrete variables",
      "Both are continuous variables"
    ],
    answerIndex: 0,
    correctAnswerText: "Heart rate is discrete; Blood pressure is continuous"
  },
  {
    id: 14,
    image: "",
    question: "A physician evaluates postoperative pain in patients using a standard Visual Analogue Scale (VAS) graded from 0 to 10. Which scale of measurement does this represent, and what is the appropriate measure of central tendency to summarize this data?",
    options: [
      "Nominal scale; Mode",
      "Ordinal scale; Median",
      "Interval scale; Mean",
      "Ratio scale; Mean"
    ],
    answerIndex: 1,
    correctAnswerText: "Ordinal scale; Median"
  },
  {
    id: 15,
    image: "",
    question: "A researcher is plotting the hemoglobin levels (measured in g/dL) of 500 pregnant women attending an antenatal clinic. Which graphical representation is the most appropriate for displaying this specific dataset?",
    options: [
      "Simple bar diagram",
      "Spot map",
      "Histogram",
      "Scatter diagram"
    ],
    answerIndex: 2,
    correctAnswerText: "Histogram"
  },
  {
    id: 16,
    image: "",
    question: "A public health official is plotting the cumulative number of vaccinated individuals across different age groups. She constructs a graph by joining the end points of each class interval from her data table. She notices that the resulting curve only moves upwards and never slopes down. Which graphical representation has she created?",
    options: [
      "Histogram",
      "Line diagram",
      "Frequency polygon",
      "Ogive"
    ],
    answerIndex: 3,
    correctAnswerText: "Ogive"
  },
  {
    id: 17,
    image: "",
    question: "A researcher is investigating a novel environmental exposure and its link to a specific cancer. After extensive studies meeting the Doll-Hill criteria, definitive causation is established. Based on the fundamental epidemiological hierarchy, which of the following statements must be unconditionally true?",
    options: [
      "A statistical association is definitely present",
      "The independent variable was plotted on the Y-axis",
      "The established association guarantees this causation",
      "The causation was established solely using a p-value"
    ],
    answerIndex: 0,
    correctAnswerText: "A statistical association is definitely present"
  },
  {
    id: 18,
    image: "",
    question: "In a study analyzing the effect of a specific antihypertensive drug dosage (x) on systolic blood pressure (y), a linear regression model yields a perfectly negative relationship. If the equation is represented as y = mx + c and the slope (m) equals -1, which of the following is the correct mathematical interpretation?",
    options: [
      "A 1 unit increase in x leads to a 1 unit increase in y",
      "A 1 unit increase in x leads to a 1 unit decrease in y",
      "The drug dosage (x) is the dependent variable plotted on the Y-axis",
      "The blood pressure (y) can represent multiple variables simultaneously"
    ],
    answerIndex: 1,
    correctAnswerText: "A 1 unit increase in x leads to a 1 unit decrease in y"
  },
  {
    id: 19,
    image: "",
    question: "An epidemiologist is investigating a severe cholera outbreak in a rural district. To convince the local, predominantly illiterate villagers to avoid a specific contaminated well, he decides to visually present the geographical clustering of the affected cases. Which of the following diagrams is most appropriate for this purpose?",
    options: [
      "Pictogram",
      "Venn diagram",
      "Spot map",
      "Tree diagram"
    ],
    answerIndex: 2,
    correctAnswerText: "Spot map"
  },
  {
    id: 20,
    image: "",
    question: "A biostatistician evaluates the post-operative ICU stay duration for a specific cohort of surgical patients. When the data is plotted on a Box and Whisker plot, the visual output shows a much longer whisker extending to the right side of the box. What does this graphical representation indicate about the underlying data distribution?",
    options: [
      "It represents a normal Gaussian distribution",
      "The central line (Q2) represents the arithmetic mean",
      "It is a negatively skewed distribution",
      "It is a positively skewed distribution"
    ],
    answerIndex: 3,
    correctAnswerText: "It is a positively skewed distribution"
  },
  {
    id: 21,
    image: "",
    question: "A clinician has collected the resting heart rates of 60 patients. The raw data consists of unorganized two-digit numbers, making it tedious to arrange and find the exact middle value manually. Which graphical representation is specifically utilized to organize such data when it is difficult to calculate the median?",
    options: [
      "Stem and leaf plot",
      "Box and whisker plot",
      "Cumulative frequency ogive",
      "Frequency polygon"
    ],
    answerIndex: 0,
    correctAnswerText: "Stem and leaf plot"
  },
  {
    id: 22,
    image: "",
    question: "The probability of a person suffering from a specific disease in a community is 0.2. What is the total probability that three completely unrelated, randomly selected individuals from this community will all suffer from this disease?",
    options: [
      "0.6",
      "0.008",
      "0.08",
      "0.002"
    ],
    answerIndex: 1,
    correctAnswerText: "0.008"
  },
  {
    id: 23,
    image: "",
    question: "A medical officer is tasked with conducting a cross-sectional study to estimate the prevalence of a newly discovered cutaneous manifestation in a rural population. Because this is the first study of its kind in the region, there is absolutely no prior literature or data regarding its prevalence. What assumed prevalence (p) should the officer input into the formula n=(4pq)/d2 to calculate the required sample size?",
    options: [
      "1%",
      "5%",
      "50%",
      "100%"
    ],
    answerIndex: 2,
    correctAnswerText: "50%"
  },
  {
    id: 24,
    image: "",
    question: "A medical researcher is studying the prevalence of a specific adverse drug reaction in a busy outpatient department. The clinic registers 500 patients daily, and the researcher needs a sample of 50. He randomly selects the 7th patient of the morning, and thereafter systematically selects every 10th patient who registers (17th, 27th, 37th, etc.). Which sampling technique is being utilized in this study?",
    options: [
      "Simple random sampling",
      "Stratified random sampling",
      "Cluster random sampling",
      "Systematic random sampling"
    ],
    answerIndex: 3,
    correctAnswerText: "Systematic random sampling"
  },
  {
    id: 25,
    image: "",
    question: "A video shows a researcher calculating a 95% Confidence Interval for a sample mean. Which formula represents the correct mathematical limit?",
    options: [
      "Mean ± 1.96 Standard Deviations",
      "Mean ± 2 Standard Errors",
      "Mean ± 3 Standard Errors",
      "Mean ± 1.96 Standard Errors"
    ],
    answerIndex: 1,
    correctAnswerText: "Mean ± 2 Standard Errors"
  },
  {
    id: 26,
    image: "",
    question: "An epidemiologist calculates the mean fasting blood sugar from a sample of 100 diabetic patients. To extrapolate these findings and establish the 95% confidence interval for the true mean of the entire diabetic population, which mathematical limits must be applied?",
    options: [
      "Mean ± 2 Standard Errors",
      "Mean ± 2 Standard Deviations",
      "Mean ± 1 Standard Error",
      "Mean ± 3 Standard Deviations"
    ],
    answerIndex: 0,
    correctAnswerText: "Mean ± 2 Standard Errors"
  },
  {
    id: 27,
    image: "",
    question: "A systematic review evaluates the efficacy of five different interventions for a specific disease. The results are displayed on a standard forest plot. Trial B exhibits the widest horizontal confidence interval line among all the plotted studies. Assuming all other variables are constant, what does this wide interval definitively indicate about Trial B?",
    options: [
      "It has the maximum statistical significance",
      "It has the minimum sample size",
      "It represents a strong protective factor",
      "Its results are statistically insignificant"
    ],
    answerIndex: 1,
    correctAnswerText: "It has the minimum sample size"
  },
  {
    id: 28,
    image: "",
    question: "A researcher is comparing the mean weight gain among three separate groups of participants, each placed on a completely different experimental diet plan. Which statistical test is the most appropriate to analyze this data?",
    options: [
      "Chi-square test",
      "Paired t-test",
      "ANOVA",
      "Unpaired t-test"
    ],
    answerIndex: 2,
    correctAnswerText: "ANOVA"
  },
  {
    id: 29,
    image: "",
    question: "A clinical trial compares the efficacy of Drug X and Drug Y for hypertension. The researcher sets the alpha error cutoff at 0.05. After statistical analysis, the calculated p-value is determined to be 0.02. What is the correct interpretation of this study's result?",
    options: [
      "The results are statistically insignificant",
      "The Null hypothesis is true",
      "Both drugs have the exact same efficacy",
      "The Alternate hypothesis is true"
    ],
    answerIndex: 3,
    correctAnswerText: "The Alternate hypothesis is true"
  },
  {
    id: 30,
    image: "",
    question: "A newly purchased automated digital blood pressure monitor consistently reads 150/90 mmHg for a specific patient across five consecutive measurements. However, a simultaneous check with a standard mercury sphygmomanometer confirms the patient's true blood pressure is actually 110/70 mmHg. How is the performance of the digital monitor best described epidemiologically?",
    options: [
      "Reliable but not valid",
      "Valid but not reliable",
      "Both valid and reliable",
      "Neither valid nor reliable"
    ],
    answerIndex: 0,
    correctAnswerText: "Reliable but not valid"
  },
  {
    id: 31,
    image: "",
    question: "A principal investigator of a cardiovascular drug trial decides to drastically increase the study's participant pool from 500 to 5,000 individuals to optimize the data. Which type of epidemiological error is specifically minimized by this action, and which overall parameter of the study does it enhance?",
    options: [
      "Systematic error; enhancing validity",
      "Random error; enhancing reliability",
      "Systematic error; enhancing reliability",
      "Random error; enhancing validity"
    ],
    answerIndex: 1,
    correctAnswerText: "Random error; enhancing reliability"
  },
  {
    id: 32,
    image: "",
    question: "In a randomized controlled trial comparing a new surgical technique to the standard procedure, patients and the surgeons performing the surgery are unaware of which technique is being used. A separate team of researchers independently assesses the postoperative outcomes without knowing which group the patient was assigned to. What is the primary purpose of this blinding strategy?",
    options: [
      "Remove selection bias",
      "Remove interviewer bias",
      "Make groups comparable at baseline",
      "Increase external validity"
    ],
    answerIndex: 1,
    correctAnswerText: "Remove interviewer bias"
  },
  {
    id: 33,
    image: "",
    question: "A researcher is investigating the association between a new experimental diet and the incidence of myocardial infarction. After all the participant data has been collected, the researcher realizes that baseline physical exercise is a major third factor affecting the outcome. Which of the following techniques is most appropriate to control for this third factor at this current stage of the study?",
    options: [
      "Stratification",
      "Randomization",
      "Matching",
      "Restriction"
    ],
    answerIndex: 0,
    correctAnswerText: "Stratification"
  },
  {
    id: 34,
    image: "",
    question: "A medical officer records 50 deaths among 200 patients infected with a novel virus. When formally reporting the Case Fatality \"Rate\" (CFR) for this outbreak, how is this epidemiological indicator strictly classified, and what is its standard multiplication factor?",
    options: [
      "True rate; factor of 1000",
      "Proportion; factor of 100",
      "Ratio; factor of 100,000",
      "True rate; factor of 100"
    ],
    answerIndex: 1,
    correctAnswerText: "Proportion; factor of 100"
  },
  {
    id: 35,
    image: "",
    question: "A novel therapy is introduced for a previously fatal autoimmune condition. The drug successfully prevents mortality and significantly prolongs patient survival, but it does not cure the disease or prevent new cases from occurring. What is the expected long-term epidemiological impact of this specific drug?",
    options: [
      "Incidence decreases; Prevalence increases",
      "Incidence and Prevalence both decrease",
      "Incidence has no impact; Prevalence increases",
      "Incidence increases; Prevalence decreases"
    ],
    answerIndex: 2,
    correctAnswerText: "Incidence has no impact; Prevalence increases"
  },
  {
    id: 36,
    image: "",
    question: "A state health department is analyzing mortality data. They want to measure the clinical virulence (killing power) of a newly emerged viral strain, and simultaneously determine the true burden of this specific viral disease on the community's overall mortality. Which of the following pairs of indicators is most appropriate for these two specific purposes respectively?",
    options: [
      "Crude Death Rate and Specific Death Rate",
      "Proportional Mortality Rate and Case Fatality Rate",
      "Specific Death Rate and Crude Death Rate",
      "Case Fatality Rate and Proportional Mortality Rate"
    ],
    answerIndex: 3,
    correctAnswerText: "Case Fatality Rate and Proportional Mortality Rate"
  },
  {
    id: 37,
    image: "",
    question: "An occupational health physician calculates the Standardized Mortality Ratio (SMR) for coal miners using the indirect standardization method. The calculated SMR is 135. What is the correct interpretation of this finding?",
    options: [
      "The occupation poses a significant health hazard",
      "The occupation has a protective health effect",
      "The age-specific death rates of the miners are fully known",
      "The mortality is exactly equal to the standard population"
    ],
    answerIndex: 0,
    correctAnswerText: "The occupation poses a significant health hazard"
  },
  {
    id: 38,
    image: "",
    question: "A researcher wants to graphically display and simultaneously compare the varying proportions of mild, moderate, and severe anemia across three different pregnant cohorts. Which specific diagram is most suitable for visualizing this subgroup comparison?",
    options: [
      "Simple bar diagram",
      "Component bar diagram",
      "Scatter diagram",
      "Histogram"
    ],
    answerIndex: 1,
    correctAnswerText: "Component bar diagram"
  },
  {
    id: 39,
    image: "",
    video: "images/handhygiene.mov",
    question: "A physician applies a solution containing 75% isopropyl alcohol and 0.5% chlorhexidine gluconate to unsoiled hands, rubbing them vigorously for 20 seconds immediately prior to palpating a patient's abdomen in the general ward as shown in the video. Although the chemical agents utilized in this solution are capable of rapidly denaturing cellular proteins and disrupting the lipid envelopes of numerous pathogenic viruses, according to standard WHO infection prevention and control guidelines, this specific procedural action is officially classified as which of the following?",
    options: [
      "Sterilization",
      "Disinfection",
      "Hand hygiene",
      "Biomedical disposal"
    ],
    answerIndex: 2,
    correctAnswerText: "Hand hygiene"
  },
  {
    id: 40,
    image: "",
    question: "A biostatistician plots the age distribution of a specific infectious disease. The resulting curve shows two distinct, equally high peaks representing outbreaks in young children and the elderly. Which of the following equations holds true regarding its measures of central tendency?",
    options: [
      "Mean < Median < Mode",
      "Mean = Median = Mode",
      "Mode < Median < Mean",
      "Mean = Median ≠ Mode"
    ],
    answerIndex: 3,
    correctAnswerText: "Mean = Median ≠ Mode"
  },
  {
    id: 41,
    image: "",
    question: "A public health researcher investigates the correlation between the per capita trans-fat consumption and the incidence of coronary artery disease across 40 different countries worldwide. In this specific epidemiological study, what is the fundamental unit of observation?",
    options: [
      "Entire populations",
      "Individual patients",
      "High-risk communities",
      "Matched patient cohorts"
    ],
    answerIndex: 0,
    correctAnswerText: "Entire populations"
  },
  {
    id: 42,
    image: "",
    question: "A global health report reveals that nations with higher per capita meat consumption have higher national rates of colon cancer. Reading this, a medical student concludes that a specific strict vegetarian patient migrating from one of those high-meat consuming countries must also be at an increased risk of colon cancer. Which epidemiological concept represents the logical error made by the student?",
    options: [
      "Confounding bias",
      "Selection bias",
      "Recall bias",
      "Ecological fallacy"
    ],
    answerIndex: 3,
    correctAnswerText: "Ecological fallacy"
  },
  {
    id: 43,
    image: "",
    question: "An occupational physician uses a factory's 10-year-old employment logs to group past workers into those exposed and unexposed to a specific industrial solvent. He then reviews their subsequent medical records up to the present day to determine the incidence of peripheral neuropathy in both groups. By the time this study begins, both the exposure and the disease have already occurred. Which study design is this?",
    options: [
      "Retrospective cohort study",
      "Case-control study",
      "Ambispective cohort study",
      "Prospective cohort study"
    ],
    answerIndex: 0,
    correctAnswerText: "Retrospective cohort study"
  },
  {
    id: 44,
    image: "",
    question: "A public health expert is evaluating the causality of a newly identified multifactorial syndrome using the classic Doll and Hill framework. Which of the following criteria is considered the weakest and is widely regarded as the primary limitation of this causal model?",
    options: [
      "Temporality",
      "Specificity",
      "Dose-response relationship",
      "Consistency"
    ],
    answerIndex: 1,
    correctAnswerText: "Specificity"
  },
  {
    id: 45,
    image: "",
    question: "A public health expert is evaluating the causality of a newly identified multifactorial syndrome using the classic Doll and Hill framework. Which of the following criteria is considered the weakest and is widely regarded as the primary limitation of this causal model?",
    options: [
      "Temporality",
      "Specificity",
      "Dose-response relationship",
      "Consistency"
    ],
    answerIndex: 1,
    correctAnswerText: "Specificity"
  },
  {
    id: 46,
    image: "",
    question: "A researcher is conducting a long-term prospective study on 10,000 healthy individuals to identify novel biomarkers for a rare cancer. Blood samples are drawn and frozen at baseline. After 5 years, 50 participants develop the cancer. For each newly diagnosed case, the researcher immediately selects two healthy participants from the same cohort who are at the exact same time of follow-up. The frozen blood samples of these specific individuals are then analyzed. What type of study design is this?",
    options: [
      "Nested case-control study",
      "Case cohort study",
      "Retrospective cohort study",
      "Traditional case-control study"
    ],
    answerIndex: 0,
    correctAnswerText: "Nested case-control study"
  },
  {
    id: 47,
    image: "",
    question: "A global health committee is evaluating a developing region's standard of living by calculating its Physical Quality of Life Index (PQLI). Which of the following parameters is explicitly excluded from the calculation of PQLI, despite being a core component of the Human Development Index (HDI)?",
    options: [
      "Infant mortality rate",
      "Per capita income",
      "Basic literacy rate",
      "Life expectancy at age one"
    ],
    answerIndex: 1,
    correctAnswerText: "Per capita income"
  },
  {
    id: 48,
    image: "",
    question: "A mechanic sustains a severe crush injury resulting in the traumatic amputation of his right hand. Because he can no longer hold heavy tools, he subsequently loses his job and struggles to financially support his family. According to the standard WHO sequence, what does the loss of his job specifically represent?",
    options: [
      "Impairment",
      "Disability",
      "Handicap",
      "Disease"
    ],
    answerIndex: 2,
    correctAnswerText: "Handicap"
  },
  {
    id: 49,
    image: "",
    question: "A national health ministry is tasked with comprehensively evaluating the impact of morbidity and mortality within its population to optimally allocate future medical funding. They require a single metric that represents the most accurate summary of the population's overall health. Which of the following indices is currently considered the best overall indicator of disease burden?",
    options: [
      "Sullivan Index (DFLE)",
      "Quality Adjusted Life Years (QALY)",
      "Disability Adjusted Life Years (DALY)",
      "Healthy Adjusted Life Expectancy (HALE)"
    ],
    answerIndex: 3,
    correctAnswerText: "Healthy Adjusted Life Expectancy (HALE)"
  },
  {
    id: 50,
    image: "",
    question: "A newly appointed health administrator reviews the annual statistics of a tertiary care public hospital and notes a consistently \"Negative\" bed turnover interval. What does this specific metric indicate about the facility's inpatient wards?",
    options: [
      "Overutilization with more than 100% occupancy",
      "Underutilization with numerous empty beds",
      "Exceptionally high patient mortality rates",
      "Perfect equilibrium of admissions and discharges"
    ],
    answerIndex: 0,
    correctAnswerText: "Overutilization with more than 100% occupancy"
  },
  {
    id: 51,
    image: "",
    question: "A 40-year-old normotensive, apparently healthy male visits a clinic for a routine wellness check. The physician counsels him to actively restrict his daily dietary salt intake to prevent the future onset of hypertension. According to the epidemiological levels of prevention, how is this specific intervention classified?",
    options: [
      "Primordial prevention",
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention"
    ],
    answerIndex: 1,
    correctAnswerText: "Primary prevention"
  },
  {
    id: 52,
    image: "",
    question: "A medical officer is planning a mass screening program for central adiposity in a highly diverse community. To streamline the process, he wants to utilize a single anthropometric marker with a universal cut-off that does not require separate reference charts for males and females or different age groups. Which of the following indicators is the best choice?",
    options: [
      "Quetelet index",
      "Waist-hip ratio",
      "Waist-height ratio",
      "Harpenden skinfold thickness"
    ],
    answerIndex: 2,
    correctAnswerText: "Waist-height ratio"
  },
  {
    id: 53,
    image: "",
    question: "A 42-year-old asymptomatic female visits a primary health center for a routine wellness checkup. According to the standard national preventive oncology guidelines, what is the most appropriate breast cancer screening protocol for this patient?",
    options: [
      "Monthly self-breast examination and 3-yearly clinical examination",
      "3-yearly clinical examination and 3-yearly mammography",
      "Yearly self-breast examination and yearly clinical examination",
      "Monthly self-breast examination, yearly clinical examination, and yearly mammography"
    ],
    answerIndex: 3,
    correctAnswerText: "Monthly self-breast examination, yearly clinical examination, and yearly mammography"
  },
  {
    id: 54,
    image: "",
    question: "A 55-year-old chronic smoker presents with oral mucosal lesions. During cessation counseling, he asks about the specific chemicals responsible for his addiction versus those causing cancer. Which of the following components of his cigarette smoke is strictly non-carcinogenic?",
    options: [
      "Nicotine",
      "Polynuclear aromatic hydrocarbon",
      "Aromatic amine",
      "Nitrosoamine"
    ],
    answerIndex: 0,
    correctAnswerText: "Nicotine"
  },
  {
    id: 55,
    image: "",
    question: "A 10-year-old boy is evaluated at a pediatric clinic and is found to have a blood pressure consistently in the 95th percentile for his age and height. The pediatrician counsels the parents that without lifestyle interventions, the child is highly likely to remain hypertensive throughout his adulthood. Which epidemiological concept best describes this predictable trajectory?",
    options: [
      "Rule of Halves",
      "Tracking Phenomenon",
      "Iceberg Phenomenon",
      "Lead-time bias"
    ],
    answerIndex: 1,
    correctAnswerText: "Tracking Phenomenon"
  },
  {
    id: 56,
    image: "",
    question: "A national demographer is evaluating whether a country's population will successfully replace itself in the next generation. Which of the following fertility indicators is strictly considered the best overall index because it specifically adjusts for female mortality and life expectancy?",
    options: [
      "Total Fertility Rate",
      "Gross Reproduction Rate",
      "Net Reproduction Rate",
      "General Fertility Rate"
    ],
    answerIndex: 2,
    correctAnswerText: "Net Reproduction Rate"
  },
  {
    id: 57,
    image: "",
    question: "A developing nation has recently experienced a rapid decline in its crude death rate due to improved public health and sanitation, while its crude birth rate remains consistently high. This resulting disparity has led to an explosive population growth rate. According to the standard demographic transition cycle, this country is currently in which stage?",
    options: [
      "Stage I",
      "Stage II",
      "Stage III",
      "Stage IV"
    ],
    answerIndex: 1,
    correctAnswerText: "Stage II"
  },
  {
    id: 58,
    image: "",
    question: "A public health official is analyzing the methodology behind India's Sample Registration System (SRS) to understand how it ensures high-quality vital event data. Which of the following best describes the core operational mechanism of the SRS?",
    options: [
      "Dual record system with continuous counting and periodic cross-checks",
      "Passive registration system based solely on hospital records",
      "Complete house-to-house enumeration conducted every ten years",
      "Voluntary reporting system maintained by local village heads"
    ],
    answerIndex: 0,
    correctAnswerText: "Dual record system with continuous counting and periodic cross-checks"
  },
  {
    id: 59,
    image: "",
    question: "A pregnant patient at 28 weeks of gestation presents to the district hospital for a routine checkup. According to the current WHO recommended minimum Antenatal Care (ANC) model, this scheduled appointment constitutes which visit number?",
    options: [
      "First visit",
      "Second visit",
      "Third visit",
      "Fourth visit"
    ],
    answerIndex: 2,
    correctAnswerText: "Third visit"
  },
  {
    id: 60,
    image: "",
    question: "A 20-week pregnant female attends her routine antenatal checkup. Her current hemoglobin level is 10.5 g/dL. According to the national guidelines for Iron and Folic Acid (IFA) supplementation, what is the correct daily dosing regimen for this patient?",
    options: [
      "One tablet OD",
      "One tablet BD",
      "Two tablets BD",
      "One tablet weekly"
    ],
    answerIndex: 1,
    correctAnswerText: "One tablet BD"
  },
  {
    id: 61,
    image: "",
    question: "A 28-year-old female dies 30 days after a complicated vaginal delivery due to severe postpartum hemorrhage. In the context of public health surveillance, which statement accurately classifies this mortality?",
    options: [
      "Included as Maternal Mortality",
      "Excluded as it occurred post-delivery",
      "Excluded due to obstetric cause",
      "Included only if death occurred in the hospital"
    ],
    answerIndex: 0,
    correctAnswerText: "Included as Maternal Mortality"
  },
  {
    id: 62,
    image: "",
    question: "In the standard epidemiological classification of mortality, which of the following time windows defines the \"Early Neonatal\" period?",
    options: [
      "From birth up to 7 completed days of life",
      "From birth up to 28 completed days of life",
      "From 7 days up to 28 days of life",
      "From 28 weeks of gestation up to 7 days of life"
    ],
    answerIndex: 0,
    correctAnswerText: "From birth up to 7 completed days of life"
  },
  {
    id: 63,
    image: "",
    question: "A public health analyst is reviewing the recent Government of India mortality data to prioritize pediatric health interventions in a rural district. According to the most recent data on the leading causes of mortality in the infant age group, which of the following is the most significant contributor?",
    options: [
      "Prematurity and Low Birth Weight (PM & LBW)",
      "Pneumonia",
      "Birth Asphyxia and Birth Trauma (BA & BT)",
      "Diarrhea"
    ],
    answerIndex: 0,
    correctAnswerText: "Prematurity and Low Birth Weight (PM & LBW)"
  },
  {
    id: 64,
    image: "",
    question: "A neonate is born at a district hospital with a birth weight of 2.2 kg and no clinical signs of acute illness. According to national guidelines, what is the primary eligibility criteria regarding birth weight for initiating Kangaroo Mother Care (KMC)?",
    options: [
      "Less than 2.5 kg",
      "Less than 1.5 kg",
      "Less than 1.8 kg",
      "Less than 1.0 kg"
    ],
    answerIndex: 0,
    correctAnswerText: "Less than 2.5 kg"
  },
  {
    id: 65,
    image: "images/muac.mov",
    question: "A 2-year-old child is screened at a community health camp using Shakir’s tape to assess mid-upper arm circumference (MUAC). The tape shows a reading of 9.0 cm. According to the standard color-coded classification, what is the appropriate management for this child?",
    options: [
      "Home management",
      "OPD management",
      "Admission in Nutritional Rehabilitation Center (NRC)",
      "Immediate intravenous fluid resuscitation"
    ],
    answerIndex: 2,
    correctAnswerText: "Admission in Nutritional Rehabilitation Center (NRC)"
  },
  {
    id: 66,
    image: "",
    question: "A newly established Health and Wellness Centre - Sub Health Centre (HWC-SHC) requires specific staffing to function according to national guidelines. Which of the following accurately represents the mandatory staff composition required at an HWC-SHC?",
    options: [
      "1 Community Health Officer (CHO), 1 MPW (Male), and 1 MPW (Female)",
      "1 Medical Officer (MO), 1 MPW (Male), and 1 Staff Nurse (SN)",
      "1 Community Health Officer (CHO), 1 Staff Nurse (SN), and 1 MPW (Male)",
      "1 Medical Officer (MO), 1 MPW (Male), and 1 MPW (Female)"
    ],
    answerIndex: 0,
    correctAnswerText: "1 Community Health Officer (CHO), 1 MPW (Male), and 1 MPW (Female)"
  },
  {
    id: 67,
    image: "",
    question: "A public health administrator is evaluating the categorization of rural Sub-centres to determine service delivery capacity based on updated IPHS standards. A Sub-centre that is authorized to perform labor and delivery services is classified under which category?",
    options: [
      "Type A",
      "Type B",
      "Primary Health Centre (PHC)",
      "Community Health Centre (CHC)"
    ],
    answerIndex: 1,
    correctAnswerText: "Type B"
  },
  {
    id: 68,
    image: "",
    question: "A lactating mother in the first 6 months postpartum visits the clinic for dietary advice. According to the updated 2024 National Institute of Nutrition (NIN) guidelines, which of the following nutrients has a significantly higher additional daily requirement during the first 6 months of lactation compared to the requirements during pregnancy?",
    options: [
      "Folate",
      "Calcium",
      "Iron",
      "Protein"
    ],
    answerIndex: 1,
    correctAnswerText: "Calcium"
  },
  {
    id: 69,
    image: "images/IMG_9425.jpeg",
    question: "A 30-year-old male farmer from Chhattisgarh presents with a spastic gait and requires a stick for ambulation. He reports a long-term dietary habit of consuming Arhar Dal, which was likely adulterated with Khesari Dal. Which toxin is responsible for this clinical presentation?",
    options: [
      "BOAA (Boxalyl amino alanine)",
      "Sanguinarine",
      "Pyrrolizidine",
      "Aflatoxin"
    ],
    answerIndex: 0,
    correctAnswerText: "BOAA (Boxalyl amino alanine)"
  },
  {
    id: 70,
    image: "images/IMG_9426.jpeg",
    question: "A public health laboratory is investigating an outbreak of suspected Epidemic Dropsy linked to contaminated mustard oil. To confirm the presence of the causative toxin, Sanguinarine, in the oil samples, which diagnostic method is recognized as the most sensitive?",
    options: [
      "Paper chromatography using nitric acid",
      "Physical sensory evaluation",
      "Simple filtration and sieving",
      "Salt solution density test"
    ],
    answerIndex: 0,
    correctAnswerText: "Paper chromatography using nitric acid"
  },
  {
    id: 71,
    image: "images/IMG_9428.jpeg",
    question: "A patient from a region heavily dependent on millet consumption presents with rapidly developing abdominal distension and diagnostic findings confirming hepatic damage. The public health investigation reveals the presence of Crotolaria (jhunjhunia) seeds in the local millet supply. Which hepatotoxic toxin is responsible for this condition?",
    options: [
      "Pyrrolizidine",
      "Aflatoxin",
      "Clavine",
      "Sanguinarine"
    ],
    answerIndex: 0,
    correctAnswerText: "Pyrrolizidine"
  },
  {
    id: 72,
    image: "images/IMG_9431.jpeg",
    question: "A group of villagers presents with acute abdominal cramps and pain after consuming a batch of contaminated bajra. A field investigation suspects Ergotism caused by Claviceps fusiformis. Which simple field test is used to detect this contaminant in the grain supply?",
    options: [
      "Floating in 20% salt solution",
      "Paper chromatography with nitric acid",
      "Filtration and sieving",
      "Microscopic observation of grain texture"
    ],
    answerIndex: 0,
    correctAnswerText: "Floating in 20% salt solution"
  },
  {
    id: 73,
    image: "",
    question: "A quality control officer is checking the iodine content of salt samples collected from a manufacturing unit versus those collected from household consumption. According to national iodine deficiency control standards, what is the required amount of iodine at the production level?",
    options: [
      "15 ppm",
      "30 ppm",
      "40 ppm",
      "100 ppm"
    ],
    answerIndex: 1,
    correctAnswerText: "30 ppm"
  },
  {
    id: 74,
    image: "",
    question: "A public health team is implementing a community-based de-fluoridation program in a region with high fluoride levels in the groundwater. Which of the following is the standard, widely used domestic de-fluoridation method that involves the sequential addition of lime and alum?",
    options: [
      "Nalgonda technique",
      "Reverse osmosis",
      "Ion exchange method",
      "Bone charcoal method"
    ],
    answerIndex: 0,
    correctAnswerText: "Nalgonda technique"
  },
  {
    id: 75,
    image: "",
    question: "In the established criteria for a 'Reference Indian Human', a healthy female is defined within a specific age range and weight to standardize dietary and physiological recommendations. What are these standardized parameters for a female?",
    options: [
      "19–39 years and 65 kg",
      "13–39 years and 55 kg",
      "19–39 years and 55 kg",
      "13–39 years and 65 kg"
    ],
    answerIndex: 1,
    correctAnswerText: "13–39 years and 55 kg"
  },
  {
    id: 76,
    image: "images/dpd.mov",
    question: "A video shows a health worker checking free residual chlorine in drinking water. Which kit is used?",
    options: [
      "DPD kit",
      "Hardness kit",
      "Fluoride kit",
      "Turbidity meter"
    ],
    answerIndex: 0,
    correctAnswerText: "DPD kit"
  },
  {
    id: 77,
    image: "",
    question: "In hospital lighting design, an administrator needs to measure the amount of light reaching a specific work surface to ensure optimal visibility. Which unit of measurement should be used for this purpose?",
    options: [
      "Lumen",
      "Lux",
      "Candela",
      "Lambert"
    ],
    answerIndex: 1,
    correctAnswerText: "Lux"
  },
  {
    id: 78,
    image: "images/IMG_9434.jpeg",
    question: "An environmental health officer is tasked with assessing the thermal comfort within a factory setting, specifically to measure the cooling power of air in an area with low wind velocity. Which instrument is specifically designed for this purpose?",
    options: [
      "Kata thermometer",
      "Anemometer",
      "Psychrometer",
      "Globe thermometer"
    ],
    answerIndex: 0,
    correctAnswerText: "Kata thermometer"
  },
  {
    id: 79,
    image: "",
    question: "An environmental scientist is analyzing the atmospheric composition to determine the primary contributors to the greenhouse effect causing global warming. Which of the following is identified as the greenhouse gas present in the highest concentration in the atmosphere that contributes to the greenhouse effect?",
    options: [
      "Water vapors",
      "Carbon dioxide",
      "Ozone",
      "Chlorofluorocarbons (CFC)"
    ],
    answerIndex: 0,
    correctAnswerText: "Water vapors"
  },
  {
    id: 80,
    image: "images/gambusia.mov",
    question: "A short video shows small fish released into a pond to control mosquito breeding. Which biological control method is shown?",
    options: [
      "Gambusia fish",
      "DDT spraying",
      "Temephos",
      "Pyrethrum spray"
    ],
    answerIndex: 0,
    correctAnswerText: "Gambusia fish"
  },
  {
    id: 81,
    image: "images/IMG_9435.jpeg",
    question: "A public health entomologist identifies a mosquito specimen based on its morphological and behavioral characteristics. Which of the following features is uniquely characteristic of the Anopheles mosquito?",
    options: [
      "Sits at an angle to the resting surface",
      "Lays eggs in rafts",
      "Prefers polluted water for breeding",
      "Lays eggs with lateral floats"
    ],
    answerIndex: 0,
    correctAnswerText: "Sits at an angle to the resting surface"
  },
  {
    id: 82,
    image: "images/IMG_9436.jpeg",
    question: "A patient in an endemic region presents with acute fever, severe joint pain, and a maculopapular rash. Epidemiological findings suggest the vector breeds primarily in artificial water collections and lays single, boat-shaped eggs. Which mosquito is the most likely vector?",
    options: [
      "Aedes",
      "Culex",
      "Mansonoides",
      "Anopheles"
    ],
    answerIndex: 0,
    correctAnswerText: "Aedes"
  },
  {
    id: 83,
    image: "images/IMG_9437.jpeg",
    question: "A community health survey is conducted in a rural area experiencing an outbreak of Japanese encephalitis. Image of the primary vector is given below. Which specific breeding environment should the health team target to successfully control the primary vector responsible for this outbreak?",
    options: [
      "Dirty/polluted water",
      "Aquatic plants",
      "Artificial water collections",
      "Clean running water"
    ],
    answerIndex: 0,
    correctAnswerText: "Dirty/polluted water"
  },
  {
    id: 84,
    image: "images/IMG_9456.jpeg",
    question: "A 45-year-old male presents with characteristic subcutaneous nodules, skin depigmentation, and progressive visual impairment leading to \"river blindness.\" Which vector is responsible for transmitting the causative parasite of this condition?",
    options: [
      "Sandfly",
      "Black fly",
      "Reduviid bug",
      "Trombiculid mite"
    ],
    answerIndex: 1,
    correctAnswerText: "Black fly"
  },
  {
    id: 85,
    image: "images/IMG_9441.jpeg",
    question: "A patient presents with high fever, lymphadenopathy, and a history of handling rodents in an endemic region. Laboratory analysis confirms Yersinia pestis infection. Which vector is responsible for transmitting this disease?",
    options: [
      "Rat flea",
      "Soft tick",
      "Hard tick",
      "Housefly"
    ],
    answerIndex: 0,
    correctAnswerText: "Rat flea"
  },
  {
    id: 86,
    image: "images/whitecontainer.mov",
    question: "A video shows a white translucent puncture-proof container used for biomedical waste disposal. Which item should be discarded in it?",
    options: [
      "Syringe without needle",
      "Blood bag",
      "Glass vial",
      "Sharp needles"
    ],
    answerIndex: 3,
    correctAnswerText: "Sharp needles"
  },
  {
    id: 87,
    image: "",
    question: "A national health program manager is assessing the long-term effectiveness of a public health initiative after its completion. According to the classification of evaluation, which type of evaluation is focused on determining these long-term results?",
    options: [
      "Process evaluation",
      "Impact evaluation",
      "Outcome evaluation",
      "Monitoring"
    ],
    answerIndex: 2,
    correctAnswerText: "Outcome evaluation"
  },
  {
    id: 88,
    image: "",
    question: "A hospital administrator is using network analysis to streamline a complex clinical process. In the Critical Path Method (CPM), what is the defining characteristic of the 'critical path' that must be monitored closely to avoid project delay?",
    options: [
      "The longest path in the network",
      "The shortest path in the network",
      "The path with the most activities",
      "The path with the fewest dependencies"
    ],
    answerIndex: 0,
    correctAnswerText: "The longest path in the network"
  },
  {
    id: 89,
    image: "",
    question: "In a study evaluating the economic impact of two different public health interventions, the researcher expresses both the costs and the outcomes in monetary units to determine which program provides the highest return. Which type of economic evaluation is being utilized?",
    options: [
      "Cost Utility Analysis (CUA)",
      "Cost Benefit Analysis (CBA)",
      "Cost Minimization Analysis (CMA)",
      "Cost Effective Analysis (CEA)"
    ],
    answerIndex: 1,
    correctAnswerText: "Cost Benefit Analysis (CBA)"
  },
  {
    id: 90,
    image: "",
    question: "A cultural anthropologist is studying the social dynamics in a region where individuals from two distinct cultural backgrounds have begun to extensively share customs and habits due to frequent intermarriage and shared educational environments. This phenomenon is best defined as:",
    options: [
      "Acculturation",
      "Custom",
      "Opinion",
      "Belief"
    ],
    answerIndex: 0,
    correctAnswerText: "Acculturation"
  },
  {
    id: 91,
    image: "",
    question: "A medical officer is evaluating the socio-economic status of an urban household using the Modified Kuppuswamy Scale. While education and occupation are assessed specifically for the head of the household, which parameter is calculated for the unit as a whole?",
    options: [
      "Occupation",
      "Income",
      "Education",
      "Land ownership"
    ],
    answerIndex: 1,
    correctAnswerText: "Income"
  },
  {
    id: 92,
    image: "",
    question: "A medical relief team establishes a health camp for local victims displaced by a severe cyclone. While planning the emergency immunization schedule, which of the following vaccines is routinely not recommended for the victims?",
    options: [
      "Measles",
      "Rotavirus",
      "Cholera",
      "Chickenpox"
    ],
    answerIndex: 2,
    correctAnswerText: "Cholera"
  },
  {
    id: 93,
    image: "",
    question: "A medical officer is updating the legal health registry for an industrial plant. According to the provisions of the Factories Act 1948, which of the following respiratory conditions is explicitly exempt from being a notifiable disease?",
    options: [
      "Silicosis",
      "Asbestosis",
      "Anthracosis",
      "Bagassosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Bagassosis"
  },
  {
    id: 94,
    image: "images/IMG_9442.jpeg",
    question: "A 45-year-old agricultural worker presents with a chronic cough and progressive dyspnea. His occupational history reveals long-term exposure to mouldy hay in the barns. Chest XRay is given below. Which of the following is the most likely causative agent for his respiratory condition?",
    options: [
      "Micropolyspora",
      "Thermoactinomyces",
      "Aspergillus",
      "Silica"
    ],
    answerIndex: 0,
    correctAnswerText: "Micropolyspora"
  },
  {
    id: 95,
    image: "",
    question: "A medical officer organizing a community immunization drive faces strong resistance from a local population group. The group refuses vaccination, citing deep-rooted community beliefs and social norms. In the context of health communication, this resistance represents which type of barrier?",
    options: [
      "Semantic barrier",
      "Cultural barrier",
      "Physiological barrier",
      "Environmental barrier"
    ],
    answerIndex: 1,
    correctAnswerText: "Cultural barrier"
  },
  {
    id: 96,
    image: "",
    question: "A medical college organizes an event where four renowned cardiologists present their individual research findings on heart failure to an audience of postgraduate students. Each expert speaks one after the other in a predefined order. They do not interact or debate with one another during their presentations. Which communication method is being utilized?",
    options: [
      "Focused Group Discussion",
      "Panel Discussion",
      "Symposium",
      "Workshop"
    ],
    answerIndex: 2,
    correctAnswerText: "Symposium"
  },
  {
    id: 97,
    image: "images/IMG_9443.jpeg",
    question: "A 40-year-old refugee living in a crowded, unhygienic camp presents with a severe headache, high fever, and a macular rash. He is clinically diagnosed with Epidemic Typhus. Which of the following vectors is specifically responsible for the transmission of this condition?",
    options: [
      "Human body louse",
      "Tse-tse fly",
      "Reduviid bug",
      "Black fly"
    ],
    answerIndex: 0,
    correctAnswerText: "Human body louse"
  },
  {
    id: 98,
    image: "",
    question: "A newly appointed medical officer is taking charge of an Urban Primary Health Centre (U-PHC) established under the National Urban Health Mission (NUHM). While reviewing the facility's operational guidelines, she notes several differences from her previous rural posting. Which of the following is a true characteristic of this urban facility?",
    options: [
      "Inpatient department (IPD) services are absent",
      "It functions on a 3-tier health delivery system",
      "The standard OPD timing is from 9 AM to 4 PM",
      "It serves a baseline population of 30,000"
    ],
    answerIndex: 0,
    correctAnswerText: "Inpatient department (IPD) services are absent"
  },
  {
    id: 99,
    image: "",
    question: "A district health administrator is upgrading a rural health facility to provide Comprehensive Emergency Obstetric Care (CEmOC) under the RMNCHA+N program. Which of the following specific services MUST be added to their existing basic services to achieve this classification?",
    options: [
      "Intravenous Magnesium Sulphate",
      "Blood transfusion facilities",
      "Manual removal of placenta",
      "Usage of ventouse/forceps"
    ],
    answerIndex: 1,
    correctAnswerText: "Blood transfusion facilities"
  },
  {
    id: 100,
    image: "",
    question: "A 26-year-old BPL primigravida is admitted to a district hospital in a High Performing State (HPS). Due to fetal distress, she undergoes an emergency Lower Segment Caesarean Section (LSCS). Under the Janani Suraksha Yojana (JSY), what is the specific cash assistance she is entitled to receive for this delivery?",
    options: [
      "Rs 500/-",
      "Rs 700/-",
      "Rs 1500/-",
      "Rs 1400/-"
    ],
    answerIndex: 2,
    correctAnswerText: "Rs 1500/-"
  },
  {
    id: 101,
    image: "",
    question: "A pregnant woman is admitted to a district hospital and undergoes an uncomplicated normal vaginal delivery (NVD). Under the Janani Shishu Suraksha Karyakram (JSSK) scheme, for how many days is she entitled to receive a free diet at the health facility?",
    options: [
      "7 days",
      "42 days",
      "1 day",
      "3 days"
    ],
    answerIndex: 3,
    correctAnswerText: "3 days"
  },
  {
    id: 102,
    image: "",
    question: "Under the Anemia Mukt Bharat strategy, which prophylactic Iron and Folic Acid (IFA) preparation is strictly indicated for a 7-year-old school-going child?",
    options: [
      "Pink tablet (45 mg Iron + 400 mcg FA)",
      "Blue tablet (60 mg Iron + 500 mcg FA)",
      "Red tablet (60 mg Iron + 500 mcg FA)",
      "Liquid drops (20 mg Iron + 100 mcg FA)"
    ],
    answerIndex: 0,
    correctAnswerText: "Pink tablet (45 mg Iron + 400 mcg FA)"
  },
  {
    id: 103,
    image: "",
    question: "A 4-month-old infant evaluated by a peripheral health worker is classified into the 'Pink' category according to the Integrated Management of Neonatal and Childhood Illness (IMNCI) guidelines. What is the most appropriate next step in management?",
    options: [
      "Initiate Outpatient Department (OPD) based treatment",
      "Administer injection gentamicin and refer urgently",
      "Advise home-based care with symptomatic relief",
      "Prescribe oral amoxicillin and review after 2 days"
    ],
    answerIndex: 1,
    correctAnswerText: "Administer injection gentamicin and refer urgently"
  },
  {
    id: 104,
    image: "",
    question: "A mother registers her 2-year-old toddler at a local Anganwadi center. Under the Integrated Child Development Services (ICDS) scheme, which of the following core interventions is specifically excluded for a child of this age?",
    options: [
      "Supplementary Nutrition",
      "Immunization",
      "Non-formal Education",
      "Referral Services"
    ],
    answerIndex: 2,
    correctAnswerText: "Non-formal Education"
  },
  {
    id: 105,
    image: "",
    question: "A 12-year-old girl studying in the 7th standard presents to a school health clinic with generalized fatigue. While assessing her dietary intake, the medical officer notes she relies primarily on the PM POSHAN (Mid-Day Meal) scheme at her school. What is the mandated daily protein provision for her specific class group (Upper Primary)?",
    options: [
      "12 grams",
      "15 grams",
      "18 grams",
      "20 grams"
    ],
    answerIndex: 3,
    correctAnswerText: "20 grams"
  },
  {
    id: 106,
    image: "",
    question: "A female employee covered under the Employees State Insurance (ESI) scheme undergoes a tubectomy procedure. Based on ESI benefit guidelines, for how many days is she entitled to receive enhanced sickness benefit at 100% of her wage?",
    options: [
      "7 days",
      "14 days",
      "91 days",
      "730 days"
    ],
    answerIndex: 1,
    correctAnswerText: "14 days"
  },
  {
    id: 107,
    image: "",
    question: "A pregnant woman in a rural village regularly receives 60 to 90-second pre-recorded voice messages on her mobile phone. These messages provide essential maternal and childcare advice in her local language. Which of the following digital health initiatives delivers this specific service?",
    options: [
      "ANMOL",
      "TELEMANAS",
      "Kilkari",
      "Mera Aspaatal"
    ],
    answerIndex: 2,
    correctAnswerText: "Kilkari"
  },
  {
    id: 108,
    image: "",
    question: "A patient is diagnosed with Japanese Encephalitis following a mosquito bite in an endemic agricultural zone. In the natural transmission cycle of this viral infection, humans serve as which specific type of host?",
    options: [
      "Definitive host",
      "Intermediate host",
      "Obligate host",
      "Dead-end host"
    ],
    answerIndex: 3,
    correctAnswerText: "Dead-end host"
  },
  {
    id: 109,
    image: "",
    question: "A district health officer observes a constant, year-round presence of measles in a specific community. The disease exclusively affects the pediatric age group, while adults are entirely spared. This pattern of disease occurrence is best classified as:",
    options: [
      "Holoendemic",
      "Hyperendemic",
      "Epidemic",
      "Pandemic"
    ],
    answerIndex: 0,
    correctAnswerText: "Holoendemic"
  },
  {
    id: 110,
    image: "",
    question: "An epidemiologist plots a disease outbreak on a graph. The epidemic curve demonstrates a rapid rise in cases followed by a rapid fall. All recorded cases cluster strictly within a single incubation period, and there are absolutely no secondary waves. Which of the following is the most likely scenario for this outbreak?",
    options: [
      "A commercial sex worker spreading an STD over months",
      "Food poisoning among guests at a single wedding reception",
      "Community transmission of COVID-19 during winter",
      "The rising national incidence of Type 2 Diabetes"
    ],
    answerIndex: 1,
    correctAnswerText: "Food poisoning among guests at a single wedding reception"
  },
  {
    id: 111,
    image: "images/IMG_9444.jpeg",
    question: "A researcher studying the transmission cycle of Trypanosoma cruzi observes that the infection transmits from infected reservoir animals to humans, and concurrently from infected humans back to susceptible animals. This bidirectional pattern of disease transmission is best classified as:",
    options: [
      "Anthropozoonoses",
      "Zoo-anthroponoses",
      "Amphixenosis",
      "Exotic transmission"
    ],
    answerIndex: 2,
    correctAnswerText: "Amphixenosis"
  },
  {
    id: 112,
    image: "",
    question: "An apparently healthy traveler returning from a Yellow Fever endemic zone is detained at the airport health desk. This preventive separation (Quarantine) must strictly be maintained for which of the following standard epidemiological durations?",
    options: [
      "For the entire period of communicability",
      "Until the onset of clinical symptoms",
      "Throughout the period of infectivity",
      "For one maximum incubation period"
    ],
    answerIndex: 3,
    correctAnswerText: "For one maximum incubation period"
  },
  {
    id: 113,
    image: "",
    question: "Following an outbreak of Hepatitis A in a densely populated student hostel, local health authorities institute strict control measures. After the last reported case is isolated, what is the standard epidemiological duration the authorities must wait before officially declaring the hostel area free of the epidemic?",
    options: [
      "Twice the maximum incubation period",
      "Once the maximum incubation period",
      "The entire period of communicability",
      "Until the first diagnosis of the secondary case"
    ],
    answerIndex: 0,
    correctAnswerText: "Twice the maximum incubation period"
  },
  {
    id: 114,
    image: "",
    question: "A family of 6, none of whom are vaccinated or previously exposed, faces a varicella outbreak. One child develops the disease first (index case). Within the next maximum incubation period, two more siblings develop the rash. When calculating the Secondary Attack Rate (SAR) for this household, what is the exact denominator to use?",
    options: [
      "6",
      "5",
      "3",
      "2"
    ],
    answerIndex: 1,
    correctAnswerText: "5"
  },
  {
    id: 115,
    image: "",
    question: "A 5-year-old unvaccinated boy develops a maculopapular rash starting behind the ears, clinically diagnosed as Measles. To prevent community transmission, for how many days after the onset of the rash must he be strictly isolated?",
    options: [
      "3 days",
      "5 days",
      "7 days",
      "Until lesions crust"
    ],
    answerIndex: 2,
    correctAnswerText: "7 days"
  },
  {
    id: 116,
    image: "",
    question: "A susceptible pregnant woman is evaluated in the outpatient department after being exposed to a nephew with active varicella lesions. To provide effective post-exposure prophylaxis, Varicella Zoster Immunoglobulin (VZIg) must be administered within what maximum timeframe after this exposure?",
    options: [
      "24 hours",
      "48 hours",
      "96 hours",
      "72 hours"
    ],
    answerIndex: 3,
    correctAnswerText: "72 hours"
  },
  {
    id: 117,
    image: "",
    question: "A 7-year-old child, fully immunized against Diphtheria as per the national schedule, is identified as a close contact of a confirmed Diphtheria case. According to standard preventive guidelines, what is the most appropriate management plan for this child?",
    options: [
      "Erythromycin prophylaxis alone",
      "Erythromycin and a booster dT dose",
      "Daily throat swab and Erythromycin",
      "Full course of Diphtheria vaccine"
    ],
    answerIndex: 1,
    correctAnswerText: "Erythromycin and a booster dT dose"
  },
  {
    id: 118,
    image: "",
    question: "A chronic typhoid carrier is identified during a public health survey. What is the standard duration of antibiotic therapy recommended to eradicate the carrier state?",
    options: [
      "2 weeks",
      "4 weeks",
      "6 weeks",
      "8 weeks"
    ],
    answerIndex: 2,
    correctAnswerText: "6 weeks"
  },
  {
    id: 119,
    image: "",
    question: "A patient presents with a severe category III bite wound from a stray dog. What is the calculated appropriate dose of Equine Rabies Immunoglobulin (ERIG) for this patient?",
    options: [
      "20 IU/kg",
      "10 IU/kg",
      "30 IU/kg",
      "40 IU/kg"
    ],
    answerIndex: 3,
    correctAnswerText: "40 IU/kg"
  },
  {
    id: 120,
    image: "",
    question: "A businessman receives the Yellow Fever vaccine (17D strain) prior to international travel. According to current health regulations, when does his International Certificate of Vaccination become officially valid, and what is its maximum duration of validity?",
    options: [
      "From the 10th day; Life long",
      "From the 7th day; 10 years",
      "From the 14th day; Life long",
      "From the 10th day; 10 years"
    ],
    answerIndex: 0,
    correctAnswerText: "From the 10th day; Life long"
  },
  {
    id: 121,
    image: "",
    question: "A medical officer is supervising an outreach immunization session. A healthcare worker is preparing to administer the live attenuated Measles-Rubella (MR) vaccine. Which specific diluent must strictly be utilized to reconstitute this vaccine prior to administration?",
    options: [
      "Sodium chloride",
      "Phosphate buffer",
      "Sterile water",
      "Ringer's lactate"
    ],
    answerIndex: 1,
    correctAnswerText: "Phosphate buffer"
  },
  {
    id: 122,
    image: "",
    question: "A 14-week-old infant is brought to the Primary Health Centre for routine vaccination. The staff prepares to administer the Inactivated Polio Vaccine (IPV). What is the correct standard dose and route for this specific vaccine according to the National Immunization Schedule?",
    options: [
      "0.5 ml Intramuscular",
      "0.5 ml Intradermal",
      "0.1 ml Intradermal",
      "0.1 ml Subcutaneous"
    ],
    answerIndex: 2,
    correctAnswerText: "0.1 ml Intradermal"
  },
  {
    id: 123,
    image: "",
    question: "A full-term neonate is delivered at a community health centre. The nursing staff prepares to administer the initial round of immunizations as mandated by the National Immunization Schedule (NIS). Which of the following statements represents a correct principle regarding these birth doses?",
    options: [
      "The 'zero' doses are officially counted toward the completion of the primary series",
      "The OPV-0 dose must strictly be administered within 24 hours of birth",
      "The BCG vaccine is given primarily to prevent adult-type pulmonary tuberculosis",
      "The Hepatitis B-0 dose must strictly be administered within 24 hours of birth"
    ],
    answerIndex: 3,
    correctAnswerText: "The Hepatitis B-0 dose must strictly be administered within 24 hours of birth"
  },
  {
    id: 124,
    image: "",
    question: "A 6-year-old completely unimmunized child is brought to a rural health camp by his parents. The medical officer is planning a catch-up vaccination schedule. Based on the maximum age cutoffs under the National Immunization Schedule (NIS), which of the following vaccines is indicated for this child?",
    options: [
      "DPT",
      "Oral Polio Vaccine (OPV)",
      "Measles-Rubella (MR)",
      "Japanese Encephalitis (JE)"
    ],
    answerIndex: 0,
    correctAnswerText: "DPT"
  },
  {
    id: 125,
    image: "images/icelinerefrigerator.MOV",
    question: "A video shows a PHC cold-chain unit storing all vaccines in a top-opening cabinet maintaining +2°C to +8°C, even during power cuts. Which equipment is shown?",
    options: [
      "Deep freezer",
      "Cold box",
      "Walk-in cooler",
      "Ice lined refrigerator"
    ],
    answerIndex: 3,
    correctAnswerText: "Ice lined refrigerator"
  },
  {
    id: 126,
    image: "",
    question: "During an immunization outreach session, a health worker retrieves a standard conditioned ice pack from the vaccine carrier. This specific ice pack features two depressions or \"holes\" molded onto its surface. Which two vaccines are strictly designed to be kept in these holes during the active session?",
    options: [
      "Oral Polio Vaccine and Rotavirus",
      "Hepatitis B and Pentavalent",
      "Measles-Rubella (MR) and BCG",
      "Japanese Encephalitis and IPV"
    ],
    answerIndex: 2,
    correctAnswerText: "Measles-Rubella (MR) and BCG"
  },
  {
    id: 127,
    image: "",
    question: "A cold chain failure at a primary health centre accidentally freezes all stored vaccines inside the equipment. According to immunization guidelines, which of the following vaccines remains completely viable after freezing and should NOT be discarded?",
    options: [
      "Hepatitis B",
      "Pentavalent",
      "DPT",
      "Oral Polio Vaccine"
    ],
    answerIndex: 3,
    correctAnswerText: "Oral Polio Vaccine"
  },
  {
    id: 128,
    image: "",
    question: "A mother brings her infant to the emergency room, reporting continuous, inconsolable crying for the past 4 hours following his routine morning immunizations. Which specific vaccine component is most likely responsible for this adverse event?",
    options: [
      "Pertussis",
      "Hepatitis B",
      "Measles",
      "Tetanus toxoid"
    ],
    answerIndex: 0,
    correctAnswerText: "Pertussis"
  },
  {
    id: 129,
    image: "",
    question: "A 24-year-old primigravida at 8 weeks of gestation presents with high-grade fever and chills. A peripheral blood smear confirms infection with Plasmodium falciparum. According to the national malaria control guidelines, what is the most appropriate treatment for this patient?",
    options: [
      "Artemether-Lumefantrine (ACT-AL)",
      "Oral Quinine therapy",
      "Chloroquine and Primaquine",
      "Artesunate-Sulfadoxine-Pyrimethamine (ACT-SP)"
    ],
    answerIndex: 1,
    correctAnswerText: "Oral Quinine therapy"
  },
  {
    id: 130,
    image: "",
    question: "A district health officer is tasked with evaluating the success of a newly implemented malaria vector control program. To specifically determine if there is any recent transmission of malaria occurring in the locality, which of the following indices is the most sensitive indicator to measure?",
    options: [
      "Annual Parasitic Incidence (API)",
      "Annual Blood Examination Rate (ABER)",
      "Infant Parasite Rate",
      "Spleen Rate"
    ],
    answerIndex: 2,
    correctAnswerText: "Infant Parasite Rate"
  },
  {
    id: 131,
    image: "",
    question: "A 15-month-old child residing in a highly endemic district is scheduled to receive the newly introduced Japanese Encephalitis (JE) vaccine (JENVAC strain) under the national program. What is the correct nature and route of administration for this newer vaccine formulation?",
    options: [
      "Live attenuated, Subcutaneous",
      "Killed, Subcutaneous",
      "Live attenuated, Intramuscular",
      "Killed, Intramuscular"
    ],
    answerIndex: 3,
    correctAnswerText: "Killed, Intramuscular"
  },
  {
    id: 132,
    image: "",
    question: "A medical officer is supervising a community Mass Drug Administration (MDA) campaign to interrupt the transmission of Lymphatic Filariasis. The team is distributing the standard triple-drug regimen (DEC + Ivermectin + Albendazole). During the house-to-house drive, which of the following individuals must strictly be excluded from receiving this annual prophylaxis?",
    options: [
      "A 24-year-old pregnant woman",
      "A 50-year-old male with active lymphedema",
      "A 3-year-old child attending a local preschool",
      "A 65-year-old man with controlled hypertension"
    ],
    answerIndex: 0,
    correctAnswerText: "A 24-year-old pregnant woman"
  },
  {
    id: 133,
    image: "images/IMG_9445.jpeg",
    question: "A 38-year-old male from an endemic region presents with a 2-month history of irregular fever, progressive weight loss, and massive splenomegaly. A rapid diagnostic kit (RDK) test is positive for the rK39 antigen. What is the current recommended drug of choice (DOC) to initiate treatment for this patient?",
    options: [
      "Oral Miltefosine",
      "Intravenous Liposomal Amphotericin B",
      "Intravenous Sodium Stibogluconate",
      "Oral Pyrethrum"
    ],
    answerIndex: 1,
    correctAnswerText: "Intravenous Liposomal Amphotericin B"
  },
  {
    id: 134,
    image: "",
    question: "An 8-year-old child presents with sudden onset floppiness of the right lower limb, diagnosed as Acute Flaccid Paralysis (AFP). According to the national surveillance guidelines, which of the  following is the correct protocol for stool sample transport?",
    options: [
      "2 samples collected 48 hours apart",
      "Collected in a container with a chemical preservative",
      "Transported via reverse cold chain at +2 to +8°C",
      "Transported in a blue vaccine carrier"
    ],
    answerIndex: 2,
    correctAnswerText: "Transported via reverse cold chain at +2 to +8°C"
  },
  {
    id: 135,
    image: "",
    question: "An infant is born to an HIV-positive mother. Subsequent postnatal testing confirms that the infant is also HIV-positive. According to national guidelines for the Prevention of Parent to Child Transmission (PPTCT), what is the recommended total duration of breastfeeding for this child?",
    options: [
      "Up to 6 months",
      "Up to 1 year",
      "Up to 18 months",
      "Up to 2 years"
    ],
    answerIndex: 3,
    correctAnswerText: "Up to 2 years"
  },
  {
    id: 136,
    image: "",
    question: "A 45-year-old male newly diagnosed with pulmonary tuberculosis completes the Intensive Phase (IP) of his anti-tubercular therapy. His routine end-of-IP sputum smear examination returns positive. According to the current National Tuberculosis Elimination Programme (NTEP) guidelines, what is the most appropriate next step in his management?",
    options: [
      "Start continuation phase and send sputum for DST",
      "Extend the intensive phase by one additional month",
      "Immediately switch the patient to an MDR-TB regimen",
      "Continue intensive phase and repeat smear after 2 weeks"
    ],
    answerIndex: 0,
    correctAnswerText: "Start continuation phase and send sputum for DST"
  },
  {
    id: 137,
    image: "",
    question: "A 35-year-old male presents with 4 hypopigmented anesthetic skin patches and a demonstrably thickened right ulnar nerve. His slit-skin smear is negative. According to the revised NLEP guidelines (applicable from April 2025), what is the correct classification and corresponding treatment duration for this patient?",
    options: [
      "Paucibacillary (PB); 6 months",
      "Multibacillary (MB); 12 months",
      "Paucibacillary (PB); 12 months",
      "Multibacillary (MB); 6 months"
    ],
    answerIndex: 1,
    correctAnswerText: "Multibacillary (MB); 12 months"
  },
  {
    id: 138,
    image: "",
    question: "In a group of patients presenting to the emergency department with acute chest pain, 20% are confirmed to have a myocardial infarction (MI). Among those with an MI, 80% have an elevated cardiac biomarker. Among those without an MI, 30% incorrectly show an elevated cardiac biomarker. What is the Positive Predictive Value (PPV) of this elevated biomarker in this specific group?",
    options: [
      "1/5",
      "1/4",
      "2/5",
      "3/5"
    ],
    answerIndex: 2,
    correctAnswerText: "2/5"
  },
  {
    id: 139,
    image: "",
    question: "A medical researcher calculates the mean weight of a study group comprising 20 participants, finding it to be 45.0 kg. During a later data audit, it is discovered that one participant's weight was erroneously recorded as 15.0 kg instead of the true value of 55.0 kg. What is the true, corrected mean weight of the group?",
    options: [
      "46.5 kg",
      "49.0 kg",
      "45.5 kg",
      "47.0 kg"
    ],
    answerIndex: 3,
    correctAnswerText: "47.0 kg"
  },
  {
    id: 140,
    image: "",
    question: "In a community health survey, the mean fasting blood sugar (FBS) is 100 mg/dL with a Standard Deviation (SD) of 10. The mean serum cholesterol is 200 mg/dL with an SD of 10. Which parameter demonstrates greater relative biological variability?",
    options: [
      "Fasting blood sugar",
      "Serum cholesterol",
      "Both are equally variable",
      "Cannot be determined"
    ],
    answerIndex: 0,
    correctAnswerText: "Fasting blood sugar"
  },
  {
    id: 141,
    image: "",
    question: "A public health researcher is analyzing the birth weights of 10,000 full-term neonates, which follow a perfect normal distribution. What proportion of this neonatal population will have a birth weight falling strictly between the median value and exactly +2 Standard Deviations (SD) above the median?",
    options: [
      "0.340",
      "0.475",
      "0.680",
      "0.950"
    ],
    answerIndex: 1,
    correctAnswerText: "0.475"
  },
  {
    id: 142,
    image: "",
    question: "For a clinical study group consisting of N = 400 participants, the 75th percentile would correspond to which of the following positional values in the ordered dataset?",
    options: [
      "75th value",
      "200th value",
      "300th value",
      "325th value"
    ],
    answerIndex: 2,
    correctAnswerText: "300th value"
  },
  {
    id: 143,
    image: "",
    question: "A public health researcher is evaluating the relationship between the female literacy rate and the under-five mortality rate (U5MR) across multiple states. Which of the following values is most likely to represent the correlation coefficient (r) for this relationship?",
    options: [
      "r = +1.00",
      "r = -1.00",
      "r = +0.45",
      "r = -0.72"
    ],
    answerIndex: 3,
    correctAnswerText: "r = -0.72"
  },
  {
    id: 144,
    image: "",
    question: "In a randomized controlled trial comparing two antihypertensive drugs, the researchers determine the probability of committing a Type I error (α) is set at 0.01. What is the probability that the study will correctly fail to reject the null hypothesis when the null hypothesis is actually true?",
    options: [
      "1%",
      "99%",
      "5%",
      "95%"
    ],
    answerIndex: 1,
    correctAnswerText: "99%"
  },
  {
    id: 145,
    image: "",
    question: "A new sphygmomanometer is tested for accuracy. Ten successive readings of a standard 120 mmHg blood pressure sample are: 119, 121, 120, 119, 121, 120, 119, 121, 120, 120. How would you characterize this measurement method?",
    options: [
      "Low validity, low reliability",
      "Low validity, high reliability",
      "High validity, low reliability",
      "High validity, high reliability"
    ],
    answerIndex: 3,
    correctAnswerText: "High validity, high reliability"
  },
  {
    id: 146,
    image: "",
    question: "In a family of 6 members, 1 index case of Chickenpox is identified. Subsequently, 2 other family members develop the disease during the incubation period. What is the Secondary Attack Rate for this family?",
    options: [
      "40%",
      "33%",
      "25%",
      "50%"
    ],
    answerIndex: 0,
    correctAnswerText: "40%"
  },
  {
  id: 147,
  image: "",
  question: "A public health researcher intends to investigate a rare cancer suspected to be associated with an environmental exposure that occurred 20 years ago. Which study design is the most appropriate to initially evaluate this association?",
  options: [
    "Cross-sectional study",
    "Case-Control study",
    "Prospective Cohort study",
    "Randomized Controlled Trial"
  ],
  answerIndex: 1,
  correctAnswerText: "Case-Control study"
  },
  {
    id: 148,
    image: "",
    question: "In 2025, a researcher identifies a cohort of 2,000 factory workers and records their exposure levels to industrial solvents. This same group will be monitored for the development of chronic neurological disorders over the next 15 years, until 2040. Which study design is being utilized?",
    options: [
      "Cross-sectional study",
      "Case-Control study",
      "Prospective Cohort study",
      "Retrospective Cohort study"
    ],
    answerIndex: 2,
    correctAnswerText: "Prospective Cohort study"
  },
  {
    id: 149,
    image: "",
    question: "In a family of 7 members, there are 2 parents and 5 children. Among the children, 2 are completely immunized against measles, while the other 3 are totally unimmunized. On June 1st, one of the unimmunized children develops measles. By June 10th, 1 other sibling also develops the disease. What is the Secondary Attack Rate (SAR) for this family?",
    options: [
      "20%",
      "25%",
      "33%",
      "50%"
    ],
    answerIndex: 3,
    correctAnswerText: "50%"
  },
  {
    id: 150,
    image: "",
    question: "In an epidemiological study investigating a new risk factor, a variable can strictly be defined as a \"confounding factor\" only if it meets which of the following criteria?",
    options: [
      "Associated with both exposure and disease, and unequally distributed in groups",
      "Associated only with the exposure, and unequally distributed in groups",
      "Associated with both exposure and disease, and equally distributed in groups",
      "Associated only with the disease, and equally distributed in groups"
    ],
    answerIndex: 0,
    correctAnswerText: "Associated with both exposure and disease, and unequally distributed in groups"
  },
  {
    id: 151,
    image: "",
    question: "A public health researcher investigates the association between breast cancer incidence and total dietary fat consumption. To do this, they analyze aggregate national health registries and agricultural import data across 15 different countries. Which epidemiological study design is being utilized?",
    options: [
      "Cross-sectional study",
      "Ecological study",
      "Retrospective cohort",
      "Case-control study"
    ],
    answerIndex: 1,
    correctAnswerText: "Ecological study"
  },
  {
    id: 152,
    image: "",
    question: "During an acute outbreak of typhoid in a community of 10,000 residents, exactly 40 confirmed cases are reported. Over the next month, 8 of these patients die from the infection. What is the survival rate for this disease outbreak?",
    options: [
      "20%",
      "80%",
      "99.9%",
      "25%"
    ],
    answerIndex: 1,
    correctAnswerText: "80%"
  },
  {
    id: 153,
    image: "",
    question: "A district health officer is implementing the WHO STEPwise approach (STEPS) for a newly launched Non-Communicable Disease (NCD) surveillance program. The field team is trained on various data collection phases. Which of the following components is strictly NOT a part of this standardized surveillance framework?",
    options: [
      "Verbal assessment",
      "Physical measurement",
      "Biological testing",
      "Therapeutic intervention"
    ],
    answerIndex: 3,
    correctAnswerText: "Therapeutic intervention"
  },
  {
    id: 154,
    image: "",
    question: "A demographic survey evaluates four different states (W, X, Y, and Z) and reports their Total Fertility Rates (TFR) as 3.2, 2.5, 2.1, and 1.8 respectively. Which of these states has exactly achieved the replacement level fertility?",
    options: [
      "State W",
      "State X",
      "State Y",
      "State Z"
    ],
    answerIndex: 2,
    correctAnswerText: "State Y"
  },
  {
    id: 155,
    image: "",
    question: "A G2P1L1 woman presents for her routine antenatal check-up at 24 weeks of gestation. Her firstborn child is 18 months old, and she had received complete antenatal immunizations during her previous pregnancy. What is the recommended tetanus-diphtheria prophylaxis for her current pregnancy?",
    options: [
      "Two doses of TT (4 weeks apart)",
      "Single dose of TT booster",
      "Two doses of Td (4 weeks apart)",
      "Single dose of Td booster"
    ],
    answerIndex: 3,
    correctAnswerText: "Single dose of Td booster"
  },
  {
    id: 156,
    image: "",
    question: "A stable preterm neonate (birth weight 1.6 kg) is being managed in a step-down nursery. The pediatrician advises the parents to initiate Kangaroo Mother Care (KMC). According to standard WHO guidelines, which of the following perfectly summarizes the essential core components of KMC?",
    options: [
      "Skin-to-skin contact, Exclusive breastfeeding, Support to mother, Early discharge",
      "Skin-to-skin contact, Supplemental formula feeding, Support to mother, Late discharge",
      "Skin-to-skin contact, Routine prophylactic antibiotics, Incubator care, Early discharge",
      "Skin-to-skin contact, Exclusive breastfeeding, Intermittent radiant warmer use, Late discharge"
    ],
    answerIndex: 0,
    correctAnswerText: "Skin-to-skin contact, Exclusive breastfeeding, Support to mother, Early discharge"
  },
  {
    id: 157,
    image: "",
    question: "Although human breast milk provides optimal nutrition for growing neonates, it is classically considered a poor source of which of the following trace minerals?",
    options: [
      "Calcium",
      "Iron",
      "Magnesium",
      "Phosphorus"
    ],
    answerIndex: 1,
    correctAnswerText: "Iron"
  },
  {
    id: 158,
    image: "images/IMG_9447.jpeg",
    question: "A chronic alcoholic presents with watery diarrhea, confusion, and a sharply demarcated, hyperpigmented, sun-exposed rash around his neck. A diet lacking which of the following essential amino acids most directly contributes to this specific clinical syndrome?",
    options: [
      "Tyrosine",
      "Phenylalanine",
      "Tryptophan",
      "Histidine"
    ],
    answerIndex: 2,
    correctAnswerText: "Tryptophan"
  },
  {
    id: 159,
    image: "",
    question: "An Indian family relocates to the United States. Within a year, the parents notice their children have completely stopped eating traditional home-cooked meals and now exclusively demand western fast food like burgers and pizzas. In sociological terms, this dietary shift due to contact with a new environment is best described as:",
    options: [
      "Socialization",
      "Social pathology",
      "Ethnocentrism",
      "Acculturation"
    ],
    answerIndex: 3,
    correctAnswerText: "Acculturation"
  },
  {
    id: 160,
    image: "",
    question: "The hairy, moth-like vector depicted in the image is classically associated with the transmission of which of the following specific groups of diseases?",
    options: [
      "Visceral leishmaniasis, Cutaneous leishmaniasis, and Chandipura encephalitis",
      "Kyasanur Forest Disease, Babesiosis, and Lyme disease",
      "Epidemic typhus, Trench fever, and Relapsing fever",
      "Japanese encephalitis, Dengue, and Yellow fever"
    ],
    answerIndex: 0,
    correctAnswerText: "Visceral leishmaniasis, Cutaneous leishmaniasis, and Chandipura encephalitis"
  },
  {
    id: 161,
    image: "images/mantoux.mov",
    question: "A video shows a Mantoux site after 72 hours with a large red area but only a small firm swelling. What should be measured and recorded?",
    options: [
      "Induration",
      "Erythema",
      "Vesicle",
      "Ulcer"
    ],
    answerIndex: 0,
    correctAnswerText: "Induration"
  },
  {
    id: 162,
    image: "",
    question: "After dressing an infected surgical wound, a resident needs to discard the heavily blood-soaked cotton gauze and bandage. According to current Biomedical Waste Management rules, which container is appropriate?",
    options: [
      "Red bag",
      "White puncture-proof container",
      "Yellow bin",
      "Blue box"
    ],
    answerIndex: 2,
    correctAnswerText: "Yellow bin"
  },
  {
    id: 163,
    image: "",
    question: "A 62-year-old retired industrial worker presents with severe fatigue, recurrent infections, and pancytopenia. He has a long history of working in a shoe-manufacturing unit with chronic benzene exposure. Which malignancy is classically associated with this occupational exposure?",
    options: [
      "Lung cancer",
      "Bladder cancer",
      "Mesothelioma",
      "Leukemia"
    ],
    answerIndex: 3,
    correctAnswerText: "Leukemia"
  },
  {
    id: 164,
    image: "",
    question: "In a population survey, a normally distributed dataset of fasting blood glucose levels has a median of 150 mg/dL and a standard deviation of 15 mg/dL. What range will include approximately 68% of observations?",
    options: [
      "135 - 165",
      "120 - 180",
      "105 - 195",
      "150 - 165"
    ],
    answerIndex: 0,
    correctAnswerText: "135 - 165"
  },
  {
    id: 165,
    image: "",
    question: "A public health researcher wants to graphically display the frequency distribution of birth weights measured in kilograms among 1,000 newborns. Which graph is most appropriate?",
    options: [
      "Bar diagram",
      "Histogram",
      "Pie chart",
      "Pictogram"
    ],
    answerIndex: 1,
    correctAnswerText: "Histogram"
  },
  {
    id: 166,
    image: "",
    question: "A researcher is estimating the mean systolic blood pressure of a local population. If he decides to reduce the allowable error of the estimate by half, what will happen to the required sample size?",
    options: [
      "It will become half",
      "It will become double",
      "It will become four times larger",
      "It will remain unchanged"
    ],
    answerIndex: 2,
    correctAnswerText: "It will become four times larger"
  },
  {
    id: 167,
    image: "",
    question: "A randomized controlled trial concludes that a new antidiabetic medication has no significant difference compared with placebo. However, in reality, the new drug is truly effective. Which statistical error has occurred?",
    options: [
      "Alpha error",
      "Beta error",
      "Sampling frame error",
      "Type I error"
    ],
    answerIndex: 1,
    correctAnswerText: "Beta error"
  },
  {
    id: 168,
    image: "",
    question: "On World Tuberculosis Day, a group of 5 medical experts sits on a stage in front of a community audience. They discuss TB prevention among themselves, with a moderator coordinating the conversation. Which communication method is being used?",
    options: [
      "Symposium",
      "Workshop",
      "Panel discussion",
      "Role play"
    ],
    answerIndex: 2,
    correctAnswerText: "Panel discussion"
  },
  {
    id: 169,
    image: "",
    question: "A state health department evaluates a newly proposed water sanitation project. To determine its feasibility, both the initial financial investment (inputs) and the resulting health outcomes (benefits) are measured strictly in monetary terms (Rupees). Which of the following economic evaluation techniques is being utilized?",
    options: [
      "Cost-minimization analysis",
      "Cost-utility analysis",
      "Cost-effectiveness analysis",
      "Cost-benefit analysis"
    ],
    answerIndex: 3,
    correctAnswerText: "Cost-benefit analysis"
  },
  {
    id: 170,
    image: "",
    question: "A 3-year-old child presents to the rural health clinic with bowing of legs, difficulty in walking, and severe undernutrition. Which of the following national programs primarily deals with providing supplementary nutrition to prevent such deficiencies in this specific age group?",
    options: [
      "Mid-Day Meal Scheme",
      "Integrated Child Development Services",
      "Rashtriya Bal Swasthya Karyakram",
      "Janani Suraksha Yojana"
    ],
    answerIndex: 1,
    correctAnswerText: "Integrated Child Development Services"
  },
  {
    id: 171,
    image: "",
    question: "A warning siren alerts a residential neighborhood of a sudden toxic gas leak from a nearby chemical plant. Evacuation orders have not yet been broadcasted. What is the most appropriate immediate action for a resident to take inside their home?",
    options: [
      "Call emergency services to get more information",
      "Turn on the air conditioner to filter the indoor air",
      "Close all windows and seal any cracks with tape",
      "Rush outside immediately to check the extent of the leak"
    ],
    answerIndex: 2,
    correctAnswerText: "Close all windows and seal any cracks with tape"
  },
  {
    id: 172,
    image: "images/IMG_9449.jpeg",
    question: "A teenage boy from a fluoride-endemic region of Andhra Pradesh presents to the orthopedics outpatient department with severe genu valgum and marked osteoporosis of the lower limbs. Which of the following dietary staples is classically associated with exacerbating this specific clinical presentation?",
    options: [
      "Polished rice",
      "Refined wheat",
      "Finger millet",
      "Sorghum (Jowar)"
    ],
    answerIndex: 3,
    correctAnswerText: "Sorghum (Jowar)"
  },
  {
    id: 173,
    image: "",
    question: "A 45-year-old male recently declared cured of Hansen's disease attends a community awareness camp. The camp prominently displays a logo featuring a partially affected thumb and a normal forefinger. According to the NLEP emblem, what does this specific component symbolize?",
    options: [
      "The patient can be cured and remain a useful member of society",
      "The beauty and purity of an uninfected individual",
      "The continuous hope and optimism for a disease-free future",
      "The complete elimination of physical deformities"
    ],
    answerIndex: 0,
    correctAnswerText: "The patient can be cured and remain a useful member of society"
  },
  {
    id: 174,
    image: "",
    question: "A 9-month-old infant is admitted to a government district hospital with severe pneumonia. The parents are highly concerned about the cost of intravenous antibiotics, blood tests, and hospital stay. Under which of the following government initiatives are all treatments, drugs, and diagnostics mandated to be provided completely free of cost for this specific patient?",
    options: [
      "Janani Suraksha Yojana",
      "Janani Shishu Suraksha Karyakram",
      "Rashtriya Bal Swasthya Karyakram",
      "Integrated Child Development Services"
    ],
    answerIndex: 1,
    correctAnswerText: "Janani Shishu Suraksha Karyakram"
  },
  {
    id: 175,
    image: "",
    question: "A public health official is analyzing the national vital statistics of a developing country like India. The latest census data reveals that while the death rate is continuing to decline, the birth rate has also begun to fall, leading to a shrinking demographic gap. Which stage of the demographic cycle does this population represent?",
    options: [
      "Stage 1 (High stationary)",
      "Stage 2 (Early expanding)",
      "Stage 3 (Late expanding)",
      "Stage 4 (Low stationary)"
    ],
    answerIndex: 2,
    correctAnswerText: "Stage 3 (Late expanding)"
  },
  {
    id: 176,
    image: "images/vvm.mov",
    question: "A video shows a health worker inspecting an Oral Polio Vaccine vial before administration. The inner square of the monitor is clearly darker than the outer circle. What is the most appropriate action?",
    options: [
      "Discard the vaccine immediately",
      "Use the vaccine immediately",
      "Return to the manufacturer",
      "Store at a lower temperature"
    ],
    answerIndex: 0,
    correctAnswerText: "Discard the vaccine immediately"
  },
  {
    id: 177,
    image: "",
    question: "A global health agency is evaluating the overall progress of a developing nation using a composite index. To assess the population's ability to lead a long and healthy life, which of the following specific parameters is utilized in calculating the Human Development Index (HDI)?",
    options: [
      "Life expectancy at birth",
      "Life expectancy at age one",
      "Infant mortality rate",
      "Basic literacy rate"
    ],
    answerIndex: 0,
    correctAnswerText: "Life expectancy at birth"
  },
  {
    id: 178,
    image: "",
    question: "A factory worker suffers a severe crush injury resulting in the amputation of his right hand. He is now unable to operate his assigned machinery and ultimately loses his job. According to the WHO classification, which of the following specifically represents the \"impairment\" in this scenario?",
    options: [
      "The initial crush injury",
      "Inability to operate the machinery",
      "Loss of the anatomical hand",
      "Subsequent unemployment"
    ],
    answerIndex: 2,
    correctAnswerText: "Loss of the anatomical hand"
  },
  {
    id: 179,
    image: "",
    question: "A public health researcher is analyzing the systolic blood pressure levels of 5,000 healthy adult volunteers. He notes that the data plots into a perfectly symmetrical, bell-shaped continuous probability curve. To perform advanced comparative statistical modeling, he converts this dataset into a \"standard normal distribution\". What specific mathematical parameters define this standardized curve?",
    options: [
      "Mean of 1 and standard deviation of 0",
      "Mean equal to variance with a standard deviation of 1",
      "Mean of 1 and standard deviation of 1",
      "Mean of 0 and standard deviation of 1"
    ],
    answerIndex: 3,
    correctAnswerText: "Mean of 0 and standard deviation of 1"
  },
  {
    id: 180,
    image: "",
    question: "A medical officer plots the frequency of different patient blood groups (A, B, AB, O) using a standard bar chart. Visually, the rectangular bars are separated by distinct gaps. Epidemiologically, what do these specific spaces between the rectangles definitively indicate about the underlying data?",
    options: [
      "The variables represent a continuous set",
      "The variables are measured on an interval scale",
      "The total magnitude is divided into subsets",
      "The data forms discrete categories"
    ],
    answerIndex: 3,
    correctAnswerText: "The data forms discrete categories"
  }
];

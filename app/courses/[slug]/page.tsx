import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Target, BookOpen, MessageCircle, Award, Monitor, Star, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'ielts-coaching' },
    { slug: 'celpip-training' },
    { slug: 'basic-to-advanced-english' },
    { slug: 'english-in-40-days' },
    { slug: 'english-for-telugu-speakers' },
    { slug: 'business-english' },
    { slug: 'workplace-english' },
    { slug: 'biolingo-program' },
    { slug: 'writing-skills' },
    { slug: 'phonetics' },
    { slug: 'english-literature' },
    { slug: 'teaching-for-success' },
    { slug: 'phonics-and-speaking-skills' },
  ];
}

type FAQ = { q: string; a: string };
type Section = { heading: string; subheading?: string; body: string };
type QuickFact = { duration: string; level: string; mode: string; outcome: string };

type CourseData = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  quickFacts: QuickFact;
  sections: Section[];
  features: string[];
  outcomes: string[];
  audience: string;
  faqs: FAQ[];
};

const COURSE_CONTENT: Record<string, CourseData> = {
  'ielts-coaching': {
    title: 'IELTS Coaching Online in India',
    metaTitle: 'IELTS Coaching Online India | Band 7+ Prep | English Speakers',
    metaDescription: 'Crack IELTS with India\'s results-driven online coaching. Live classes, mock tests, and band 7+ strategies for UK, Canada, Australia aspirants.',
    tagline: 'Train for Band 7+ With Confidence — Live Classes, Mock Tests, Expert Feedback',
    intro: 'IELTS coaching online India is a structured preparation program that trains candidates for the four IELTS modules — Listening, Reading, Writing, and Speaking — through live virtual classes, scored mock tests, and one-on-one feedback. At English Speakers, our IELTS course is built for Indian students and professionals targeting university admissions or immigration to Canada, the UK, Australia, New Zealand, and Ireland. You learn the exam pattern, the band descriptors examiners actually use, and the test-day techniques that move scores from a 6 to a 7.5 or higher.',
    quickFacts: { duration: '8–12 Weeks', level: 'Intermediate to Advanced', mode: '100% Online (Live)', outcome: 'Target Band 7.0–8.5' },
    sections: [
      {
        heading: 'Why Indian Aspirants Choose Our IELTS Program',
        body: 'India sends more IELTS candidates abroad than almost any country, and the competition for university seats and PR points keeps tightening. A half-band difference can cost you a CRS score, a tuition waiver, or a visa category. Our trainers are certified IELTS specialists who have evaluated thousands of writing samples and speaking responses. We don\'t just teach grammar — we decode the band descriptors, fix repeating mistakes, and rebuild test technique from the ground up. Telugu, Hindi, and Tamil-speaking learners get culturally aware coaching that targets the specific accent, fluency, and writing patterns that pull Indian scores down.',
      },
      {
        heading: 'What the IELTS Course Covers',
        body: 'The curriculum is split across all four skills with weekly diagnostic checkpoints so you always know your current band.',
        subheading: 'Listening Module — Reading Module — Writing Module (Task 1 + Task 2) — Speaking Module',
      },
      {
        heading: 'Listening Module',
        body: 'You practice with original Cambridge audio sets, train your ear for British, Australian, and North American accents, and learn the prediction-based listening method that converts a band 6 into a band 8.',
      },
      {
        heading: 'Reading Module',
        body: 'We focus on skimming, scanning, paragraph mapping, and the 11 question types that confuse most Indian test takers. True/False/Not Given alone is responsible for thousands of dropped marks every month — we fix that with targeted drills and pattern recognition.',
      },
      {
        heading: 'Writing Module (Task 1 + Task 2)',
        body: 'You get two evaluated essays per week with detailed feedback on task response, coherence, lexical resource, and grammatical range. Templates are taught, but originality is enforced — IELTS examiners penalize memorized openings. You learn to construct arguments from scratch.',
      },
      {
        heading: 'Speaking Module',
        body: 'Daily speaking practice with trainers, recorded mock interviews, and accent neutralization. We coach you through Part 1 (introduction), Part 2 (cue card), and Part 3 (discussion) using the exact rubric examiners use. Every mock is followed by a scored debrief.',
      },
      {
        heading: 'Mock Tests, Feedback, and Score Tracking',
        body: 'Every batch includes a minimum of six full-length IELTS mock tests under exam conditions. Each test is scored against official band descriptors, and you receive a written report identifying weak question types and recommended remedial drills. This data-driven approach is why our learners consistently report band jumps of 1.0 to 1.5 within a single course cycle.',
      },
      {
        heading: 'Course Format and Schedule',
        body: 'Classes run live on Zoom in morning, evening, and weekend batches to suit students, working professionals, and homemakers across India. Recordings are available for 90 days. You also get our IELTS preparation workbook, vocabulary banks segmented by topic, and a private peer-practice group for daily speaking partners.',
      },
      {
        heading: 'Who Should Join',
        body: 'This IELTS coaching is ideal for graduates applying to foreign universities, candidates pursuing Canadian or Australian PR, nurses pursuing NMC/AHPRA registration, and professionals targeting UK skilled worker visas. Whether you are starting from a band 5.5 or polishing a band 7 to a 7.5, the course is paced to your level.',
      },
    ],
    features: [
      'Live mock tests under real exam conditions every week',
      'Two evaluated writing submissions per week with line-by-line feedback',
      'Daily 1-on-1 speaking practice with certified trainers',
      'Cambridge official materials + proprietary band-booster drills',
      'Separate Academic and General Training streams',
      'Score tracking dashboard with band projection',
    ],
    outcomes: [
      'Target band 7.0–8.5 with structured preparation',
      'Mastery of all 11 IELTS question types',
      'Confident, examiner-approved speaking responses',
      'Bulletproof time-management for Reading and Writing',
      'Guaranteed re-enrollment if target band is not achieved',
    ],
    audience: 'Students planning to study abroad, professionals migrating to Canada, UK, or Australia, nurses pursuing NMC/AHPRA registration, and anyone aiming for a band 7.0 or higher.',
    faqs: [
      { q: 'How long does it take to prepare for IELTS?', a: 'Most learners need 8 to 12 weeks of consistent preparation. If your current band is below 5.5, plan for 12 weeks; band 6 and above can target the 8-week intensive track.' },
      { q: 'What IELTS band score do I need for Canada PR?', a: 'A CLB 9 (IELTS 7.0 in Listening, Reading, Writing, and Speaking, with 8.0 in Listening) gives the maximum CRS points. Our coaching is calibrated to hit exactly this threshold.' },
      { q: 'Is the IELTS speaking test harder for Indian candidates?', a: 'Indian candidates often lose marks on pronunciation and fluency, not vocabulary. Our accent neutralization and daily speaking practice fix this directly.' },
      { q: 'Do you cover both Academic and General Training IELTS?', a: 'Yes. The Reading and Writing modules diverge between Academic and GT, and we run separate streams for each so your preparation is precisely matched to your test type.' },
      { q: 'What if I don\'t get my target band after the course?', a: 'Eligible students get free access to the next batch until they hit their target band. Conditions are shared during enrollment.' },
    ],
  },

  'celpip-training': {
    title: 'CELPIP Training Online',
    metaTitle: 'CELPIP Training Online | CLB 9+ for Canada PR | English Speakers',
    metaDescription: 'CELPIP-General training online for Canadian PR aspirants. Computer-based test prep, speaking drills, and CLB 9+ strategy from certified trainers.',
    tagline: 'Built for Canadian PR Success — CLB 9+ Strategy, Computer-Based Mock Tests',
    intro: 'CELPIP training online is a focused preparation course for the Canadian English Language Proficiency Index Program — the IRCC-approved alternative to IELTS for Canadian permanent residency and citizenship. At English Speakers, our CELPIP coaching trains Indian PR aspirants on the fully computer-delivered test format, with intensive practice on the four skills and the timed digital interface that catches most first-time test takers off guard.',
    quickFacts: { duration: '6–10 Weeks', level: 'Intermediate to Advanced', mode: '100% Online (Live)', outcome: 'Target CLB 9–10' },
    sections: [
      {
        heading: 'Why Choose CELPIP Over IELTS',
        body: 'CELPIP is 100% computer-based, uses only Canadian English accents, and is often easier for candidates who think and type faster than they handwrite. The speaking section is recorded into a microphone — no examiner sits in front of you, which reduces interview anxiety significantly. For PR purposes, CLB 9 on CELPIP earns the same CRS points as IELTS 7.0+, but many candidates score higher on CELPIP because of the format match.',
      },
      {
        heading: 'CELPIP vs IELTS — Which Is Right for You',
        body: 'If you are anxious about live speaking interviews, type quickly, and are comfortable with North American accents, CELPIP is your test. If you handwrite faster than you type or prefer a human examiner, IELTS may suit you better. Our trainers run a free 30-minute diagnostic to recommend the right test before you enroll so you don\'t waste time preparing for the wrong exam.',
      },
      {
        heading: 'Listening Component',
        body: 'Practice with Canadian workplace conversations, news clips, and problem-solving scenarios. We train you to anticipate question types from the audio context and build the note-taking habits that protect scores in the timed format.',
      },
      {
        heading: 'Reading Component',
        body: 'Four parts including correspondence, diagrams, news articles, and viewpoints. We teach scanning shortcuts and inference techniques calibrated to Canadian English idioms, so you stop losing marks on questions that test cultural context as much as language.',
      },
      {
        heading: 'Writing Component',
        body: 'Two tasks — writing an email and responding to survey questions. You submit two writing samples weekly and receive scored feedback on content, vocabulary, readability, and task fulfillment. Templates are provided, and personal adaptation is drilled so your responses sound natural.',
      },
      {
        heading: 'Speaking Component',
        body: 'Eight tasks recorded into a microphone, including giving advice, describing a scene, and expressing opinions. We coach pace, clarity, and structure using the official CELPIP rubric. You complete at least 20 full speaking task recordings during the course with individual audio feedback.',
      },
      {
        heading: 'Test Strategy and Mock Tests',
        body: 'CELPIP rewards confidence under time pressure. You complete five full-length computer-based mocks during the course, replicating the actual test interface. Each mock is scored at the CLB level with a detailed performance breakdown identifying exactly which task type is costing you points.',
      },
      {
        heading: 'Who Should Enroll',
        body: 'PR aspirants, Express Entry candidates, spouses applying under family sponsorship, and professionals pursuing Canadian provincial nominee programs. Anyone targeting CLB 9 or CLB 10 will find this course directly aligned to their goal.',
      },
    ],
    features: [
      'Full computer-based mock test simulations (5 complete tests)',
      'Canadian accent and vocabulary training',
      'Scored feedback on all 8 speaking tasks',
      'Two evaluated writing submissions per week',
      'CLB score tracking with Express Entry CRS impact mapping',
      'Free diagnostic test to confirm CELPIP is right for you',
    ],
    outcomes: [
      'Achieve CLB 9 or CLB 10 in first attempt',
      'Complete comfort with computer-delivered test interface',
      'Structured speaking templates for all 8 task types',
      'Error-free email and survey response writing',
      'Maximum CRS points for Express Entry applications',
    ],
    audience: 'PR aspirants, Express Entry candidates, family sponsorship applicants, and professionals pursuing Canadian provincial nominee programs who need CLB 9 or above.',
    faqs: [
      { q: 'Is CELPIP accepted for Canadian PR?', a: 'Yes. CELPIP-General is fully accepted by IRCC for Express Entry, Provincial Nominee Programs, and citizenship applications.' },
      { q: 'Is CELPIP easier than IELTS?', a: 'Easier is subjective, but most Indian candidates score 0.5 to 1.0 CLB higher on CELPIP because of the computer format, uniform Canadian accent, and absence of a live speaking examiner.' },
      { q: 'How long does CELPIP preparation take?', a: 'Six to ten weeks for most candidates. Strong English speakers can prepare in four weeks with focused mock practice.' },
      { q: 'Is the CELPIP speaking test recorded or live?', a: 'It is recorded. You speak into a microphone and the response is scored later by certified raters — there is no live examiner, which many Indian candidates find less stressful.' },
      { q: 'What CLB score is needed for maximum Express Entry points?', a: 'CLB 10 across all four skills earns the maximum language points in Express Entry. CLB 9 is the realistic and most common target for most aspirants.' },
    ],
  },

  'basic-to-advanced-english': {
    title: 'Basic to Advanced Spoken English',
    metaTitle: 'Spoken English Course Online India | Beginner to Fluent',
    metaDescription: 'Learn English from scratch with India\'s structured online spoken English course. Beginner to advanced fluency in a step-by-step program.',
    tagline: 'From Zero Confidence to Fluent Speaker — Step-by-Step, Level by Level',
    intro: 'A spoken English course online India is a structured language program that takes a learner from zero confidence to fluent, grammatically correct conversation through live virtual classes. At English Speakers, our Basic to Advanced English course is designed for adult Indian learners who have read English in school but freeze when they have to speak it. We rebuild the language from sounds upward, then layer grammar, vocabulary, and conversation until you can hold a 30-minute conversation without translating in your head.',
    quickFacts: { duration: '4–6 Months', level: 'Beginner to Advanced', mode: '100% Online (Live)', outcome: 'Confident Conversational Fluency' },
    sections: [
      {
        heading: 'Why a Beginner-to-Advanced Path Works',
        body: 'Most short English courses skip the foundation. They jump straight to phrases and idioms, leaving learners parroting sentences they cannot adapt. Our path is different. You start with phonetic sounds, build to word stress and sentence rhythm, then move into grammar tenses, sentence patterns, and finally free conversation. By the time you finish Level 4, you have built the language — not memorized it.',
      },
      {
        heading: 'Level 1 — Foundation (Weeks 1–6)',
        body: 'Alphabet sounds, basic vocabulary covering 500 high-frequency words, present and past tense, simple self-introductions, and asking and answering basic questions. Trainers use your regional language to explain at this level so no concept feels out of reach.',
      },
      {
        heading: 'Level 2 — Building Blocks (Weeks 7–12)',
        body: 'All twelve tenses, common phrasal verbs, daily-life conversations covering shops, transport, and family, pronunciation drills, and reading short texts aloud with feedback on stress and rhythm.',
      },
      {
        heading: 'Level 3 — Intermediate Fluency (Weeks 13–18)',
        body: 'Opinion expression, agreeing and disagreeing, storytelling, workplace small talk, intermediate grammar including modals, conditionals, and passive voice, and writing short professional emails.',
      },
      {
        heading: 'Level 4 — Advanced Confidence (Weeks 19–24)',
        body: 'Debate and discussion, formal and informal register switching, advanced vocabulary, idioms used correctly in context, presentation skills, and fully unscripted conversation practice. By the end of Level 4 you can hold your own in any English conversation.',
      },
      {
        heading: 'What Makes This Course Different',
        body: 'Live small-batch classes with a maximum of 12 learners so everyone speaks every session. Daily speaking practice with peer partners, weekly one-on-one trainer review calls, voice recordings analyzed for pronunciation errors, and a mobile-friendly learner app with 15-minute daily drills to keep momentum between classes.',
      },
      {
        heading: 'Common Mistakes We Fix',
        body: 'Translating from your mother tongue before speaking. Fear of grammar errors that blocks fluency. Mispronouncing common words like "schedule," "vegetable," and "comfortable." Using "is having" instead of "has." Freezing during job interviews. Each of these gets a dedicated module with targeted correction drills.',
      },
    ],
    features: [
      'Four structured levels from zero to advanced fluency',
      'Maximum 12 learners per batch — everyone speaks every class',
      'Daily peer speaking partner assignments',
      'Weekly 1-on-1 trainer review call per learner',
      'Voice recording analysis for pronunciation correction',
      'Mobile app with daily 15-minute practice drills',
    ],
    outcomes: [
      'Confident basic conversations by month 3',
      'Advanced fluency and unscripted speaking by month 6',
      'Grammar understood through usage, not memorization',
      'Zero freezing in job interviews and public situations',
      'Natural English — no translation, no hesitation',
    ],
    audience: 'Beginners with zero English confidence, Telugu-medium and Hindi-medium school graduates, homemakers returning to learning, government job aspirants, and college students preparing for campus placements.',
    faqs: [
      { q: 'I cannot speak even one English sentence. Is this course right for me?', a: 'Yes. Level 1 starts with alphabet sounds and basic words — exactly where you need to begin. No prior speaking ability is required.' },
      { q: 'How long until I can speak fluently?', a: 'Most learners hold confident basic conversations by month 3 and reach advanced fluency by month 6 with daily practice.' },
      { q: 'Do you teach grammar or only conversation?', a: 'Both. Grammar is taught in the context of speaking — never as standalone rules to memorize from a textbook.' },
      { q: 'Are classes in Telugu, Hindi, or English?', a: 'Trainers explain in your regional language at Level 1, gradually shift to bilingual at Level 2, and fully English by Level 3.' },
      { q: 'What if I miss a class?', a: 'Recordings are available within four hours, and you can join the same topic session in another active batch without losing momentum.' },
    ],
  },

  'english-in-40-days': {
    title: 'English in 40 Days',
    metaTitle: 'Learn Spoken English in 40 Days | Fast Fluency Course India',
    metaDescription: 'Learn spoken English in 40 days with a structured fast-track program. Daily live classes, drills, and rapid fluency for working Indian learners.',
    tagline: 'Fast-Track Fluency in 40 Days — Daily Live Classes, Real Results',
    intro: 'Learn spoken English in 40 days is an intensive, time-bound program that compresses six months of typical learning into a focused 40-day sprint with daily live classes, drills, and immersion practice. At English Speakers, this course is engineered for working professionals, final-year students, and job seekers in India who cannot wait six months and need usable English in under six weeks. By Day 40, you can introduce yourself confidently, hold workplace small talk, attend interviews, and write basic professional emails.',
    quickFacts: { duration: '40 Days', level: 'Beginner to Intermediate', mode: '100% Online (Live)', outcome: 'Functional Speaking Fluency' },
    sections: [
      {
        heading: 'Why 40 Days Works',
        body: 'The brain learns languages faster under high-frequency exposure than under spaced-out weekly classes. Forty consecutive days of 90-minute immersion forces neural patterning that weekly classes simply cannot achieve. We have run this program for thousands of Indian learners, and the data is clear — daily intensity beats long duration for building speaking confidence quickly.',
      },
      {
        heading: 'Days 1–10: Foundation Sprint',
        body: 'Pronunciation reset covering the 44 sounds of English, 300 power words you will use every day, present and past tenses applied through speaking, self-introduction mastery, asking and answering questions naturally, and daily-life conversations.',
      },
      {
        heading: 'Days 11–20: Grammar in Action',
        body: 'All tenses applied through speaking not writing, modals for politeness and possibility, prepositions that Indian speakers typically get wrong, sentence connectors for natural flow, narrating events, and expressing opinions confidently.',
      },
      {
        heading: 'Days 21–30: Real-World Conversations',
        body: 'Workplace English covering standups and status updates, phone and video call conversations, restaurant and travel situations, agreeing and disagreeing professionally, and handling difficult conversations politely without conflict.',
      },
      {
        heading: 'Days 31–40: Confidence and Fluency',
        body: 'Mock interviews with real-time feedback, group discussion practice, short presentations, idioms used correctly in context, eliminating filler words like "basically" and "actually," and recording and reviewing your own speech to track dramatic improvement.',
      },
      {
        heading: 'What Daily Class Looks Like',
        body: 'Each 90-minute session includes 15 minutes of pronunciation drill, 20 minutes of grammar in context, 30 minutes of conversation practice in pairs, 15 minutes of vocabulary building, and 10 minutes of homework review. Plus 30 minutes of solo daily homework — listening to English, reading aloud, and journaling in English.',
      },
      {
        heading: 'Why Indian Learners Succeed Here',
        body: 'The course is bilingual where needed, grammar is taught through Indian-context examples, and trainers understand the specific fluency blocks that affect Indian learners — the mother-tongue translation habit, fear of judgment, and the silent vocabulary problem where you know words but cannot use them under pressure.',
      },
    ],
    features: [
      '40 daily live classes — 90 minutes each',
      '40 daily homework drills with audio and writing',
      'Two mid-course mock assessments with scores',
      'Final fluency evaluation and course certificate',
      'Peer accountability group for daily practice',
      'Bilingual instruction where needed (Telugu/Hindi)',
    ],
    outcomes: [
      'Functional speaking fluency in 40 days',
      'Confident self-introduction and workplace small talk',
      'Interview-ready communication skills',
      'Ability to write basic professional emails',
      'Course completion certificate after final evaluation',
    ],
    audience: 'Job seekers with interviews in 6–8 weeks, professionals starting client-facing roles, final-year students preparing for campus placements, and anyone who wants a hard deadline that forces English results.',
    faqs: [
      { q: 'Can I really learn English in 40 days?', a: 'You can reach functional speaking fluency — confident introductions, workplace conversations, and interviews. True advanced mastery takes longer, but 40 days of daily intensive practice produces dramatic results that surprise most learners.' },
      { q: 'How many hours per day will I need?', a: 'Plan for 90 minutes of class plus 30 minutes of homework — two hours daily. Consistent daily commitment is the non-negotiable requirement for this program.' },
      { q: 'Is this course suitable for absolute beginners?', a: 'It works best for learners with basic reading ability. If you cannot read English at all, start with our Basic to Advanced course at Level 1 first.' },
      { q: 'What if I miss a day?', a: 'Recorded classes are available within four hours, but daily attendance is strongly recommended for the 40-day momentum to build properly.' },
      { q: 'Will I get a certificate?', a: 'Yes, after completing the final fluency evaluation on Day 40 you receive a course completion certificate.' },
    ],
  },

  'english-for-telugu-speakers': {
    title: 'English for Telugu Speakers',
    metaTitle: 'Spoken English Course for Telugu Speakers | AP & Telangana',
    metaDescription: 'Spoken English course for Telugu speakers. Bilingual trainers, Telugu-to-English method, designed for AP and Telangana students and professionals.',
    tagline: 'Telugu-First English Learning — Built for AP & Telangana Learners',
    intro: 'A spoken English course for Telugu speakers is a bilingual language program that uses Telugu as the bridge language to teach English grammar, vocabulary, and pronunciation. At English Speakers, this course is built specifically for learners from Andhra Pradesh, Telangana, and Telugu-speaking communities across India and abroad. Trainers explain concepts in Telugu first, then transition you into English — removing the fear barrier that English-only classes create for Telugu-medium school graduates.',
    quickFacts: { duration: '3–5 Months', level: 'Beginner to Intermediate', mode: '100% Online (Live)', outcome: 'Confident English Communication' },
    sections: [
      {
        heading: 'Why a Telugu-First Approach Works',
        body: 'Most online English courses are taught entirely in English, which is exactly the problem — if you could already follow English instruction, you wouldn\'t need the course. Our trainers are native Telugu speakers who are also fluent English communicators. They explain each grammar rule, sentence structure, and pronunciation drill in Telugu, then walk you into English step by step. This is how Telugu-medium learners actually learn — not by being thrown in the deep end, but by being guided across.',
      },
      {
        heading: 'Direct Telugu-to-English Translation Problem',
        body: 'Telugu sentence structure is Subject-Object-Verb. English is Subject-Verb-Object. Most Telugu speakers say "I food eating" when they mean "I am eating food." This structural mismatch is the root cause of most Telugu speakers\' English errors, and we dedicate specific sessions to rewiring it at the sentence construction level.',
      },
      {
        heading: 'Pronunciation Blocks Specific to Telugu Speakers',
        body: 'Telugu has no /f/ or /z/ sounds, so "fish" becomes "pish" and "zoo" becomes "joo." Telugu also lacks the English "th" sound and the "v/w" distinction. Our phonetics module fixes these specific Telugu-to-English sound gaps with targeted drills rather than generic pronunciation exercises.',
      },
      {
        heading: 'Article and Preposition Errors',
        body: 'Telugu does not use articles (a, an, the) the same way English does. This is why Telugu speakers often say "I went to market" instead of "I went to the market." We dedicate full sessions to article rules with Telugu-context examples that make the logic click immediately.',
      },
      {
        heading: 'Module 1: Sound and Pronunciation',
        body: 'The 44 English sounds with Telugu equivalents, mouth and tongue positioning for sounds Telugu does not have, word stress patterns, and sentence rhythm training. By the end of this module your pronunciation is understood by anyone in India or internationally.',
      },
      {
        heading: 'Module 2 to 4: Grammar, Conversations, Advanced Speaking',
        body: 'Module 2 covers all tenses, articles, prepositions, and modals through Telugu-to-English contrast. Module 3 covers daily conversations — introductions, directions, meetings, and interviews. Module 4 advances to opinion expression, debate, presentation, storytelling, and professional small talk used in Hyderabad and Vijayawada IT offices.',
      },
      {
        heading: 'Who Should Join',
        body: 'Students from Telugu-medium schools, college graduates preparing for placements, government employees, IT professionals from Hyderabad and Vijayawada needing client communication, NRIs in Telugu-speaking communities abroad, and homemakers wanting to learn English from scratch without embarrassment.',
      },
    ],
    features: [
      'Native Telugu-speaking trainers with 5+ years English teaching experience',
      'Bilingual Telugu-English workbook included',
      'Targeted drills for Telugu-specific pronunciation gaps (/f/, /z/, /th/)',
      'Telugu sentence structure vs English structure rewiring',
      'Evening and weekend batches aligned to AP/Telangana schedules',
      'Small batch — maximum 10 learners per class',
    ],
    outcomes: [
      'Stop translating from Telugu and start thinking in English',
      'Clearly pronounce all 44 English sounds including /f/, /z/, /th/,',
      'Correct article and preposition usage naturally',
      'Confident interviews, meetings, and client conversations',
      'Zero shame about English background — genuine fluency built',
    ],
    audience: 'Telugu-medium school graduates, college students from AP and Telangana, IT professionals in Hyderabad and Vijayawada, government employees, homemakers, and NRIs from Telugu-speaking backgrounds.',
    faqs: [
      { q: 'Will the trainer speak in Telugu during class?', a: 'Yes, especially in early modules. As your level rises the class gradually shifts to English-only. By the final module classes are conducted fully in English.' },
      { q: 'I am from a Telugu-medium school and feel ashamed to speak English. Is this safe for me?', a: 'Absolutely. Our classes are small, judgment-free, and built precisely for learners like you. Many of our best success stories started exactly where you are.' },
      { q: 'Do you cover IT and software job interview English?', a: 'Yes, the advanced module includes mock HR interviews, technical round communication, and client-facing English used in Hyderabad and Vijayawada IT offices.' },
      { q: 'Are there offline classes in Hyderabad or Vijayawada?', a: 'The course is fully online, but learners across AP and Telangana attend regularly. Online means you save commute time and learn from home at your scheduled batch time.' },
      { q: 'How is this different from a regular English course?', a: 'Regular courses are taught in English. Ours is taught in Telugu first, English second. That is the whole difference — and for Telugu-medium learners, it changes everything.' },
    ],
  },

  'business-english': {
    title: 'Business English Course Online',
    metaTitle: 'Business English Course Online | Corporate Communication India',
    metaDescription: 'Business English course online for Indian professionals. Master corporate communication, email writing, meetings, and presentations with confidence.',
    tagline: 'Command Every Boardroom, Email, and Client Call With Confidence',
    intro: 'A business English course online is a specialized language program that trains professionals to communicate effectively in corporate environments — meetings, emails, presentations, negotiations, and client calls. At English Speakers, our Business English course is designed for Indian working professionals, job seekers, and team leads who can speak conversational English but lose authority the moment they enter a boardroom, write to a client, or pitch an idea on a video call.',
    quickFacts: { duration: '8–10 Weeks', level: 'Intermediate to Advanced', mode: '100% Online (Live)', outcome: 'Corporate Communication Mastery' },
    sections: [
      {
        heading: 'Why Business English Is a Separate Skill',
        body: 'Conversational English and business English are different languages. Business English requires precision, structure, and tone awareness. A casual "got it, will do" works in chat but fails in a client email. "I want this done" sounds aggressive — "Could we have this completed by Friday?" closes the deal. We teach the exact register that gets results in Indian and global corporate settings without sounding robotic.',
      },
      {
        heading: 'Corporate Email Writing',
        body: 'Subject line strategy, opening lines, structuring requests, escalation emails, declining politely, follow-ups that don\'t feel pushy, and signing off appropriately for Indian and international recipients. You write five real-work emails per week with line-by-line trainer feedback on tone, clarity, and professionalism.',
      },
      {
        heading: 'Meeting Communication',
        body: 'Opening a meeting with authority, presenting an agenda, agreeing and disagreeing diplomatically without losing the relationship, interrupting politely when you have something valuable to add, summarizing discussions, and closing meetings with clear action items that actually get done.',
      },
      {
        heading: 'Presentations',
        body: 'Structuring a deck so the audience stays engaged, opening hooks that command attention in the first 30 seconds, transitioning between slides without losing the thread, handling Q&A confidently including hostile questions, and recovering naturally from mistakes mid-presentation.',
      },
      {
        heading: 'Negotiation and Persuasion',
        body: 'Pushing back on unrealistic deadlines without damaging the relationship, asking for a raise with evidence-based language, negotiating with vendors, influencing cross-functional teams without authority, and framing requests so they land as suggestions rather than demands.',
      },
      {
        heading: 'Indian Workplace Context',
        body: 'Most business English courses are designed for native speakers. Ours is built for Indian professionals who navigate Indian managers, global clients, and the tone-shifting required between the two. We address common Indian corporate phrases that don\'t translate globally — "do the needful," "revert back," "kindly find attached" — and replace them with what global counterparts actually expect.',
      },
      {
        heading: 'Practical Outputs You Can Use at Work',
        body: 'By the end of the course you will have written 40 evaluated corporate emails, delivered three recorded presentations with trainer feedback, run two mock meetings as the chair, and completed a business communication portfolio you can reference at work on Day 1 after the course.',
      },
    ],
    features: [
      '5 real corporate emails written and evaluated every week',
      'Three full recorded presentations with debrief sessions',
      'Two mock meeting facilitations as chair',
      'Email template library for 25 common business scenarios',
      'Client communication training for US, UK, and EU contexts',
      'Negotiation and persuasion role-plays with trainer feedback',
    ],
    outcomes: [
      'Write corporate emails that get responses, not confusion',
      'Chair and contribute to meetings with authority',
      'Deliver presentations that land with Indian and global audiences',
      'Negotiate and influence without damaging relationships',
      'A complete business communication portfolio from the course',
    ],
    audience: 'Software engineers, project managers, sales and account executives, HR professionals, finance and consulting analysts, customer success managers, and entrepreneurs who pitch in English.',
    faqs: [
      { q: 'I can speak English but my emails sound off. Will this course help?', a: 'Yes. The email module alone fixes this within three weeks. You will write five evaluated emails per week and receive line-by-line feedback that transforms your written communication.' },
      { q: 'Do you train for client calls with US and UK clients?', a: 'Yes, including cultural cues, accent comprehension, appropriate level of formality, and the tone differences between US and UK business communication styles.' },
      { q: 'Will this help me get promoted?', a: 'Communication is the most cited reason for promotion delays among Indian professionals. This course directly addresses the specific gaps that hold back capable people.' },
      { q: 'Is this course relevant for non-tech roles?', a: 'Yes. Business English principles apply equally in sales, finance, HR, consulting, operations, and any role that involves written or spoken professional communication.' },
      { q: 'Do I get templates I can use at work immediately?', a: 'Yes — email templates, meeting scripts, and presentation frameworks are part of the course material and are yours to keep and use at work.' },
    ],
  },

  'workplace-english': {
    title: 'Workplace English Training',
    metaTitle: 'Workplace English Training India | Office Communication Skills',
    metaDescription: 'Workplace English training for Indian employees. Master office conversations, team communication, and confident professional speaking.',
    tagline: 'Speak Up at Work, Build Visibility, Grow Your Career',
    intro: 'Workplace English training India is a focused course that prepares employees to communicate confidently in everyday office situations — daily standups, team chats, manager one-on-ones, casual lunch conversations, and cross-team collaboration. At English Speakers, this course is built for Indian employees who have a job already but feel held back because they hesitate to speak up in meetings, avoid the manager\'s desk, or stay silent in team huddles.',
    quickFacts: { duration: '6–8 Weeks', level: 'Beginner to Intermediate', mode: '100% Online (Live)', outcome: 'Confident Office Communication' },
    sections: [
      {
        heading: 'Why Workplace English Is Different From Business English',
        body: 'Workplace English is the daily, conversational, low-stakes English that fills your eight working hours. It is not the polished business English of presentations or the formal language of contracts. It is "Hey, can you help me with this?" "I\'m running a bit late on the report." "Could we move the standup by 15 minutes?" These small interactions are where most Indian employees lose visibility — and visibility is what builds careers.',
      },
      {
        heading: 'Daily Standups and Status Updates',
        body: 'Reporting your work clearly and confidently, flagging blockers without sounding like you are complaining, asking for help in a way that shows initiative not weakness, and updating asynchronously over Slack or Teams in a tone that reads as professional rather than terse.',
      },
      {
        heading: 'Team Conversations',
        body: 'Joining ongoing discussions without awkward pauses, contributing opinions in a way that adds value rather than noise, agreeing and disagreeing without creating conflict, and building the casual small talk that makes people want to work with you and recommend you.',
      },
      {
        heading: 'Manager Conversations',
        body: 'One-on-ones where you actually communicate your contributions, asking for feedback in a way that signals self-awareness, raising concerns without sounding like a complainer, requesting time off professionally, and discussing career growth with language that positions you as ambitious rather than demanding.',
      },
      {
        heading: 'Remote and Video Call English',
        body: 'Video call presence and confidence, managing audio and turn-taking on calls with multiple participants, Slack and Teams written communication including tone, message length, and emoji etiquette, and the specific challenges of communicating across time zones.',
      },
      {
        heading: 'The Confidence Component',
        body: 'Workplace silence is rarely about vocabulary. It is about confidence. We run weekly speaking-up drills, role-plays of difficult workplace scenarios, and recorded simulations where you watch yourself communicate and identify exactly what to fix. Within six weeks most learners report that they no longer rehearse sentences before speaking in meetings.',
      },
      {
        heading: 'Who Should Join',
        body: 'Software developers, BPO and KPO employees, junior and mid-level executives, customer service agents, HR coordinators, and anyone who has been at a job for one to five years but feels their English is holding back their growth, visibility, and promotion prospects.',
      },
    ],
    features: [
      'Weekly speaking-up drills targeting meeting silence',
      'Twice-weekly speaking labs with peer partners',
      'Recorded role-play simulations reviewed by trainers',
      'Phrase bank for 50 common workplace situations',
      'Remote work English: Slack, Teams, and video calls',
      'Small talk training as a taught skill with practice scripts',
    ],
    outcomes: [
      'Speak up in meetings without rehearsing sentences beforehand',
      'Build professional rapport through confident daily communication',
      'Communicate with managers and seniors without hesitation',
      'Write professional Slack and Teams messages effortlessly',
      'Visible, confident presence in both in-person and remote settings',
    ],
    audience: 'Software developers, BPO and KPO employees, junior and mid-level executives, customer service professionals, and any employee at a 1–5 year career stage whose English is limiting their visibility.',
    faqs: [
      { q: 'How is this different from business English?', a: 'Workplace English is daily, casual, peer-level communication. Business English is formal — emails, presentations, negotiations. Most learners benefit from this course first, then move to Business English.' },
      { q: 'I freeze completely in meetings. Will this specifically help?', a: 'Yes. The speaking-up drills and recorded simulations are designed specifically for meeting freeze. Most learners see improvement within two to three weeks of targeted practice.' },
      { q: 'Do you cover Slack and Teams written communication?', a: 'Yes, including appropriate tone, ideal message length, threading etiquette, and when to use emoji versus formal punctuation.' },
      { q: 'Is this relevant for remote workers?', a: 'Especially for remote workers where video presence, async writing, and virtual meeting confidence are the primary visibility tools.' },
      { q: 'Will I learn to make small talk with colleagues?', a: 'Yes. Small talk is treated as a distinct skill with scripts, topics, and practice scenarios — not as something you either have naturally or don\'t.' },
    ],
  },

  'biolingo-program': {
    title: 'BIOLINGO Program — English for Biology Students',
    metaTitle: 'English for Biology Students India | BIOLINGO Science English',
    metaDescription: 'BIOLINGO — English for biology and medical students in India. Master science vocabulary, lab English, and academic communication.',
    tagline: 'Subject-Specific English for Life Science Learners — Vivas, Papers, and Clinics',
    intro: 'English for biology students in India is a subject-specific language program that trains life-science learners to read, write, and speak English in academic and clinical contexts. The BIOLINGO program at English Speakers is built for biology, microbiology, biotechnology, MBBS, BDS, nursing, and pharmacy students whose technical knowledge is strong but whose ability to express that knowledge in English — in vivas, journal articles, case presentations, and conferences — is the bottleneck holding back their grades and careers.',
    quickFacts: { duration: '10–12 Weeks', level: 'Intermediate', mode: '100% Online (Live)', outcome: 'Science Communication Fluency' },
    sections: [
      {
        heading: 'Why Biology Students Need a Specialized Course',
        body: 'A general English course will not teach you to pronounce "deoxyribonucleic acid," structure a case presentation for a ward round, or write the discussion section of a research paper in the IMRaD format. Biology has its own vocabulary, its own writing conventions, and its own oral examination patterns. BIOLINGO addresses all three with science-aware trainers who understand the content, not just the language.',
      },
      {
        heading: 'Scientific Vocabulary and Pronunciation',
        body: 'The 1,000 most-used biology and medical terms with correct pronunciation — from "anastomosis" to "zygote." Latin and Greek roots that decode unfamiliar terms instantly. Weekly vocabulary quizzes embedded in speaking practice so terms are used, not just recognized.',
      },
      {
        heading: 'Reading Scientific Literature',
        body: 'How to read a research paper efficiently — abstract first, then methods, results, and discussion. Skimming review articles for key claims, identifying methodology limitations, and following citation chains to build a literature review. This skill alone transforms how Indian science students engage with their field.',
      },
      {
        heading: 'Writing for Science',
        body: 'Lab report structure, IMRaD journal article writing, abstract preparation under strict word limits, literature review construction, and citation formatting in APA and Vancouver styles. You submit one writing piece per week and receive track-changes feedback that develops your scientific writing voice.',
      },
      {
        heading: 'Viva and Oral Presentation Skills',
        body: 'Answering examiner questions clearly under pressure, structuring case presentations in the SOAP or SBAR format, defending your thesis methodology to a panel, and presenting at student conferences with confidence. We run weekly simulated vivas recorded for your review.',
      },
      {
        heading: 'Clinical Communication for MBBS and Nursing',
        body: 'Patient history taking in English using structured OLDCARTS format, clinical case presentations for ward rounds, professional communication with senior clinicians, and the specific language of multi-disciplinary team meetings in Indian and international hospital settings.',
      },
      {
        heading: 'Who Should Enroll',
        body: 'B.Sc and M.Sc biology students, MBBS and BDS students preparing for vivas and USMLE/PLAB communication, nursing students preparing for NCLEX or NMC, pharmacy students, biotechnology and life-science researchers, and aspirants for international study or research positions in life sciences.',
      },
    ],
    features: [
      '1,000 biology and medical terms with pronunciation guides',
      'Weekly simulated viva practice with recorded debrief',
      'IMRaD scientific writing with track-changes feedback',
      'Latin and Greek root decoding system',
      'Clinical communication track for MBBS and nursing learners',
      'Research paper reading method taught in first two weeks',
    ],
    outcomes: [
      'Pronounce complex scientific terminology confidently',
      'Write lab reports, abstracts, and literature reviews',
      'Perform in vivas and defend research with clarity',
      'Read and summarize research papers efficiently',
      'Present clinical cases in internationally recognized formats',
    ],
    audience: 'B.Sc and M.Sc biology students, MBBS and BDS students, nursing students targeting NCLEX or NMC, pharmacy students, and life-science researchers aspiring to international study or publication.',
    faqs: [
      { q: 'Will this help me with NEET PG or USMLE communication sections?', a: 'The course strengthens the English foundation required for both. It is not a NEET PG or USMLE exam-strategy course, but the scientific English skills directly support your performance.' },
      { q: 'I am a B.Sc Botany student. Is BIOLINGO relevant for me?', a: 'Yes. The vocabulary modules cover all life sciences including botany, ecology, and plant physiology.' },
      { q: 'Do you teach research paper writing from scratch?', a: 'Yes — IMRaD structure, abstract writing, discussion section construction, and citation formatting are all core modules with weekly evaluated submissions.' },
      { q: 'Is the course suitable for nursing students preparing for NMC?', a: 'Yes. We have a dedicated clinical communication track for nursing learners that covers patient history taking and ward round language.' },
      { q: 'Will I get a certificate I can show to my college or employer?', a: 'You receive a course completion certificate from English Speakers. Recognition at your specific institution depends on their policies.' },
    ],
  },

  'writing-skills': {
    title: 'English Writing Skills Course',
    metaTitle: 'English Writing Skills Course Online | Essays, Emails & More',
    metaDescription: 'English writing skills course online. Master essays, academic writing, and professional content writing with structured feedback from expert trainers.',
    tagline: 'Write Clearly, Confidently, Correctly — Across Every Format',
    intro: 'An English writing skills course online is a structured program that trains learners to write clear, grammatical, and well-organized English across academic, professional, and creative formats. At English Speakers, this course is built for students who lose marks on essays, professionals whose emails get misread, content aspirants entering blogging and copywriting, and anyone who has ever stared at a blank page knowing what they want to say but unable to put it on paper.',
    quickFacts: { duration: '8–10 Weeks', level: 'Beginner to Advanced', mode: '100% Online (Live)', outcome: 'Confident, Error-Free Writing' },
    sections: [
      {
        heading: 'Why Writing Is the Hardest English Skill',
        body: 'Writing forces precision. In speech, tone and gestures cover gaps. In writing, every word is exposed. This is why even fluent English speakers freeze when they have to write. Writing also reveals grammar weaknesses that conversation hides, and structural thinking gaps that affect how readers perceive your competence.',
      },
      {
        heading: 'Sentence-Level Writing',
        body: 'Subject-verb agreement, tense consistency, punctuation used correctly not decoratively, sentence variety that prevents monotony, eliminating wordiness, and the four sentence types — simple, compound, complex, and compound-complex — that every effective writer deploys deliberately.',
      },
      {
        heading: 'Paragraph Construction',
        body: 'Topic sentences that make a specific claim, supporting evidence that proves rather than repeats the claim, transitions that guide the reader forward, and the critical difference between description, explanation, and argumentation.',
      },
      {
        heading: 'Essay Writing',
        body: 'Five-paragraph essays for exam contexts, argumentative essays that take and defend a position, expository writing that explains clearly, comparison essays that go beyond surface contrast, and the IELTS Task 2 format for candidates who need exam writing skills.',
      },
      {
        heading: 'Academic Writing',
        body: 'Research papers with IMRaD structure, literature reviews that synthesize rather than summarize, dissertation chapter construction, citation styles in APA, MLA, and Vancouver, and the formal academic tone that avoids contractions, first person, and vague language.',
      },
      {
        heading: 'Professional and Digital Writing',
        body: 'Corporate emails that get responses, reports and proposals with executive summaries, meeting minutes that are actionable, LinkedIn posts that position you as a thought leader, blog posts with SEO awareness, social media captions, and product descriptions — all with distinct tone and structure requirements.',
      },
      {
        heading: 'How Feedback Works',
        body: 'Every learner submits two pieces of writing per week. Trainers return them with line-by-line track-changes feedback, a rubric score across grammar, structure, clarity, and tone, and a personalized improvement focus for the next submission. Over eight weeks you complete 16 evaluated pieces — the equivalent of a full semester-long writing workshop.',
      },
    ],
    features: [
      'Two evaluated writing submissions per week — 16 total',
      'Line-by-line track-changes feedback on every submission',
      'Rubric scoring across grammar, structure, clarity, and tone',
      'Sample essay portfolio covering all major formats',
      'Peer review circle for community feedback',
      'Downloadable grammar reference handbook',
    ],
    outcomes: [
      'Write error-free, well-structured essays and reports',
      'Professional emails that communicate clearly first time',
      'Academic writing skills for assignments and research papers',
      'Content writing foundation for blogging and copywriting careers',
      'Noticeable improvement within four weeks of consistent submission',
    ],
    audience: 'College students preparing for exams and assignments, IELTS and CELPIP candidates strengthening writing modules, working professionals, freelance writers, and graduate students working on research papers or dissertations.',
    faqs: [
      { q: 'I struggle with grammar. Will this course teach me grammar?', a: 'Yes. Grammar is taught in the context of writing — every rule is introduced because a piece of your writing broke it, making the lesson immediately relevant and memorable.' },
      { q: 'Do you help with real college essay assignments?', a: 'Yes. You can bring your actual college assignments for trainer feedback sessions during the course.' },
      { q: 'Will this course help me become a content writer?', a: 'The content writing module gives you the foundation. Combine it with portfolio building and consistent practice for a content writing career.' },
      { q: 'Is academic citation (APA, MLA) covered in the course?', a: 'Yes — APA, MLA, and Vancouver formats are introduced with practice examples so you can apply them independently.' },
      { q: 'How quickly will my writing improve?', a: 'Most learners see noticeable and measurable improvement within four weeks of consistent bi-weekly submissions and trainer feedback.' },
    ],
  },

  'phonetics': {
    title: 'English Phonetics Course Online',
    metaTitle: 'English Phonetics Course Online India | Pronunciation Training',
    metaDescription: 'English phonetics course online India. Fix pronunciation, learn the 44 sounds, and speak clearly with structured accent training.',
    tagline: 'Speak Clearly, Be Understood Everywhere — Master the 44 Sounds of English',
    intro: 'An English phonetics course online India is a pronunciation-focused program that teaches the 44 sounds of English, word stress, sentence rhythm, and intonation patterns. At English Speakers, this course is built for Indian learners who can read and write English fluently but get asked "Sorry, can you repeat that?" on calls. Phonetics is not about losing your Indian identity — it is about being clearly understood by anyone, anywhere.',
    quickFacts: { duration: '6–8 Weeks', level: 'All Levels', mode: '100% Online (Live)', outcome: 'Clear, Neutral Pronunciation' },
    sections: [
      {
        heading: 'Why Pronunciation Matters More Than Grammar',
        body: 'A grammatical mistake is forgivable — the listener fills in the gap. A mispronounced word stops the entire conversation. Most Indian English communication issues abroad — at airports, in university classrooms, on client calls — are pronunciation issues, not vocabulary or grammar issues. Phonetics fixes this at the source rather than treating the symptoms.',
      },
      {
        heading: 'The 20 Vowel Sounds of English',
        body: 'Short vowels, long vowels, and diphthongs that Indian languages simply do not have. We drill the differences between "ship" and "sheep," "bad" and "bed," "full" and "fool," "caught" and "coat" — the minimal pairs that cause the most misunderstandings in real conversations.',
      },
      {
        heading: 'The 24 Consonant Sounds of English',
        body: 'Voiced and unvoiced pairs, the dental "th" that Indian languages do not have, the "v" vs "w" confusion that plagues most Indian speakers, the "f" vs "p" issue in Telugu, and the "z" sound that becomes "j" or "s" in many Indian regional accents.',
      },
      {
        heading: 'Word Stress — The Hidden Key',
        body: '"PHOtograph," "phoTOgrapher," "photoGRAPHic" — same root, three stress patterns, different meaning signals. Indian English typically flattens stress across syllables, which is the single biggest cause of intelligibility problems. We retrain your stress placement word by word using the most common 500 words in spoken English.',
      },
      {
        heading: 'Sentence Stress and Rhythm',
        body: 'English is a stress-timed language — Indian languages are syllable-timed. This difference in rhythm is why Indian English sounds "different" to international ears even when every word is correct. We retrain your rhythm so that key words pop and function words compress, the way native speakers do naturally and unconsciously.',
      },
      {
        heading: 'Intonation — The Music of English',
        body: 'Rising and falling tones, question intonation that differs between yes/no and wh-questions, emphasis intonation that changes meaning without changing words, and the subtle pitch changes that signal sarcasm, genuine interest, doubt, and certainty. Intonation is what makes English sound alive rather than flat.',
      },
      {
        heading: 'Who Should Join',
        body: 'Call center and IT professionals on US and UK calls, IELTS speaking aspirants where pronunciation is 25% of the score, voice-over artists, teachers and trainers, students going abroad for higher education, and anyone who is fluent in English but tired of being misunderstood or asked to repeat themselves.',
      },
    ],
    features: [
      'Full IPA (International Phonetic Alphabet) chart training',
      'Audio reference library with 500 commonly mispronounced words',
      'Weekly diagnostic recording reviewed by trainer',
      'Minimal pair drills targeting Indian accent-specific issues',
      'Mouth and tongue positioning demonstrations',
      'Recording app for daily self-practice between classes',
    ],
    outcomes: [
      'Pronounce all 44 English sounds clearly and correctly',
      'Natural word stress that makes speech easily intelligible',
      'Sentence rhythm that sounds fluent to international ears',
      'Stop being asked to repeat yourself on calls',
      'IELTS speaking pronunciation band improvement',
    ],
    audience: 'IT and call center professionals, IELTS speaking candidates, voice-over artists, teachers and trainers, students going abroad, and any fluent English speaker whose pronunciation is limiting their impact.',
    faqs: [
      { q: 'Will I lose my Indian accent after this course?', a: 'No. The goal is clarity and intelligibility, not accent erasure. You will sound like a clearer, more confident version of yourself — still recognizably Indian, universally understood.' },
      { q: 'How long until people stop asking me to repeat myself?', a: 'Most learners with regular daily practice report dramatic improvement by week 4. The key is consistent recording and playback practice outside class hours.' },
      { q: 'Is learning the IPA difficult?', a: 'The working basics are taught in the first two weeks and become intuitive quickly. You do not need to become an IPA scholar — you need enough to self-correct your pronunciation independently.' },
      { q: 'Will this course help my IELTS speaking band?', a: 'Yes. Pronunciation is one of the four IELTS speaking criteria, contributing 25% of your speaking score. Targeted phonetics work directly improves this component.' },
      { q: 'Can I take this course if I am already fluent?', a: 'Yes. Many fluent speakers join specifically to fix residual pronunciation habits that formed in childhood and were never corrected.' },
    ],
  },

  'english-literature': {
    title: 'English Literature MA Preparation',
    metaTitle: 'English Literature MA Preparation Online | Entrance & Study',
    metaDescription: 'English Literature MA preparation online. Master literary criticism, periods, and entrance exam syllabus with expert-led structured coaching.',
    tagline: 'Crack MA English Entrance Exams — DU, JNU, HCU, EFLU and State CETs',
    intro: 'English Literature MA preparation online is a comprehensive program that trains graduates for M.A. English entrance examinations and deepens their understanding of literary periods, criticism, and theory. At English Speakers, this course supports candidates appearing for university entrance tests at DU, JNU, HCU, EFLU, and state university CETs, as well as literature enthusiasts who want a structured, scholarly study path without enrolling in a full degree program.',
    quickFacts: { duration: '4–6 Months', level: 'Advanced', mode: '100% Online (Live)', outcome: 'MA Entrance Readiness & Literary Mastery' },
    sections: [
      {
        heading: 'Who This Course Serves',
        body: 'Final-year B.A. English students preparing for competitive entrance exams, graduates from non-literature backgrounds switching to M.A. English, working professionals pursuing M.A. English through distance mode, NET/SET aspirants building their literature foundation, and self-learners who love literature and want guided scholarly depth beyond casual reading.',
      },
      {
        heading: 'Pillar 1: Literary Periods',
        body: 'Old English and Middle English from Beowulf to Chaucer, the Renaissance and Shakespeare in historical context, Restoration and 18th Century including Dryden, Pope, and Swift, Romanticism with Wordsworth, Keats, Shelley, and Byron, the Victorian Era from Tennyson to Hardy, Modernism with Eliot, Woolf, and Joyce, Postmodernism and Contemporary Literature with global perspectives.',
      },
      {
        heading: 'Pillar 2: Genres and Forms',
        body: 'Poetry covering epic, lyric, sonnet, dramatic monologue, and elegy with close reading methodology. Drama covering tragedy, comedy, problem play, absurdist, and Theatre of the Absurd. Prose fiction covering the novel\'s development, short story form, and novella. Non-fiction including the essay tradition, memoir, and literary criticism as a genre.',
      },
      {
        heading: 'Pillar 3: Literary Criticism and Theory',
        body: 'Classical criticism from Aristotle\'s Poetics through Longinus, neoclassical rules and Romantic rebellion, New Criticism and close reading, structuralism and Saussurean linguistics, post-structuralism and Derrida, feminist criticism from Woolf to Butler, postcolonialism with Said and Spivak, Marxist criticism with Eagleton, and reader-response theory.',
      },
      {
        heading: 'Pillar 4: Indian Writing in English',
        body: 'Pre-independence voices including Tagore and Michael Madhusudan Dutt, the post-independence novel with R.K. Narayan, Raja Rao, and Anita Desai, the international breakthrough with Salman Rushdie and Arundhati Roy, contemporary voices including Amitav Ghosh, Jhumpa Lahiri, and Kiran Desai, and emerging writers redefining the tradition.',
      },
      {
        heading: 'Entrance Exam Strategy',
        body: 'We map the syllabus of major M.A. English entrance exams and identify high-yield topics that appear repeatedly. Weekly mock objective tests, past-paper analysis sessions, and essay-writing practice for descriptive sections. You know exactly what each target university tests and how to deliver it.',
      },
      {
        heading: 'Reading Method for Literature',
        body: 'Literature is interpretation, not memorization. We teach close reading of primary texts, contextual reading using period history and author biography, and theoretical reading that applies a critical lens. You learn to engage the same text from multiple angles — exactly what entrance examiners and M.A. coursework demand.',
      },
    ],
    features: [
      'Syllabus mapped to DU, JNU, HCU, EFLU, and state CET entrance exams',
      'Weekly mock objective tests with past-paper analysis',
      'Critical summaries of all major literary works',
      'Weekly discussion seminars for textual debate',
      'Trainer-evaluated essays on literary criticism',
      'Trainers with M.A./Ph.D. qualifications and university teaching experience',
    ],
    outcomes: [
      'Complete mastery of literary periods from Old English to Contemporary',
      'Confident application of eight major literary theories',
      'Exam-ready knowledge of Indian Writing in English',
      'Essay writing skill for descriptive entrance exam sections',
      'Foundation for NET/SET English literature preparation',
    ],
    audience: 'Final-year B.A. English graduates, non-literature graduates switching to M.A. English, distance M.A. enrollees, NET/SET aspirants, and serious literature enthusiasts seeking structured scholarly study.',
    faqs: [
      { q: 'Will this course specifically help me crack JNU or DU MA English entrance?', a: 'Yes. The syllabus is mapped to all major university entrances, past papers are analyzed in detail, and mock tests replicate the actual format and difficulty.' },
      { q: 'I am a non-literature graduate. Can I join this course?', a: 'Yes. The course assumes a strong English reading foundation but does not assume prior literature study. We start each period and theory from first principles.' },
      { q: 'Do you cover Indian Writing in English in depth?', a: 'Yes — it is one of the four core pillars of the course and given equal weight to British and American literature given its prominence in entrance exams.' },
      { q: 'Will I write evaluated essays during the course?', a: 'Yes. Weekly trainer-evaluated essays on literary topics are central to the program, developing both your critical thinking and your exam writing speed.' },
      { q: 'Is this course useful for NET English aspirants?', a: 'The literature foundation directly supports NET preparation. For NET-specific exam strategy, we recommend combining this course with dedicated NET coaching.' },
    ],
  },

  'teaching-for-success': {
    title: 'Teaching for Success — English Trainer Program',
    metaTitle: 'English Teaching Skills Course India | TEFL & Trainer Program',
    metaDescription: 'English teaching skills course India. Train to become an effective spoken English teacher with TEFL methodology, lesson design, and classroom skills.',
    tagline: 'Become a Confident, Certified English Trainer — Methodology, Lessons, and Practice',
    intro: 'An English teaching skills course India is a professional training program that prepares aspiring trainers to teach spoken English, grammar, and communication skills effectively. At English Speakers, the Teaching for Success course is built for teachers, tutors, freelance educators, and career switchers who want to enter the booming English training industry in India and abroad — armed with proven methodology, lesson design skills, and the classroom confidence that separates great teachers from average ones.',
    quickFacts: { duration: '8–10 Weeks', level: 'Intermediate to Advanced', mode: '100% Online (Live)', outcome: 'Teaching Certification & Classroom Confidence' },
    sections: [
      {
        heading: 'Why English Teaching Is a Strong Career Path in India',
        body: 'India has the largest English-learning population in the world. From Tier-2 city training centers to global online platforms, qualified English trainers earn well, work flexibly, and are in constant demand. The field is also crowded with underprepared teachers — which means trained, certified educators stand out immediately and command higher fees.',
      },
      {
        heading: 'Teaching Methodology',
        body: 'The communicative approach, task-based learning, the PPP (Presentation, Practice, Production) model, the audio-lingual method, and how to choose between methodologies based on learner level, class size, and learning goal. You learn not just what to do in a classroom but why — so you can adapt when the plan doesn\'t survive contact with students.',
      },
      {
        heading: 'Lesson Planning',
        body: 'How to plan a 60-minute class with an opening hook, clear learning objectives, varied activities, practice stages, and a meaningful closure. You design and submit 12 complete lesson plans during the course — each reviewed and returned with specific suggestions. By week 8 you have a lesson plan library ready to teach.',
      },
      {
        heading: 'Grammar and Vocabulary Teaching',
        body: 'Teaching tenses, articles, prepositions, modals, and conditionals using examples, contrast, and meaningful communicative practice — never through rule recitation that students memorize and forget. Vocabulary in context, word stress instruction, pronunciation drills, flashcard design, gamification, and spaced repetition systems.',
      },
      {
        heading: 'Classroom Management',
        body: 'Handling shy learners who won\'t speak, dominant learners who shut others down, mixed-level classes with dramatically different abilities, disengaged learners, and the unique challenges of online classroom management including managing audio, attention, and participation on Zoom and Google Meet.',
      },
      {
        heading: 'Practical Teaching Practice',
        body: 'You teach four supervised mini-lessons during the course — each recorded, reviewed, and scored by senior trainers against a professional rubric. By the end you have four teaching demonstration videos and a portfolio of 12 lesson plans that you can show prospective employers, online platforms, or private students.',
      },
      {
        heading: 'Career Outcomes and Placement',
        body: 'Graduates from this course work as online English trainers on platforms like Preply and iTalki, school spoken English teachers, corporate communication trainers, YouTube/Instagram English content creators, and curriculum designers. Top performers may be offered trainer positions at English Speakers directly.',
      },
    ],
    features: [
      'TEFL methodology foundation (communicative, task-based, PPP)',
      '12 lesson plans designed, submitted, and reviewed',
      'Four live supervised teaching demonstrations with scored feedback',
      'Teaching demonstration video portfolio to show employers',
      'Online classroom management for Zoom and Google Meet',
      'Assessment and feedback design principles',
    ],
    outcomes: [
      'Teach spoken English confidently to adults and professionals',
      'Design engaging 60-minute lessons from scratch',
      'Manage mixed-level and challenging classroom situations',
      'Portfolio of 12 lesson plans and 4 teaching videos',
      'English Speakers course completion certificate',
    ],
    audience: 'Aspiring English trainers, school teachers expanding into spoken English, B.Ed graduates, English content creators, freelance tutors, and corporate trainers entering the language training space.',
    faqs: [
      { q: 'Is this a TEFL-equivalent certification?', a: 'The course covers TEFL methodology comprehensively and prepares you for recognized TEFL certification. It is an English Speakers certificate, not a TEFL-issuing body certificate.' },
      { q: 'Can I teach English without a B.Ed after completing this course?', a: 'Yes for private coaching, online platforms, and corporate training. Government school positions in India require a B.Ed regardless of other certifications.' },
      { q: 'Do I need to be a perfectly fluent English speaker to join?', a: 'You need intermediate-to-advanced spoken English fluency. A brief assessment is done at enrollment to confirm readiness.' },
      { q: 'Will I learn specifically how to teach online?', a: 'Yes. Online classroom management, video presence, digital whiteboard use, and keeping remote learners engaged are core modules in the program.' },
      { q: 'Can I get a job at English Speakers after completing this course?', a: 'Top performers are considered for trainer positions at English Speakers. We also provide resume-building support and guidance for platforms like Preply, iTalki, and Cambly.' },
    ],
  },

  'phonics-and-speaking-skills': {
    title: 'Phonics & Speaking Skills for Kids',
    metaTitle: 'Phonics Classes for Kids Online India | Ages 4–12',
    metaDescription: 'Phonics classes for kids online India. Fun, structured English and phonics program for children aged 4–12. Trained kids\' instructors, live classes.',
    tagline: 'Build Your Child\'s English Foundation — Phonics, Reading, and Speaking Confidence',
    intro: 'Phonics classes for kids online India is a structured English program that teaches children aged 4 to 12 the sounds, blending, reading, and speaking skills that turn them into confident communicators. At English Speakers, the Phonics & Speaking Skills program is designed for Indian parents who want their children to read fluently, pronounce clearly, and speak English with confidence — without the rote memorization that ruins most early English learning.',
    quickFacts: { duration: '3–6 Months', level: 'Ages 4–12', mode: '100% Online (Live, Max 6 per batch)', outcome: 'Confident Reading & Speaking' },
    sections: [
      {
        heading: 'Why Phonics Is the Right Foundation for Children',
        body: 'Children who learn to read by memorizing whole words struggle when they encounter new words. Children who learn phonics — the sound system behind English letters — can decode any word they meet for the rest of their lives. This is why phonics is the global gold standard for early English literacy, used in the UK, Australia, and Canada. Our program brings that standard to Indian homes through engaging live online classes built around how children actually learn.',
      },
      {
        heading: 'Level 1 — Phonics Foundation (Ages 4–6)',
        body: 'Letter sounds (not letter names), single-letter phonics A to Z, blending two and three-letter CVC words, the 100 most common sight words, picture-word association games, and reading short three-word and four-word sentences aloud. By the end of Level 1, your child reads simple books independently.',
      },
      {
        heading: 'Level 2 — Reading and Confidence (Ages 7–9)',
        body: 'Digraphs (sh, ch, th, ph, wh), vowel teams (ai, oa, ee, oo, ou), silent letters, magic-e patterns, story reading with comprehension questions, spelling practice in context, and basic sentence writing. Children at this level typically advance one to two reading levels above their school grade.',
      },
      {
        heading: 'Level 3 — Speaking and Fluency (Ages 10–12)',
        body: 'Conversational English for school and daily life, presentation skills for class speeches and debates, storytelling with structure and confidence, public speaking fundamentals, vocabulary expansion through reading and discussion, grammar in use rather than grammar as rules, and creative writing with imaginative prompts.',
      },
      {
        heading: 'How Classes Work for Children',
        body: 'Every class is 45 minutes — calibrated to children\'s attention spans with built-in movement and game breaks. Maximum 6 children per batch so every child reads aloud, speaks, and gets individual attention in every single session. No child sits silently. Sessions use songs, stories, interactive games, screen-share whiteboards, and engaging visual flashcards.',
      },
      {
        heading: 'Why Indian Parents Choose English Speakers for Kids',
        body: 'Our kids\' trainers have specific child-pedagogy training — teaching a six-year-old requires different skills than teaching an adult, and our trainers are qualified for exactly this. Classes are in small safe batches with no stranger danger, monthly written progress reports for parents, and a WhatsApp group where parents share homework support.',
      },
      {
        heading: 'Parent Involvement — Easy and Effective',
        body: 'We share weekly home-practice sheets, simple five-minute reading logs, and a parent guide so you can support your child between classes — even if your own English is not fluent. Parents do not need to teach; they only need to listen and encourage. A child who reads aloud to a parent for five minutes every day progresses twice as fast.',
      },
    ],
    features: [
      'Maximum 6 children per batch — every child speaks every class',
      'Trainers with specific child-pedagogy qualifications',
      'Monthly written progress reports for parents',
      'Weekly home-practice sheets and reading logs',
      'Songs, games, and stories — zero boring drills',
      'After-school evening and weekend morning batches',
    ],
    outcomes: [
      'Independent reading at or above grade level',
      'Clear pronunciation that teachers and family notice immediately',
      'Confident self-introduction and conversation in English',
      'Love for the English language rather than fear of it',
      'Level completion certificate with detailed progress report',
    ],
    audience: 'Parents of children aged 4 to 12 in India looking for an online phonics and spoken English program with trained children\'s instructors and small class sizes.',
    faqs: [
      { q: 'My child is in Class 1 and cannot read English at all. Will this course help?', a: 'Yes. Level 1 starts with alphabet sounds — exactly where a non-reader needs to begin. Many of our most successful learners started at this exact point.' },
      { q: 'How long is each class?', a: '45 minutes with built-in interactive breaks and games to keep children engaged. Longer classes reduce attention and retention in young learners.' },
      { q: 'How many children are in one class?', a: 'Maximum 6 children per batch. This ensures every child reads aloud, speaks, and gets individual attention in every single session.' },
      { q: 'My child is very shy and refuses to speak. Will the trainer force them?', a: 'No. Our kids\' trainers are specifically trained to draw out shy children gently using games and encouragement — never pressure. Most shy children open up within two to three classes.' },
      { q: 'Will my child receive a certificate?', a: 'Yes, at the end of each level your child receives a completion certificate along with a detailed progress report covering reading level, pronunciation, and speaking confidence.' },
    ],
  },
};

function getCourseData(slug: string): CourseData | null {
  return COURSE_CONTENT[slug] || null;
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseData(slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: `${course.title.toLowerCase()}, online english course india, english speakers`,
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: `https://englishspeakers.in/courses/${slug}`,
      siteName: 'English Speakers',
      type: 'website',
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseData(slug);
  if (!course) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: course.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const waLink = `https://wa.me/919849668255?text=${encodeURIComponent('Hello English Speakers Team, I would like to know more about your ' + course.title + ' course.')}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Target className="w-3.5 h-3.5" /> Premium Program
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            {course.title}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            {course.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={waLink} target="_blank"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              Book Free Demo Class <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={waLink} target="_blank"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              <MessageCircle className="w-5 h-5 text-green-400" /> Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS ── */}
      <section className="py-12 px-4 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: 'Duration', value: course.quickFacts.duration },
            { icon: Star, label: 'Level', value: course.quickFacts.level },
            { icon: Monitor, label: 'Mode', value: course.quickFacts.mode },
            { icon: Award, label: 'Outcome', value: course.quickFacts.outcome },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10">
              <Icon className="w-6 h-6 text-blue-400 mb-3" />
              <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-1">{label}</span>
              <span className="text-sm font-bold text-white leading-snug">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">{course.intro}</p>
        </div>
      </section>

      {/* ── CONTENT SECTIONS ── */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-14">
          {course.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.heading}</h2>
              {section.subheading && (
                <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-3">{section.subheading}</p>
              )}
              <p className="text-white/65 leading-relaxed text-[17px]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES + OUTCOMES ── */}
      <section className="py-20 px-4 bg-white/[0.02] border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-400" /> Key Features
            </h2>
            <div className="space-y-3">
              {course.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-400" /> What You Will Achieve
            </h2>
            <div className="space-y-3 mb-10">
              {course.outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span className="text-white/70 leading-relaxed">{o}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-blue-900/10 border border-blue-500/20">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" /> Who Is This For?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{course.audience}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-white/50 text-center mb-12">Everything you need to know before enrolling</p>
          <div className="space-y-5">
            {course.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-base font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-4 relative overflow-hidden border-t border-white/5 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/25 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Book Your Free Demo Class Today</h2>
          <p className="text-white/55 text-lg mb-10">Join thousands of learners across India who transformed their English with English Speakers.</p>
          <Link href={waLink} target="_blank"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <MessageCircle className="w-6 h-6 text-green-600" /> Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  );
}

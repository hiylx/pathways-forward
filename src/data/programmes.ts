export interface Programme {
  slug: string;
  title: string;
  short: string;
  description: string;
  eligibility: string;
  access: string;
}

// Six programmes (Research merged into Digital Signposting & Research)
export const programmes: Programme[] = [
  {
    slug: "inclusive-steam",
    title: "Inclusive STEAM Education",
    short: "Coding, robotics, maths, engineering, digital and applied science.",
    description:
      "Group sessions and personalised sessions tailored to individual learner needs, including SEND and SEMH. Session length, pace and format are adapted to suit different learning styles and attention spans. We also support social and communication skills development.",
    eligibility:
      "Disadvantaged children and young people, home-educated learners, SEND and SEMH learners, and adults returning to learning.",
    access:
      "Workshops, structured programmes and community sessions in Lancaster. Online options available. All facilitators are appropriately qualified and DBS-checked.",
  },
  {
    slug: "careers-skills-pathways",
    title: "Careers & Skills Pathways",
    short: "Clear routes into skills-shortage sectors and self-employment.",
    description:
      "Information, guidance and structured progression routes into teaching, healthcare, engineering, digital industries and green energy. Includes work experience, apprenticeships, training programmes and higher education signposting.",
    eligibility: "Anyone exploring or changing career, especially those facing barriers to skilled employment.",
    access: "Self-referral via Get Support, or referral from a partner school, college or community organisation.",
  },
  {
    slug: "education-employer-partnerships",
    title: "Education & Employer Partnerships",
    short: "Workshops, mentoring and real-world STEAM exposure.",
    description:
      "We work with universities, colleges, schools and employers to deliver workshops, mentoring and work-related learning. We collaborate with internal student support teams to coordinate academic, wellbeing and employability support, and offer a structured innovation and entrepreneurship pathway where feasible.",
    eligibility: "Schools, colleges, universities and employers in Lancaster and the surrounding area.",
    access: "Get in touch via the Contact & Partners page to discuss collaboration.",
  },
  {
    slug: "digital-signposting-research",
    title: "Digital Signposting & Research",
    short: "Maslow-framed assessment, holistic referrals and evidence-based action plans.",
    description:
      "An accessible digital platform providing personalised guidance on education, training, welfare, health and employment services. Our initial assessment uses Maslow's hierarchy of needs to check that essentials such as nutrition, GP registration, housing, finances and identification are in place before progression. Anonymised, ethically managed data is used to identify gaps in provision and inform recommendations to local authorities and partners.",
    eligibility: "Open to all beneficiaries. Safeguarding procedures are followed where vulnerabilities are identified.",
    access: "Begin your assessment from the Get Support page.",
  },
  {
    slug: "one-to-one-mentoring",
    title: "One-to-One Mentoring",
    short: "Personalised online mentoring for those facing multiple barriers.",
    description:
      "Mentoring delivered primarily online to maximise accessibility for those with caring responsibilities, mobility challenges or geographic barriers. Each plan is informed by the digital assessment and includes practical signposting where useful.",
    eligibility:
      "Individuals facing multiple barriers to education, training or employment.",
    access: "Self-refer via Get Support, or be referred by a partner organisation.",
  },
  {
    slug: "inclusive-employment",
    title: "Inclusive Employment & Work Experience",
    short: "Flexible, accessible roles and a future community workspace.",
    description:
      "Where possible we create flexible roles suited to disabled and disadvantaged people, including remote work experience placements, traineeships and apprenticeship-style opportunities alongside in-person roles. We also seek to establish a community workspace as a safe, inclusive environment for learning and enterprise.",
    eligibility:
      "Disabled and disadvantaged individuals seeking accessible work experience or employment.",
    access: "Register interest via the Contact page or as part of your Get Support assessment.",
  },
];

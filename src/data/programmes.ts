export interface Programme {
  slug: string;
  name: string;
  title: string;
  short: string;
  description: string;
  eligibility: string;
  access: string;
}

// Seven programmes from the ReviveUK EdTech poster
export const programmes: Programme[] = [
  {
    slug: "waymark",
    name: "Waymark",
    title: "Assessment Programme",
    short:
      "Maslow-framed needs assessment that prioritises support and guides every individual onto the right pathway.",
    description:
      "Beneficiaries are assessed for needs using Maslow's hierarchy so that essentials such as nutrition, housing, finances, health and identification are in place before progression. The assessment prioritises support and guides each individual onto the right ReviveUK pathway.",
    eligibility:
      "Open to all beneficiaries. Safeguarding procedures are followed where vulnerabilities are identified.",
    access: "Begin your assessment from the Get Support page.",
  },
  {
    slug: "sanctum",
    name: "Sanctum",
    title: "Support Programme",
    short:
      "A safe and supportive environment focused on wellbeing, confidence and personal growth.",
    description:
      "Sanctum provides a safe, welcoming space focused on wellbeing, confidence and personal growth. Sessions support social and emotional development alongside practical signposting where useful.",
    eligibility:
      "Individuals who would benefit from wellbeing-focused support, including those facing isolation or low confidence.",
    access: "Self-refer via Get Support, or be referred by a partner organisation.",
  },
  {
    slug: "scriptorium",
    name: "Scriptorium",
    title: "Children Programming",
    short:
      "Creative coding and digital skills including Scratch, Python, HTML, CSS and Web Development.",
    description:
      "Creative coding and digital skills sessions for children and young people, covering Scratch, Python, HTML, CSS and Web Development. Sessions are adapted to ability, including SEND and SEMH learners, with pace and format tailored to each group.",
    eligibility:
      "Children and young people, including home-educated, SEND and SEMH learners.",
    access: "Workshops and structured programmes in Lancaster, with online options available.",
  },
  {
    slug: "lyceum",
    name: "Lyceum",
    title: "Academic Support",
    short:
      "Structured academic coaching to strengthen knowledge, improve performance and build confidence.",
    description:
      "Structured academic coaching designed to strengthen subject knowledge, improve performance and build confidence. Delivered one-to-one or in small groups, with plans informed by the Waymark assessment.",
    eligibility: "Learners of all ages seeking targeted academic support.",
    access: "Self-refer via Get Support, or be referred by a school, college or partner organisation.",
  },
  {
    slug: "gatehouse",
    name: "Gatehouse",
    title: "International Student Support",
    short:
      "Supporting international learners with transition, integration and academic success in the UK.",
    description:
      "Tailored support for international students navigating UK education, including transition guidance, cultural integration, academic success and signposting to wider services.",
    eligibility: "International students and skilled migrants in the UK.",
    access: "Self-refer via Get Support, or via your university or college support team.",
  },
  {
    slug: "guildhall",
    name: "Guildhall",
    title: "Employment Support",
    short:
      "Developing employability skills, career readiness and pathways to meaningful employment.",
    description:
      "Guildhall develops employability skills and career readiness, with clear pathways into skills-shortage sectors, apprenticeships, training and self-employment. Includes work experience and inclusive, flexible opportunities where possible.",
    eligibility:
      "Anyone exploring or changing career, especially those facing barriers to skilled employment.",
    access: "Self-referral via Get Support, or referral from a partner organisation.",
  },
  {
    slug: "consortium",
    name: "Consortium",
    title: "Schools & University Partnerships",
    short:
      "Working with schools, colleges, universities and partners to design and deliver impactful education programmes.",
    description:
      "We collaborate with schools, colleges, universities and employers to co-design and deliver workshops, mentoring and work-related learning. Partnerships also support innovation, entrepreneurship and joined-up student support.",
    eligibility: "Schools, colleges, universities and employers in Lancaster and the surrounding area.",
    access: "Get in touch via the Contact page to discuss collaboration.",
  },
];

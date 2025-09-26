// Report content data model
window.REPORT_DATA = {
  title: "Montclair High School vs Seton Hall Preparatory School",
  subtitle: "Comprehensive Analysis and Comparison Report",
  execSummary: [
    "This comprehensive analysis compares Montclair High School and Seton Hall Preparatory School using extensive data from official school records, college placement statistics, student surveys, and academic research.",
    "The key finding is that both schools achieve remarkably similar elite college placement rates despite the $115,000 cost difference, with Montclair High School at approximately 2.8% Ivy League placement and Seton Hall Prep at 2.67%."
  ],
  profiles: {
    montclair: {
      name: "Montclair High School",
      type: "Public Comprehensive High School",
      enrollment: "1,961 students (grades 9-12)",
      annualCost: "$0 (public education)",
      totalCost: "$0",
      ratio: "13.5:1",
      classSize: "450 students (Class of 2023)",
      ranking: "NJ State Ranking: #95 out of 411 schools",
      polaris: "PolarisList HYP Ranking: #25 out of 221 NJ schools",
      niche: "Niche Overall Grade: A-"
    },
    shp: {
      name: "Seton Hall Preparatory School",
      type: "Private Catholic All-Boys School",
      enrollment: "976 students (grades 9-12)",
      annualCost: "$25,650 (rising ~4% annually)",
      totalCost: "~$115,000",
      ratio: "13:1 (11:1 per Niche)",
      classSize: "262 students (Class of 2024), 216 students (Class of 2023)",
      ranking: "Ranking: #2 all-boys school in NJ, #26 nationally",
      polaris: "PolarisList HYP Ranking: #29 out of 221 NJ schools",
      niche: "Niche Overall Grade: A+"
    }
  },
  ivyRates: {
    montclair: "≈ 2.8% (based on 2019 data: 16 acceptances from 240 applications, 6.7% acceptance rate)",
    shp: "2.67% (confirmed Class of 2024: 7 of 262 students)",
    shpBreakdown: [
      "Cornell: 3 students",
      "Harvard, Yale, Princeton, Columbia, Penn: 1 each",
      "Brown, Dartmouth: 0 students"
    ]
  },
  elitePlacement: {
    montclair: "~15% of graduates historically",
    shp: "15–20% of graduates"
  },
  top50: {
    shp: "23.0% (Class of 2022: 42 of 183 students - verified data)",
    montclair: "13.0% (estimated; methodology concerns)"
  },
  fourYear: {
    montclair: "87% of graduates",
    shp: "98% of graduates"
  },
  tests: [
    ["SAT Total (Official)", "1,220", "1,433", "+213 (SHP)"],
    ["SAT Total (Niche Student Reports)", "1,300", "1,310", "+10 (SHP)"],
    ["SAT Reading", "620", "N/A", "-" ],
    ["SAT Math", "600", "N/A", "-" ],
    ["ACT Composite (Official)", "25.6", "N/A", "-" ],
    ["ACT Composite (Niche)", "29", "29", "Equal" ]
  ],
  apPrograms: {
    montclair: "62% participation rate, 31 courses offered, 1,000+ exams annually",
    shp: "85% participation rate, 26 courses offered, ~800 exams annually"
  },
  achievements: {
    montclair: "9 National Merit Semifinalists (2022), 94% graduation rate",
    shp: "100% graduation rate, Seton Scholars Program for accelerated students"
  },
  nicheSafety: [
    ["Feel Safe at School", "78%", "93%", "Seton Hall"],
    ["Like School & Feel Happy", "68%", "81%", "Seton Hall"],
    ["Students Are Competitive", "78%", "97%", "Seton Hall"],
    ["Students Are Creative/Artsy", "89%", "59%", "Montclair"],
    ["Students Are Athletic", "93%", "91%", "Equal"]
  ],
  teacherQuality: [
    ["Give Engaging Lessons", "63%", "81%", "Seton Hall"],
    ["Genuinely Care About Students", "82%", "84%", "Equal"],
    ["Adequately Control Classroom", "65%", "84%", "Seton Hall"]
  ],
  clubs: [
    ["Plenty of Clubs Available", "92%", "100%", "Seton Hall"],
    ["Adequate Funding", "33%", "85%", "Seton Hall"],
    ["High Participation", "74%", "95%", "Seton Hall"]
  ],
  qualInsights: {
    montclair: {
      strengths: [
        "Diverse learning environment with real-world exposure",
        "Strong AP program with 62% participation",
        "High creativity ratings (89% vs 59% at Seton Hall)",
        "Academic variety with specialized learning communities (CGI, STEM, CSJ)"
      ],
      challenges: [
        "Inconsistent teaching quality within departments",
        "Variable grading standards between sections",
        "Need for active parent advocacy to access best opportunities",
        "Infrastructure challenges affecting learning environment"
      ],
      quote: "“One of the biggest challenges at Montclair was the inconsistency in teaching and grading. The quality of education often depended on the teacher you had.”"
    },
    shp: {
      strengths: [
        "Extraordinary “brotherhood” community culture",
        "Consistent high-quality teacher support across departments",
        "Systematic college preparation programs",
        "Character development focus with transformational experiences"
      ],
      challenges: [
        "Geographic isolation creating friendship logistics challenges",
        "Very competitive athletics (difficult team placement)",
        "Limited demographic diversity",
        "High financial cost with significant opportunity costs"
      ],
      quote: "“The brotherhood at the prep is like no other in the entire state of New Jersey. Seton Hall Prep turns you from the 13 or 14 year old boy you are into a responsible young man ready for college.”"
    }
  },
  njContext: {
    eliteTier: [
      "Lawrenceville School: 15-25% Ivy League placement",
      "Phillips Academy Andover: 15-25% Ivy League placement",
      "Choate Rosemary Hall: 15-25% Ivy League placement"
    ],
    highTier: [
      "Princeton High School: #2 statewide, 5-10% Ivy League",
      "West Windsor-Plainsboro: 5-10% Ivy League",
      "Millburn/Livingston: 2-5% Ivy League",
      "Montclair High School: ~2.8% Ivy League (#25 HYP ranking)",
      "Seton Hall Preparatory: 2.67% Ivy League (#29 HYP ranking)"
    ]
  },
  finances: {
    direct: [
      "Seton Hall Prep: $115,000 over four years (tuition only)",
      "Additional SHP Costs: Transportation, uniforms, activities (~$10,000)",
      "Montclair High: $0 tuition cost"
    ],
    altInvest: [
      "SAT/ACT Premium Tutoring: $5,000-10,000",
      "Elite Summer Academic Programs: $15,000-20,000 over four years",
      "Subject-Specific Tutoring: $5,000-10,000",
      "College Application Consulting: $5,000-10,000",
      "Remaining for College Education: $85,000-95,000"
    ],
    roi: "With nearly identical elite college outcomes (2.8% vs 2.67% Ivy League rates), the $115,000 investment represents questionable financial value purely from an academic outcomes perspective. The decision becomes about qualitative factors rather than measurable college placement advantages."
  },
  research: [
    "Selection Effects Dominate: After controlling for student demographics and family characteristics, private school advantages often disappear or become minimal.",
    "Socioeconomic Impact: Private schools primarily serve families averaging $77,000+ annual income vs. $53,000 for public schools, creating inherent selection bias.",
    "Methodological Sensitivity: Simple comparisons show large private school advantages, but studies using sophisticated controls often find minimal effects for already-advantaged populations.",
    "Canadian Longitudinal Study: Following 15,000 students, researchers found private school advantages essentially disappeared for test scores and graduation rates among affluent families after controlling for family characteristics."
  ],
  decisions: {
    pickMHS: {
      academic: [
        "Student demonstrates strong self-advocacy and navigation skills",
        "Academic achievement is already high and stable",
        "Family willing to invest strategically in tutoring/test preparation",
        "Values access to diverse course offerings and specialized programs"
      ],
      social: [
        "Family prioritizes exposure to demographic diversity",
        "Student thrives in creative/artistic environments (89% creativity rating)",
        "Values real-world preparation through varied social interactions",
        "Comfortable with variable experiences requiring active navigation"
      ],
      financial: [
        "Financial flexibility for college and future opportunities prioritized",
        "Ability to invest saved funds in targeted enrichment activities",
        "Preference to avoid $115,000 educational debt"
      ]
    },
    pickSHP: {
      academic: [
        "Predictability and consistency in educational experience highly valued",
        "Student benefits from structured, systematic college preparation",
        "All-boys educational environment specifically appealing",
        "Family values intensive college counseling (3 full-time counselors)"
      ],
      social: [
        "“Brotherhood” community culture and networking appealing",
        "Catholic educational philosophy and values formation prioritized",
        "Student thrives in competitive, achievement-oriented environments (97% competitive rating)",
        "Character development and leadership training emphasized"
      ],
      financial: [
        "Family can afford investment without compromising other opportunities",
        "Values the “insurance policy” of consistent, premium educational experience",
        "Willing to pay premium for guaranteed high-quality teacher interactions"
      ]
    }
  },
  successFactors: {
    mhs: [
      "Research teacher reputations before course selection each year",
      "Advocate actively for appropriate course placements and access to honors/AP tracks",
      "Supplement strategically with targeted tutoring for standardized test preparation",
      "Engage early and frequently with college counseling staff",
      "Monitor progress closely to identify and address any preparation gaps",
      "Leverage diversity as a college application advantage and real-world preparation"
    ],
    shp: [
      "Embrace the community culture and encourage participation in brotherhood activities",
      "Utilize extensive alumni network for internships, mentoring, and college guidance",
      "Take advantage of systematic college preparation programs and counseling",
      "Engage in character development opportunities beyond academics",
      "Leverage small school advantages for leadership positions and teacher relationships",
      "Participate actively in the extensive extracurricular offerings"
    ]
  },
  methodologyConcerns: {
    reliable: "Seton Hall Prep: 23% figure appears credible (42 of 183 students, Class of 2022)",
    problems: [
      "Montclair estimate based on applying Seton Hall’s average students-per-school to Montclair without statistical justification",
      "Different data collection methods (manual count vs. estimation) create invalid comparison",
      "No actual Montclair matriculation data provided for verification",
      "Class size inconsistencies across different data sources"
    ],
    recommendation: "Use Seton Hall’s 23% figure as additional context, but disregard the comparative analysis until verified Montclair data becomes available."
  },
  finalRecs: {
    headline: "For Most High-Achieving Families: Montclair High School",
    rationale: [
      "Nearly identical elite college placement outcomes",
      "Significant financial savings ($85,000-95,000) preserved for college and future opportunities",
      "Excellent academic preparation when properly navigated",
      "Valuable exposure to diversity and real-world dynamics",
      "Strong teacher quality when accessed effectively"
    ],
    exceptions: [
      "Student specifically thrives in all-boys, structured educational environments",
      "“Brotherhood” culture and intensive character development align strongly with family values",
      "Predictability and consistency are prioritized over cost considerations",
      "Catholic educational philosophy is important to family",
      "Financial investment won’t compromise college funding or other opportunities"
    ],
    bottomLine: "Choose consciously between guaranteed consistency and community (Seton Hall Prep) versus potential excellence requiring active navigation (Montclair High). Both schools prepare motivated students well; the decision comes down to student fit, values, finances, and philosophy."
  },
  sources: [
    "Official school college placement statistics (multiple years)",
    "Niche.com student and parent surveys (2024-2025)",
    "PolarisList Harvard/Princeton/MIT placement rankings",
    "U.S. News & World Report school rankings",
    "State of New Jersey Department of Education data",
    "Direct student reviews and testimonials"
  ],
  limitations: [
    "Some data spans different graduation years due to availability",
    "Student survey samples may not be fully representative",
    "Self-reported test score data shows significant variance from official sources",
    "Long-term outcome tracking not available for recent graduates"
  ],
  verificationNeeds: [
    "Current Montclair High Top 50 university placement data",
    "Standardized methodology for college placement comparisons across schools",
    "Updated financial aid and scholarship data for both institutions"
  ]
};

// Personal details, projects, skills and education: Diwakar's resume.
// Company experience: Prateek's resume, with dates supplied by Diwakar.
// Keep the source PDFs outside public/ so they are never published.
export const profile = {
  name: "Diwakar Kumar Singh",
  firstName: "Diwakar",
  role: "Software Engineer",
  company: "Syncron Software India Pvt Ltd",
  location: "Bangalore, India",
  email: "diwakarsinghchauhan20@gmail.com",
  phone: "+91 7309617909",
  github: "https://github.com/Pockerman20",
  linkedin: "https://www.linkedin.com/in/diwakar-kumar-singh-467b0b206/",
  leetcode: "https://leetcode.com/Pockerman20/",
};

export const experience = [
  {
    role: "Software Engineer",
    start: "Apr 2026",
    end: "Present",
    current: true,
    summary: "Building reliable platforms for connected enterprise products.",
    highlights: [
      "Built and scaled a centralized backend platform across B2B products, modernizing a decommissioned system for reliability and maintainability.",
      "Designed and owned 20+ REST APIs for high-volume aftermarket customer data, with secure SFTP, S3 and API-based integrations.",
      "Implemented JWT authentication, RBAC and Entra ID SSO, with AWS KMS and Secrets Manager for secure credential management.",
      "Developed fault-tolerant services, structured logging, metrics and observability dashboards for production workloads.",
      "Led code reviews, mentored junior engineers and supported technical interviews.",
    ],
    tags: ["REST APIs", "AWS", "Platform engineering", "Security"],
  },
  {
    role: "Associate Software Engineer",
    start: "Aug 2024",
    end: "Mar 2026",
    current: false,
    summary: "Connecting data, analytics and the people who depend on them.",
    highlights: [
      "Developed backend APIs integrating Sisense Open APIs for database connectivity, data modelling and analytics visualization.",
      "Implemented role-based access control across enterprise analytics workflows.",
      "Used AWS S3, DynamoDB and KMS to securely manage credentials, metadata and configuration data.",
      "Ensured reliable backend integrations and data availability for B2B customers.",
    ],
    tags: ["Sisense", "Backend APIs", "AWS", "RBAC"],
  },
];

export const projects = [
  {
    number: "01",
    title: "E-Commerce App",
    category: "MOBILE COMMERCE",
    kind: "commerce",
    description: "A complete shopping journey, from discovering products to placing an order. Built with user-specific data and an admin product-management flow.",
    features: ["Cart & favorites", "Order management", "Firebase backend"],
    tags: ["Flutter", "Dart", "Firebase"],
    href: "https://github.com/Pockerman20/e_Commerce_app",
  },
  {
    number: "02",
    title: "Sorting Visualizer",
    category: "ALGORITHMS, MADE VISIBLE",
    kind: "sorting",
    description: "A visual way to understand how algorithms think. Watch bubble and selection sort rearrange arrays, with adjustable sizes and light and dark modes.",
    features: ["Bubble & selection sort", "Adjustable arrays", "Theme support"],
    tags: ["Flutter", "Dart", "Data structures"],
    href: "https://github.com/Pockerman20/Sorting-Visualizer",
  },
  {
    number: "03",
    title: "Personal Expense App",
    category: "EVERYDAY UTILITY",
    kind: "expense",
    description: "Small expenses, a clearer picture. Track purchases, explore daily spending charts and keep your data on your device with local SQLite storage.",
    features: ["Spending charts", "Local storage", "Expense management"],
    tags: ["Flutter", "Dart", "Sqflite"],
    href: "https://github.com/Pockerman20/Personal_Expense_App",
  },
] as const;

export const skills = [
  { title: "Languages", subtitle: "The building blocks", items: ["Java", "Dart", "Python", "C", "C++", "HTML"] },
  { title: "App development", subtitle: "From idea to interface", items: ["Flutter", "Firebase", "Sqflite"] },
  { title: "Databases & tools", subtitle: "Behind the scenes", items: ["SQLite", "Oracle", "Linux", "VS Code", "Android Studio", "GitHub"] },
  { title: "Foundations", subtitle: "How I approach problems", items: ["Data structures", "Algorithms", "Object-oriented programming"] },
];

export const education = [
  { school: "Bangalore Institute of Technology", degree: "B.E. in Computer Science & Engineering", dates: "2020 – 2024", grade: "9.16 / 10 CGPA", location: "Bangalore, India" },
  { school: "Central Hindu Boys School", degree: "Senior Secondary (XII)", dates: "2017 – 2019", grade: "84.6%", location: "Varanasi, India" },
];
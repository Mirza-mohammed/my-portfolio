// Mock data for Mohammad Mirza's portfolio
// This data is consumed by the frontend. Backend wiring will replace contact submissions later.

export const profile = {
  name: "Mohammad Mirza",
  title: "Software Developer | Data Engineer | MSc Computer Science Student",
  initials: "MM",
  location: "United Kingdom",
  email: "mohammedmirza04@gmail.com",
  github: "https://github.com/mohammadmirza",
  linkedin: "https://www.linkedin.com/in/mirza-mohammed5/",
  cvUrl: "#",
  heroIntro:
    "I build reliable software, data pipelines, and intelligent analytics solutions that transform raw data into practical business insights.",
  available: "Open to graduate roles",
};

export const summary = `I am a Software Developer and Data Engineer currently pursuing an MSc in Computer Science at the University of Hertfordshire. I have experience in building database-backed applications, developing data workflows, optimising system performance, and working with modern software engineering tools and practices.

My technical background includes Python, SQL, MySQL, AWS, Git, AppSheet, data engineering, machine learning, and predictive analytics. I enjoy solving practical problems by designing reliable systems that improve efficiency, automate processes, and turn raw data into meaningful insights.

Alongside my academic journey, I am working on a research-led MSc project focused on enhancing predictive analytics for operational workflow data. This involves data engineering, feature engineering, machine learning model development, and explainable AI techniques such as SHAP.`;

export const aboutParagraphs = [
  "I am a Software Developer and Data Engineer with a strong interest in building practical, reliable, and data-driven technology solutions. I am currently pursuing an MSc in Computer Science at the University of Hertfordshire, where I am strengthening my knowledge in software engineering, data engineering, machine learning, and predictive analytics.",
  "My experience includes developing database-backed applications, working with business workflows, optimising application performance, and supporting data-driven decision-making through structured data processing and analysis. I enjoy working across both software development and data engineering because it allows me to understand problems from different angles and design solutions that are technically strong and useful in real-world environments.",
  "I have hands-on experience with Python, SQL, MySQL, AWS, Git, AppSheet, data pipelines, feature engineering, machine learning models, and explainable AI techniques. I approach projects with a focus on clarity, reliability, and continuous improvement.",
];

export const stats = [
  { label: "Performance gain delivered", value: "~20%" },
  { label: "Core projects shipped", value: "4+" },
  { label: "Years coding", value: "3+" },
  { label: "Currently studying", value: "MSc CS" },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "Code2",
    description: "Core languages used to build application logic, manipulate data, and construct scalable software systems.",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Designing efficient schemas, writing complex queries, and managing data persistence in robust relational systems.",
    items: ["MySQL", "Relational Design", "DB-backed Apps"],
  },
  {
    title: "Cloud & Tools",
    icon: "Cloud",
    description: "Deploying applications and collaborating efficiently using modern version control and cloud infrastructure.",
    items: ["AWS", "Git", "GitHub", "Deployment Workflows"],
  },
  {
    title: "Data Engineering",
    icon: "Workflow",
    description: "Architecting reliable pipelines to extract, clean, transform, and validate structured operational data.",
    items: ["ETL Pipelines", "Data Cleaning", "Transformation", "Validation"],
  },
  {
    title: "ML & Analytics",
    icon: "LineChart",
    description: "Training predictive models, engineering features, and interpreting complex datasets using explainable AI.",
    items: [
      "Pandas",
      "Scikit-learn",
      "Predictive Analytics",
      "Regression",
      "Feature Engineering",
      "SHAP",
    ],
  },
  {
    title: "App & Web",
    icon: "AppWindow",
    description: "Building responsive, user-focused applications and automating critical business workflows.",
    items: ["AppSheet", "Web Apps", "Process Automation", "User-focused Dev"],
  },
  {
    title: "Professional",
    icon: "Users",
    description: "Delivering value through clear documentation, effective teamwork, and rigorous problem-solving practices.",
    items: [
      "Problem-solving",
      "Debugging",
      "Documentation",
      "Teamwork",
      "Communication",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Predictive Analytics for Operational Workflow Data",
    tag: "Research / MSc",
    description:
      "A research-led MSc project focused on enhancing predictive analytics for operational workflow data. Designs an end-to-end pipeline for processing helpdesk-style data, engineering meaningful features, training ML models, and evaluating regression performance.",
    highlights: [
      "ETL pipeline development",
      "Workflow-aware feature engineering",
      "Model comparison & evaluation",
      "Explainable AI with SHAP",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "MySQL", "SHAP", "Git"],
    accent: "emerald",
  },
  {
    id: 2,
    title: "Data Engineering ETL Pipeline",
    tag: "Data Engineering",
    description:
      "Designed and implemented an ETL pipeline to extract, clean, transform, and prepare structured operational data for analysis and machine learning. Improves data quality and prepares datasets for downstream modelling.",
    highlights: [
      "Structured data processing",
      "Missing value handling",
      "Date validation & parsing",
      "Reproducible pipeline",
    ],
    tech: ["Python", "Pandas", "SQL", "MySQL", "Git"],
    accent: "teal",
  },
  {
    id: 3,
    title: "AppSheet Business Application",
    tag: "Low-code / Automation",
    description:
      "Developed a business-focused application using AppSheet to support workflow automation and improve operational efficiency. Simplifies data entry, organises records and provides a structured way to manage business processes.",
    highlights: [
      "Workflow automation",
      "Structured data entry",
      "Business-aligned design",
      "User-friendly interface",
    ],
    tech: ["AppSheet", "Google Sheets", "SQL concepts", "Automation"],
    accent: "emerald",
  },
  {
    id: 4,
    title: "Web Application Performance Optimisation",
    tag: "Engineering",
    description:
      "Contributed to the optimisation of a business application by improving performance, enhancing usability, and supporting maintainable development practices. Reduced load times by approximately 20%.",
    highlights: [
      "~20% load-time reduction",
      "Bottleneck profiling",
      "Iterative improvements",
      "Maintainable code",
    ],
    tech: ["Web tech", "DB-backed systems", "Debugging", "Git"],
    accent: "teal",
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Industry Experience",
    period: "Prior to MSc",
    description:
      "Built, maintained and improved software applications supporting business operations and user workflows. Developed features, worked with databases, resolved technical issues and collaborated with team members to deliver reliable solutions.",
    bullets: [
      "Developed and maintained software applications",
      "Worked with database-backed systems and business workflows",
      "Improved application performance and usability (~20% faster load)",
      "Supported debugging, testing and issue resolution",
      "Collaborated with teams to translate requirements into working features",
      "Used version control and iterative development practices",
    ],
  },
];

export const education = [
  {
    degree: "MSc Computer Science",
    institution: "University of Hertfordshire",
    period: "Currently pursuing",
    description:
      "Focus on software engineering, data engineering, machine learning, predictive analytics, and responsible technology. Research and practical work in predictive analytics for operational workflow data — ETL, feature engineering, ML models and explainable AI.",
    areas: [
      "Software Engineering",
      "Data Engineering",
      "Machine Learning",
      "Predictive Analytics",
      "Database Systems",
      "Responsible Technology",
    ],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

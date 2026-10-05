// Edit this file to update the whole site. Leave a link empty ("") to hide it.
export const profile = {
  name: "Jebin Joseph",
  title: "Full-Stack Developer",
  focus: "Java, Spring Boot and React",
  statement:
    "I build full-stack web applications with Spring Boot REST APIs, React interfaces and MySQL databases.",
  status: "2026 graduate, open to work",
  location: "Kottayam, Kerala, India",
  email: "jebinjoseph8421@gmail.com",
  phone: "+91 7736108583",
  linkedin: "https://www.linkedin.com/in/jebinjoseph-755224321",
  github: "https://github.com/jebinjoseph8421-cell", // add your GitHub profile URL here
  resume: "/Jebin-Joseph-Resume.pdf",
};

export const about = [
  "I am a Computer Science Engineering graduate (2026) with a strong interest in Fullstack development. I work with Java, Spring Boot, React, REST APIs, MySQL, Firebase and Git.",
  "My projects cover e-commerce, document management with OCR, cloud data storage, authentication, dashboards and reminders. I am now strengthening my backend skills and learning AI technologies to build intelligent, scalable applications.",
];

export const layers = [
  { label: "React", note: "Responsive interface for desktop and mobile" },
  { label: "Spring Boot", note: "REST APIs for products, users and cart" },
  { label: "MySQL", note: "Persistent application and user data" },
];

export const projects = [
  {
    name: "Market",
    kind: "Full-stack e-commerce application",
    featured: true,
    summary:
      "An online store with a React frontend and a Spring Boot backend, deployed on cloud platforms.",
    points: [
      "Built REST APIs for product management and connected them to the React frontend.",
      "Implemented product browsing, categories, user authentication and a shopping cart.",
      "Stored application and user data in MySQL hosted on Aiven Cloud.",
      "Designed responsive layouts for desktop and mobile.",
    ],
    stack: ["React", "Spring Boot", "Java", "MySQL", "Aiven", "Vercel", "Render"],
  },
  {
    name: "Vaultx",
    kind: "Main project: document management app",
    summary:
      "An app for organizing warranties, bills and policy documents, with reminders for important dates.",
    points: [
      "Used Google ML Kit OCR to extract useful information from uploaded documents.",
      "Stored data in Firebase and Firestore.",
      "Built tracking dashboards and reminder functionality.",
    ],
    stack: ["Flutter", "Firebase", "Google ML Kit (OCR)", "Gmail API"],
  },
  {
    name: "Tale Threads",
    kind: "Mini project: story-sharing platform",
    summary: "A responsive platform for creating, managing, searching and discovering stories.",
    points: [
      "Implemented create, edit, update and delete for stories.",
      "Added search and filtering to make stories easier to find.",
      "Used Firebase for application data and cloud storage.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
];

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { group: "Frontend", items: ["React JS", "JavaScript", "HTML", "CSS"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "Firebase / Firestore"] },
  { group: "Languages", items: ["Java", "JavaScript", "C"] },
  { group: "Tools and platforms", items: ["Git and GitHub", "VS Code", "Android Studio", "Canva", "Aiven", "Vercel", "Render"] },
];

export const education = [
  { title: "B.Tech, Computer Science and Engineering", place: "College of Engineering Kidangoor", years: "2022 to 2026", detail: "CGPA 7.66/10" },
  { title: "Plus Two, State Board", place: "Emmanuel's HSS Kothanalloor", years: "2020 to 2022", detail: "95%" },
  { title: "Matriculation, State Board", place: "Holy Ghost Boys High School Muttuchira", years: "2017 to 2020", detail: "100%" },
];

export const certificates = [
  "React Workshop (5 days), One Team Solutions",
  "Industrial Visit certificate, Suffix's Scope India",
];

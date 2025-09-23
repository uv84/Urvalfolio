import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "simplamo",
    companyName: "Wipro Limited",
    companyLogo: "https://wiproconsumercare.com/wp-content/uploads/2020/09/Wipro-Logo-01-small.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Project Engineer",
        employmentPeriod: {
          start: "10.2022",
          end: "08.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `– Developed scalable applications with React.js, improving performance and code maintainability.

– Migrated legacy code from jQuery to React, improving performance by 40%.

– Built component libraries with Tailwind CSS and Shadcn UI for design consistency.

– Integrated RESTful APIs and built dashboards and forms with full CRUD.

– Implemented global state management using Redux Toolkit and efficient data handling.

– Wrote unit tests using Jest and React Testing Library with 85% coverage.

– Collaborated in Agile teams with backend and design teams.
`,
        skills: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Shadcn UI",
          "Tailwind",
          "Node.js",
          "Tailwind",
          "MongoDB",
          "Inngest",
          "Express",
          "Javascript"
        ],
        isExpanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "Web Developer Intern",
        employmentPeriod: {
          start: "07.2022",
          end: "10.2022",
        },
        employmentType: "Internship",
        icon: "code",
        description: `

-Built a responsive E-commerce web application as part of internship, implementing product catalog, add-to-cart, and checkout features.

-Designed reusable UI components using React.js and styled with CSS3/Bootstrap for consistency and scalability.

-Integrated RESTful APIs with Node.js and Express.js for product and user management.

-Worked with MongoDB for database operations including CRUD functionality for users, products, and orders.`,
        skills: ["Next.js",
          "React",
          "Node.js",
          "Tailwind",
          "MongoDB",
          "Inngest",
          "Express",],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  //   
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "VIVA Institute of Technology - University of Mumbai",
        employmentPeriod: {
          start: "08.2018",
          end: "2026",
        },
        icon: "education",
        description: `- Bachelor of Engineering in computer engineering.
`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Shri T P Bhatia College of Science ",
        employmentPeriod: {
          start: "08.2015",
          end: "06.2018",
        },
        icon: "education",
        description: `- Higher Secondary Certificate. The Higher Secondary Certificate (HSC)
        Maharashtra State Board of Secondary &
Higher Secondary Education, Pune`,
        // - Granted direct admission to university due to achieving 3rd Prize at the national level.
        // - [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
        //   - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
        //   - 1st Prize — Can Tho City Science and Engineering Fair 2018
        //   - Creativity Award — Binh Duong Hackathon 2017
        //   - Consolation Prize — National Youth and Children's Creativity Contest 2016
        //   - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children's Creativity Contest 2016
        //   - 3rd Prize — National Young Informatics Contest 2016
        // - Achieved the title of Outstanding Student from Grade 10-12.
        // - Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
        // - Honored on the school's "Hall of Fame" for academic achievements.
        // - Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
        // - Developed websites based on Laravel framework.
        // - Built websites with PHP and MySQL, following the MVC architecture.`,
        // skills: [
        //   "Maths",
        //   "Physics",
        //   "Chemistry",
        //   "Biology",
        // ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Hilda castelino High School",
        employmentPeriod: {
          start: "07.2006",
          end: "04.2015",
        },
        icon: "education",
        isExpanded: false,
        description: `- Studied at Hilda castelino High School. Maharashtra State Board of Secondary &
Higher Secondary Education, Pune`

        //         skills: [
        //           "Pascal",
        //           "NukeViet",
        //           "HTML",
        //           "CSS",
        //           "JavaScript",
        //           "Self-learning",
        //         ],
      },
    ],
  },
];

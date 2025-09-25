import avatar from "@/assets/images/avatar.jpg";
import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Urval",
  lastName: "Chikhale",
  displayName: "Urval Chikhale",
  username: "urvalchikhale",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Small details matter.",
    "Frontend Engineer",
    "Quick Learner",
  ],
  address: "kandivali Mumbai, Maharashtra, India",
  phoneNumber: "KzkxIDg0MjQ4IDQ5OTM5", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "dXJ2YWxjaGlraGFsZUBnbWFpbC5jb20", // base64 encoded
  website: "",
  namePronunciationUrl: "",

  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
    },
    {
      title: "Ex- Wipro Limited",
    },
  ],
  about: `
Hello, World! I’m a Frontend Developer with almost 3 years of experience building fast, responsive, and user-friendly web applications using React.js, JavaScript (ES6+), and modern frontend technologies. My journey has been shaped by a deep understanding of modern frontend architecture, including Next.js, hooks, state management (Redux Toolkit, Zustand, Recoil), and performance optimization techniques.

🔍 Whether it's debugging complex UI flows, implementing pixel-perfect designs with HTML5/CSS3, or architecting scalable component systems, I bring a methodical and user-centric approach to every project. I’m also passionate about accessibility, ensuring that every interface I build is inclusive and keyboard-friendly.

🧠 Beyond code, I enjoy breaking down technical concepts into digestible formats—be it through documentation, diagrams, or mentoring peers. I believe great developers don’t just write code—they communicate ideas, solve problems collaboratively, and never stop learning.
  `,
  avatar: avatar.src,

  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};

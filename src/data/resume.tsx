import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import toast from "react-hot-toast";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const DATA = {
  name: "Waqar Ahmed",
  initials: "HI",
  url: "https://google.com",
  location: "Karachi, Pakistan",
  locationLink: "https://maps.app.goo.gl/kBiZRWCkht2mrcDQ6",
  description:
    "A Software Engineer with a strong focus on MERN stack technologies and frontend development.",
  summary:
    "My name is Waqar Ahmed, and I’m a passionate MERN Stack Developer with strong expertise in both frontend and backend development, along with hands-on experience in Django. I began my journey as a full stack developer, building robust and user-centric web applications from the ground up. Over time, I honed my skills in crafting responsive user interfaces, managing backend logic, and integrating modern APIs and databases. My early love for mathematics has been instrumental in shaping my analytical thinking and problem-solving abilities, which I apply daily in my engineering work. I’m always eager to explore new technologies and create solutions that are both efficient and impactful.",
  avatarUrl: "/me.png",
  skills: [
    // {
    //   heading: "GRC Frameworks",
    //   skills: ["COBIT", "NIST", "ISO-27001"],
    // },
    // {
    //   heading: "OffSec and Auditing Tools",
    //   skills: ["Nessus", "Nmap", "Wifite"],
    // },
    // {
    //   heading: "IT Management and Defender Tools",
    //   skills: ["Ms Defender for Endpoint", "Active Directoy", "IBM QRadar"],
    // },
    {
      heading: "Coding & Scripting",
      skills: [
        "JavaScript",
        "Python",
        "ReactJs",
        "Redux",
        "ExpressJs",
        "NodeJs",
        "Django",
        "Booststrap",
        "Tailwind",
      ],
    },
    {
      heading: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase"]
    },
    {
      heading: "Others",
      skills: [
        "CICD",
        "Docker",
        "Figma",
        "ThreeJs",
        "npm/npx/pip",
      ],
    },
    {
      heading: "Soft Skills",
      skills: [
        "Communication",
        "Creativity",
        "Problem Solving",
        "Teamwork",
        "Dedication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
      ],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "huzaifainshal@gmail.com",
    tel: "+923302546626",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/waqar606",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/waqar-ahmed-dev999/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/waqar.ahmed.716396",
        icon: Icons.facebook,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/waqar.christiano/",
        icon: Icons.instagram,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp/Phone",
        onClick: () => {
          navigator.clipboard
            .writeText("+923182015606")
            .then(() => toast.success("Phone Number copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
        },
        icon: Icons.phone,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: false,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:waqar.tech999@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Zenkoders",
    //   href: "https://zenkoders.com/",
    //   badges: [],
    //   logoUrl: "/zenkoders.png",
    //   journey: [
    //     {
    //       start: "Jul 2024",
    //       location: "OnSite, Karachi - Pakistan",
    //       end: "Present",
    //       title: "Junior Full Stack Developer",
    //       description: [
    //         "Currently serving as a Junior Full Stack Developer, dedicated to delivering and collaborating on diverse projects.",
    //         "My responsibilities span across client-side, server-side, and database technologies, encompassing Next.js, Nest.js, and PostgreSQL, among others.",
    //       ],
    //       skills: [
    //         "NextJs",
    //         "NestJS",
    //         "PostgreSQL",
    //         "MongoDB",
    //         "MySQL",
    //         "ReduxJs",
    //         "react query",
    //         "Git",
    //       ],
    //     },
    //     {
    //       start: "May 2024",
    //       location: "OnSite, Karachi - Pakistan",
    //       end: "Jul 2024",
    //       title: "Trainee Full Stack Developer",
    //       description: [
    //         "Started as a trainee developer to gain hands on experience in various software development technologies and methods. ",
    //         "The trainee period went on for 2 months.",
    //       ],
    //       skills: ["NextJs", "NestJS", "PostgreSQL", "MongoDB"],
    //     },
    //   ],
    // },
    {
      company: "Ibranext Technologies",
      href: "https://ibranext.com/",
      badges: [],
      logoUrl: "/Esolace.png",
      journey: [
        {
          start: "March 2024",
          location: "Onsite - Full time",
          end: "Feb 2025",
          title: "Full Stack Developer",
          description: [
            "My Full Stack role features work with ReactJs, ExpressJs, AI and Python for business automation and scripting.",
          ],
          skills: [
            "ExpressJs",
            "OpenAi",
            "ReactJs",
            "Python",
            "Automation",
            "Git",
          ],
        },
        {
          start: "Feb 2024",
          location: "Remote - Part time",
          end: "April 2024",
          title: "Frontend Developer",
          description: [
            "Collaborate with their frontend team to develop user friendly and responsive application with ReactJS.",
            "Improving pre-existing and developing new client side code by using frontend languages; Html, CSS, JavaScript.",
          ],
          skills: ["ReactJs"],
        },
      ],
    },
    {
      company: "Karachi Development Authority (KDA)",
      href: "",
      badges: [],
      logoUrl: "/kda.png",
      journey: [
        {
          start: "Aug 2023",
          location: "OnSite - Karachi",
          end: "Oct 2023",
          title: "Internship Trainee",
          description: [
            "Performed my duties as an Internee in DAD/SWD Section of I.T. Department of Karachi Development Authority (KDA)",
          ],
          skills: ["IT Management", "IT Infrastructure", "Databases"],
        },
      ],
    },
    // {
    //   company: "Pakistan Council of Scientific and Industrial Research (PCSIR)",
    //   href: "",
    //   badges: [],
    //   logoUrl: "/pcsir.png",
    //   journey: [
    //     {
    //       start: "Sep 2023",
    //       location: "Hybrid - Karachi",
    //       end: "Sep 2023",
    //       title: "UIUX Internee",
    //       description: [
    //         "A 15 day internship focus on UI/UX based role with tools like Figma etc.",
    //         "Improvised the design for easypaisa app, a loan and mobile banking application.",
    //         "Also documented and presented the design in a comprehensive Case Study.",
    //       ],
    //       skills: ["Figma", "Mobile App Design", "UIUX", "Web Design"],
    //     },
    //   ],
    // },
    {
      company: "NCAI - NEDUET, Smart City Lab",
      href: "",
      badges: [],
      logoUrl: "/ncai.png",
      journey: [
        {
          start: "Sep 2022",
          location: "OnSite - Karachi",
          end: "Oct 2022",
          title: "Frontend Developer",
          description: [
            "Collaborate with their frontend team to develop user friendly and responsive application with ReactJS.",
            "Improving pre-existing and developing new client side code by using frontend languages; Html, CSS, JavaScript.",
          ],
          skills: ["Python", "HTML", "CSS","JS"],
        },
      ],
    },
  ],
  education: [
    {
      school: "NED University of Engineering and Technology",
      href: "https://www.neduet.edu.pk/",
      degree:
        "Bachelors of Engineering in Computer Science & IT",
      logoUrl: "/NEDUET_logo.svg",
      start: "2020",
      end: "2024",
      description: [
        "CIS Engineering (Computer and Information Systems Engineering) combines computer science and engineering principles to design and develop both hardware and software solutions. Engineers in this field work on system design, software development, and networking to create efficient, secure, and scalable computing systems.",
        "Their expertise extends to embedded systems, cybersecurity, cloud computing, and data management. They design and optimize algorithms, develop operating systems, and ensure seamless integration between hardware and software components.",
      ],
      skills: [
        "Digital Signal Processing",
        "Machine Learning",
        "Artificial Neural Networks",
        "Data Structures",
        "Networking",
        "Databases",
        "Operating Systems",
        "Cloud Computing",
        "Object-Oriented Programming",
        "Algorithms",
      ],
      gradeAcheived: "82%",
      key: "Final Year Project",
      value:
        "Image Captioning for Visually Impaired People; to integrate the Computer Vision based image captioning or object detection model into an IoT based sunglasses that takes pictures and captions them in audio.",
    },
    {
      school: "F.G Boys Inter College, Karachi Cantt",
      href: "https://g.co/kgs/h3MyE4B",
      degree: "Pre-Engineering in Intermediate",
      logoUrl: "/fg.png",
      start: "2018",
      end: "2020",
      description: [
        "I completed my Intermediate in Pre-Engineering, building a strong foundation in mathematics, physics, and chemistry, which enhanced my analytical and problem-solving skills.",
      ],
      skills: [
        "Calculus",
        "Integration",
        "Differentiation",
        "Trignometry",
        "Analytical & Applied Physics",
        "Organic & Inorganic Chemistry",
      ],
      gradeAcheived: "78%",
      key: "",
      value: "",
    },
    {
      school: "Fazaia Intermediate College PAF Base Korangi Creek",
      href: "https://g.co/kgs/aFQRwsn",
      degree: "Matriculation in Computer Science",
      logoUrl: "/pf.png",
      start: "2016",
      end: "2018",
      description: [],
      skills: ["Computer Science", "Algebra"],
      gradeAcheived: "81%",
      key: "",
      value: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;

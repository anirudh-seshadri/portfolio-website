import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  ExternalLink,
  Code2,
  Cpu,
  Rocket,
  User,
  Briefcase,
  Target,
  Wrench,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const BASE_URL = import.meta.env.BASE_URL;

const projects = [
  {
    title: "RB Logbook Web",
    subtitle: "React / Next.js / MobX",
    icon: <Rocket className="h-5 w-5" />,
    summary:
      "Converted an existing React Native mobile logbook application into a responsive web platform using React and Next.js, while preserving the original workflows and redesigning the architecture for browser-based routing, state, and data handling.",
    bullets: [
      "Rebuilt mobile screens for the web using responsive React components",
      "Used MobX and structured JSON data to replace the original SQLite-based flow",
      "Implemented authentication, editing, filtering, and dashboard-style analytics",
      "Learned how to adapt a mobile-first product into a scalable browser-based application",
    ],
  },
  {
    title: "Brain Lab BCI Project",
    subtitle: "C++ / Teensy 3.x / OpenBCI",
    icon: <Cpu className="h-5 w-5" />,
    summary:
      "Worked on a Brain Lab project centered on brain-computer interface systems, exploring how EEG signals can be captured, processed, and translated into meaningful outputs using hardware and signal processing.",
    bullets: [
      "Worked with EEG-based brain signal collection and SSVEP",
      "Explored how noisy neural signals can be filtered and interpreted for control tasks",
      "Connected hardware components such as LED stimuli and sensing systems into one pipeline",
      "Gained experience in work spanning embedded systems and signal processing",
    ],
  },
  {
    title: "Dynamic Compiler Project",
    subtitle: "SystemVerilog / C++",
    icon: <Code2 className="h-5 w-5" />,
    summary:
      "Explored a research-driven compiler project that investigated moving parts of compilation into hardware to improve security and reduce vulnerabilities associated with software-based control flow attacks such as return-oriented programming.",
    bullets: [
      "Studied the security motivation for performing compiler-related work in hardware",
      "Explored how compiler stages like lexical analysis and parsing relate to hardware structures",
      "Connected concepts from computer architecture, security, and compiler design",
      "Learned how hardware-software co-design can improve trust, control, and system resilience",
    ],
  },
];
const skills = {
  Languages: [
    "C++", "C", "Python", "CUDA", "Java",
    "Verilog", "SystemVerilog", "VHDL",
    "JavaScript", "HTML/CSS", "SQL", "LaTeX"
  ],
  Frameworks: [
    "React", "Next.js", "Django", "Spring Boot",
    "Bootstrap", "Tailwind"
  ],
  Tools: [
    "Git", "Linux", "PyTorch", "NumPy", "Pandas",
    "ModelSim", "Quartus Prime",
    "VS Code", "PyCharm", "Eclipse", "MobX", "Formik"
  ],
  Areas: [
    "Full-Stack Development",
    "Embedded Systems",
    "GPU Computing",
    "Machine Learning",
    "Computer Architecture",
    "Hardware-Software Co-Design"
  ],
};

const timeline = [
  {
    period: "Now",
    title: "Build deeper technical breadth",
    description:
      "Continue strengthening algorithms, system design, and production-quality engineering habits through classes, projects, and interview preparation.",
  },
  {
    period: "Next 1–2 years",
    title: "Gain strong industry experience",
    description:
      "Pursue software engineering, systems, or AI-related internships where I can contribute to real products and learn from experienced engineers.",
  },
  {
    period: "Long term",
    title: "Work on impactful systems",
    description:
      "Work on large-scale systems at the intersection of software and hardware.",
  },
];

const links = {
  email: "aseshadri39@gatech.edu",
  linkedin: "https://www.linkedin.com/in/anirudhsesh/",
  github: "https://github.com/anirudh-seshadri",
  portfolio: `${BASE_URL}`,
  resume: `${BASE_URL}/resume.pdf`,
};

const detailedProjects = [
  {
    title: "RB Logbook Web",
    image: `${BASE_URL}rb-logbook.png`,
    imageAlt: "RB Logbook Web application image",
    fit: "contain",
    paragraphs: [
    "The RB Logbook Web project was centered on converting an existing mobile logbook application built in React Native into a fully responsive web platform using React and Next.js. The goal of this project was not simply to recreate the user interface, but to preserve the original workflows while redesigning the system architecture so that it functioned effectively in a browser-based environment. This required rethinking several core aspects of the application, including layout, routing, data flow, and state management, in a way that felt natural on the web while still maintaining consistency with the original mobile experience. Unlike mobile applications, which rely heavily on touch-based navigation and fixed screen sizes, web applications must adapt to a wide variety of devices and resolutions. Because of this, I had to carefully redesign components to ensure responsiveness and usability across desktops, tablets, and smaller screens, while still maintaining the intuitive feel of the original product.",

    "One of the most significant challenges I encountered was adapting the data layer. The mobile version of the application relied on a local SQLite database, which is not directly usable in a traditional web environment. To address this, I designed a system that used structured JSON data in combination with MobX for state management. This approach allowed me to simulate database-like behavior while maintaining a reactive and consistent data flow across multiple components. I created a centralized store that handled flight records, updates, and derived data, ensuring that all components stayed synchronized. This was particularly important for features like filtering and editing, where multiple parts of the UI depend on shared state. By leveraging MobX’s reactivity, the application could dynamically update and reflect changes in flight data without requiring a backend database, which made the system both efficient and easier to debug during development.",

    "In addition to data handling, I implemented and refined several core features of the application, including authentication flows, flight editing, filtering, and a dashboard for analytics. A major focus was ensuring that these features were intuitive and responsive across different screen sizes. This required translating mobile-first UI patterns into flexible web-based layouts, which involved careful consideration of spacing, navigation structure, and user interaction patterns. For example, I redesigned navigation elements to work with both mouse and keyboard input, and ensured that forms and inputs were accessible and easy to use. The dashboard feature also required aggregating and presenting data in a meaningful way, which helped improve my ability to design user-facing analytics.",

    "Another important aspect of the project was performance and maintainability. I structured the codebase in a way that separated concerns between UI components, state management, and data logic. This made the application easier to extend and debug, while also aligning with best practices in React and Next.js development. I also focused on writing reusable components and maintaining a clean project structure, which allowed for faster iteration and easier collaboration. Performance considerations included minimizing unnecessary re-renders and ensuring efficient data updates through MobX.",

    "Overall, this project significantly strengthened my understanding of frontend architecture and cross-platform development. It taught me how to take an existing system and thoughtfully adapt it to a new environment while making design tradeoffs between simplicity, performance, and scalability. More importantly, it reinforced the importance of building applications that are not only technically correct, but also intuitive and useful from a user’s perspective."
    ]
  },
  {
    title: "Brain Lab BCI Project",
    image: `${BASE_URL}brain-lab.jpg`,
    imageAlt: "Brain Lab BCI project image",
    imagePosition: "object-center",
    fit: "cover",
    paragraphs: [
    "The Brain Lab BCI project explored brain-computer interface systems using EEG signals and visual neural responses. The main goal of this work was to understand how to capture, process, and translate brain activity into meaningful outputs that control external systems. This area combines hardware, signal processing, embedded systems, and intelligent computing, with applications in assistive technology and human-computer interaction. The project aimed to connect theoretical neuroscience ideas with practical engineering by creating a pipeline to interpret real-time brain signals. Beyond just observing neural activity, the goal was to design a system that could reliably translate human attention into measurable signals for interactive systems or control mechanisms.",

    "A key challenge in this project was working with EEG data, which is often noisy and hard to interpret. Brain signals can be affected by environmental noise, biological variability, and limitations of the sensing equipment. Therefore, raw data cannot be used directly. I looked into filtering techniques and frequency-based analysis to isolate meaningful patterns from the noisy input. This involved understanding concepts like signal-to-noise ratio, frequency bands, and filtering methods such as band-pass filtering to isolate relevant ranges. Through this process, I learned that working with real-world data differs significantly from dealing with clean, simulated datasets, as it requires careful preprocessing, validation, and tuning to extract reliable information and minimize false signals.",

    "The system focused on visually evoked potentials, where LED stimuli flicker at certain frequencies and the brain responds accordingly. By analyzing these responses, the system could determine which stimulus a user was focusing on. Implementing this required integrating hardware for visual stimulation, sensing equipment for collecting data, and techniques for analyzing frequency-domain behavior. I worked on mapping these frequency responses to user intent by identifying peaks in the frequency spectrum and correlating them with known stimulus frequencies. This process demanded both technical implementation and repeated experimentation to ensure that the signals were stable, consistent, and distinguishable across different conditions and users.",

    "This project required considering multiple layers of the system rather than separating hardware from software. I gained insight into how embedded components, biological data, and signal-processing algorithms work together in a real-world setup. It also emphasized how system performance relies on hardware reliability and algorithm strength. Small inconsistencies in hardware signals, electrode placement, or user behavior could significantly impact results, highlighting the need for an end-to-end system perspective. Additionally, I learned the importance of designing systems that can tolerate noise and variability—rather than assuming ideal conditions—which is essential in real-world engineering.",

    "Overall, this experience deepened my understanding of signal processing, noisy data systems, and interdisciplinary engineering. It revealed how real-world systems must cope with uncertainty and variability, differing greatly from clean theoretical models. This project reinforced my interest in creating systems that integrate hardware and software, especially in areas where human interaction and real-time data processing are crucial."
    ]
  },
  {
    title: "Dynamic Compiler Project",
    image: `${BASE_URL}dynamic-compiler.png`,
    imageAlt: "Dynamic Compiler image",
    fit: "contain",
    paragraphs: [
    "The Dynamic Compiler project was a research effort focused on improving system security by moving parts of the compilation process from software to hardware. This work was motivated by the vulnerability of software-based execution systems to control flow attacks. Attackers manipulate the call stack to change how a program behaves. In these attacks, bad actors reuse existing instructions in memory to perform unintended operations without injecting new code, making detection difficult. By shifting certain responsibilities to hardware, the system can reduce its attack surface and improve reliability. This project explored how changes in architecture could improve both performance and security at a fundamental level. It also investigated how tighter control over execution could prevent entire types of vulnerabilities.",

    "A key part of this project involved understanding how traditional compiler stages, like lexical analysis and parsing, could be implemented in hardware-oriented structures. This required connecting ideas from high-level compiler design with low-level hardware constraints, such as timing, parallelism, and resource limits. Instead of viewing it purely as software execution, I had to think about how these processes could work in a more controlled hardware environment, where operations are predictable and strictly regulated. This change in perspective helped me grasp the tradeoffs between abstraction and control in system design, as well as the challenges of implementing flexible logic within strict hardware constraints.",

    "One of the most interesting aspects of the project was examining the tradeoff between flexibility and security. Software systems are easier to modify and update, but they are also more susceptible to manipulation because they operate in less controlled environments. Hardware-based methods provide stronger guarantees and more controlled execution, but they are less adaptable once in place. This tradeoff highlighted how design choices at the system level directly affect security and performance. It also stressed the importance of selecting the right level of abstraction based on system needs, especially in applications where reliability and protection against attacks are crucial.",

    "The project also offered valuable insights into hardware-software co-design, where both areas are considered together when creating a system. Instead of treating hardware and software as separate layers, this method encourages designing them together to achieve better performance, reliability, and security. I gained experience thinking about systems as a whole, considering how different layers interact instead of optimizing each one independently. This included recognizing how constraints in hardware can affect software design and vice versa, leading to more efficient and secure overall architectures.",

    "Overall, this project enhanced my understanding of computer architecture, compiler design, and system security. It also helped me develop the ability to connect theoretical concepts with practical engineering applications. Working on this project gave me a clearer view of how low-level system design choices can significantly affect security and performance. This experience has shaped how I tackle system-level challenges and reinforced my interest in building secure and efficient computing systems, especially in areas that need strong guarantees about correctness and protection against threats."
    ]
  },
  {
  title: "LED Pattern Controller (ESP32)",
  image: `${BASE_URL}esp32-led-project.jpg`, 
  imageAlt: "ESP32 LED breadboard project",
  customImageClass: "max-w-lg",
  fit: "contain",
  paragraphs: [
    "This project was focused on building a simple LED pattern controller using an ESP32 microcontroller and a breadboard-based circuit. The goal was to control multiple LEDs and switch between different lighting patterns using button input, allowing me to explore how embedded systems combine software logic with physical hardware. The system was designed to implement patterns such as blinking, chasing, and sequential filling, with each pattern triggered through user interaction.",

    "The process involved wiring multiple LEDs with resistors on a breadboard and connecting them to different GPIO pins on the ESP32. I also added a pushbutton input to switch between different modes. On the software side, I wrote embedded C++ code to define multiple lighting patterns and used timing logic through millis() instead of delay(), which is more efficient and closer to how real embedded systems are designed. I also implemented a simple state-based system where each button press changes the current pattern being displayed.",

    "One of the biggest challenges I encountered was that only one LED was consistently functioning as expected, even though the code was written to control multiple LEDs. Initially, I suspected a bug in the pattern logic, but after debugging, I realized the issue was related to hardware constraints. The ESP32 does not treat all pins as general-purpose outputs, and some pins are reserved for internal functions or have special behavior during boot. Because of this, several of the pins I used did not behave reliably, which caused the system to only partially function.",

    "This challenge highlighted an important aspect of embedded systems: debugging is not just about fixing code, but also understanding how hardware limitations impact system behavior. Even when the software logic is correct, incorrect assumptions about the hardware can lead to unexpected results. Through this process, I gained a much better understanding of GPIO pin behavior, breadboard wiring, and how microcontroller constraints affect design decisions.",

    "Overall, this project helped me develop hands-on skills in breadboarding, microcontroller programming, and hardware-software debugging. It reinforced the importance of careful hardware selection and testing in embedded systems. If I were to continue this project, I would refine the pin selection, improve the wiring layout, and expand the system to include more advanced features such as PWM-based LED fading or RGB control."
  ]
},
];

const sectionTitle = (eyebrow, title, description) => (
  <div className="max-w-3xl space-y-3">
    <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
    <p className="text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
  </div>
);

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
     <div className="absolute inset-x-0 top-0 -z-10 h-[35vh] bg-gradient-to-b from-slate-100 via-white to-white" />
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-slate-900">Anirudh Seshadri</p>
            <p className="text-xs text-slate-500">Computer Engineering Student at Georgia Institute of Technology</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#projects" className="transition hover:text-slate-900">Projects</a>
            <a href="#skills" className="transition hover:text-slate-900">Skills</a>
            <a href="#goals" className="transition hover:text-slate-900">Goals</a>
            <a href="#resume" className="transition hover:text-slate-900">Resume</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <Badge className="rounded-full bg-slate-900 px-4 py-1 text-white hover:bg-slate-900">
                Georgia Tech • Systems and Architecture & Distributed Systems and Software Design
              </Badge>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Building thoughtful systems across software, hardware, and intelligent applications.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I’m Anirudh Seshadri, a Computer Engineering student at Georgia Tech, focused on creating scalable technical solutions, from responsive web applications to high-performance computing and research-driven systems work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl px-6">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-6">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Atlanta, GA / San Jose, CA</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {links.email}</div>            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-xl shadow-slate-200/60">
            <CardContent className="p-0">
              <div className="bg-slate-950 p-8 text-white">
                <div className="mb-8 flex flex-col items-center text-center">
                  <img
                    src={`${BASE_URL}headshot.jpeg`}
                    alt="Anirudh Seshadri headshot"
                    className="mb-5 h-32 w-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
                  />
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Overview</p>
                  <h2 className="mt-2 text-2xl font-semibold">I like building across layers</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                    Computer Engineering student building across software, systems, and intelligent applications.
                  </p>
                </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ["Frontend", "React, Next.js, responsive design, and user experience"],
                      ["Systems", "GPU programming and computer architecture"],
                      ["Research", "Security and hardware-software thinking"],
                      ["Growth", "Teamwork and fast learning"],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="font-medium text-white">{title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-200 bg-white text-center">
                  {[
                    ["3+", "Core project areas"],
                    ["Full-stack", "Web experience"],
                    ["Systems", "Performance focus"],
                  ].map(([value, label]) => (
                    <div key={label} className="p-5">
                      <p className="text-2xl font-bold text-slate-950">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {sectionTitle(
            "About Me",
            "A builder who likes connecting layers of technology.",
            "I enjoy working on problems where product experience, technical depth, and system constraints all matter. My work has ranged from frontend engineering and responsive web design to GPU programming, architecture-oriented research, and project-based software development."
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="rounded-[1.5rem] border-slate-200 lg:col-span-2">
              <CardContent className="p-8">
                <p className="text-base leading-8 text-slate-700">
                  I’m a Computer Engineering student at Georgia Tech with strong interest in software engineering, scalable systems, and AI-driven applications. I like learning by building, which has led me to work across a wide range of technical domains: working on browser-based web applications, exploring high-performance GPU algorithms in CUDA, and studying security-motivated hardware research in compilers.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  Beyond technical execution, I care about communication and long-term growth. Team projects and internships have taught me how to adapt quickly, ask better questions, and turn messy requirements into organized deliverables. I want my work to be both technically strong and useful to real people.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.5rem] border-slate-200">
              <CardHeader>
                <CardTitle>Quick Snapshot</CardTitle>
                <CardDescription>What I bring to teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                {[
                  "Comfortable moving between product-facing work and lower-level systems thinking",
                  "Strong interest in software engineering and AI applications",
                  "Experience with collaborative project work",
                  "Motivated by learning quickly and building things that scale",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4 leading-6">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {sectionTitle(
            "Projects",
            "Technical work that reflects the way I think and build.",
            "These projects highlight my experience across web development, research, and systems work. Together, they show how I approach architecture, implementation, and real-world technical constraints."
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full rounded-[1.75rem] border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="leading-6">{project.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-slate-700">{project.summary}</p>
                    <div className="mt-5 space-y-3">
                      {project.bullets.map((bullet) => (
                        <div key={bullet} className="rounded-2xl bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 space-y-10">
            {detailedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="rounded-[1.75rem] border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription>Detailed Project Overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={`w-full ${
                      project.fit === "cover"
                        ? `h-80 md:h-96 object-cover ${project.imagePosition || "object-center"}`
                        : `${project.customImageClass || "max-w-4xl"} mx-auto object-contain`
                    } rounded-2xl border border-slate-200 bg-slate-50`}   
                  />
                    <div className="space-y-4 text-base leading-8 text-slate-700">
                      {project.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {sectionTitle(
            "Skills",
            "A toolkit shaped by coursework, projects, and hands-on building.",
            "I’ve built up a foundation across programming, web technologies, development tools, and broader technical areas."
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="rounded-[1.5rem] border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} variant="secondary" className="rounded-full px-3 py-1 text-sm">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="goals" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {sectionTitle(
            "Career Goals",
            "Turning curiosity into a long-term engineering path.",
            "My long-term goal is to work on impactful systems where strong engineering fundamentals and technical skills really come into play. In the near term, I want to keep gaining experience through internships, projects, and better knowledge in different areas on my own."
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[1.5rem] border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><Target className="h-5 w-5" /> My Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  In the short term, I want to strengthen the fundamentals that make engineers effective over time, which are problem solving, intuition, good code, and clear communication.
                </p>
                <p>
                  I also want to keep building projects that are not just technically interesting, but meaningful in how they are structured, presented, and used. 
                </p>
                <p>
                  Over time, I see myself contributing to engineering teams working on scalable software and technically demanding systems, especially in environments where learning and ownership are valued.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-5">
              {timeline.map((item) => (
                <Card key={item.title} className="rounded-[1.5rem] border-slate-200">
                  <CardContent className="flex gap-4 p-6">
                    <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-slate-900" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {sectionTitle(
            "Resume",
            "A concise summary of my academic background, technical skills, and experience.",
            "You can view my full resume below or download it directly. I’ve also included links to my LinkedIn and GitHub for more context on my work."
          )}

          <Card className="mt-10 rounded-[1.75rem] border-slate-200">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_0.85fr] lg:p-10">
              <div className="rounded-[1.5rem] border border-slate-300 bg-slate-50 p-4">
                <iframe
                  src={links.resume}
                  title="Resume"
                  className="h-[500px] w-full rounded-xl"
                />
              </div>

              <div className="space-y-4">
                <Card className="rounded-[1.25rem] border-slate-200">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Briefcase className="mt-1 h-5 w-5 text-slate-500" />
                      <div>
                        <h3 className="font-semibold text-slate-900">What's included</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          A one-page resume with my coursework, projects, and experience, along with links to explore more of my work.                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl px-5">
                    <a href={links.resume} target="_blank" rel="noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="rounded-2xl px-5">
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="rounded-2xl px-5">
                    <a href={links.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-300/40">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Contact</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s connect.</h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  I’m always interested in opportunities to learn, build, and contribute, whether that’s through internships, engineering roles, research, or conversations with people working on exciting technical problems.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <Mail className="h-5 w-5" />, label: "Email", value: links.email },
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: links.linkedin },
                  { icon: <Github className="h-5 w-5" />, label: "GitHub", value: links.github },
                  { icon: <ExternalLink className="h-5 w-5" />, label: "Portfolio", value: links.portfolio },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                      {item.icon}
                    </div>
                    <p className="text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
                    <p className="mt-2 break-all text-sm leading-7 text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Anirudh Seshadri. Built for portfolio.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2"><Wrench className="h-4 w-4" /> Built with React, Next.js, and Tailwind.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

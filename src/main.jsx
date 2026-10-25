
import { Terminal } from "lucide-react";
import {
  Bot,
  Send,
  Orbit,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
  Code2,
  Cpu,
  ScanLine,
  Activity,
  Menu,
  X,
  Copy,
} from "lucide-react";
import "./styles.css";

// ========================================
// PROJECTS
// ========================================

const projects = [
  {
    number: "01",
    type: "COMPUTER VISION · INTERNSHIP",
    title: "Vision Inspection POC",
    description:
      "A machine-vision proof of concept for industrial component inspection.",
    details:
      "Worked on a machine-vision proof of concept using LUCID cameras and OpenCV. The work included camera calibration, shape detection, contour analysis, and dimensional measurement to explore comparing inspected components with engineering references for PASS/FAIL inspection.",
    stack: ["Python", "OpenCV", "LUCID Cameras"],
    image: "/images/vision-project.png",
    imageAlt: "Industrial vision inspection project",
    icon: ScanLine,
    tone: "violet",
    link: "",
    caseStudy: {
      problem: "Industrial components need to be inspected consistently against engineering references. A useful inspection workflow must compare the observed part geometry with the expected geometry and identify dimensional deviations.",
      approach: [
        "Worked on a classical computer-vision proof of concept using LUCID camera captures and OpenCV.",
        "Explored camera calibration with a 9 × 7 checkerboard pattern and 22 mm squares, along with pixel-to-millimetre measurement using known dimensions.",
        "The planned comparison pipeline included image preprocessing and edge/contour extraction, circle or shape fitting, geometric alignment using PCA and ICP, and tolerance-based PASS/FAIL evaluation.",
        "The engineering drawing/reference-geometry parser and full real-image validation were still pending in the documented workflow; this case study does not claim a completed production-grade inspection result."
      ],
      results: "The work established a practical inspection-pipeline direction and calibration approach. No verified final accuracy, production deployment, or completed real-image PASS/FAIL benchmark was recorded.",
      challenges: [
        "Camera perspective, lighting, contour quality, and calibration all affect measurement reliability.",
        "Engineering drawing dimensions must be translated into usable reference geometry before a fair comparison can be made.",
        "The pipeline needs to distinguish genuine dimensional deviation from image noise and alignment error."
      ],
      learned: "I learned how classical computer vision, calibration, geometric alignment, and engineering tolerances fit together in an industrial inspection workflow—and why validation on real captures is essential before reporting performance."
    },
  },
  {
    number: "02",
    type: "RESEARCH · EEG",
    title: "Localization of Epileptic Seizures",
    description:
      "An EEG research project exploring signal processing and classical and quantum algorithms.",
    details:
      "Explored EEG preprocessing, time- and frequency-domain feature extraction, and topological data analysis. The project also involved experimenting with classical neural networks and variational quantum circuits for seizure-related classification.",
    stack: ["Python", "MNE", "PyTorch", "PennyLane"],
    image: "/images/eeg-project.png",
    imageAlt: "EEG seizure localization research",
    icon: Activity,
    tone: "blue",
    link: "",
    caseStudy: {
      problem: "The project explores EEG-based seizure-related classification and localization, where signals are noisy, high-dimensional, and vary across recordings and patients.",
      approach: [
        "Worked with EEG data from seizure datasets including CHB-MIT and processed EDF recordings into a consistent workflow.",
        "Explored preprocessing with band-pass and notch filtering, resampling, and windowing; the pipeline used 256-sample windows and a 128 Hz resampling target in the documented experiments.",
        "Extracted time-domain and frequency-domain features, including PSD bands, and explored topological data analysis features such as Betti curves and persistence entropy.",
        "Compared classical neural-network experiments with a variational quantum circuit using PennyLane. The quantum experiment used 16 qubits and 4 layers, trained on chb02, chb05, and chb24, and evaluated on unseen patient chb03."
      ],
      results: "One documented quantum VQC experiment achieved 52.5% accuracy on the unseen chb03 patient. This is an experimental result, not evidence of clinical readiness. Classical model experiments also required further work; results varied and some runs had low accuracy.",
      challenges: [
        "EEG recordings contain noisy or poor-quality channels; a noise audit across 686 EDF files flagged channels for review.",
        "Dataset formats, channel consistency, and feature-array shapes required careful handling during preprocessing and training.",
        "Generalizing to a patient not seen during training is difficult, and a small experimental result is not enough to establish reliable seizure localization."
      ],
      learned: "I gained experience with EEG preprocessing, feature engineering, patient-wise evaluation, and the practical challenges of comparing classical and quantum machine-learning approaches on biomedical signals."
    },
  },
  {
    number: "03",
    type: "WEB APPLICATION",
    title: "Digital Detox Companion",
    description:
      "A mood-tracking application with history, charts, filters, and wellness tips.",
    details:
      "Built a React-based application for recording moods and reviewing mood history. Integrated Firebase Firestore for storing entries and used charts, filters, and wellness tips to make mood tracking more interactive.",
    stack: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/detox-project.png",
    imageAlt: "Digital Detox Companion interface",
    icon: Sparkles,
    tone: "pink",
    link: "",
    caseStudy: {
      problem: "Digital wellbeing can be easier to reflect on when users can record their mood and review patterns over time rather than relying on memory alone.",
      approach: [
        "Built a React-based interface for logging moods such as Happy, Sad, Neutral, Angry, and Tired.",
        "Used Firebase Firestore to store mood entries and support mood history.",
        "Added history filtering, visual summaries with Recharts, calendar-based browsing, and digital-detox or wellness tips.",
        "Explored interaction improvements including voice input and keyboard navigation."
      ],
      results: "The project brings mood logging, history, filtering, charts, and wellness tips into one web application. No measured user-study outcomes or quantified wellbeing improvements were recorded.",
      challenges: [
        "Keeping mood entries, filters, and history views consistent as the user interacts with the app.",
        "Handling Firestore setup and integration correctly in the React application.",
        "Making the experience usable with keyboard navigation and alternative input methods."
      ],
      learned: "I strengthened my understanding of React component state, connecting a frontend to Firestore, presenting data visually, and thinking about accessibility in everyday applications."
    },
  },
  {
    number: "04",
    type: "COMPUTER VISION · OBJECT DETECTION",
    title: "Number Plate Detection",
    description:
      "A computer-vision project focused on detecting vehicle number plates.",
    details:
      "Explored vehicle number plate detection using computer-vision and object-detection techniques, including YOLOv8/OpenCV and labelled examples prepared with Label Studio. The scope documented here is plate-region detection; OCR or text recognition is not claimed.",
    stack: ["Python", "OpenCV", "YOLOv8"],
    image: "/images/number-plate-project.png",
    imageAlt: "Vehicle number plate detection visualization",
    icon: ScanLine,
    tone: "orange",
    link: "",
    caseStudy: {
      problem: "Vehicle number-plate detection requires a model to identify plate regions in images or video frames despite changes in viewpoint, scale, and image conditions.",
      approach: [
        "Prepared labelled examples using Label Studio as part of the detection workflow.",
        "Explored a computer-vision pipeline using YOLOv8 and OpenCV to identify number-plate regions.",
        "Kept the documented scope focused on detection; automatic character recognition (OCR) is not included as a confirmed feature."
      ],
      results: "The project scope and tooling cover labelled data and number-plate-region detection. A verified precision/recall score, benchmark, or deployment result was not available in the project notes.",
      challenges: [
        "Consistent annotations are important for training and evaluating an object detector.",
        "Plate size, angle, lighting, and image quality can affect detection quality.",
        "Detection and reading the characters are separate tasks and should not be presented as the same capability."
      ],
      learned: "I learned to treat data annotation and object detection as separate parts of a computer-vision workflow, and to report only the capabilities and results that have actually been validated."
    },
  },
];

const skillGroups = [
  {
    name: "Software Development",
    short: "01",
    description: "Building responsive apps and practical interfaces.",
    skills: [
      { name: "React", projects: ["Digital Detox Companion"] },
      { name: "JavaScript", projects: ["Digital Detox Companion"] },
      { name: "Firebase", projects: ["Digital Detox Companion"] },
      { name: "Tailwind CSS", projects: ["Digital Detox Companion"] },
      { name: "SQL", projects: [] },
      { name: "REST APIs", projects: [] },
      { name: "Git & GitHub", projects: ["Digital Detox Companion", "Number Plate Detection"] },
      { name: "Java", projects: [] },
    ],
  },
  {
    name: "AI / ML",
    short: "02",
    description: "Exploring learning models and EEG signal analysis.",
    skills: [
      { name: "Python", projects: ["Vision Inspection POC", "Localization of Epileptic Seizures", "Number Plate Detection"] },
      { name: "PyTorch", projects: ["Localization of Epileptic Seizures"] },
      { name: "PennyLane", projects: ["Localization of Epileptic Seizures"] },
      { name: "EEG Signal Processing", projects: ["Localization of Epileptic Seizures"] },
      { name: "Machine Learning", projects: ["Localization of Epileptic Seizures", "Number Plate Detection"] },
    ],
  },
  {
    name: "Computer Vision",
    short: "03",
    description: "Turning images into measurements and detections.",
    skills: [
      { name: "OpenCV", projects: ["Vision Inspection POC", "Number Plate Detection"] },
      { name: "YOLOv8", projects: ["Number Plate Detection"] },
      { name: "Camera Calibration", projects: ["Vision Inspection POC"] },
      { name: "Contour Detection", projects: ["Vision Inspection POC"] },
      { name: "LUCID Cameras", projects: ["Vision Inspection POC"] },
    ],
  },
  {
    name: "Robotics",
    short: "04",
    description: "Industrial automation, robot simulation, and vision.",
    skills: [
      { name: "ABB Robotics", projects: ["Vision Inspection POC"] },
      { name: "RobotStudio", projects: ["Vision Inspection POC"] },
      { name: "RAPID Programming", projects: ["Vision Inspection POC"] },
      { name: "Industrial Automation", projects: ["Vision Inspection POC"] },
    ],
  },
];

function SkillsConstellation({ activeSkill, onSkillHover }) {
  const reduceMotion = useReducedMotion();
  const allSkills = skillGroups.flatMap((group) =>
    group.skills.map((skill) => ({ ...skill, group: group.name, groupShort: group.short }))
  );
  const positions = {
    "React": [12, 25], "JavaScript": [34, 14], "Firebase": [56, 28],
    "Tailwind CSS": [34, 43], "SQL": [78, 15], "REST APIs": [77, 43],
    "Git & GitHub": [13, 60], "Java": [55, 65],
    "Python": [42, 35], "PyTorch": [64, 18], "PennyLane": [77, 48],
    "EEG Signal Processing": [20, 58], "Machine Learning": [48, 73],
    "OpenCV": [20, 30], "YOLOv8": [43, 16], "Camera Calibration": [66, 34],
    "Contour Detection": [38, 62], "LUCID Cameras": [72, 65],
    "ABB Robotics": [16, 32], "RobotStudio": [41, 20], "RAPID Programming": [63, 44],
    "Industrial Automation": [45, 70],
  };
  const projects = [
    { name: "Digital Detox Companion", x: 18, y: 84 },
    { name: "Localization of Epileptic Seizures", x: 50, y: 88 },
    { name: "Vision Inspection POC", x: 80, y: 84 },
    { name: "Number Plate Detection", x: 82, y: 57 },
  ];
  const activeProjects = activeSkill?.projects || [];
  const selectedPos = activeSkill ? positions[activeSkill.name] : null;


return (
  <div className="skills-constellation">
    <div className="constellation-intro">
      <span className="section-index">TOOLS I WORK WITH</span>
      <p>
        Move over a skill to light up its connections and see where I used it.
      </p>
    </div>

    <div
      className="constellation-map"
      onMouseLeave={() => onSkillHover(null)}
    >

      
<div className="constellation-comets" aria-hidden="true">
  <span
    className="constellation-comet"
    style={{
      "--comet-left": "15%",
      "--comet-duration": "22s",
      "--comet-delay": "-8s",
    }}
  />

  <span
    className="constellation-comet"
    style={{
      "--comet-left": "48%",
      "--comet-duration": "28s",
      "--comet-delay": "-19s",
    }}
  />

  <span
    className="constellation-comet"
    style={{
      "--comet-left": "78%",
      "--comet-duration": "25s",
      "--comet-delay": "-13s",
    }}
  />
</div>

      <svg
        className="constellation-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="constellationLineGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>

        {allSkills.map((skill) => {
          const pos = positions[skill.name];

          if (!pos) return null;

          return skill.projects.map((project) => {
            const target = projects.find((p) => p.name === project);

            if (!target) return null;

            const active = activeSkill?.name === skill.name;

            // Only draw the connections for the hovered skill.
            if (!active) return null;

            const dx = target.x - pos[0];
            const dy = target.y - pos[1];

            // Gentle curve with a smaller bend.
            const bend = Math.min(4, Math.abs(dx) * 0.06);
            const direction = dy >= 0 ? 1 : -1;

            const cx = pos[0] + dx * 0.5;
            const cy = pos[1] + dy * 0.5 - direction * bend;

            const path = `M ${pos[0]} ${pos[1]} Q ${cx} ${cy} ${target.x} ${target.y}`;

            return (
              <path
                key={`${skill.name}-${project}`}
                d={path}
                pathLength="1"
                className="constellation-connection is-lit"
              />
            );
          });
        })}
      </svg>



        <div className="constellation-category-label category-software"><span>01</span> Software Development</div>
        <div className="constellation-category-label category-ai"><span>02</span> AI / ML</div>
        <div className="constellation-category-label category-vision"><span>03</span> Computer Vision</div>
        <div className="constellation-category-label category-robotics"><span>04</span> Robotics</div>

        {allSkills.map((skill, index) => {
          const pos = positions[skill.name];
          const isActive = activeSkill?.name === skill.name;
          const isRelated = activeSkill && skill.projects.some((p) => activeProjects.includes(p));
          const isDimmed = activeSkill && !isActive && !isRelated;
          return (
            <motion.button
              type="button"
              key={skill.name}
              className={`constellation-star ${isActive ? "is-selected" : ""} ${isRelated ? "is-related" : ""} ${isDimmed ? "is-dimmed" : ""}`}
              style={{ left: `${pos[0]}%`, top: `${pos[1]}%`, "--star-delay": `${index * 35}ms` }}
              onMouseEnter={() => onSkillHover(skill)}
              onFocus={() => onSkillHover(skill)}
              onBlur={() => onSkillHover(null)}
              onClick={() => onSkillHover(isActive ? null : skill)}
              aria-pressed={!!isActive}
              title={skill.projects.length ? `${skill.name} — ${skill.projects.join(", ")}` : `${skill.name} — no project linked yet`}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={reduceMotion ? {} : { scale: 1.12 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: index * 0.025 }}
            >
              <span className="star-orb" aria-hidden="true" />
              <span className="star-label">{skill.name}</span>
            </motion.button>
          );
        })}

        {projects.map((project) => {
          const connected = !!activeSkill && activeProjects.includes(project.name);
          return (
            <div
              key={project.name}
              className={`constellation-project ${connected ? "is-connected" : ""} ${activeSkill && !connected ? "is-dimmed" : ""}`}
              style={{ left: `${project.x}%`, top: `${project.y}%` }}
            >
              <span className="project-orb" aria-hidden="true" />
              <span>{project.name}</span>
            </div>
          );
        })}
      </div>

      <div className={`skill-project-links ${activeSkill ? "has-selection" : ""}`} aria-live="polite">
        {activeSkill ? (
          <>
            <div className="skill-project-links-label"><span className="skill-node" /> {activeSkill.name} <span>used in</span></div>
            {activeProjects.length ? (
              <div className="skill-project-chips">
                {activeProjects.map((project) => <a key={project} href="#work">{project}<ArrowUpRight size={13} /></a>)}
              </div>
            ) : <p className="skill-no-project">A related project isn't linked yet.</p>}
          </>
        ) : <p><Sparkles size={14} /> Hover, focus, or tap a skill to trace its project connections.</p>}
      </div>
    </div>
  );
}

// ========================================
// EXPERIENCE
// ========================================

const experiences = [
  {
    period: "JUL 2026 — PRESENT",
    status: "CURRENT ROLE",
    role: "AI & Robotics Intern",
    company: "RoshAI Pvt. Ltd.",
    description:
      "Working with industrial robotics and intelligent automation, including ABB robots, RobotStudio, RAPID programming, and computer-vision inspection workflows.",
    details:
      "As an AI & Robotics Intern, I have been exploring ABB industrial robotics and automation workflows. My experience includes working with RobotStudio and RAPID programming, and contributing to a machine-vision proof of concept involving LUCID cameras, calibration, shape detection, and dimensional measurement for industrial inspection.",
    skills: [
      "ABB Robotics",
      "RobotStudio",
      "RAPID",
      "Computer Vision",
      "Industrial Automation",
    ],
    icon: Cpu,
  },
  {
    period: "MAY 2025 — JUN 2025",
    role: "AI/ML Intern",
    company: "Techgentsia Solutions",
    description:
      "Worked on computer-vision applications using Python and YOLOv8.",
    details:
      "During my AI/ML internship, I worked on computer-vision applications using Python and YOLOv8. This experience helped me gain practical exposure to object detection, image-based problems, and applying machine-learning techniques to real-world use cases.",
    skills: [
      "Python",
      "YOLOv8",
      "AI / ML",
      "Computer Vision",
    ],
    icon: Code2,
  },
  {
    period: "JUN 2024 — JUL 2024",
    role: "Project Intern",
    company: "CET",
    description:
      "Gained practical project experience and developed technical problem-solving skills.",
    details:
      "Completed a project internship at CET from June to July 2024. This experience provided an opportunity to work on project-related technical tasks and develop practical problem-solving skills. Add the specific project title, technologies, and your individual contributions here to give recruiters a clearer picture of your work.",
    skills: [
      "Project Development",
      "Technical Problem-Solving",
      "Teamwork",
    ],
    icon: Code2,
  },
];

// ========================================
// SCROLL REVEAL
// ========================================

function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, y: 25, filter: "blur(4px)" }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ========================================
// REUSABLE KNOW MORE POPUP
// ========================================

function DetailsModal({
  title,
  subtitle,
  details,
  caseStudy,
  image,
  imageAlt,
  stack = [],
  onClose,
}) {
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="details-overlay"
      role="presentation"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
    >
      <motion.div
        className="details-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
        initial={
          reduce
            ? false
            : { opacity: 0, y: 22, scale: 0.96 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: reduce ? 0 : 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="details-close"
          onClick={onClose}
          aria-label="Close details"
          autoFocus
        >
          <X size={20} />
        </button>

        <span className="section-index">{subtitle}</span>

        <h3 id="details-title">{title}</h3>

        {caseStudy ? (
          <div className="case-study-content">
            {image && (
              <div className="case-study-image-wrap">
                <img
                  className="case-study-image"
                  src={image}
                  alt={imageAlt || `${title} preview`}
                  onError={(event) => {
                    event.currentTarget.parentElement.style.display = "none";
                  }}
                />
              </div>
            )}

            <section className="case-study-section">
              <span className="case-study-kicker">01 / THE PROBLEM</span>
              <p>{caseStudy.problem}</p>
            </section>

            <section className="case-study-section">
              <span className="case-study-kicker">02 / APPROACH</span>
              <ul>
                {caseStudy.approach.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="case-study-section">
              <span className="case-study-kicker">03 / TECHNOLOGIES</span>
              <div className="tag-list case-study-tags">
                {stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>

            <section className="case-study-section">
              <span className="case-study-kicker">04 / RESULTS & STATUS</span>
              <p>{caseStudy.results}</p>
            </section>

            <section className="case-study-section">
              <span className="case-study-kicker">05 / CHALLENGES</span>
              <ul>
                {caseStudy.challenges.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="case-study-section">
              <span className="case-study-kicker">06 / WHAT I LEARNED</span>
              <p>{caseStudy.learned}</p>
            </section>
          </div>
        ) : (
          <p>{details}</p>
        )}

        <button
          className="button button-primary details-done"
          onClick={onClose}
        >
          Close <X size={15} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// PROJECT CARD
// ========================================

function ProjectCard({ project, index, activeSkill }) {
  const Icon = project.icon;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <Reveal
      delay={index * 0.07}
      className="project-reveal"
    >
      <motion.article
        className={`project-card ${project.tone} ${activeSkill ? (activeSkill.projects.includes(project.title) ? "skill-match" : "skill-unmatched") : ""}`}
        whileHover={{ y: -8 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="project-image-wrap">
          <img
            className="project-image"
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
              event.currentTarget.nextElementSibling.style.display =
                "grid";
            }}
          />

          <div
            className="project-image-placeholder"
            style={{ display: "none" }}
          >
            <div className="placeholder-grid" />
            <div className="placeholder-orbit orbit-a" />
            <div className="placeholder-orbit orbit-b" />
            <div className="placeholder-glow" />

            <Icon
              className="placeholder-icon"
              size={58}
              strokeWidth={1.15}
            />

            <span className="placeholder-label">
              PROJECT PREVIEW
            </span>
          </div>

          <div className="image-shade" />

          <span className="image-number">
            {project.number} / 04
          </span>

          <span className="image-open">
            <MoveUpRight size={18} />
          </span>
        </div>

        <div className="project-content">
          <div className="project-type">{project.type}</div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="tag-list">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button
            className="project-link details-trigger"
            onClick={() => setShowDetails(true)}
            aria-label={`Know more about ${project.title}`}
          >
            Know more <ArrowUpRight size={15} />
          </button>
        </div>
      </motion.article>

      <AnimatePresence>
        {showDetails && (
          <DetailsModal
            title={project.title}
            subtitle={project.type}
            details={project.details}
            caseStudy={project.caseStudy}
            image={project.image}
            imageAlt={project.imageAlt}
            stack={project.stack}
            onClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </Reveal>
  );
}

// ========================================
// EXPERIENCE TIMELINE CARD
// ========================================

function ExperienceCard({ experience, index }) {
  const [showDetails, setShowDetails] = React.useState(false);
  const Icon = experience.icon;

  return (
    <Reveal
      delay={index * 0.09}
      className="timeline-item"
    >
      <motion.div
        className="timeline-marker"
        whileHover={{ scale: 1.12 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon size={19} />
      </motion.div>

      <motion.article
        className="timeline-card"
        whileHover={{ y: -4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
      >
        <div className="timeline-topline">
          <span className="timeline-period">
            {experience.period}
          </span>

          {experience.status && (
            <span className="timeline-status">
              <span className="status-dot" />
              {experience.status}
            </span>
          )}
        </div>

        <h3>{experience.role}</h3>
        <h4>{experience.company}</h4>

        <p>{experience.description}</p>

        <div className="tag-list">
          {experience.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <button
          className="project-link details-trigger"
          onClick={() => setShowDetails(true)}
          aria-label={`Know more about ${experience.role} at ${experience.company}`}
        >
          Know more <ArrowUpRight size={15} />
        </button>
      </motion.article>

      <AnimatePresence>
        {showDetails && (
          <DetailsModal
            title={experience.role}
            subtitle={`${experience.company} · ${experience.period}`}
            details={experience.details}
            onClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </Reveal>
  );
}

function InteractiveTerminal() {
  const [input, setInput] = React.useState("");
  const [history, setHistory] = React.useState([
    {
      command: "",
      response: (
        <span>
          Welcome to Colin's terminal. Type{" "}
          <span className="terminal-highlight">help</span>{" "}
          to explore.
        </span>
      ),
    },
  ]);

  const commands = [
    "help",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
    "clear",
  ];

  function getResponse(command) {
    switch (command) {
      case "help":
        return (
          <div className="terminal-help">
            <p>Available commands:</p>
            {commands
              .filter((cmd) => cmd !== "clear")
              .map((cmd) => (
                <div className="terminal-command-info" key={cmd}>
                  <code>{cmd}</code>
                  <span>
                    {{
                      help: "List available commands",
                      about: "Learn about Colin",
                      skills: "Explore technical skills",
                      projects: "View selected projects",
                      experience: "Explore work experience",
                      contact: "Get in touch",
                    }[cmd]}
                  </span>
                </div>
              ))}
            <p className="terminal-hint">
              Type a command and press Enter.
            </p>
          </div>
        );

      case "about":
        return (
          <div>
            <p>
              <span className="terminal-highlight">
                Colin Pradeep
              </span>{" "}
              — Software Engineer.
            </p>
            <p>
              Computer Science Engineer from RSET with a minor
              in Robotics and Automation. Interested in AI/ML,
              computer vision, robotics, and software development.
            </p>
            <a className="terminal-result-link" href="#about">
              Read more about me ↗
            </a>
          </div>
        );

      case "skills":
        return (
          <div>
            <p className="terminal-highlight">
              Technologies & areas of interest
            </p>
            <p>
              React · JavaScript · Python · Java · SQL · Firebase
            </p>
            <p>
              Computer Vision · YOLOv8 · AI/ML · ABB Robotics ·
              RobotStudio · RAPID
            </p>
            <a className="terminal-result-link" href="#about">
              Explore skills ↗
            </a>
          </div>
        );

      case "projects":
        return (
          <div>
            <p className="terminal-highlight">
              Selected projects
            </p>
            <a className="terminal-result-link" href="#work">
              01. Vision Inspection POC ↗
            </a>
            <a className="terminal-result-link" href="#work">
              02. Epileptic Seizure Localization ↗
            </a>
            <a className="terminal-result-link" href="#work">
              03. Digital Detox Companion ↗
            </a>
            <a className="terminal-result-link" href="#work">
              04. Number Plate Detection ↗
            </a>
          </div>
        );

      case "experience":
        return (
          <div>
            <p className="terminal-highlight">
              Experience timeline
            </p>
            <p>Current · RoshAI Pvt. Ltd.</p>
            <p>May–June 2025 · Techgentsia Solutions</p>
            <p>June–July 2024 · CET</p>
            <a
              className="terminal-result-link"
              href="#experience"
            >
              View experience details ↗
            </a>
          </div>
        );

      case "contact":
        return (
          <div>
            <p>Interested in working together?</p>
            <a className="terminal-result-link" href="#contact">
              Let's connect ↗
            </a>
          </div>
        );

      default:
        return (
          <p>
            Command not found:{" "}
            <span className="terminal-error">{command}</span>.
            Type <code>help</code> to see available commands.
          </p>
        );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = commands.includes(command)
      ? getResponse(command)
      : getResponse(command);

    setHistory((previous) => [
      ...previous,
      { command, response },
    ]);

    setInput("");
  }

  return (
    <section
      className="terminal-section section-wrap"
      id="terminal"
    >
      <div className="terminal-intro">
        <span className="section-index">
          INTERACTIVE TERMINAL
        </span>

        <h2>
          A little command line{" "}
          <span className="gradient-text">magic.</span>
        </h2>

        <p>
          Curious about my work? Don't just browse it.
          Explore it.
        </p>
      </div>

      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="terminal-title">
            <Terminal size={14} />
            <span>colin@portfolio ~ </span>
          </div>

          <span className="terminal-live">
            ONLINE
          </span>
        </div>

        <div className="terminal-screen">
          <div className="terminal-welcome">
            <p>COLIN PRA DEEP — DEVELOPER TERMINAL</p>
            <p>
              System ready. Enter{" "}
              <code>help</code> to get started.
            </p>
          </div>

          <div className="terminal-history" aria-live="polite">
            {history.map((item, index) => (
              <div
                className="terminal-entry"
                key={`${index}-${item.command}`}
              >
                {item.command && (
                  <div className="terminal-command-line">
                    <span className="terminal-prompt">
                      colin@portfolio:~$
                    </span>
                    <span>{item.command}</span>
                  </div>
                )}

                <div className="terminal-response">
                  {item.response}
                </div>
              </div>
            ))}
          </div>

          <form
            className="terminal-input-row"
            onSubmit={handleSubmit}
          >
            <label
              className="terminal-prompt"
              htmlFor="terminal-command"
            >
              colin@portfolio:~$
            </label>

            <input
              id="terminal-command"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="type a command..."
              autoComplete="off"
              spellCheck="false"
              aria-label="Terminal command"
            />

            <span className="terminal-cursor" />
          </form>

          <div className="terminal-shortcuts">
            {["help", "projects", "experience", "contact"].map(
              (command) => (
                <button
                  type="button"
                  key={command}
                  onClick={() => {
                    setInput(command);
                    document
                      .getElementById("terminal-command")
                      ?.focus();
                  }}
                >
                  {command}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => {
                setHistory([]);
                setInput("");
              }}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


function InteractiveUniverse() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [activeNode, setActiveNode] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const reduceMotion = useReducedMotion();

  const topics = [
    { id: "software", label: "Software", angle: 0 },
    { id: "ai", label: "AI / ML", angle: 90 },
    { id: "vision", label: "Computer Vision", angle: 180 },
    { id: "robotics", label: "Robotics", angle: 270 },
  ];

  const knowledge = {
    about: {
      text:
        "Colin Pradeep is a Computer Science Engineer from Rajagiri School of Engineering & Technology (RSET), with a minor degree in Robotics and Automation. He is interested in software engineering, AI/ML, computer vision, and robotics.",
      link: "#about",
      label: "Explore About Me",
    },

    education: {
      text:
        "Colin studied Computer Science Engineering at Rajagiri School of Engineering & Technology (RSET) and completed a minor degree in Robotics and Automation.",
      link: "#about",
      label: "About Colin",
    },

    software: {
      text:
        "Colin is interested in software engineering and building practical applications. His portfolio includes React, JavaScript, Firebase, web development, and software projects such as the Digital Detox Companion.",
      link: "#work",
      label: "Explore Software Projects",
    },

    ai: {
      text:
        "Colin has explored AI/ML through his internship at Techgentsia Solutions, where he worked with Python and YOLOv8-based computer vision applications. His academic work also explores classical machine learning and quantum algorithms for EEG seizure localization.",
      link: "#experience",
      label: "View Experience",
    },

    vision: {
      text:
        "Colin's computer vision experience includes a vision inspection proof of concept using LUCID cameras, OpenCV, camera calibration, shape detection, and dimensional measurement. He has also worked with YOLOv8 during his AI/ML internship.",
      link: "#work",
      label: "View Vision Projects",
    },

    robotics: {
      text:
        "Colin is currently an AI & Robotics Intern at RoshAI Pvt. Ltd. His experience includes exploring ABB industrial robots, RobotStudio, RAPID programming, and computer vision for industrial inspection workflows.",
      link: "#experience",
      label: "Explore Robotics Experience",
    },

    experience: {
      text:
        "Colin's experience includes his current AI & Robotics Internship at RoshAI Pvt. Ltd., an AI/ML Internship at Techgentsia Solutions from May to June 2025, and a Project Internship at CET from June to July 2024.",
      link: "#experience",
      label: "View Career Timeline",
    },

    roshai: {
      text:
        "At RoshAI Pvt. Ltd., Colin works as an AI & Robotics Intern. His experience includes ABB robotics, RobotStudio, RAPID programming, and work related to machine-vision inspection.",
      link: "#experience",
      label: "RoshAI Experience",
    },

    techgentsia: {
      text:
        "Colin worked as an AI/ML Intern at Techgentsia Solutions from May to June 2025. He gained practical experience developing computer vision applications using Python and YOLOv8.",
      link: "#experience",
      label: "Techgentsia Experience",
    },

    cet: {
      text:
        "Colin completed a Project Internship at CET from June to July 2024. Contact Colin for further details about the specific project and his contributions.",
      link: "#experience",
      label: "CET Experience",
    },

    eeg: {
      text:
        "Localization of Epileptic Seizures using Quantum Algorithms is Colin's academic research project. It explores EEG preprocessing, time- and frequency-domain features, topological data analysis, and experiments with classical and quantum approaches.",
      link: "#work",
      label: "Explore EEG Project",
    },

    detox: {
      text:
        "The Digital Detox Companion is a React application designed for mood tracking. It includes mood history, filters, visual summaries, wellness tips, and Firebase Firestore integration.",
      link: "#work",
      label: "Explore Digital Detox",
    },

    numberplate: {
      text:
        "Number Plate Detection is one of Colin's computer vision projects, focused on detecting vehicle number plate regions using object-detection techniques. Ask Colin for details about the exact implementation.",
      link: "#work",
      label: "Explore Number Plate Project",
    },

    skills: {
      text:
        "Technologies and areas featured in Colin's portfolio include React, JavaScript, Python, Java, SQL, Firebase, YOLOv8, computer vision, ABB robotics, RobotStudio, and RAPID programming.",
      link: "#about",
      label: "Explore Skills",
    },

    contact: {
      text:
        "You can contact Colin about software engineering, AI/ML, computer vision, robotics, or potential collaborations using the contact section of this portfolio.",
      link: "#contact",
      label: "Go to Contact",
    },

    projects: {
      text:
        "Colin's featured projects are Vision Inspection POC, Localization of Epileptic Seizures using Quantum Algorithms, Digital Detox Companion, and Number Plate Detection.",
      link: "#work",
      label: "Explore All Projects",
    },
  };

 
function findAnswer(question) {
  const q = question
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const has = (...words) =>
    words.some((word) => q.includes(word));

  if (/^(hi|hello|hey|hiya|good morning|good evening)$/.test(q)) {
    return {
      text:
        "Hey! Welcome to Colin's portfolio. I'm his interactive portfolio guide. You can ask me about his education, internships, technical skills, projects, or contact details.",
      link: "#about",
      label: "Meet Colin",
    };
  }

  // CONTACT
  if (has("contact", "email", "hire him", "reach him", "linkedin", "github")) {
    return {
      text:
        "You can contact Colin through the Contact section of his portfolio. He is interested in opportunities related to software engineering, AI/ML, computer vision, and robotics.",
      link: "#contact",
      label: "Contact Colin",
    };
  }

  // ALL PROJECTS — check before individual topics
  if (
    has(
      "his projects",
      "her projects",
      "all projects",
      "tell me about the projects",
      "about his projects",
      "what has he built",
      "what did he build",
      "projects",
      "project portfolio",
      "things he built",
      "work samples"
    )
  ) {
    return {
      text:
        "Colin's portfolio features four projects:\n\n1. Vision Inspection POC — industrial machine vision, camera calibration, shape detection, and measurement.\n\n2. Epileptic Seizure Localization — EEG signal processing and experiments with classical and quantum algorithms.\n\n3. Digital Detox Companion — a React and Firebase mood-tracking application.\n\n4. Number Plate Detection — a computer-vision project focused on detecting vehicle number plates.",
      link: "#work",
      label: "Explore All Projects",
    };
  }

  // SPECIFIC PROJECTS
  if (has("eeg", "seizure", "epilepsy", "epileptic", "quantum algorithm")) {
    return {
      text:
        "Colin's research project, Localization of Epileptic Seizures using Quantum Algorithms, explores EEG preprocessing, time- and frequency-domain features, topological data analysis, and experiments with classical neural networks and variational quantum circuits.",
      link: "#work",
      label: "View EEG Project",
    };
  }

  if (has("detox", "mood tracker", "mood tracking", "digital wellness")) {
    return {
      text:
        "The Digital Detox Companion is a React application for recording moods and reviewing mood history. It uses Firebase Firestore and includes filters, visual summaries, and wellness tips.",
      link: "#work",
      label: "View Digital Detox Project",
    };
  }

  if (has("number plate", "numberplate", "license plate", "licence plate")) {
    return {
      text:
        "Colin's Number Plate Detection project focuses on identifying vehicle number plate regions using computer-vision and object-detection techniques. Ask him for details about the exact implementation.",
      link: "#work",
      label: "View Number Plate Project",
    };
  }

  if (
    has(
      "vision inspection",
      "lucid camera",
      "machine vision",
      "camera calibration",
      "shape detection",
      "dimensional measurement",
      "industrial inspection"
    )
  ) {
    return {
      text:
        "Colin worked on a machine-vision proof of concept involving LUCID cameras, camera calibration, OpenCV, shape detection, and dimensional measurement for industrial component inspection.",
      link: "#work",
      label: "View Vision Inspection Project",
    };
  }

  // EXPERIENCE
  if (has("roshai", "abb robot", "robotstudio", "rapid programming", "robotics", "industrial automation")) {
    return {
      text:
        "Colin is an AI & Robotics Intern at RoshAI Pvt. Ltd., where he explores ABB industrial robots, RobotStudio, RAPID programming, and machine-vision inspection workflows.",
      link: "#experience",
      label: "View RoshAI Experience",
    };
  }

  if (has("techgentsia", "yolov8 internship")) {
    return {
      text:
        "Colin worked as an AI/ML Intern at Techgentsia Solutions from May to June 2025. His work involved Python and YOLOv8-based computer-vision applications.",
      link: "#experience",
      label: "View Techgentsia Experience",
    };
  }

  if (has("cet", "project intern")) {
    return {
      text:
        "Colin completed a Project Internship at CET from June to July 2024. Contact him for further details about the specific project and contributions.",
      link: "#experience",
      label: "View CET Experience",
    };
  }

  if (has("internship", "internships", "experience", "career", "where did he work", "work history")) {
    return {
      text:
        "Colin's experience includes his current AI & Robotics Internship at RoshAI Pvt. Ltd., an AI/ML Internship at Techgentsia Solutions from May to June 2025, and a Project Internship at CET from June to July 2024.",
      link: "#experience",
      label: "Explore Experience Timeline",
    };
  }

  // EDUCATION
  if (has("education", "college", "degree", "rset", "rajagiri", "university", "studied")) {
    return {
      text:
        "Colin studied Computer Science Engineering at Rajagiri School of Engineering & Technology (RSET) and completed a minor degree in Robotics and Automation.",
      link: "#about",
      label: "View Education",
    };
  }

  // SKILLS
  if (has("skills", "technologies", "tech stack", "programming languages", "tools")) {
    return {
      text:
        "Colin's technical interests and skills include React, JavaScript, Python, Java, SQL, Firebase, YOLOv8, computer vision, ABB robotics, RobotStudio, and RAPID programming.",
      link: "#about",
      label: "Explore Technical Skills",
    };
  }

  // GENERAL ABOUT
  if (
    has(
      "about him",
      "about colin",
      "who is colin",
      "who are you",
      "tell me about him",
      "tell me about yourself",
      "his background",
      "introduce him"
    )
  ) {
    return {
      text:
        "Colin Pradeep is a Computer Science Engineer from RSET with a minor in Robotics and Automation. He is interested in software engineering, AI/ML, computer vision, and robotics. He currently works as an AI & Robotics Intern at RoshAI Pvt. Ltd.",
      link: "#about",
      label: "Read About Colin",
    };
  }

  // SOFTWARE
  if (has("software", "web development", "react", "firebase", "developer")) {
    return {
      text:
        "Colin enjoys building practical software applications. His work includes React and Firebase web development, alongside projects in computer vision and AI.",
      link: "#work",
      label: "Explore Software Projects",
    };
  }

  return {
    text:
      "I don't have a verified answer to that specific question yet. Try asking about Colin's projects, RoshAI internship, Techgentsia, education, skills, or contact details.",
    link: "#about",
    label: "Explore Colin's Profile",
  };
}


  function askQuestion(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || isTyping) return;

    setInput("");
    setChatOpen(true);
    setIsTyping(true);

    // Add the visitor's message first, then reveal the answer after a
    // short delay so the assistant feels more conversational.
    setMessages((previous) => [
      ...previous,
      {
        question: cleanQuestion,
        answer: null,
      },
    ]);

    const typingDelay = reduceMotion ? 0 : 650 + Math.min(cleanQuestion.length * 8, 650);

    window.setTimeout(() => {
      const answer = findAnswer(cleanQuestion);

      setMessages((previous) =>
        previous.map((message, index) =>
          index === previous.length - 1 && message.question === cleanQuestion && !message.answer
            ? { ...message, answer }
            : message
        )
      );

      setIsTyping(false);
    }, typingDelay);
  }

  function handleSubmit(event) {
    event.preventDefault();
    askQuestion(input);
  }

  function selectTopic(topic) {
    setActiveNode(topic);

    const prompts = {
      software: "Tell me about Colin's software engineering skills",
      ai: "Tell me about Colin's AI and machine learning experience",
      vision: "Tell me about Colin's computer vision projects",
      robotics: "Tell me about Colin's robotics experience",
    };

    askQuestion(prompts[topic]);
  }

  return (
    <>
      {/* INTERACTIVE ORBITAL UNIVERSE */}

      <div className="universe-scene">
        <div className="universe-heading">
          <span>EXPLORE MY UNIVERSE</span>
          <small>SELECT A NODE</small>
        </div>

        <div className="universe-orbits" aria-hidden="true">
          <motion.div
            className="universe-ring universe-ring-one"
            animate={
              reduceMotion ? {} : { rotate: 360 }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="universe-ring universe-ring-two"
            animate={
              reduceMotion ? {} : { rotate: -360 }
            }
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="universe-ring universe-ring-three"
            animate={
              reduceMotion ? {} : { rotate: 360 }
            }
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <motion.button
          type="button"
          className="universe-core"
          onClick={() => setChatOpen(true)}
          aria-label="Open Colin's portfolio assistant"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -7, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="universe-core-glow" />
          <Orbit size={39} strokeWidth={1.2} />
          <span className="universe-core-caption">
            ASK ABOUT COLIN
          </span>
        </motion.button>

        {topics.map((topic, index) => (
          <motion.button
            key={topic.id}
            type="button"
            className={`universe-node node-${topic.id} ${
              activeNode === topic.id ? "active" : ""
            }`}
            onClick={() => selectTopic(topic.id)}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{ scale: 0.94 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: reduceMotion ? 0 : 0.15 + index * 0.1,
              duration: reduceMotion ? 0 : 0.45,
            }}
          >
            <span className="universe-node-dot" />
            <span>{topic.label}</span>
            <ChevronRight size={13} />
          </motion.button>
        ))}

        <div className="universe-bottom-note">
          <span className="universe-live-dot" />
          INTERACTIVE PORTFOLIO GUIDE
        </div>
      </div>

      {/* FLOATING ASSISTANT LAUNCHER */}

      <motion.button
        type="button"
        className="universe-chat-launcher"
        onClick={() => setChatOpen((open) => !open)}
        aria-label={
          chatOpen
            ? "Close portfolio assistant"
            : "Open portfolio assistant"
        }
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {chatOpen ? (
          <X size={21} />
        ) : (
          <Bot className="bot-launcher-icon" size={23} strokeWidth={1.7} />
        )}

        {!chatOpen && (
          <span className="universe-launcher-label">
            Ask about me
          </span>
        )}
      </motion.button>

      {/* ASSISTANT CHAT WINDOW */}

      <AnimatePresence>
        {chatOpen && (
          <motion.aside
            className="universe-chat-panel"
            role="dialog"
            aria-label="Colin's portfolio assistant"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 12,
              scale: 0.97,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
            }}
          >
            <div className="universe-chat-header">
              <div className="universe-chat-avatar">
                <Bot size={21} />
              </div>

              <div className="universe-chat-title">
                <strong>Colin's Universe</strong>
                <span>
                  <i /> Interactive portfolio guide
                </span>
              </div>

              <button
                type="button"
                className="universe-chat-close"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="universe-chat-messages">
              <div className="universe-message assistant-message">
                Hey! 👋 I'm Colin's portfolio guide. Ask me
                about his projects, skills, education, or
                internship experience — or use a shortcut below.
              </div>

              {messages.map((message, index) => (
                <div
                  className="universe-message-group"
                  key={`${index}-${message.question}`}
                >
                  <div className="universe-message user-message">
                    {message.question}
                  </div>

                  <div className="universe-message assistant-message">
                    {message.answer ? (
                      <>
                        <p className="universe-answer-text">{message.answer.text}</p>
                        <a
                          className="universe-answer-link"
                          href={message.answer.link}
                          onClick={() => setChatOpen(false)}
                        >
                          {message.answer.label}
                          <ArrowUpRight size={14} />
                        </a>
                      </>
                    ) : (
                      <div className="universe-typing" aria-label="Assistant is typing">
                        <span />
                        <span />
                        <span />
                        <small>Thinking</small>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="universe-suggestions">
              {[
                ["About me", "Tell me about Colin"],
                ["Projects", "Show me Colin's projects"],
                ["Robotics", "Tell me about Colin's robotics experience"],
                ["Computer vision", "Tell me about Colin's computer vision projects"],
                ["Skills", "What are Colin's technical skills?"],
                ["Contact", "How can I contact Colin?"],
              ].map(([label, question]) => (
                <button
                  type="button"
                  key={label}
                  onClick={() => askQuestion(question)}
                  disabled={isTyping}
                >
                  {label}
                </button>
              ))}
            </div>

            <form
              className="universe-chat-input"
              onSubmit={handleSubmit}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask me anything about Colin..."
                aria-label="Ask a question about Colin"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send question"
              >
                <Send size={17} />
              </button>
            </form>

            <p className="universe-chat-disclaimer">
              Interactive guide · Answers from Colin's portfolio information
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}


// ========================================
// MAIN APP
// ========================================

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSkill, setActiveSkill] = React.useState(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise-layer" aria-hidden="true" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}

      <header className="topbar">
        <a
          className="brand"
          href="#home"
          aria-label="Colin home"
        >
          <span className="brand-mark">
            C<span>.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="nav-contact"
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section-wrap" id="home">
          <div className="hero-grid-lines" aria-hidden="true" />


          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="eyebrow">
              <span className="status-dot" />
              SOFTWARE · AI/ML · ROBOTICS
            </p>

            <p className="tiny-intro">
              Hey, I'm Colin Pradeep.
            </p>

            <h1>
              Building things
              <br />
              for the <span className="gradient-text">real world.</span>
            </h1>

            <p className="hero-sub">
              Software Engineer passionate about AI/ML,
              Computer Vision, Robotics, and building
              intelligent solutions for the real world.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={15} />
              </a>

              <a className="text-link" href="#contact">
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-mini-proof">
              <span><i /> Software Engineering</span>
              <span><i /> Computer Vision</span>
              <span><i /> Robotics</span>
            </div>
          </motion.div>

          {/* PHOTO */}

          
{/* CINEMATIC HERO PORTRAIT */}

<motion.div
  className="hero-portrait"
  initial={{ opacity: 0, x: 35, scale: 1.02 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1.1, delay: 0.15 }}
>
  <img
    className="hero-portrait-image"
    src="/images/colin.jpg"
    alt="Colin Pradeep — Software Engineer"
  />

  <div className="hero-portrait-shade" />

  {/* Geometric line artwork */}
  <svg
    className="portrait-geometry"
    viewBox="0 0 600 650"
    fill="none"
    aria-hidden="true"
  >
    <g className="geometry-lines">
      <path d="M80 140 L510 90 L420 300 L160 240 Z" />
      <path d="M110 310 L490 235 L530 450 L220 500 Z" />
      <path d="M160 240 L420 300 L220 500 L110 310" />
      <path d="M80 140 L220 500 L530 450 L510 90" />
      <path d="M50 400 L490 235 L420 300 L160 240" />
    </g>

    <g className="geometry-points">
      <circle cx="80" cy="140" r="3" />
      <circle cx="510" cy="90" r="3" />
      <circle cx="530" cy="450" r="3" />
      <circle cx="220" cy="500" r="3" />
    </g>
  </svg>

  <div className="portrait-floating-label">
    <span className="caption-dot" />
    <span>
      <strong>Colin Pradeep</strong>
      <small>Software Engineer · AI · Robotics</small>
    </span>
  </div>

  <span className="portrait-star portrait-star-one">✳</span>
  <span className="portrait-star portrait-star-two">✦</span>
</motion.div>


          <a className="hero-scroll" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-track"><i /></span>
          </a>

          <div className="hero-note">
            <span className="note-line" />
            <span>
              Based in Kerala, India
              <br />
              <b>Curious by default.</b>
            </span>
          </div>
        </section>
        
{/* INTERACTIVE AI & ROBOTICS UNIVERSE */}
<section
  className="universe-section section-wrap"
  id="universe"
>
  <InteractiveUniverse />
</section>


        {/* ABOUT */}

        <section className="about section-wrap" id="about">
          <Reveal>
            <div className="section-heading">
              <span className="section-index">01 / ABOUT</span>
              <h2>
                Engineer by training.
                <br />
                <span className="muted">Builder by nature.</span>
              </h2>
            </div>
          </Reveal>

          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                I'm a Computer Science Engineer from Rajagiri
                School of Engineering & Technology (RSET), with
                a minor degree in Robotics and Automation.
                I'm passionate about AI, Computer Vision,
                Robotics, and software development.
              </p>

              <p>
                Currently, I'm working as an AI & Robotics
                Intern at RoshAI Pvt. Ltd., gaining hands-on
                experience with ABB industrial robots,
                RobotStudio, RAPID programming, and
                automation systems.
              </p>

              <p>
                Previously, I worked as an AI/ML Intern at
                Techgentsia Solutions. My projects include
                epileptic seizure localization, a Digital
                Detox Companion, and number plate detection.
              </p>

              <a className="inline-link" href="#experience">
                Explore my experience <ArrowUpRight size={15} />
              </a>
            </Reveal>

            <Reveal delay={0.1} className="about-side">
              <motion.div
                className="stat-card"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(192,132,252,.65)",
                }}
              >
                <span className="stat-label">CURRENT FOCUS</span>
                <Code2 size={21} />
                <h3>Software & AI</h3>
                <p>Building practical software solutions.</p>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(192,132,252,.65)",
                }}
              >
                <span className="stat-label">ALSO EXPLORING</span>
                <Cpu size={21} />
                <h3>Robotics & Vision</h3>
                <p>Automation and machine vision systems.</p>
              </motion.div>
            </Reveal>
          </div>

          <Reveal className="skills-block">
            <SkillsConstellation activeSkill={activeSkill} onSkillHover={setActiveSkill} />
          </Reveal>
        </section>

        {/* ABOUT SECTION ENDS HERE */}

<InteractiveTerminal />

{/* EXPERIENCE TIMELINE */}
<section
  className="experience section-wrap"
  id="experience"
></section>

        {/* EXPERIENCE TIMELINE */}

        <section
          className="experience section-wrap"
          id="experience"
        >
          <Reveal>
            <div className="experience-heading">
              <span className="section-index">
                02 / EXPERIENCE
              </span>

              <h2>
                My journey,{" "}
                <span className="gradient-text">so far.</span>
              </h2>

              <p>
                Experience across AI, computer vision,
                software, and robotics.
              </p>
            </div>
          </Reveal>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section className="work section-wrap" id="work">
          <Reveal>
            <div className="work-heading">
              <div>
                <span className="section-index">
                  03 / SELECTED WORK
                </span>

                <h2>
                  Things I've{" "}
                  <span className="gradient-text">built.</span>
                </h2>
              </div>

              <p>
                A selection of work across computer vision,
                EEG research, and web development.
              </p>
            </div>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
                activeSkill={activeSkill}
              />
            ))}
          </div>
        </section>

        {/* APPROACH */}

        <section className="approach section-wrap">
          <Reveal>
            <div className="approach-card">
              <div className="approach-orb">
                <span>C.</span>
                <i />
                <i />
                <i />
              </div>

              <div className="approach-copy">
                <span className="section-index">
                  04 / HOW I WORK
                </span>

                <h2>
                  Stay curious.
                  <br />
                  <span className="muted">Make it useful.</span>
                </h2>

                <p>
                  I enjoy learning new technologies, solving
                  technical challenges, and building useful
                  solutions through experimentation and
                  continuous improvement.
                </p>

                <a className="inline-link" href="#contact">
                  Let's build something{" "}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>


{/* CONTACT */}
<section className="contact section-wrap" id="contact">
  <Reveal>
    <span className="section-index">05 / CONTACT</span>

    <div
      className="contact-cosmic-glow"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        event.currentTarget.style.setProperty(
          "--pointer-x",
          `${((event.clientX - rect.left) / rect.width) * 100}%`
        );

        event.currentTarget.style.setProperty(
          "--pointer-y",
          `${((event.clientY - rect.top) / rect.height) * 100}%`
        );
      }}
    >
      <div className="contact-stars" aria-hidden="true" />

      <div className="contact-layout">
        <div className="contact-main">
          <span className="contact-eyebrow">
            <span className="contact-status-dot" />
            OPEN TO OPPORTUNITIES
          </span>

          <h2>
            Let's build
            <br />
            <span className="gradient-text">
              something meaningful.
            </span>
          </h2>

          <p>
            Have an interesting idea, an engineering challenge,
            or an opportunity to work together? I'm open to
            software engineering, AI/ML, computer vision, and robotics.
          </p>

          <a
            href="mailto:colinpradeep2004@gmail.com?subject=Let's%20build%20something%20together"
            className="contact-build-button"
          >
            Let's build something
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:colinpradeep2004@gmail.com">
            <span className="contact-icon">
              <Mail size={18} />
            </span>

            <span className="contact-link-text">
              <small>EMAIL</small>
              colinpradeep2004@gmail.com
            </span>

            <ArrowUpRight size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/colinpradeep/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Linkedin size={18} />
            </span>

            <span className="contact-link-text">
              <small>LINKEDIN</small>
              Connect with me
            </span>

            <ArrowUpRight size={17} />
          </a>

          <a
            href="https://github.com/Colinpradeep"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Github size={18} />
            </span>

            <span className="contact-link-text">
              <small>GITHUB</small>
              See my code
            </span>

            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="contact-copy-button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  "colinpradeep2004@gmail.com"
                );
                window.alert("Email copied to clipboard!");
              } catch {
                window.location.href =
                  "mailto:colinpradeep2004@gmail.com";
              }
            }}
          >
            <Copy size={16} />
            Copy email address
          </button>
        </div>
      </div>

      <div className="contact-orbit orbit-one" aria-hidden="true" />
      <div className="contact-orbit orbit-two" aria-hidden="true" />
    </div>
  </Reveal>
</section>
</main>


      {/* FOOTER */}

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">C<span>.</span></span>
        </a>

        <span>Designed & built with care.</span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>

        <span className="copyright">
          © {new Date().getFullYear()} COLIN PRADEEP
        </span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

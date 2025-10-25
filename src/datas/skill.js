import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, 
  FaDocker, FaGitAlt, FaDatabase, FaPhp, FaFigma, FaMobileAlt, FaTools, FaProjectDiagram
} from "react-icons/fa";
import { 
  SiSpringboot, SiTailwindcss, SiPostgresql, SiMysql, SiSymfony, 
  SiFlutter, SiTypescript, SiAdobephotoshop, SiFlask, 
  SiMiro, SiUml, SiIntellijidea, SiEclipseide, SiPostman, SiDart
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { MdDataUsage } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

export const skills = [
  {
    category: "Langages de Programmation",
    icon: BsGearFill,
    description: "Bases solides en développement orienté objet et web.",
    techs: [
      { name: "Java", icon: FaJava, color: "text-red-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    ],
  },
  {
    category: "Frameworks & Bibliothèques",
    icon: FaProjectDiagram,
    description: "Création d’applications performantes et responsives.",
    techs: [
      { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
      { name: "Angular", icon: FaAngular, color: "text-red-500" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Bootstrap", icon: FaCss3Alt, color: "text-purple-600" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
      { name: "Symfony", icon: SiSymfony, color: "text-gray-700" },
      { name: "Flask", icon: SiFlask, color: "text-gray-500" },
    ],
  },
  {
    category: "Bases de données & DevOps",
    icon: FaDatabase,
    description: "Gestion, versioning et déploiement d’applications web et mobiles.",
    techs: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Nginx", icon: BsGearFill, color: "text-green-600" },
      { name: "REST API", icon: FaProjectDiagram, color: "text-purple-600" },
    ],
  },
  {
    category: "Modélisation & Analyse",
    icon: MdDataUsage,
    description: "Conception et documentation des systèmes d'information.",
    techs: [
      { name: "UML", icon: SiUml, color: "text-pink-500" },
      { name: "Merise", icon: SiMiro, color: "text-orange-500" },
      { name: "Analyse de données", icon: MdDataUsage, color: "text-blue-500" },
    ],
  },
  {
    category: "Outils & Logiciels",
    icon: FaTools,
    description: "Outils de développement, de test et de design graphique.",
    techs: [
      { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-500" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "text-red-500" },
      { name: "Eclipse", icon: SiEclipseide, color: "text-yellow-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-400" },
      { name: "Figma", icon: FaFigma, color: "text-pink-400" },
    ],
  },
  {
    category: "Développement Mobile",
    icon: FaMobileAlt,
    description: "Création d’applications mobiles modernes et performantes.",
    techs: [
      { name: "Dart", icon: SiDart, color: "text-blue-500" },
      { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
      { name: "API REST", icon: FaProjectDiagram, color: "text-indigo-500" },
      { name: "UI Design", icon: FaFigma, color: "text-pink-400" },
    ],
  },
];

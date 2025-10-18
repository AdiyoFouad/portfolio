import { FaPython, FaPhp, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt} from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiFlask, SiMysql,SiPostgresql, SiChartdotjs, SiAngular, SiTypescript } from "react-icons/si";
export const projectsData = [
  {
    id: 1,
    title: "CocktailGenius",
    description: "CocktailGenius est une application web conviviale dédiée aux passionnés de cocktails, permettant de découvrir, partager et créer des recettes uniques. Que vous soyez novice ou mixologue confirmé, explorez une large collection de recettes et partagez vos créations avec la communauté.",
    image: "/img/projects/image.png",
    github: "https://github.com/AdiyoFouad/CocktailGenius",
    demo: "#",
    techs: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-500" },
      { name: "Flask", icon: SiFlask, color: "text-gray-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "LifeBoard",
    description:
    "LifeBoard est une application web personnelle développée avec Angular pour vous aider à gérer vos tâches, suivre votre budget et monitorer vos habitudes quotidiennes via un tableau de bord moderne et responsive.",
    image: "/img/projects/image.png",
    github: "https://github.com/ton-repo/LifeBoard",
    demo: "#",
    techs: [
      { name: "Angular", icon: SiAngular, color: "text-red-600" },
      { name: "Chart.js", icon: SiChartdotjs, color: "text-pink-500" },
      { name: "ng2-charts", icon: SiChartdotjs, color: "text-green-500" },
      { name: "localStorage", icon: FaDatabase, color: "text-gray-600" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Gestion de parc informatique",
    description:
      "Application PHP/MySQL pour gérer le matériel informatique d'une entreprise (PC, imprimantes, licences).",
    image: "/img/projects/image.png",
    github: "https://github.com/AdiyoFouad/parc-info",
    demo: null,
    techs: [
      { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Gestion de bons provisoires",
    description:
      "Application PHP pour la création et le suivi de bons provisoires avec authentification et export PDF.",
    image: "/img/projects/image.png",
    github: "https://github.com/AdiyoFouad/bon-provisoire",
    demo: "#",
    techs: [
      { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    ],
    featured: true,
  },
];
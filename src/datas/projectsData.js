import { FaReact, FaPython, FaPhp, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaMagic} from "react-icons/fa";
import { SiBootstrap, SiJavascript, SiFlask, SiMysql,SiPostgresql, SiChartdotjs, SiAngular, SiTypescript } from "react-icons/si";
export const projectsData = [
  {
    id: 1,
    title: "Mon Portfolio",
    description: "Mon portfolio est un site web personnel, moderne et responsive, présentant mes projets de développement web, mes compétences et mon parcours. Le design est fluide et élégant, avec des animations discrètes grâce à AOS.js, et l'interface est optimisée pour tous les appareils.",
    image: "/img/Projects/portfolio.png",
    github: "https://github.com/AdiyoFouad/portfolio",
    techs: [
      { name: "React", icon: FaReact, color: "text-blue-600" },
      { name: "Tailwind CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
      { name: "AOS.js", icon: FaMagic, color: "text-green-500" }
    ],
    featured: false
  },
  {
    id: 2,
    title: "CocktailGenius",
    description: "CocktailGenius est une application web conviviale dédiée aux passionnés de cocktails, permettant de découvrir, partager et créer des recettes uniques. Que vous soyez novice ou mixologue confirmé, explorez une large collection de recettes et partagez vos créations avec la communauté.",
    image: "/img/Projects/cocktailgenius.png",
    github: "https://github.com/AdiyoFouad/CocktailGenius",
    demo: "https://drive.google.com/file/d/1cKks3i7G39XPTBs2pIFNv3ebFbaDbcsI/view?usp=drive_link",
    live:"https://cocktailgenius.onrender.com",
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
    id: 3,
    title: "LifeBoard",
    description:
    "LifeBoard est une application web personnelle développée avec Angular pour vous aider à gérer vos tâches, suivre votre budget et monitorer vos habitudes quotidiennes via un tableau de bord moderne et responsive.",
    image: "/img/Projects/lifeboard.png",
    github: "https://github.com/AdiyoFouad/LifeBoard",
    demo: "https://drive.google.com/file/d/1rgQrRhQtuDmKZzOuSlqIhMKPJJksilol/view?usp=drive_link",
    live: "https://lifeboard-3in1.vercel.app/",
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
    id: 4,
    title: "GreenTouch",
    description: "GreenTouch est un site vitrine moderne et responsive destiné à présenter les services d'un paysagiste local. Le projet met en avant l'aménagement, l'entretien et la création d'espaces verts, avec un design soigné et des animations fluides.",
    image: "/img/Projects/greentouch.png",
    github: "https://github.com/AdiyoFouad/GreenTouch",
    demo: "https://green-touch-six.vercel.app/",
    live: "https://green-touch-six.vercel.app/",
    techs: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "Tailwind CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
      { name: "AOS.js", icon: FaMagic, color: "text-green-500" }
    ],
    featured: true
  },
  {
    id: 4,
    title: "Serpent",
    description: "Serpent est un mini-jeu développé en JavaScript avec une interface simple et un gameplay addictif. Le joueur contrôle un serpent qui doit manger des objets pour grandir tout en évitant de se heurter à ses propres segments. Le jeu offre une expérience classique et fun.",
    image: "/img/projects/serpent.png", 
    github: "https://github.com/AdiyoFouad/Serpent",
    demo: "#", 
    live: "https://serpent-five.vercel.app/", 
    techs: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    ],
    featured: true
  }/*,
  {
    id: 4,
    title: "Gestion de parc informatique",
    description:
      "Application PHP/MySQL pour gérer le matériel informatique d'une entreprise (PC, imprimantes, licences).",
    image: "/img/Projects/image.png",
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
    id: 5,
    title: "Gestion de bons provisoires",
    description:
      "Application PHP pour la création et le suivi de bons provisoires avec authentification et export PDF.",
    image: "/img/Projects/image.png",
    github: "https://github.com/AdiyoFouad/bon-provisoire",
    demo: "#",
    techs: [
      { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    ],
    featured: false,
  },*/
];

import {  FaFolderOpen, FaChartLine, FaEnvelope, FaGlobe, FaFileAlt, FaUsers, FaLightbulb, FaSyncAlt, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="py-20 bg-base-100 min-h-screen">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            À propos de moi
        </h2>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* === IMAGE === */}
        <div className="lg:w-1/2 flex justify-center hover:scale-105 transition-transform duration-200">
          <img
            src="/img/About/me.png"
            alt="Développeur Fullstack"
            className=" object-contain rounded-2xl shadow-2xl"
          />
        </div>
        {/* === TEXTE PRINCIPAL === */}
        <div className="lg:w-1/2">
          
            <p className="text-gray-700 leading-relaxed mb-6">
                Je suis <strong>Adiyo Fouad ODJOUOYE</strong>, étudiant en <strong>Licence 3 MIAGE</strong> à l'Université de <strong>Rennes</strong>.  
                Mon parcours allie <strong>informatique</strong> et <strong>gestion</strong>, me permettant de concevoir des solutions 
                logicielles répondant à des besoins métiers réels.  
                J'évolue dans un environnement <strong>Fullstack</strong> où j'intègre 
                des frameworks tels que <strong>React.js</strong> et <strong>Angular</strong> pour la couche front-end, 
                ainsi que <strong>Spring Boot</strong>, <strong>Flask</strong> et <strong>Symfony</strong> pour le back-end.  
                J'exploite <strong>Flutter</strong> pour le développement mobile, 
                et j'utilise des outils tels que <strong>Git</strong>, <strong>GitHub</strong> et <strong>Docker </strong> 
                pour assurer le versionnement, l'intégration continue et le déploiement.
                
            </p>

            <p className="text-gray-600 mb-6">
                J'ai déjà eu l'occasion de mener plusieurs projets web et mobiles intégrant des 
                notions de <strong>conception logicielle</strong> et de <strong>modélisation de données</strong>.  
                Mon profil polyvalent me permet d'intervenir sur toutes les phases d'un projet, de l'analyse fonctionnelle 
                à la mise en production.
            </p>

            <p className="text-gray-600 mb-6">
                Actuellement, je me prépare à intégrer un <strong>Master MIAGE en alternance</strong>, 
                dans le but de développer davantage mon expertise en <strong>développement applicatif</strong> et en 
                <strong> data engineering</strong>, tout en contribuant à des projets innovants à fort impact.
            </p>


          {/* === BOUTONS === */}
            <div className="flex flex-wrap gap-4 justify-between sm:justify-normal">
                <a
                href="/cv_fouad_odjouoye.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft btn-accent transition-transform duration-500 hover:scale-110 flex items-center gap-2"
                >
                <FaFileAlt /> Voir mon CV
                </a>
                <Link to="/projects" className="w-45 sm:w-auto">
                <button className="w-full sm:w-auto btn btn-outlined transition-transform duration-500 hover:scale-110 flex items-center gap-2">
                    <FaFolderOpen /> Voir mes projets
                </button>
                </Link>
                <Link to="/contacts" className="w-full sm:w-auto">
                <button className=" w-full sm:w-auto btn btn-soft btn-outline transition-transform duration-500 hover:scale-110 flex items-center gap-2">
                    <FaEnvelope /> Me contacter
                </button>
                </Link>
            </div>
        </div>
      </div>

      {/* === SECTIONS LANGUES + ATOUTS === */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* === LANGUES === */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <FaGlobe /> Langues
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Français :</strong> Langue maternelle</li>
            <li><strong>Anglais :</strong> Niveau intermédiaire</li>
          </ul>
        </div>

        {/* === ATOUTS PERSONNELS === */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
            <FaBrain /> Soft skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-lg">
              <FaLightbulb className="text-primary text-xl" />
              <span>Orienté solutions</span>
            </div>
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-lg">
              <FaSyncAlt className="text-primary text-xl" />
              <span>Adaptabilité rapide</span>
            </div>
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-lg">
              <FaUsers className="text-primary text-xl" />
              <span>Esprit d'équipe</span>
            </div>
            <div className="flex items-center gap-3 bg-base-200 p-3 rounded-lg">
              <FaChartLine className="text-primary text-xl" />
              <span>Curiosité et apprentissage continu</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

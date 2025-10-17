import { Link } from "react-router-dom";
import { FaFolderOpen, FaEnvelope, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        
        {/* ==== IMAGE + BOUTONS SOCIAUX ==== */}
        <div className="flex flex-col items-center gap-4">
          <img
            src="img/Hero/img_dev.png"
            alt="illustration développeur"
            className="max-w-sm rounded-lg shadow-2xl"
          />

          {/* Boutons GitHub et LinkedIn */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/AdiyoFouad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2 transition-transform duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adiyo-fouad-odjouoye/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-info flex items-center gap-2 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
          </div>
        </div>

        {/* ==== TEXTE PRINCIPAL ==== */}
        <div className="lg:w-3/5 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
            Salut 👋, je suis <br />
            <span className="text-primary">
              <Typewriter
                words={["Adiyo Fouad ODJOUOYE", "Développeur Full Stack", "Passioné par la data"]}
                loop={0} // 0 = boucle infinie
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2500}
              />
            </span>
          </h1>

          <p className="py-6 text-lg leading-relaxed">
            Étudiant en <strong>L3 MIAGE à Rennes</strong>, je suis passionné par le
            <strong> développement web</strong> et <strong>mobile</strong>, avec un grand intérêt
            pour le monde de la <strong>data</strong> ainsi que la <strong>gestion de projets informatiques</strong>.
            J'aime créer des applications modernes et utiles, en combinant mes compétences
            techniques et ma compréhension du métier.
          </p>

          <p className="pb-6 text-base text-gray-600">
            Mon objectif : poursuivre en <strong className="text-primary">Master MIAGE en alternance</strong>, afin de continuer à apprendre,
            de construire des solutions à fort impact et de renforcer mes compétences en développement
            full-stack ainsi qu'en analyse de données.
          </p>

          {/* ==== BOUTONS PRINCIPAUX ==== */}
          <div className="flex flex-wrap gap-4 justify-between sm:justify-normal">
            <a
              href="/cv.pdf"
              download
              className=" btn btn-soft btn-accent transition-transform duration-500 hover:scale-110 flex items-center gap-2"
            >
              <FaDownload /> Télécharger mon CV
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
    </div>
  );
}

export default Hero;

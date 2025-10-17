import Hero from "../../components/Hero";
import { Link } from "react-router-dom";
import Countdown from "../../components/Countdown";
import { DATE_STAGE, DATE_ALTERNANCE } from "../../datas/allDates";
import { FaClock, FaCode, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiAngular, SiSpringboot, SiMysql, SiPostman } from "react-icons/si";

function Home() {
  return (
    <div className="bg-base-100 min-h-screen">
        {/* ==== HERO ==== */}
        <Hero />

        {/* ==== SECTION DEUX CARTES ==== */}
        <section className="py-16 px-6 container mx-auto lg:flex gap-8">
            
            {/* === CARD COUNTDOWNS === */}
            <div className="card bg-base-200 shadow-xl lg:w-1/2">
                <div className="card-body">
                    <h2 className="card-title text-primary text-2xl flex items-center gap-2 mb-6">
                        <FaClock /> Prochaines étapes
                    </h2>

                    <div className="flex flex-col gap-6">
                        <div className="p-4 rounded-lg bg-base-100 shadow-sm">
                            <h3 className="font-semibold text-lg text-secondary mb-2">
                                Début du Stage
                            </h3>
                            <p className="text-xs text-gray-500 mb-2">
                                Afin de valider ma licence, je me dois de trouver un stage et signer
                                la convention de stage avant le {DATE_STAGE.toLocaleDateString('fr-FR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                })}.
                            </p>
                            <Countdown targetDate={DATE_STAGE} />
                        </div>
                        <div className="p-4 rounded-lg bg-base-100 shadow-sm">
                            <h3 className="font-semibold text-lg text-secondary">
                                Début de l'Alternance
                            </h3>
                            <p className="text-xs text-gray-500 mb-2">
                                L'aventure en alternance commencera officiellement
                                le {DATE_ALTERNANCE.toLocaleDateString('fr-FR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric',
                                })}.
                            </p>
                            <Countdown targetDate={DATE_ALTERNANCE} />
                        </div>
                    </div>
                </div>
            </div>

            {/* === CARD SKILLS === */}
            <div className="card bg-base-200 shadow-xl lg:w-1/2">
                <div className="card-body">
                    <h2 className="card-title text-primary text-2xl flex items-center gap-2 mb-6">
                        <FaCode /> Compétences principales
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <SiAngular className="text-red-600 text-3xl mb-1" />
                        <span className="text-sm font-semibold">Angular</span>
                    </span>

                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <SiSpringboot className="text-green-600 text-3xl mb-1" />
                        <span className="text-sm font-semibold">Spring Boot</span>
                    </span>

                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <SiMysql className="text-sky-700 text-3xl mb-1" />
                        <span className="text-sm font-semibold">MySQL</span>
                    </span>

                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <SiPostman className="text-orange-500 text-3xl mb-1" />
                        <span className="text-sm font-semibold">REST API</span>
                    </span>

                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <FaGitAlt className="text-red-500 text-3xl mb-1" />
                        <span className="text-sm font-semibold">Git</span>
                    </span>

                    <span className="bg-base-100 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform">
                        <FaDocker className="text-blue-500 text-3xl mb-1" />
                        <span className="text-sm font-semibold">Docker</span>
                    </span>
                    </div>

                    <div className="mt-6 flex justify-center">
                    <Link
                        to="/skills"
                        className="btn btn-primary transition-transform duration-300 hover:scale-105"
                    >
                        Voir toutes
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Home;

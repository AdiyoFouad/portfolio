import { FaGraduationCap, FaBriefcase, FaEye } from "react-icons/fa";
import { formations } from "../../datas/formations";
import { experiences } from "../../datas/experiences";

function Parcours() {
    return (
        <section className="py-20 bg-base-100 min-h-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-primary mb-5">
                    Mon parcours
                </h2>
                <p className="text-center text-gray-500 mb-5">
                    Entre théorie et pratique, j'ai construit une solide base en ingénierie logicielle et en systèmes d'information,
                    alliant compétences techniques, vision métier MIAGE et capacité à concevoir, développer et piloter des projets
                    numériques de bout en bout
                </p>

                {/* === GRID DES DEUX SECTIONS === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* === PARCOURS ACADÉMIQUE === */}
                    <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <FaGraduationCap className="text-3xl text-primary" />
                            <h3 className="text-2xl font-semibold">Parcours académique</h3>
                        </div>

                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            {formations.map((item, index) => (
                                <li key={index}>
                                    {/* Ligne du haut (sauf pour le 1er élément) */}
                                    {index !== 0 && <hr className="bg-primary" />}
 
                                    <div className="timeline-middle">
                                        <div className="bg-primary text-white rounded-full p-2">
                                            <FaGraduationCap className="h-4 w-4 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="timeline-end mt-5">
                                        <time className="font-black font-mono">{item.date}</time>
                                        <div className="card bg-primary-content shadow-md mt-2">
                                            <div className="card-body">
                                                {/* Niveau et école */}
                                                <h4 className="card-title text-lg font-bold text-primary">{item.niveau}</h4>
                                                <p className="text-sm italic text-gray-700">{item.ecole}</p>

                                                {/* Description */}
                                                <p className="text-xs leading-relaxed mb-2">{item.description}</p>

                                                {/* Projet (affiché uniquement si présent) */}
                                                {item.projet && (
                                                    <p className="text-xs leading-relaxed mb-3">
                                                        <strong>Projet de fin :</strong> {item.projet}
                                                    </p>
                                                )}

                                                {/* Mention + Lien d'attestation */}
                                                <div className="flex justify-between items-center">
                                                    {item.mention && (
                                                        <span className="text-xs font-semibold text-gray-700">
                                                            Mention : <span className="text-primary">{item.mention}</span>
                                                        </span>
                                                    )}

                                                    {item.attestation && (
                                                        <a
                                                            href={item.attestation}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-xs btn-primary ml-auto"
                                                        >
                                                            <FaEye />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ligne du bas */}
                                    <hr className="bg-primary" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* === PARCOURS PROFESSIONNEL === */}
                    <div className="bg-base-200 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <FaBriefcase className="text-3xl text-primary" />
                            <h3 className="text-2xl font-semibold">Parcours professionnel</h3>
                        </div>

                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            {experiences.map((exp, index) => (
                                <li key={index}>
                                    {/* Ligne du haut (sauf pour le premier élément) */}
                                    {index !== 0 && <hr className="bg-primary" />}

                                    {/* Icône */}
                                    <div className="timeline-middle">
                                        <div className="bg-primary text-white rounded-full p-2">
                                            <FaBriefcase className="h-4 w-4 animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Contenu */}
                                    <div className="timeline-end mt-5 w-full">
                                        <time className="font-black font-mono">{exp.date}</time>
                                        <div className="card bg-primary-content shadow-md mt-2">
                                            <div className="card-body">
                                                {/* Titre et entreprise */}
                                                <h4 className="card-title text-lg font-bold text-primary">
                                                    {exp.title}
                                                </h4>
                                                <p className="text-sm italic text-gray-700">{exp.company}</p>

                                                {/* Liste des tâches */}
                                                <ul className="list-disc list-inside text-xs leading-relaxed mt-2 space-y-1">
                                                    {exp.tasks.map((task, i) => (
                                                        <li key={i}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ligne du bas */}
                                    <hr className="bg-primary" />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Parcours;

import { skills } from "../../datas/skill";

function Skills() {
    return (
        <div className="container mx-auto px-4 py-20 min-h-screen">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
                Mes Compétences
            </h2>
            <p className="text-center text-gray-600 mb-10">
                Ensemble des technologies et outils que j’ai maîtrisés au fil de mes projets et de ma formation.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => {
                    const CategoryIcon = skill.icon;
                    return (
                        <div
                            key={index}
                            className="card bg-base-100 shadow-md hover:shadow-lg transition"
                        >
                            <div className="card-body">
                                <div className="flex items-center gap-2 mb-2">
                                    <CategoryIcon className="text-primary text-xl" />
                                    <h3 className="card-title text-primary text-lg">
                                        {skill.category}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">
                                    {skill.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {skill.techs.map((tech, i) => {
                                        const Icon = tech.icon;
                                        return (
                                            <span
                                                key={i}
                                                className="flex items-center gap-2 bg-base-200 px-3 py-1 rounded-full shadow-sm text-sm"
                                            >
                                                <Icon className={tech.color} />
                                                {tech.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;

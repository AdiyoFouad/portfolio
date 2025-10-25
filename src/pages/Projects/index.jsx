
import ProjectCard from "../../components/ProjectCard";
import { projectsData} from "../../datas/projectsData";

function Projects() {
  return (
    <section className="min-h-screen bg-base-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">Mes Projets</h2>
        <p className="text-center text-gray-600 mb-12">
          Une sélection de projets que j'ai réalisés, mêlant développement web, mobile et conception logicielle.
        </p>

        <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
        
            </div>
      </div>
    </section>
  );
}

export default Projects;

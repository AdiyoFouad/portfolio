import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 lg:grayscale-50 lg:hover:grayscale-0 object-cover hover:scale-110 transition-transform duration-500"
        />
      </figure>

      <div className="card-body">
        <h3 className="card-title text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>

        {/* TECHNOS */}
        <div className="flex flex-wrap gap-3 mt-3">
          {project.techs.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full shadow-sm text-sm"
                >
                  <Icon className={tech.color} />
                  {tech.name}
                </span>
              );
            })}

        </div>

        {/* BUTTONS */}
        <div className="mt-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <FaGithub /> Code
          </a>
          
          { project.demo && (<a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt /> Démo
            </a>)
            
          }
          
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

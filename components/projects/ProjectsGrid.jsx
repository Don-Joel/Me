import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";

function ProjectsGrid() {
  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {projectsData.map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))}
      </div>
      <div className="flex md:underline justify-center my-12 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        <a href="https://github.com/Don-Joel?tab=repositories">
          ...more projects
        </a>
      </div>
    </section>
  );
}

export default ProjectsGrid;

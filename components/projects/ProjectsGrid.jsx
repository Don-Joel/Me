import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
import { motion } from "framer-motion";

function ProjectsGrid() {
  return (
    <div className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-6 gap-10">
        {projectsData.map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex underline justify-center my-12 font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"
      >
        <a href="https://github.com/Don-Joel?tab=repositories">
          ...more projects
        </a>
      </motion.div>
    </div>
  );
}

export default ProjectsGrid;

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectSingle = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15
      }}
    >
      {/* <Link href={props.link} aria-label="Single Project" passHref> */}
      <Image
        src={props.img}
        style={{
          position: "relative",
          width: "100%",
          height: "80%"
        }}
        className="rounded-t-xl border-none"
        alt="Single Project"
        width={500}
        height={400}
      />
      <div className="rounded-b-xl  shadow-lg hover:shadow-xl h-30 cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <div className="text-center px-4 py-6 ">
            <div></div>
            <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2 ">
              {props.title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {props.category}
            </span>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default ProjectSingle;

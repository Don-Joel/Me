import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function AboutMeBio() {
  return (
    <div className="block mx-px px-0.5 sm:flex sm:gap-10 mt-10 sm:mt-20 mr-0.5">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <motion.div
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2
          }}
          className=" hidden sm:block flex justify-center "
        >
          <Image
            src="/images/profile.jpeg"
            height={1000}
            width={1000}
            className="rounded-lg"
            alt="Profile Image - large"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2
          }}
          className=" block sm:hidden flex justify-center "
        >
          <Image
            src="/images/profile.jpeg"
            height={300}
            width={300}
            className="rounded-lg"
            alt="Profile Image - small"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2
          }}
          className="my-3 flex justify-center space-x-4"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon url="https://github.com/Don-Joel" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon url="https://www.linkedin.com/in/joel-d-tavarez/" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <SocialIcon url="mailto:joeldtavarez@gmail.com" />
          </motion.div>
        </motion.div>
      </div>

      <div id="bio" className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          I graduated with a Computer Science degree from the University of
          Virginia. I am currently working as a web software engineer at Target.
          I develop on the Same Day Delivery (Shipt) service on Target.com. I
          previously worked on a backend engineering squad, the digital payments
          team, and helped implement SNAP as a payment on Target.com. I have
          interests in technical performance, design, and creating efficient,
          competent systems with remarkable UX.
        </p>
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          In my leisure, I like to keep myself up to date with the latest tech
          and economics news, primarly on AI and macroeconomics. Besides my
          technical passions, I enjoy a fitness lifestyle and hold deep
          interests in endocrinology, nutrition, and biohacking. I also enjoy
          reading and having new experiences that could lead me to diverse
          outlooks on life. Ultimately, with my career, I hope to create a
          product that will improve people&apos;s everyday lives and well-being.
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;

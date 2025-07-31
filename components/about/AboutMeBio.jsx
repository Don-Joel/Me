import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function AboutMeBio() {
  return (
    <div className="block mx-px px-0.5 sm:flex sm:gap-10 mt-10 sm:mt-20 mr-0.5">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2
          }}
          className=" hidden sm:block flex justify-center "
        >
          <Image
            src="/images/profile.jpg"
            height={1000}
            width={1000}
            className="rounded-lg"
            alt="Profile Image - large"
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
          className=" block sm:hidden flex justify-center "
        >
          <Image
            src="/images/profile.jpg"
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
          Hello world, I am Joel Tavarez! I graduated with a Computer Science degree from the University of
          Virginia in 2021 and, shortly after, joined Target Corporation as a software engineer. I currently work as a front-end product
          engineer at Target where I develop the Same Day Delivery (Shipt) service
          on Target.com. Before my current role, I worked as a backend engineer on Target&#39;s
          digital payments team and helped implement SNAP as a payment on
          Target.com.
        </p>
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          In addition to my product role, I take part in Target&#39;s performance guild where I pursue
          my interests in technical performance and design. In my leisure, I like to keep myself up to date with the latest tech and
          economics news, primarly focusing on AI and macroeconomics. I also have a deep passion for systems engineering and thinking 
          which I integrate in my work and everyday life. Besides my technical passions, I enjoy a fitness lifestyle and have
          interests in endocrinology and nutrition. I also enjoy
          reading and having new experiences that could lead me to new
          outlooks on life. Ultimately, with my career, I hope to create
          products that will notably improve people&apos;s everyday lives and well-being.
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;

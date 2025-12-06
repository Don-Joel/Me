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
            delay: 0.2,
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
            delay: 0.2,
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
            delay: 0.2,
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

      <div id="bio" className="font-general-medium w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg indent-6">
          Hello world, I am Joel Tavarez! I graduated with a Computer Science
          degree from the University of Virginia in 2021 and began my career at
          Target Corporation as a software engineer. During my time at Target, I
          delivered large-scale front-end features for Target.com, most recently
          engineering the Same Day Delivery (Shipt) experience. I previously
          worked on Target&apos;s digital payments platform, where I helped
          implement SNAP as a supported tender on Target.com.
        </p>

        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg indent-6">
          I currently work at Newmark as a full-stack engineer building a new
          in-house leasing and transaction platform for commercial real estate
          brokers. My role focuses on architecting and developing high-impact
          product features across the front end and backend, with an emphasis on
          scalability, reliability, and clear user value.
        </p>

        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg indent-6">
          I have a strong interest in performance, systems thinking, and
          building technology that solves real business problems. Outside of
          engineering, I stay engaged with emerging technology and
          macroeconomics, and I maintain a long-standing commitment to fitness,
          nutrition, and continuous learning. My goal is to create software
          products that meaningfully improve the way people work and live.
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;

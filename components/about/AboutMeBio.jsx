import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

function AboutMeBio() {
  return (
    <div className="block mx-px px-0.5 sm:flex sm:gap-10 mt-10 sm:mt-20 mr-0.5">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src="/images/profile.jpeg"
          width={400}
          height={400}
          className="rounded-lg"
          alt="Profile Image"
        />
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
          <SocialIcon url="https://github.com/Don-Joel" />
          <SocialIcon url="https://www.linkedin.com/in/joel-d-tavarez/" />
          <SocialIcon url="mailto:joeldtavarez@gmail.com" />
        </motion.div>
      </div>

      <div id="bio" className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          Hello, I am Joel Tavarez. I graduated with a degree in Computer
          Science in 2021 from the University of Virginia. I am currently
          working as a front end software engineer at Target. I work on the Same
          Day Delivery (Shipt) service on Target.com. I previously worked on a
          backend engineering squad, the digital payments team, and helped
          implement SNAP as a payment on Target.com. I have interests in
          technical performance, design, and creating efficient, competent
          systems with remarkable UX.
        </p>
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          In my leisure, I like to keep myself up to date with the latest tech
          and economics news, primarly on AI and macroeconomics. Besides my
          technical passions, I enjoy a fitness lifestyle and hold deep
          interests in endocrinology, nutrition, and biohacking. I also enjoy
          reading and new experiences that could lead me to diverse outlooks on
          life. Although I hold a degree in Computer Science, throughout my time
          at UVA, I took many courses in commerce, entrepreneurship, history and
          miscenallous courses in biology, nutrition, and child development
          which I consider critical to my overall outlook.
        </p>
      </div>
    </div>
  );
}

export default AboutMeBio;

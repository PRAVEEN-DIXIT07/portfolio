import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND loading SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have expertise in the MERN stack, a powerful technology stack encompassing MongoDB, Express.js, React.js, and Node.js. Additionally, I am proficient in utilizing Tailwind CSS to create modern and responsive user interfaces. These are the few technologies I have worked with...
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-orange">
              <p class="font-playfair font-semibold text-5xl ">01</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">HTML</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/html.png" class="h-24 w-30" />
            </div>
          </div>

        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-blue rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-deep-blue">
              <p class="font-playfair font-semibold text-5xl ">02</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">CSS</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/css.png" class="h-24 w-30" />
            </div>
          </div>

        </motion.div >
        {/* IMAGINATIVE */}
        < motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-bright-yellow rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-bright-yellow">
              <p class="font-playfair font-semibold text-5xl ">03</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">Javascript</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/javascript.png" class="h-24 w-30" />
            </div>
          </div>
        </ motion.div>
      </div >
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-blue rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-deep-blue">
              <p class="font-playfair font-semibold text-5xl ">04</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">React</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/react.png" class="h-24 w-30" />
            </div>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-green rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-green">
              <p class="font-playfair font-semibold text-5xl ">05</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">NodeJS</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/nodejs.png" class="h-24 w-30" />
            </div>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-blue rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-deep-blue">
              <p class="font-playfair font-semibold text-5xl ">06</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">Tailwind</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/tailwind.png" class="h-24 w-30" />
            </div>
          </div>

        </motion.div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2  shadow-md shadow-green rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-green">
              <p class="font-playfair font-semibold text-5xl ">07</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">MongoDB</p>
            </div>

            <div class="flex justify-end items-center ml-8 md:w-1/2">
              <img alt="loading" src="../assets/mongo.png" class="h-24 w-30" />
            </div>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-white rounded-lg">

            <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-black">
              <p class="font-playfair font-semibold text-5xl ">08</p>
              <p class="font-playfair font-semibold text-3xl mt-3  ">Github</p>
            </div>

            <div class="flex justify-end items-center ml-12 md:w-1/2">
              <img alt="loading" src="../assets/github2.png" class="h-24 w-30" />
            </div>
          </div>



        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a href="../assets/excellence.pdf" target="_blank">
            <div class="flex bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-yellow rounded-lg">

              <div class=" flex flex-col justify-center items-center md:w-1/2  hover:text-yellow">
                <p class="font-playfair font-semibold text-5xl ">09</p>
                <p class="font-playfair font-semibold text-3xl mt-3  ">C++</p>
              </div>

              <div class="flex justify-end items-center ml-12 md:w-1/2">
                <img alt="loading" src="../assets/certi.png" class="h-24 w-30" />
              </div>
            </div>
          </a>

        </motion.div>
      </div>
    </section >
  );
};

export default MySkills;

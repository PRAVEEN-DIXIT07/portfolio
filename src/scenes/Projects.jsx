import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          These are the some projects designed by me....
        </p>
      </motion.div>

      {/* PROJECTS */}
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
          <div class=" flex flex-col justify-between font-playfair bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/portfolio.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;
                </a>
              </div>
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
          <div class=" flex flex-col justify-between font-playfair bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/sociopedia.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://drive.google.com/file/d/1DHE8JzGQrA_tBmu5wKQ4h5JCjiLVLk5J/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sociopedia
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/Socialmedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;

                </a>
              </div>
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
          <div class=" flex flex-col justify-between font-playfair bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/vitacare.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://drive.google.com/file/d/1a4C7TP4gjvRERk00ov3b04yf2b_gzq11/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vitacare
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/DocktorAppointment"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;
                </a>
              </div>
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
          <div class=" flex flex-col justify-between font-playfair bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/newspulse.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://drive.google.com/file/d/1elkzPXAwj8Qm8chndWNXnvV4ZG6Gy5ob/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Newspulse
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/NewsMonkey"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;
                </a>
              </div>
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
          <div class=" flex flex-col justify-between font-playfair bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/textutils.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://master--marvelous-chaja-8f922e.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Textutility
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/textutility"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;
                </a>
              </div>
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
          <div class=" flex flex-col justify-between font-playfair  bg-gradient-rainblue p-8 hover:scale-105 duration-500 py-2 shadow-md shadow-orange rounded-lg">

            <div className="h-full flex items-center justify-center">
              <div className="bg-gradient-rainblue  rounded-lg w-full hover:scale-105 duration-500 py-2 shadow-md shadow-black">
                {/* Your content for the first row */}
                <img alt="loading" src="../assets/Wordle.png" class="h-full w-full" />
              </div>
            </div>

            <div className="h-1/4 flex justify-between px-4">
              {/* Two elements with enough space between them */}
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg mr-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2 ">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://comfy-pastelito-f2904d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wordle
                </a>
              </div>
              <div className="bg-gradient-rainblue shadow-md shadow-black text-center hover:text-black p-4 rounded-lg ml-4 w-1/2 mt-2 hover:scale-105 duration-500 py-2">
                <a
                  className="hover:opacity-50 transition duration-500"
                  href="https://github.com/PRAVEEN-DIXIT07/Wordle"
                  target="_blank"
                  rel="noreferrer"
                >
                  &lt;/Code&gt;
                </a>
              </div>
            </div>
          </div>
        </ motion.div>
      </div >

    </section >
  );
};

export default Projects;

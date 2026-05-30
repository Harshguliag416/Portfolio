import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Home = () => {
  return (
    <section className={`relative mx-auto h-screen w-full bg-primary`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-center justify-center gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#about"
            className="rounded-lg bg-[#915EFF] px-8 py-3 text-center font-bold text-white hover:bg-[#7c4dcc] transition-colors"
          >
            Explore My Work
          </a>
          <a
            href={`mailto:${config.html.email}`}
            className="rounded-lg border-2 border-[#915EFF] px-8 py-3 text-center font-bold text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 xs:bottom-10"
      >
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <div className="bg-secondary mb-1 h-3 w-3 rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

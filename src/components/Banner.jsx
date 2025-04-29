import { motion } from "motion/react";
import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/banner2.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content max-w-7xl mx-auto flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={banner1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <motion.img
            src={banner2}
            animate={{ x: [150, 100, 150] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            The{" "}
            <motion.span
              animate={{ color: ["#324afc", "#030c52"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Easiest Way
            </motion.span>{" "}
            to Get Your New Job
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

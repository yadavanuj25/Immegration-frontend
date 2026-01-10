import React from "react";
import BannerPng from "../../assets/images/image2.png";
import { FaPassport } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center order-2 sm:order-1">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            src={BannerPng}
            alt="Visa Services"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center overflow-hidden order-1 sm:order-2">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            className="text-center md:text-left space-y-12"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12 text-gray-800 dark:text-white"
            >
              Your Trusted Partner for{" "}
              <span className="text-primary">Visa & Immigration</span> Services
            </motion.h1>

            {/* Features */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 duration-300 hover:shadow-lg"
              >
                <FaPassport className="text-2xl text-primary" />
                <p className="text-lg">Hassle-free Visa Applications</p>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 duration-300 hover:shadow-lg"
              >
                <MdFlightTakeoff className="text-2xl text-success" />
                <p className="text-lg">Fast Processing & Guidance</p>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 duration-300 hover:shadow-lg"
              >
                <IoMdGlobe className="text-2xl text-orange" />
                <p className="text-lg">Global Immigration Assistance</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

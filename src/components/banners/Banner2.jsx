import React from "react";
import BannerPng from "../../assets/images/image4.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0"
      >
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[480px]">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Join Our <span className="text-primary">Visa & Immigration</span>{" "}
              Community
            </h1>
            <p className="text-dark2 dark:text-gray-300 text-md sm:text-lg">
              Connect with travelers, students, and professionals who have
              successfully secured their visas. Get real-time guidance,
              immigration tips, and support for your journey abroad.
            </p>
            <a href="https://wa.me/your-number" className="primary-btn !mt-8">
              Join Now
            </a>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <img
            src={BannerPng}
            alt="Visa Community"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner2;

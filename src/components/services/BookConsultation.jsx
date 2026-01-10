import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalPhone } from "react-icons/md";

const BookConsultation = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container  mx-auto py-14 md:py-24 ">
        <div className="max-w-5xl mx-auto flex flex-col justify-center items-center">
          <p className="text-lg  font-bold   mb-2">
            Get Free Online Visa Assessment Today!
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center  mb-4 sm:mb-8 text-gray-800 dark:text-white"
          >
            Top Rated By{" "}
            <span className="text-primary">Customers & Immigration</span> Firms
            With 90% Success Rate.
          </motion.h1>
          <button className="primary-btn !mt-8 inline-flex items-center gap-3 group">
            Book A Consultation
            <MdOutlineLocalPhone className="group-hover:animate-bounce group-hover:text-lg duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;

import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-14 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: false }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* About Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-primary">Global Visa Services</span>
            </h1>
            <p className="text-dark2 dark:text-gray-400 text-md sm:text-lg">
              We provide professional visa and immigration consultation services
              to help students, professionals, and families achieve their dreams
              of traveling or relocating abroad. Fast, reliable, and
              hassle-free.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Services
              </h1>
              <ul className="space-y-2 text-lg text-dark2 dark:text-gray-400">
                <li>
                  <Link
                    to="services/student-visa"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Student Visa
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/work-visa"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/visitor-visa"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Visitor Visa
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/business-visa"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Business Visa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Links
              </h1>
              <ul className="space-y-2 text-lg text-dark2 dark:text-gray-400">
                <li>
                  <Link
                    to="/"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="company/about"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="cursor-pointer hover:text-primary duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Stay Connected
            </h1>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 rounded-s-xl bg-[#eae7e7] dark:bg-gray-800 w-full py-3 focus:ring-0 focus:outline-none placeholder:text-dark2 dark:placeholder:text-gray-400 text-gray-900 dark:text-white"
              />
              <button className="bg-primary text-white font-semibold py-3 px-4 rounded-e-xl">
                <IoIosArrowRoundForward className="text-xl " />
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3 text-gray-700 dark:text-gray-300">
              <a href="https://wa.me/your-number">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/yourprofile/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://yourwebsite.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/yourchannel">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { animate, motion } from "framer-motion";
import welcomeImg from "../assets/passport/passport1.jpg";
import blob from "../assets/images/blob.svg";

const Welcome = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px]"
      >
        {/* Brand Info */}
        <div className="flex flex-col justify-center  relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-1/2">
            <h1 className="text-4xl font-bold text-center sm:text-left mb-8   text-gray-800 dark:text-white">
              Welcome to Our <span className="text-primary">Website</span>
            </h1>
            <p className="text-dark2 dark:text-gray-300 text-md sm:text-lg">
              We are dedicated to providing the best services and solutions.
              Explore our website to learn more about what we offer and how we
              can help you achieve your goals.EU Immigration Services Pvt. Ltd.
              stands as one of the most trusted and respected names in the
              Overseas Education and Immigration industry today. We are
              committed to providing continuous guidance and unwavering support
              to individuals striving to achieve their global dreams. Known for
              our expertise in visa consultancy, we proudly serve clients not
              only across India but also throughout the UAE. Our approach is
              built on transparency, integrity, and in-depth knowledge of
              international education and immigration systems. Backed by a team
              of certified consultants and licensed legal advisors, we ensure
              that every step of your journey—from consultation to settlement—is
              smooth, stress-free, and successful. At EU Immigration Services,
              we don’t just open doors to opportunities—we walk with you through
              them.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Contact Us
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <img
            src={welcomeImg}
            alt="img"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <img
            src={blob}
            alt="blob"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Initial Consultation",
    desc: "We discuss your needs and eligibility.",
  },
  {
    step: "2",
    title: "Document Preparation",
    desc: "Guidance on all required paperwork.",
  },
  {
    step: "3",
    title: "Application Submission",
    desc: "We handle submission to authorities.",
  },
  {
    step: "4",
    title: "Follow-up & Support",
    desc: "Track application and provide updates.",
  },
];

export default function TimeLine() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto py-6 sm:py-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-8 sm:mb-24 text-gray-800 dark:text-white"
        >
          Our <span className="text-primary">Step-by-Step</span> Process
        </motion.h1>
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-0 w-1 bg-light_primary h-full transform -translate-x-1/2"></div>

          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row items-start mb-24 sm:mb-20"
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Left side content */}
              <div
                className={`sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right text-center"
                    : "sm:order-12 sm:pl-12 sm:text-left text-center"
                }`}
              >
                <div
                  className={`w-full flex ${
                    i % 2 === 0
                      ? "justify-center sm:justify-end"
                      : "justify-center sm:justify-start"
                  }`}
                >
                  <div className="bg-light_primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>

              {/* Connector for mobile */}
              <div className="sm:hidden h-1 w-16 bg-light_primary my-4 mx-auto rounded-full"></div>

              {/* Right side image */}
              <div
                className={`sm:w-1/2 flex ${
                  i % 2 === 0
                    ? "sm:pl-12 justify-start"
                    : "sm:pr-12 sm:order-1 justify-end"
                }`}
              >
                <motion.img
                  src="/src/assets/images/image1.png"
                  alt={item.title}
                  className="rounded-2xl w-full max-w-md object-cover shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { HelpCircle } from "lucide-react";
const Faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f7f7]">
      <div className="container mx-auto py-14 md:py-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently <span className="text-primary">Asked</span> Questions
          </h2>
          <p className="text-gray-600 text-center dark:text-gray-300 flex-grow text-md sm:text-lg">
            Here are some common questions our students and clients ask before
            starting their journey with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
              >
                <div className="flex items-center gap-5 ">
                  <HelpCircle className="text-primary w-6 h-6" />
                  {faq.question}
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-16 pb-5 text-gray-600 text-left dark:text-gray-300 flex-grow text-md sm:text-lg"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

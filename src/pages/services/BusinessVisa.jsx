import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Globe2,
  CheckCircle,
  FileText,
  UserCheck,
  HelpCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessVisa = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/passport1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        <div className="container mx-auto text-center flex flex-col justify-center items-center py-14 md:py-24 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            Business Visa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-lg max-w-5xl mx-auto"
          >
            Explore international opportunities, attend global events, and grow
            your business with hassle-free visa guidance.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-12 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/src/assets/images/business-visa.jpg"
          alt="Business Visa"
          className="rounded-2xl shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 sm:mb-12">
            Why Apply for a <span className="text-primary">Business Visa</span>?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-md sm:text-lg">
            Business visas are designed for entrepreneurs and professionals to
            expand their reach globally, attend conferences, and establish
            partnerships.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Globe2 className="text-primary w-6 h-6" />
              Participate in international trade fairs.
            </li>
            <li className="flex items-center gap-3">
              <Briefcase className="text-primary w-6 h-6" />
              Explore cross-border investment opportunities.
            </li>
            <li className="flex items-center gap-3">
              <Award className="text-primary w-6 h-6" />
              Build long-term global business relationships.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Eligibility */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto py-12 sm:py-24">
          <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
            Eligibility <span className="text-primary">Criteria</span>
          </h1>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Valid business invitation letter",
              "Proof of financial stability",
              "Business registration documents",
              "Travel itinerary & accommodation proof",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <UserCheck className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="container mx-auto py-12 sm:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
          Required <span className="text-primary">Documents</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Valid Passport",
            "Business Invitation Letter",
            "Financial Statements",
            "Proof of Accommodation",
            "Conference Registration (if applicable)",
            "Visa Application Form",
          ].map((doc, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-5 rounded-xl bg-white dark:bg-gray-800 shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <FileText className="text-primary w-6 h-6 flex-shrink-0" />
              <p>{doc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-24">
          <h1 className="text-4xl font-bold mb-8 sm:mb-12">
            Application <span className="text-primary">Process</span>
          </h1>
          <div className="space-y-8">
            {[
              "Prepare required documents",
              "Submit business visa application",
              "Attend consulate interview (if required)",
              "Await processing & approval",
              "Receive visa & travel abroad",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6" />
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-light_primary to-primary text-white text-center">
        <div className="container mx-auto py-12 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Apply for a Business Visa?
          </h2>
          <p className="mb-6">
            Get professional guidance to expand your business internationally.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto py-12 sm:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {[
            {
              q: "How long is a business visa valid?",
              a: "Most business visas are valid from 3 months to 1 year, depending on the country.",
            },
            {
              q: "Can I convert a business visa to a work visa?",
              a: "No, business visas are strictly for business purposes and cannot be converted.",
            },
            {
              q: "Do I need an invitation letter?",
              a: "Yes, most business visas require an invitation letter from the hosting company or event organizer.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="text-primary w-6 h-6" />
                <h3 className="text-lg font-semibold">{faq.q}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVisa;

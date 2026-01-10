import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  BookOpen,
  CheckCircle,
  FileText,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import faqs from "../../data/studentFaqs";
import Faq from "../../components/faq/Faq";

const StudentVisa = () => {
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
            Student Visa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-lg max-w-5xl mx-auto"
          >
            Begin your journey to study abroad with world-class universities and
            limitless opportunities.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-12 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/src/assets/images/student-visa.jpg"
          alt="Student Visa"
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
          <h1 className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12">
            Why Choose a <span className="text-primary">Student Visa</span> ?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-md sm:text-lg">
            A student visa allows you to study abroad in top-ranked
            universities, explore new cultures, and unlock endless career
            opportunities. Our team ensures a smooth application process from
            start to finish.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <GraduationCap className="text-primary w-6 h-6" />
              Quality education from leading universities.
            </li>
            <li className="flex items-center gap-3">
              <Globe2 className="text-primary w-6 h-6" />
              Exposure to global opportunities.
            </li>
            <li className="flex items-center gap-3">
              <BookOpen className="text-primary w-6 h-6" />
              Access to modern courses & research.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-white dark:bg-gray-800 ">
        <div className="container mx-auto py-12 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center  mb-8 sm:mb-12">
              Eligibility <span className="text-primary">Criteria</span>
            </h1>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Proof of admission from recognized university",
                "Valid passport with minimum 6 months validity",
                "Financial proof to cover tuition & living expenses",
                "Good academic background and transcripts",
                "English proficiency test (IELTS/TOEFL)",
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
                  <p className="text-md sm:text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="container mx-auto py-12 sm:py-24">
        <h1 className="text-4xl font-bold text-center  mb-8 sm:mb-12">
          Required <span className="text-primary">Documents</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Valid Passport",
            "University Offer Letter",
            "Proof of Funds",
            "Medical Certificates",
            "Academic Transcripts",
            "English Proficiency Certificate",
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
              <p className="text-md sm:text-lg">{doc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Timeline */}
      <div className="bg-gray-100 dark:bg-gray-800 ">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-24">
          <h1 className="text-4xl font-bold text-center  mb-8 sm:mb-12">
            Application <span className="text-primary">Process</span>
          </h1>
          <div className="space-y-8">
            {[
              "Choose your university & program",
              "Prepare required documents",
              "Submit your application",
              "Attend interview & receive approval",
              "Fly to your dream destination",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-start gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                <p className="text-md sm:text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white">
        <div className="container mx-auto py-12 sm:py-24">
          <h1 className="text-4xl font-bold text-center  mb-8 sm:mb-12">
            What <span className="text-primary">Our Students</span> Say
          </h1>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
            {[
              {
                name: "Aarav Mehta",
                review:
                  "The team guided me perfectly for my Canada student visa. Now I’m studying Computer Science at UBC!",
              },
              {
                name: "Priya Sharma",
                review:
                  "Smooth process, friendly support, and quick approvals. I highly recommend their services.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="bg-white/10 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <p className="italic mb-4">“{t.review}”</p>
                <h4 className="font-semibold">— {t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-light_primary to-primary text-white text-center ">
        <div className="container mx-auto py-12 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Apply for a Student Visa?
          </h2>
          <p className="mb-6 text-md sm:text-lg">
            Contact our experts today and start your journey to studying abroad.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* FAQ Section */}

      <Faq faqs={faqs} />
    </section>
  );
};

export default StudentVisa;

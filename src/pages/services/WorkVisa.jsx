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

const WorkVisa = () => {
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
            Work Visa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-lg max-w-5xl mx-auto"
          >
            Unlock career opportunities abroad and gain valuable international
            work experience with our expert visa assistance.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-12 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/src/assets/images/work-visa.jpg"
          alt="Work Visa"
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
            Why Choose a <span className="text-primary">Work Visa</span>?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-md sm:text-lg">
            A work visa opens doors to global opportunities, lets you gain
            international exposure, and enhances your career prospects. Our
            experts ensure a hassle-free application process.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Briefcase className="text-primary w-6 h-6" />
              Work with reputed global companies.
            </li>
            <li className="flex items-center gap-3">
              <Globe2 className="text-primary w-6 h-6" />
              Gain international exposure & skills.
            </li>
            <li className="flex items-center gap-3">
              <Award className="text-primary w-6 h-6" />
              Build a strong global career profile.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto py-12 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
              Eligibility <span className="text-primary">Criteria</span>
            </h1>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Valid job offer letter from an overseas employer",
                "Relevant educational qualifications",
                "Proof of professional experience",
                "Health and character certificates",
                "Valid passport with minimum 6 months validity",
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
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
          Required <span className="text-primary">Documents</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Valid Passport",
            "Employment Offer Letter",
            "Educational Certificates",
            "Proof of Work Experience",
            "Medical & Police Clearance Certificates",
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
              <p className="text-md sm:text-lg">{doc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Timeline */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-24">
          <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
            Application <span className="text-primary">Process</span>
          </h1>
          <div className="space-y-8">
            {[
              "Secure a job offer from overseas employer",
              "Collect required documents",
              "Submit work visa application",
              "Attend visa interview if required",
              "Receive visa approval & begin employment abroad",
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
          <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
            Success <span className="text-primary">Stories</span>
          </h1>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
            {[
              {
                name: "Rohit Verma",
                review:
                  "Thanks to their expert guidance, I secured my Germany work visa and now working at Siemens!",
              },
              {
                name: "Ananya Singh",
                review:
                  "Smooth process with excellent support. I’m now working in Australia as a Software Engineer.",
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
      <div className="bg-gradient-to-r from-light_primary to-primary text-white text-center">
        <div className="container mx-auto py-12 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Apply for a Work Visa?
          </h2>
          <p className="mb-6 text-md sm:text-lg">
            Let our team assist you with step-by-step guidance for your work
            visa application.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto py-12 sm:py-24">
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {[
            {
              q: "Can I switch jobs on a work visa?",
              a: "It depends on the visa type and country regulations. Some allow job changes with employer approval.",
            },
            {
              q: "How long is a work visa valid?",
              a: "Most work visas are valid for 1-3 years, with possible extensions.",
            },
            {
              q: "Do I need prior work experience?",
              a: "Yes, most countries require relevant professional experience for a work visa.",
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
              <p className="text-gray-600 dark:text-gray-300 text-md sm:text-lg">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkVisa;

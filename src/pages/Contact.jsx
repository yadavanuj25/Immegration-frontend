import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import * as yup from "yup";

const contactSchema = yup.object().shape({
  fname: yup.string().required("First name is require"),
  lname: yup.string().required("Last name is require"),
  email: yup.string().email("Invalid Email").required("Email is require"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});
  const [inquiry, setInquiry] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    handleGetAllData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactSchema.validate(form, { abortEarly: false });
      setErrors({});
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(data.msg || "Inquiry submitted successfully!");
        setForm({ fname: "", lname: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg(data.msg || "Something went wrong!");
      }
    } catch (err) {
      if (err.inner) {
        const formErrors = err.inner.reduce((acc, e) => {
          acc[e.path] = e.message;
          return acc;
        }, {});
        setErrors(formErrors);
      } else {
        setErrorMsg("Error submitting form");
      }
    } finally {
      setTimeout(() => {
        setSuccessMsg("");
        setErrorMsg("");
      }, 7000);
    }
  };

  const handleGetAllData = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/contact");
      const res = await data.json();
      if (res.ok) {
        setInquiry(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Serach
  const filteredData = inquiry.filter(
    (item) =>
      item.fname.toLowerCase().includes(search.toLowerCase()) ||
      item.lname.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-12 sm:py-24">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-md sm:text-lg">
            Have questions about immigration or our services? Fill out the form
            below or reach out to us directly. Our team is here to help you.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white border border-gray dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {successMsg && (
              <p className="text-md font-bold mt-1 p-2  mb-3 text-center rounded-md   text-green-600">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="text-md font-bold mt-1 p-2  mb-3 text-center rounded-md   text-red-600">
                {errorMsg}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-6 ">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={form.fname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border 
          ${
            errors.fname
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } 
          bg-transparent text-gray-800 dark:text-white 
          outline-none`}
                />
                {errors.fname && (
                  <p className="text-red-500 text-sm mt-1">{errors.fname}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={form.lname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border 
          ${
            errors.lname
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } 
          bg-transparent text-gray-800 dark:text-white 
          outline-none`}
                />
                {errors.lname && (
                  <p className="text-red-500 text-sm mt-1">{errors.lname}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border 
          ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } 
          bg-transparent text-gray-800 dark:text-white 
          outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border 
          ${
            errors.phone
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } 
          bg-transparent text-gray-800 dark:text-white 
         outline-none`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border 
        ${
          errors.message
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-700"
        } 
        bg-transparent text-gray-800 dark:text-white 
        outline-none`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary w-6 h-6" />
                <a
                  href="mailto:support@immigration.com"
                  className="text-gray-700 dark:text-gray-300 text-md "
                >
                  support@immigration.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary w-6 h-6" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-700 dark:text-gray-300 text-md"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary w-6 h-6" />
                <p className="text-gray-700 dark:text-gray-300 text-md ">
                  106 Business Avenue, Ahmedabad, India
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192822638687!2d-122.40137768468172!3d37.79361797975683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a47b09f3%3A0x9c22c6a5e3b8e11b!2sGoogle!5e0!3m2!1sen!2sin!4v1693838123456"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact list  */}
      <div className="container mx-auto py-12 sm:py-24 overflow-hidden">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Contact <span className="text-primary">Submissions</span>
        </h2>

        {/* Search Input */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="mb-10 px-4 py-2 w-full max-w-md border border-primary rounded-lg shadow-sm focus:outline-none focus:none focus:none dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />
        </div>

        {/* Table */}
        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-light_primary rounded-xl">
          <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <thead className="bg-gray-200 dark:bg-gray-800">
              <tr>
                {["First Name", "Last Name", "Email", "Phone"].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-light_primary hover:text-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.fname}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.lname}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item.phone}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-2 text-center text-gray-500 dark:text-gray-400"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border bg-primary dark:bg-gray-800 text-white dark:text-gray-200 disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-primary dark:text-gray-300">
              {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md border bg-primary dark:bg-gray-800 text-white dark:text-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

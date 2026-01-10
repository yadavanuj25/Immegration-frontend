import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import StudentVisa from "../pages/services/StudentVisa";
import WorkVisa from "../pages/services/WorkVisa";
import BusinessVisa from "../pages/services/BusinessVisa";
import VisitorVisa from "../pages/services/VisitorVisa";
import About from "../pages/companyPages/About";
import WhyChooseUs from "../pages/companyPages/WhyChooseUs";
import Contact from "../pages/Contact";
import BookConsultation from "../pages/BookConsultation";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="company/about" element={<About />} />
            <Route path="company/why-choose-us" element={<WhyChooseUs />} />
            <Route path="services/student-visa" element={<StudentVisa />} />
            <Route path="services/work-visa" element={<WorkVisa />} />
            <Route path="services/business-visa" element={<BusinessVisa />} />
            <Route path="services/visitor-visa" element={<VisitorVisa />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book-consultation" element={<BookConsultation />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;

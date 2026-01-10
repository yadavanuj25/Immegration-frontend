import React from "react";
import img from "../../assets/images/image1.png";
import { FaHandshake } from "react-icons/fa";
import Team from "../../components/teams/Teams";
import Teams from "../../components/teams/Teams";
import BookConsultation from "../../components/services/BookConsultation";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Hero / Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/passport1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for contrast */}
        <div className="container mx-auto text-center flex flex-col justify-center items-center py-14 md:py-24 relative z-10">
          <h1 className="text-6xl font-bold mb-2 ">About Us</h1>
          <p className="mt-3 text-lg max-w-5xl mx-auto ">
            Learn more about who we are, our mission, and what makes us unique.
            Learn more about who we are, our mission, and what makes us unique.
            Learn more about who we are, our mission, and what makes us unique.
            Learn more about who we are, our mission, and what makes us unique.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-2 gap-12  items-center">
        <div>
          <h1 className="text-4xl font-bold text-center sm:text-left mb-8 sm:mb-12">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-md sm:text-lg leading-relaxed">
            We started with a vision to deliver exceptional solutions that
            transform businesses. Over the years, we’ve grown into a trusted
            partner, known for our innovation and commitment to excellence.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-md sm:text-lg leading-relaxed">
            Our journey has been defined by customer trust, teamwork, and the
            relentless pursuit of quality. Today, we continue to help clients
            achieve their goals and build a brighter future together.
          </p>
        </div>
        <div>
          <img src={img} alt="Our Story" className="rounded-2xl shadow-lg" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-100 dark:bg-gray-800 ">
        <div className="container mx-auto py-14 md:py-24 grid md:grid-cols-3 gap-10 text-center">
          <div className=" p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaHandshake className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-semibold">Our Value</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses and individuals with innovative solutions
              that drive growth, efficiency, and long-lasting success.
            </p>
          </div>

          <div className=" p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaHandshake className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses and individuals with innovative solutions
              that drive growth, efficiency, and long-lasting success.
            </p>
          </div>
          <div className=" p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaHandshake className="text-blue-600 text-3xl" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To empower businesses and individuals with innovative solutions
              that drive growth, efficiency, and long-lasting success.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <Teams />

      {/* Book Consultation */}
      <BookConsultation />
    </section>
  );
};

export default About;

import React from "react";
import TimeLine from "../../components/services/TimeLine";
import OurStrengths from "../../components/services/OurStrengths";

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      {/* <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/passport1.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/50"></div>{" "}
        <div className="container max-auto py-14 md:py-24 text-center flex flex-col justify-center items-center ">
          <h1 className="text-6xl font-bold  mb-4  ">Why Choose Us</h1>
          <p className="mt-3 text-lg max-w-5xl mx-auto">
            Trusted immigration services with proven success and client
            satisfaction.
          </p>
        </div>
      </div> */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/src/assets/passport/passport1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for contrast */}
        <div className="container mx-auto text-center flex flex-col justify-center items-center py-14 md:py-24 relative z-10">
          <h1 className="text-6xl font-bold mb-2 ">Why Choose Us</h1>
          <p className="mt-3 text-lg max-w-5xl mx-auto ">
            Trusted immigration services with proven success and client
            satisfaction.
          </p>
        </div>
      </div>
      {/* Unique Selling Points */}
      <OurStrengths />

      {/* Process Steps */}
      <TimeLine />
    </section>
  );
}

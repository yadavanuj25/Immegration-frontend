import Banner from "../components/banners/Banner";
import Banner2 from "../components/banners/Banner2";
import Faq from "../components/faq/Faq";
import Hero from "../components/Hero";
import BookConsultation from "../components/services/BookConsultation";
import Services from "../components/services/Services";
import Stats from "../components/stats/Stats";
import Subscribe from "../components/subscribe/subscribe";
import Testimonial from "../components/testimonial/Testimonial";
import Welcome from "../components/Welcome";
import faqs from "../data/homeFaq";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Banner />
      <Services />
      <BookConsultation />
      <Stats />
      <Testimonial />
      <Banner2 />
      <Subscribe />
      <Faq faqs={faqs} />
    </>
  );
}

import AboutSection from "@/components/Home/aboutSection";
import FloatingButtons from "@/components/Home/floatingButtons";
import ContactSection from "@/components/Home/contact";
import CTASection from "@/components/Home/ctaSection";
import FAQSection from "@/components/Home/faqSection";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/Home/heroSection";
import ProcessSection from "@/components/Home/processSection";
import ServiceAreasSection from "@/components/Home/serviceAreaSectiob";
import ServicesSection from "@/components/Home/serviceSection";
import TestimonialsSection from "@/components/Home/Testimonials";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
import PropertyTypeExplorer from "@/components/Home/Propertytype";
import Propertiescard from  "@/components/Home/Propertiescard";
import BenefitsShowcase from "@/components/Home/BenefitsShowcase";


export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
     <Header/>
      <HeroSection />
      <ServicesSection />
       <WhyChooseUsSection/>
     <BenefitsShowcase/>
      
     
      <AboutSection />
     
      {/* <FloatingButtons />
      <WhyChooseUsSection/> */}
      <TestimonialsSection/>
      <ServiceAreasSection/>
      
      <FAQSection/>
      <ContactSection/> 
      <CTASection/>
      
      <Footer/>
    </>
  );
}


import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import SurpriseButton from "@/components/SurpriseButton";
import PoemGenerator from "@/components/PoemGenerator";
import PersonalLetter from "@/components/PersonalLetter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <PersonalLetter />
      <PoemGenerator />
      <SurpriseButton />
      <Footer />
    </div>
  );
};

export default Index;


import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import CardCreator from "@/components/CardCreator";
import SurpriseButton from "@/components/SurpriseButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <CardCreator />
      <SurpriseButton />
      <Footer />
    </div>
  );
};

export default Index;

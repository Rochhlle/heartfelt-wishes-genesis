
import { Heart, Code, Star, Flower } from "lucide-react";
import { useState, useEffect } from "react";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const fullText = "To the first engineer of our lives — MOM";

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mother-50 to-white py-20 md:py-28">
      <FloatingElements />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="relative inline-block mb-3 animate-heart-beat">
          <Heart className="h-12 w-12 fill-mother-500 text-mother-500" />
        </div>
        
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-mother-900 md:text-5xl lg:text-6xl">
          <span className="block">Happy Mother's Day</span>
          <div className="relative mt-2 inline-block rounded bg-mother-100 px-4 py-1">
            <Code className="absolute -left-2 -top-2 h-6 w-6 text-mother-500" />
            <span className="font-mono text-mother-700">
              {text}
              <span className={`inline-block w-0.5 bg-mother-700 ${isTyping ? 'animate-pulse-gentle' : 'opacity-0'}`}>|</span>
            </span>
          </div>
        </h1>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-mother-800 opacity-90">
          Celebrate the woman who debugged our problems, compiled our dreams, and 
          deployed unconditional love every single day.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <a href="#card-creator" className="btn-primary">
            Create a Card
          </a>
          <a href="#timeline" className="btn-secondary">
            Explore Moments
          </a>
        </div>
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

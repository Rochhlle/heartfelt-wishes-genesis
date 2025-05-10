
import { useState } from "react";
import { Gift, Heart, Star, Flower } from "lucide-react";

const SurpriseButton = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSurpriseClick = () => {
    if (showSurprise) {
      setIsAnimating(true);
      setTimeout(() => {
        setShowSurprise(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setShowSurprise(true);
    }
  };

  return (
    <section id="surprise" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-10">
            <div className="animate-rotate-slow">
              <Flower className="h-64 w-64 text-mother-300" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <Gift className="inline-block h-10 w-10 text-mother-500 mb-3" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mother-900 mb-6">
            A Special Surprise for Mom
          </h2>
          <p className="text-mother-700 mb-8">
            Every mother deserves something unexpected and wonderful. Click below to reveal 
            a special message that captures the essence of motherhood.
          </p>

          <button
            onClick={handleSurpriseClick}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Gift className="h-5 w-5" />
            {showSurprise ? "Hide Surprise" : "Reveal Surprise"}
          </button>

          {showSurprise && (
            <div className={`mt-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="card-outline bg-gradient-to-r from-mother-50 to-mother-100 p-8">
                <div className="absolute -z-10 top-0 right-0">
                  <Heart className="h-20 w-20 text-mother-100" />
                </div>
                
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <Heart className="h-10 w-10 fill-mother-300 text-mother-500" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-mother-800 mb-4">
                    To The World's Most Amazing Mother
                  </h3>
                  
                  <div className="prose prose-mother mx-auto">
                    <p className="italic text-mother-700 mb-4">
                      "A mother's love is the fuel that enables a normal human being to do the impossible."
                    </p>
                    
                    <p className="text-mother-700 mb-3">
                      You've been my first home, my first friend, my first teacher.
                      The debugging sessions of life were never too much for you,
                      and you've always found a way to refactor my mistakes into learning opportunities.
                    </p>
                    
                    <p className="text-mother-700 mb-3">
                      Your love is the most elegant code ever written—efficient, reliable, and endlessly recursive.
                      No loop could capture how much you mean to me, no algorithm could calculate your worth.
                    </p>
                    
                    <p className="text-mother-700 font-bold">
                      Forever grateful for your unconditional love.
                    </p>
                  </div>
                  
                  <div className="flex justify-center gap-2 mt-6">
                    <Star className="h-5 w-5 text-mother-400" />
                    <Heart className="h-5 w-5 text-mother-500" />
                    <Star className="h-5 w-5 text-mother-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SurpriseButton;

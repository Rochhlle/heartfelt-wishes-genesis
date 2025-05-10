
import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const PersonalLetter = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4 text-mother-700"
          >
            A Personal Promise
          </motion.h2>
          <div className="w-24 h-1 bg-mother-300 mx-auto mb-6"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-mother-50 rounded-2xl p-8 shadow-lg border border-mother-100 relative"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-6 -right-6">
              <Heart className="text-mother-200" size={80} />
            </div>
            <div className="absolute -bottom-6 -left-6 transform rotate-45">
              <Heart className="text-mother-200" size={60} />
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="font-serif text-xl md:text-2xl text-mother-800 leading-relaxed whitespace-pre-line">
              मैं बोलता नहीं  
              पर जो करता हूँ,  
              वो सब आपके लिए है।

              मेरी हर चीज़ – सिर्फ आपके लिए।

              ये सब कुछ,  
              आपको सब कुछ देने की कोशिश है।

              और ये मेरा वादा है –  
              <span className="text-mother-600 font-bold inline-flex items-center">
                💛 ये ज़रूर होगा।
              </span>
            </div>
            
            <div className="mt-8 text-right font-serif italic text-mother-600">
              — With all my love
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLetter;

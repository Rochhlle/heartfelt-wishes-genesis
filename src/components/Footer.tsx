
import { Heart, Flower, Gift } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mother-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 fill-mother-500 text-mother-500" />
            <span className="font-serif text-xl font-bold">Mother's Day</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="text-mother-200 hover:text-mother-500 transition-colors"
            >
              Home
            </a>
            <a 
              href="#timeline" 
              className="text-mother-200 hover:text-mother-500 transition-colors"
            >
              Timeline
            </a>
            <a 
              href="#surprise" 
              className="text-mother-200 hover:text-mother-500 transition-colors"
            >
              Surprise Gift
            </a>
          </div>
          
          <div className="inline-flex gap-3 mb-6">
            <button className="p-2 rounded-full bg-mother-800 hover:bg-mother-700 transition-colors">
              <Flower className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-mother-800 hover:bg-mother-700 transition-colors">
              <Gift className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-mother-800 hover:bg-mother-700 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          <div className="text-mother-300 text-sm">
            <p>© {new Date().getFullYear()} Mother's Day Tribute. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

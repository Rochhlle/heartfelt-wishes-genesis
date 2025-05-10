
import { useState } from "react";
import { Code, ChefHat, Trophy, Heart, MessageSquare } from "lucide-react";

const cardThemes = [
  {
    id: "coding",
    name: "Coding Mom",
    icon: <Code className="h-6 w-6" />,
    bgClass: "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200",
    textClass: "text-blue-800",
    accentClass: "text-purple-600",
  },
  {
    id: "chef",
    name: "Chef Mom",
    icon: <ChefHat className="h-6 w-6" />,
    bgClass: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200",
    textClass: "text-amber-800",
    accentClass: "text-orange-600",
  },
  {
    id: "super",
    name: "Super Mom",
    icon: <Trophy className="h-6 w-6" />,
    bgClass: "bg-gradient-to-br from-red-50 to-pink-50 border-red-200",
    textClass: "text-red-800",
    accentClass: "text-pink-600",
  },
];

const defaultMessage = "Thank you for always being there for me. Your love is the foundation upon which I've built my life. Happy Mother's Day!";

const CardCreator = () => {
  const [selectedTheme, setSelectedTheme] = useState(cardThemes[0]);
  const [message, setMessage] = useState(defaultMessage);
  const [name, setName] = useState("Your Loving Child");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeChange = (theme: any) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTheme(theme);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="card-creator" className="py-16 md:py-24 bg-mother-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="inline-block h-10 w-10 text-mother-500 mb-3" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mother-900">
            Create a Special Card for Mom
          </h2>
          <p className="text-mother-700 mt-4 max-w-2xl mx-auto">
            Express your love with a beautiful personalized message that captures
            your appreciation for everything she does.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card Creator Form */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-serif font-bold text-xl text-mother-800 mb-6">
              Customize Your Card
            </h3>

            <div className="mb-6">
              <label className="block text-mother-700 font-medium mb-2">
                Choose a Theme
              </label>
              <div className="grid grid-cols-3 gap-4">
                {cardThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme)}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center justify-center ${
                      selectedTheme.id === theme.id
                        ? "border-mother-500 bg-mother-50"
                        : "border-transparent hover:bg-mother-50"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        selectedTheme.id === theme.id
                          ? "bg-mother-500 text-white"
                          : "bg-mother-100 text-mother-600"
                      }`}
                    >
                      {theme.icon}
                    </div>
                    <span className="text-sm font-medium">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-mother-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-mother-200 rounded-lg focus:ring-mother-500 focus:border-mother-500 min-h-[120px]"
                placeholder="Write your message here..."
              />
            </div>

            <div className="mb-8">
              <label htmlFor="name" className="block text-mother-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-mother-200 rounded-lg focus:ring-mother-500 focus:border-mother-500"
                placeholder="Your name"
              />
            </div>

            <button
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Generate Shareable Card
            </button>
          </div>

          {/* Card Preview */}
          <div className="flex items-center justify-center">
            <div
              className={`card-outline max-w-md w-full transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              } ${selectedTheme.bgClass}`}
            >
              <div className="text-center">
                <div className={`inline-block p-3 rounded-full ${selectedTheme.accentClass} bg-white bg-opacity-50 mb-4`}>
                  {selectedTheme.icon}
                </div>
                <h3 className={`font-serif font-bold text-2xl mb-2 ${selectedTheme.textClass}`}>
                  Happy Mother's Day
                </h3>
                <div className={`w-16 h-1 mx-auto mb-4 ${selectedTheme.accentClass.replace('text', 'bg')}`}></div>
              </div>

              <div className="my-6">
                <p className={`text-center italic ${selectedTheme.textClass}`}>
                  {message || defaultMessage}
                </p>
              </div>

              <div className="text-center mt-6 pt-4 border-t border-opacity-20 border-gray-400">
                <p className={`font-medium ${selectedTheme.accentClass}`}>
                  With Love,
                </p>
                <p className={`font-serif font-bold ${selectedTheme.textClass}`}>
                  {name || "Your Loving Child"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardCreator;

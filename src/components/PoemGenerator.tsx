
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Heart } from "lucide-react";
import FloatingElements from "./FloatingElements";

const poemsByLetter: Record<string, string> = {
  a: "Always in my heart, you stay\nAs precious as the light of day\nAll my love surrounds you, dear\nA mother's love is always near.",
  b: "Beautiful moments we've shared together\nBlessings I count that will last forever\nBelonging to you since your first breath\nBy your side, I'll stay until my death.",
  c: "Cherished and loved beyond measure\nCaring for you has been my treasure\nCount on me through joy and through pain\nConstant love that will always remain.",
  d: "Dearly I've loved you since day one\nDevoted to you, my daughter/son\nDreams for your future fill my heart\nDeeply connected, even when apart.",
  e: "Every moment with you I treasure\nEndless love beyond all measure\nEternally grateful for you, my child\nEven in storms, my love stays mild.",
  f: "Forever my heart holds you dear\nFaithfully loving you year after year\nForgiving mistakes as you learn and grow\nFor a mother's love will always flow.",
  g: "Gently I've guided your steps through the years\nGrateful for laughter and even the tears\nGrowing together in love so profound\nGracious blessings in you I have found.",
  h: "Heartfelt emotions I feel for you\nHolding you close my whole life through\nHoping your dreams will all come true\nHonor and love, I promise you.",
  i: "In my heart you'll always be\nInvaluable treasure given to me\nInspiring joy with each smile you share\nI'll love you forever, everywhere.",
  j: "Journeys we've taken, hand in hand\nJoyful moments, oh so grand\nJust know my love won't ever end\nJewel of my heart, my child, my friend.",
  k: "Kindness flows from my heart to you\nKnowing your worth through and through\nKeeping you safe is what mothers do\nKisses and hugs, my love is true.",
  l: "Love overflows from my heart to yours\nLasting forever, it endures\nLittle one grown, but still my child\nLife with you makes my heart run wild.",
  m: "Miracle child in my loving arms\nMelting my heart with all your charms\nMemories cherished of watching you grow\nMy love for you will forever flow.",
  n: "Never doubt the love I feel\nNurturing bonds that are so real\nNear or far, wherever you roam\nNo matter what, you're never alone.",
  o: "Only you know my heart so well\nOver the years, our love did swell\nOpen arms await your return\nOceans of love for you I yearn.",
  p: "Precious child of my loving heart\nProud of you from the very start\nPatient love through thick and thin\nPerfect love that has no end.",
  q: "Quietly watching as you sleep\nQuestions you ask that are so deep\nQualities rare that shine so bright\nQueen of my heart, my guiding light.",
  r: "Remarkable joy you've brought to me\nRaising you has set my heart free\nRemembering all our special days\nRewarded by your loving ways.",
  s: "Sweet child of mine, so dear to me\nSpecial love between you and me\nStrong the bond that we both share\nSafe in my heart, you're always there.",
  t: "Tenderly holding you close to me\nTeaching you all that you should be\nTreasuring moments as time flies by\nTrue love between us will never die.",
  u: "Unconditional love I give to you\nUnderstanding your point of view\nUnited by bonds that cannot break\nUntil forever, for your sake.",
  v: "Valuing each moment we spend\nVictories and failures, I'll defend\nVestiges of childhood fade away\nVows of my love remain each day.",
  w: "Watching you grow with pride and joy\nWisdom I've shared with my girl/boy\nWonderful memories we have made\nWith you my love will never fade.",
  x: "Extraordinary love I have for you\nXanadu dreams I wish come true\nXerox image of my heart you see\nXO hugs and kisses, eternally.",
  y: "Years have flown since you were small\nYearning to catch you if you fall\nYielding guidance when you need\nYour happiness is all I need.",
  z: "Zealous love that knows no bounds\nZest for life in you abounds\nZephyr winds may blow you far\nZealously loved is what you are."
};

const fallbackPoem = 
  "Loving you with all my heart,\n" +
  "Every moment since your start.\n" +
  "This bond we share is heaven-sent,\n" +
  "To cherish always was meant.\n" +
  "Endless love for you, my dear,\n" +
  "Remember, I am always near.";

const PoemGenerator = () => {
  const [letter, setLetter] = useState("");
  const [poem, setPoem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGeneratePoem = () => {
    if (!letter) return;
    
    setIsLoading(true);
    
    // Simulate loading for a better user experience
    setTimeout(() => {
      const normalizedLetter = letter.toLowerCase().charAt(0);
      const foundPoem = poemsByLetter[normalizedLetter] || fallbackPoem;
      setPoem(foundPoem);
      setIsGenerated(true);
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setLetter("");
    setPoem("");
    setIsGenerated(false);
  };

  return (
    <section className="relative py-16 bg-mother-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-mother-800">
            Mother's Love Poem Generator
          </h2>
          
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-mother-100 relative overflow-hidden">
            {!isGenerated ? (
              <>
                <p className="text-center text-mother-700 mb-6">
                  Enter any letter, and I'll create a special mother's love poem that starts with that letter.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="text"
                    maxLength={1}
                    className="text-center text-lg border-mother-200 focus-visible:ring-mother-300"
                    placeholder="Enter a letter"
                    value={letter}
                    onChange={(e) => setLetter(e.target.value)}
                  />
                  
                  <Button 
                    onClick={handleGeneratePoem}
                    disabled={!letter || isLoading}
                    className="bg-mother-500 hover:bg-mother-600 text-white transition-all font-medium"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Poem"
                    )}
                  </Button>
                </div>
              </>
            ) : (
              <div className="animate-fade-in">
                <div className="bg-mother-50 rounded-xl p-6 mb-6 border border-mother-100">
                  <h3 className="text-xl font-serif text-mother-800 mb-3 flex items-center">
                    <Heart className="text-mother-500 mr-2" size={20} />
                    A Mother's Love Poem
                  </h3>
                  <p className="whitespace-pre-line text-mother-700 leading-relaxed font-medium">
                    {poem}
                  </p>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={handleReset} 
                    variant="outline"
                    className="border-mother-200 hover:bg-mother-50"
                  >
                    Create Another Poem
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemGenerator;

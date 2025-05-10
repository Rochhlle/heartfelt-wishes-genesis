
import { useEffect, useState } from "react";
import { Heart, Star, Flower } from "lucide-react";

type Element = {
  id: number;
  type: string;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
};

const FloatingElements = () => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    // Generate random floating elements
    const newElements = [];
    const types = ["heart", "star", "flower"];
    
    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 16) + 12, // 12-28px
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 5, // 5-15s
      });
    }
    
    setElements(newElements);
  }, []);

  const renderElement = (element: Element) => {
    const style = {
      left: element.x,
      top: element.y,
      width: `${element.size}px`,
      height: `${element.size}px`,
      animationDelay: `${element.delay}s`,
      animationDuration: `${element.duration}s`,
    };

    switch (element.type) {
      case "heart":
        return <Heart className="floating-element text-mother-300" style={style} />;
      case "star":
        return <Star className="floating-element text-mother-200" style={style} />;
      case "flower":
        return <Flower className="floating-element text-mother-400" style={style} />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
      {elements.map((element) => (
        <div key={element.id} className="absolute">
          {renderElement(element)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;

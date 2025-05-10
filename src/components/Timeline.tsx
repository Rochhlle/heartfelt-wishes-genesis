
import { useState } from "react";
import { Calendar, Heart, Book, Rocket, Award, Flower } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    year: "Year 1",
    title: "She taught me how to walk",
    description: "The first debugger in my life, helping me fix my balance issues one step at a time.",
    icon: <Calendar className="h-6 w-6 text-mother-500" />,
  },
  {
    id: 2,
    year: "Year 5",
    title: "She packed my first lunchbox",
    description: "Deploying nutrition with a side of love notes, always with zero downtime.",
    icon: <Heart className="h-6 w-6 text-mother-500" />,
  },
  {
    id: 3,
    year: "Year 10",
    title: "She helped with science projects",
    description: "My first pair programmer, working late nights to get the volcano just right.",
    icon: <Book className="h-6 w-6 text-mother-500" />,
  },
  {
    id: 4,
    year: "Year 18",
    title: "She supported my dreams",
    description: "The angel investor who believed in me when my ideas were just a minimum viable product.",
    icon: <Rocket className="h-6 w-6 text-mother-500" />,
  },
  {
    id: 5,
    year: "Now",
    title: "She still waits while I debug my life",
    description: "Forever on call, providing technical and emotional support with no service fees.",
    icon: <Award className="h-6 w-6 text-mother-500" />,
  },
];

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(1);

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Flower className="inline-block h-10 w-10 text-mother-500 mb-3" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-mother-900">
            The Timeline of Infinite Love
          </h2>
          <p className="text-mother-700 mt-4 max-w-2xl mx-auto">
            Every milestone in our lives has her fingerprints all over it. Here's to the woman who's 
            been there through every version update of our lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12">
          {/* Timeline navigation */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-4 mb-8 lg:mb-0">
            {timelineEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`py-3 px-5 rounded-lg transition-all flex-shrink-0 ${
                  activeEvent === event.id
                    ? "bg-mother-500 text-white"
                    : "bg-mother-50 text-mother-700 hover:bg-mother-100"
                }`}
              >
                <span className="font-medium">{event.year}</span>
              </button>
            ))}
          </div>

          {/* Timeline content */}
          <div className="lg:col-span-4">
            <div className="bg-mother-50 rounded-2xl p-6 md:p-10 animate-fade-in">
              {timelineEvents
                .filter((event) => event.id === activeEvent)
                .map((event) => (
                  <div key={event.id} className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      {event.icon}
                      <h3 className="font-serif font-bold text-2xl text-mother-800">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-mother-700 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

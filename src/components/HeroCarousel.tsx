import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";

const slides = [
  {
    image: heroFamily,
    title: "Welcome to The Wellness Company",
    description: "Our mission is to enhance the lives of those we touch by helping people reach their goals.",
    cta: "LEARN MORE",
  },
  {
    image: heroFamily,
    title: "Start Your Journey to Total Wellness",
    description: "Discover 400+ exclusive wellness products to help you reach your goals",
    cta: "BECOME A MEMBER",
  },
  {
    image: heroFamily,
    title: "An Approach to a Better Life",
    description: "We pride ourselves on enhancing lives, one product at a time through our innovative approach to total wellness.",
    cta: "DISCOVER WELLNESS",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-b from-sky-100 to-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-base px-8 rounded-full"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

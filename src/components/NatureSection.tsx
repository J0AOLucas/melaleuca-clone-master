import { Button } from "@/components/ui/button";

interface NatureSectionProps {
  title: string;
  subtitle?: string;
  image: string;
  align?: "left" | "right";
}

export const NatureSection = ({ title, subtitle, image, align = "left" }: NatureSectionProps) => {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-2xl ${align === "right" ? "ml-auto text-right" : ""}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-white/90 mb-6">
                {subtitle}
              </p>
            )}
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-foreground font-bold text-base px-8 rounded-full"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: string;
  bgColor: string;
}

export const CategoryCard = ({ title, subtitle, image, bgColor }: CategoryCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group ${bgColor}`}
    >
      <div className="aspect-square flex flex-col p-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          {subtitle && <p className="text-foreground/80 font-medium">{subtitle}</p>}
        </div>
        <div className="h-40 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </Card>
  );
};

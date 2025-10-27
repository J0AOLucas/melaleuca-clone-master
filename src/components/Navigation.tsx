import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Supplements",
    "Cleaning & Laundry",
    "Personal Care",
    "Beauty",
    "Healthy Foods",
    "Home Fragrance",
    "Essential Oils",
    "New Products",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-primary-hover rounded-md transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold">PureLife Wellness</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 bg-white/90 border-white/20 focus:bg-white"
              />
            </div>
          </div>

          <Button variant="secondary" className="font-semibold">
            SIGN IN
          </Button>
        </div>

        <div className="hidden lg:flex gap-1 pb-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-primary-hover rounded-md transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="mb-3 md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 bg-white/90 border-white/20 focus:bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-left hover:bg-primary-hover rounded-md transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

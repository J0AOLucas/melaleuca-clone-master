import { Search, Menu, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<string | null>(null);

  const categories = [
    { name: "Supplements", href: "/productstore/supplements" },
    { 
      name: "Cleaning & Laundry", 
      href: "/productstore/cleaning-and-laundry",
      subcategories: [
        { name: "Cleaning", href: "/productstore/cleaning-and-laundry/cleaning" },
        { name: "Laundry", href: "/productstore/cleaning-and-laundry/laundry" },
      ]
    },
    { 
      name: "Personal Care", 
      href: "/productstore/personal-care",
      subcategories: [
        { name: "Bath and Body", href: "/productstore/personal-care/bath-body" },
        { name: "Dental", href: "/productstore/personal-care/dental" },
        { name: "Hair Care", href: "/productstore/personal-care/hair-care" },
        { name: "Hand Soap and Sanitizer", href: "/productstore/personal-care/hand-soap-sanitizers" },
        { name: "Outdoor", href: "/productstore/personal-care/outdoor" },
        { name: "Baby Care", href: "/productstore/personal-care/baby-care" },
        { name: "Acne Prevention", href: "/productstore/personal-care/acne-prevention" },
      ]
    },
    { 
      name: "Beauty", 
      href: "/productstore/beauty",
      subcategories: [
        { name: "Premium Skin Care", href: "/productstore/beauty/premium-skin-care" },
        { name: "Color Cosmetics", href: "/productstore/beauty/color-cosmetics" },
        { name: "Beauty Specials", href: "/productstore/beauty/beauty-specials" },
        { name: "Hair Care", href: "/productstore/beauty/hair-care" },
        { name: "Last Chance", href: "/productstore/beauty/last-chance" },
        { name: "Fragrance/Perfume", href: "/productstore/beauty/fragranceperfume" },
        { name: "Now Trending Seasonal Colors", href: "/productstore/beauty/now-trending-seasonal-colors" },
      ]
    },
    { 
      name: "Healthy Foods", 
      href: "/productstore/healthy-foods-and-drinks",
      subcategories: [
        { name: "Healthy Weight and Protein", href: "/productstore/healthy-foods-and-drinks/healthy-weight-protein" },
        { name: "Healthy Snacks", href: "/productstore/healthy-foods-and-drinks/healthy-snacks" },
        { name: "Beverages", href: "/productstore/healthy-foods-and-drinks/beverages" },
        { name: "Fiber Drink", href: "/productstore/healthy-foods-and-drinks/fiber-drink" },
        { name: "Mints", href: "/productstore/healthy-foods-and-drinks/mints" },
        { name: "Spices", href: "/productstore/healthy-foods-and-drinks/spices" },
        { name: "Baking Mixes", href: "/productstore/healthy-foods-and-drinks/baking-mixes" },
      ]
    },
    { name: "Medicines and Treatments", href: "/productstore/medicines-and-treatments" },
    { name: "Home Fragrance", href: "/productstore/home-fragrance" },
    { name: "Essential Oils", href: "/productstore/essential-oils" },
    { name: "New Products", href: "/productstore/new-products" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 hover:bg-primary-hover rounded-md transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto">
                <div className="flex flex-col h-full">
                  {currentLevel === null ? (
                    <>
                      <div className="p-4 border-b">
                        <h2 className="font-bold text-lg mb-4">Categories</h2>
                      </div>
                      <div className="flex-1">
                        {categories.map((category) => (
                          <div key={category.name}>
                            {category.subcategories ? (
                              <button
                                onClick={() => setCurrentLevel(category.name)}
                                className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors text-left"
                              >
                                <span>{category.name}</span>
                                <ChevronRight className="h-5 w-5" />
                              </button>
                            ) : (
                              <a
                                href={category.href}
                                className="block p-4 hover:bg-accent transition-colors"
                              >
                                {category.name}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="border-t p-4 space-y-2">
                        <a href="/our-story" className="block p-2 hover:bg-accent rounded-md transition-colors">
                          Our Story
                        </a>
                        <a href="/contact" className="block p-2 hover:bg-accent rounded-md transition-colors">
                          Contact Us
                        </a>
                        <a href="/signin" className="block p-2 hover:bg-accent rounded-md transition-colors">
                          Sign In
                        </a>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 border-b">
                        <button
                          onClick={() => setCurrentLevel(null)}
                          className="flex items-center gap-2 text-sm hover:underline mb-4"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Back To Main
                        </button>
                        <h2 className="font-bold text-lg">
                          <a href={categories.find(c => c.name === currentLevel)?.href}>
                            All {currentLevel}
                          </a>
                        </h2>
                      </div>
                      <div className="flex-1">
                        {categories
                          .find(c => c.name === currentLevel)
                          ?.subcategories?.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              className="block p-4 hover:bg-accent transition-colors"
                            >
                              {sub.name}
                            </a>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
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
            <a
              key={category.name}
              href={category.href}
              className="px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-primary-hover rounded-md transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

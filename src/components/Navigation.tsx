import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import melaleucaLogo from "@/assets/melaleuca-logo.svg";

export const Navigation = () => {
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

  const menuCategories = [
    {
      name: "Supplements",
      link: "/productstore/supplements",
      subcategories: []
    },
    {
      name: "Cleaning and Laundry",
      link: "/productstore/cleaning-and-laundry",
      subcategories: [
        { name: "Cleaning", link: "/productstore/cleaning-and-laundry/cleaning" },
        { name: "Laundry", link: "/productstore/cleaning-and-laundry/laundry" }
      ]
    },
    {
      name: "Personal Care",
      link: "/productstore/personal-care",
      subcategories: [
        { name: "Bath and Body", link: "/productstore/personal-care/bath-body" },
        { name: "Dental", link: "/productstore/personal-care/dental" },
        { name: "Hair Care", link: "/productstore/personal-care/hair-care" },
        { name: "Hand Soap and Sanitizer", link: "/productstore/personal-care/hand-soap-sanitizers" },
        { name: "Outdoor", link: "/productstore/personal-care/outdoor" },
        { name: "Baby Care", link: "/productstore/personal-care/baby-care" },
        { name: "Acne Prevention", link: "/productstore/personal-care/acne-prevention" }
      ]
    },
    {
      name: "Beauty",
      link: "/productstore/beauty",
      subcategories: [
        { name: "Premium Skin Care", link: "/productstore/beauty/premium-skin-care" },
        { name: "Color Cosmetics", link: "/productstore/beauty/color-cosmetics" },
        { name: "Beauty Specials", link: "/productstore/beauty/beauty-specials" },
        { name: "Hair Care", link: "/productstore/beauty/hair-care" },
        { name: "Last Chance", link: "/productstore/beauty/last-chance" },
        { name: "Fragrance/Perfume", link: "/productstore/beauty/fragranceperfume" },
        { name: "Now Trending Seasonal Colors", link: "/productstore/beauty/now-trending-seasonal-colors" }
      ]
    },
    {
      name: "Healthy Foods and Drinks",
      link: "/productstore/healthy-foods-and-drinks",
      subcategories: [
        { name: "Healthy Weight and Protein", link: "/productstore/healthy-foods-and-drinks/healthy-weight-protein" },
        { name: "Healthy Snacks", link: "/productstore/healthy-foods-and-drinks/healthy-snacks" },
        { name: "Beverages", link: "/productstore/healthy-foods-and-drinks/beverages" },
        { name: "Fiber Drink", link: "/productstore/healthy-foods-and-drinks/fiber-drink" },
        { name: "Mints", link: "/productstore/healthy-foods-and-drinks/mints" },
        { name: "Spices", link: "/productstore/healthy-foods-and-drinks/spices" },
        { name: "Baking Mixes", link: "/productstore/healthy-foods-and-drinks/baking-mixes" }
      ]
    },
    {
      name: "Medicines and Treatments",
      link: "/productstore/medicines-and-treatments",
      subcategories: []
    },
    {
      name: "Home Fragrance",
      link: "/productstore/home-fragrance",
      subcategories: []
    },
    {
      name: "Essential Oils",
      link: "/productstore/essential-oils",
      subcategories: []
    },
    {
      name: "New Member Savings Packs",
      link: "/productstore/member-savings-pack",
      subcategories: []
    },
    {
      name: "Logo Gear",
      link: "/productstore/logo-gear",
      subcategories: []
    },
    {
      name: "Sales Aids and Materials",
      link: "/productstore/sales-aids-and-materials",
      subcategories: []
    },
    {
      name: "New Products",
      link: "/productstore/new-products",
      subcategories: []
    },
    {
      name: "Extra Savings",
      link: "/productstore/extra-savings",
      subcategories: [
        { name: "Outlet Store", link: "/productstore/extra-savings/outlet-store" }
      ]
    },
    {
      name: "Featured This Month",
      link: "/productstore/featured-this-month",
      subcategories: []
    },
    {
      name: "Pets",
      link: "/productstore/pets",
      subcategories: []
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<typeof menuCategories[0] | null>(null);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="p-2 hover:bg-primary-hover rounded-md transition-colors"
                    aria-label="Toggle Main Navigation"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="24px" 
                      viewBox="0 0 24 24" 
                      width="24px" 
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[90vw] sm:w-[400px] p-0">
                  <SheetHeader className="px-6 py-4 border-b">
                    <SheetTitle className="text-left">Categories</SheetTitle>
                  </SheetHeader>
                  <div className="overflow-y-auto h-[calc(100vh-80px)]">
                    {!selectedCategory ? (
                      <ul className="py-2">
                        {menuCategories.map((category) => (
                          <li key={category.name}>
                            {category.subcategories.length > 0 ? (
                              <button
                                onClick={() => setSelectedCategory(category)}
                                className="w-full px-6 py-3 text-left hover:bg-muted flex items-center justify-between group"
                              >
                                <span>{category.name}</span>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                              </button>
                            ) : (
                              <a
                                href={category.link}
                                className="block px-6 py-3 hover:bg-muted"
                              >
                                {category.name}
                              </a>
                            )}
                          </li>
                        ))}
                        <li className="border-t mt-4">
                          <a
                            href="/our-story"
                            className="block px-6 py-3 hover:bg-muted"
                          >
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a
                            href="/our-story/become-a-member"
                            className="block px-6 py-3 hover:bg-muted"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/depaccount/singlesignon"
                            className="block px-6 py-3 hover:bg-muted"
                          >
                            Sign In
                          </a>
                        </li>
                      </ul>
                    ) : (
                      <div>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className="w-full px-6 py-3 text-left hover:bg-muted flex items-center gap-2 border-b"
                        >
                          <ChevronLeft className="h-5 w-5" />
                          <span>Back To Main</span>
                        </button>
                        <a
                          href={selectedCategory.link}
                          className="block px-6 py-3 border-b font-semibold hover:bg-muted"
                        >
                          All {selectedCategory.name}
                        </a>
                        <ul className="py-2">
                          {selectedCategory.subcategories.map((subcat) => (
                            <li key={subcat.name}>
                              <a
                                href={subcat.link}
                                className="block px-6 py-3 hover:bg-muted"
                              >
                                {subcat.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              <img 
                src={melaleucaLogo} 
                alt="Melaleuca" 
                className="h-10 w-auto"
              />
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

          <div className="hidden lg:flex gap-1 pb-3 overflow-x-auto border-t border-border">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium whitespace-nowrap hover:bg-primary-hover rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

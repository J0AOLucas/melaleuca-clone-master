import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryCard } from "@/components/CategoryCard";
import { NatureSection } from "@/components/NatureSection";
import cleaningImage from "@/assets/category-cleaning.jpg";
import supplementsImage from "@/assets/category-supplements.jpg";
import personalCareImage from "@/assets/category-personal-care.jpg";
import beautyImage from "@/assets/category-beauty.jpg";
import lavenderImage from "@/assets/nature-lavender.jpg";
import leavesImage from "@/assets/nature-leaves.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Home Cleaning"
              subtitle="and Laundry"
              image={cleaningImage}
              bgColor="bg-wellness-sky"
            />
            <CategoryCard
              title="Supplements"
              subtitle="and Foods"
              image={supplementsImage}
              bgColor="bg-wellness-gold"
            />
            <CategoryCard
              title="Personal Care"
              image={personalCareImage}
              bgColor="bg-wellness-sage"
            />
            <CategoryCard
              title="Beauty"
              image={beautyImage}
              bgColor="bg-wellness-coral"
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-1">
          <NatureSection
            title="Nature Inspired Solutions"
            subtitle="Discover our ingredient philosophy"
            image={lavenderImage}
            align="left"
          />
          <NatureSection
            title="Putting Nature to Work"
            subtitle="Learn how we harness nature's power"
            image={leavesImage}
            align="left"
          />
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Committed to Your Wellness
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 35 years, we've been dedicated to creating products that enhance lives. 
              Our commitment to quality, safety, and sustainability drives everything we do. 
              From our nature-inspired formulations to our eco-friendly packaging, we're here 
              to help you and your family thrive.
            </p>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">400+</div>
                <p className="text-lg text-foreground">Exclusive Products</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <p className="text-lg text-foreground">Years of Excellence</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg text-foreground">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#" className="hover:underline">About Us</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:underline">Our Story</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:underline">Products</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:underline">Contact</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-white/40">|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
          <div className="text-center text-sm opacity-75">
            <p>&copy; 2025 PureLife Wellness Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

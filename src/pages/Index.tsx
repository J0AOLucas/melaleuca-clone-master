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

        <NatureSection
          title="Nature Inspired Solutions"
          subtitle="Harnessing the power of nature for your wellness journey"
          image={lavenderImage}
          align="left"
        />

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

        <NatureSection
          title="Putting Nature to Work"
          subtitle="Science-backed formulas from natural ingredients"
          image={leavesImage}
          align="right"
        />

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

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Our Story</a></li>
                <li><a href="#" className="hover:underline">Our Mission</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Supplements</a></li>
                <li><a href="#" className="hover:underline">Personal Care</a></li>
                <li><a href="#" className="hover:underline">Home Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 PureLife Wellness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

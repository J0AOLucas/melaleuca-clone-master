import { Navigation } from "@/components/Navigation";
import racaoImg from "@/assets/melaleuca_racao_branco.png";
import snacksImg from "@/assets/snacks.jpeg";
import cleaningImg from "@/assets/cleaning.jpeg";
import shampooImg from "@/assets/shampoo.jpeg";
import backgroundImg from "@/assets/background.jpg";
import dogBackgroundImg from "@/assets/dog-background-1.jpg";

const Pets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img 
          src={dogBackgroundImg} 
          alt="Pets" 
          className="w-full h-full object-cover"
        />
        {/* Overlay e texto do banner */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow">
                Natural care for happier dogs
              </h2>
              <p className="mt-3 md:mt-4 text-white/90 text-sm md:text-base lg:text-lg drop-shadow">
                Gentle formulas inspired by nature to protect skin, coat, and well‑being—because your best friend deserves the best every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Pets</h1>
        
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">
            <b>4</b> products
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Produto 1 - Ração */}
          <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
            <a href="/productstore/pets/dog-food" className="block">
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img src={racaoImg} alt="Premium Dog Food" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Premium Dog Food</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Natural, nutritious formula for your furry friend
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$24.99</span>
                    <span className="text-sm text-muted-foreground block">Member</span>
                  </div>
                  <div>
                    <span className="text-base font-bold line-through text-muted-foreground">$32.00</span>
                    <span className="text-sm text-muted-foreground block">Non-Member</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          {/* Produto 2 - Dog Snack */}
          <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
            <a href="/productstore/pets/dog-treats" className="block">
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img src={snacksImg} alt="Dog Snack" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Dog Snack</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Delicious, organic snacks your dog will love
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$12.99</span>
                    <span className="text-sm text-muted-foreground block">Member</span>
                  </div>
                  <div>
                    <span className="text-base font-bold line-through text-muted-foreground">$18.00</span>
                    <span className="text-sm text-muted-foreground block">Non-Member</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          {/* Produto 3 - Dog Cleaning Kit */}
          <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
            <a href="/productstore/pets/dog-cleaning-kit" className="block">
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img src={cleaningImg} alt="Dog Cleaning Kit" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Dog Cleaning Kit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete hygiene kit for your dog's daily care
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$19.99</span>
                    <span className="text-sm text-muted-foreground block">Member</span>
                  </div>
                  <div>
                    <span className="text-base font-bold line-through text-muted-foreground">$26.00</span>
                    <span className="text-sm text-muted-foreground block">Non-Member</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          {/* Produto 4 - Shampoo & Conditioner */}
          <article className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
            <a href="/productstore/pets/shampoo-conditioner" className="block">
              <div className="aspect-square bg-white flex items-center justify-center p-4">
                <img src={shampooImg} alt="Shampoo & Conditioner" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Shampoo & Conditioner</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Gentle formula for shiny, healthy coats
                </p>
                <div className="space-y-2">
                  <div>
                    <span className="text-2xl font-bold text-green-600">$14.99</span>
                    <span className="text-sm text-muted-foreground block">Member</span>
                  </div>
                  <div>
                    <span className="text-base font-bold line-through text-muted-foreground">$20.00</span>
                    <span className="text-sm text-muted-foreground block">Non-Member</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          
        </div>
      </main>

      <footer 
        className="text-white relative mt-12 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay leve para legibilidade */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <a href="/" title="Melaleuca The Wellness Company" className="block">
              <img 
                src="https://cdnsc1.melaleuca.com/na/images/footer/Melaleuca%20wellness%20co%20hor-0114_white.png" 
                alt="Melaleuca: The Wellness Company" 
                className="h-12 w-auto mx-auto"
              />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Address & Links */}
            <div>
              <div className="mb-6">
                <p className="text-sm mb-2">
                  Melaleuca, Inc.<br />
                  4609 West 65th South<br />
                  Idaho Falls, ID 83402<br />
                </p>
                <a href="tel:+1(208)522-0700" className="text-sm hover:underline">(208) 522-0700</a><br />
                <a href="mailto:info@melaleuca.com" className="text-sm hover:underline">info@melaleuca.com</a>
              </div>
              
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" className="hover:underline">Product Store</a></li>
                  <li><a href="/our-story" className="hover:underline">Our Story</a></li>
                  <li><a href="/our-story/ingredients-philosophy" className="hover:underline">Ingredients Philosophy</a></li>
                  <li><a href="/help-center/privacypolicy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="/help-center/termsofuse" className="hover:underline">Terms of Use</a></li>
                </ul>
              </nav>
            </div>

            {/* Right Column - Become a Member */}
            <div>
              <h2 className="text-sm uppercase mb-2 underline">
                <a href="/our-story/become-a-member">BECOME A MEMBER TODAY!</a>
              </h2>
              <p className="text-sm mb-6">Learn how you can become a Melaleuca Member.</p>
              
              <div className="mb-6">
                <a href="#" className="inline-block">
                  <img 
                    src="https://cdnsc1.melaleuca.com/na/images/footer/footer-bbb--enus.svg" 
                    alt="BBB Melaleuca Reviews" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://facebook.com/melaleuca" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img 
                src="https://cdnsc1.melaleuca.com/na/images/footer/footer-social-fb.svg" 
                alt="Facebook" 
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.instagram.com/melaleuca_inc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img 
                src="https://cdnsc1.melaleuca.com/na/images/footer/footer-social-insta.svg" 
                alt="Instagram" 
                className="w-10 h-10"
              />
            </a>
            <a href="https://x.com/melaleuca" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img 
                src="https://cdnsc1.melaleuca.com/na/images/footer/footer-social-x.svg" 
                alt="X logo" 
                className="w-10 h-10"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-75 border-t border-white/20 pt-6">
            <p>© Copyright 2025 Melaleuca Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pets;


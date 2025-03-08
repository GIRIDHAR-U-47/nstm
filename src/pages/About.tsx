
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <section className="py-16 bg-muted/30 animate-fade-in">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className="text-lg text-muted-foreground">
                We are passionate about serving delicious snacks that bring joy to every bite.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Friesie Delight started as a small food stall in 2015, with a simple mission: to serve the most delicious snacks with high-quality ingredients and exceptional service.
                </p>
                <p className="text-muted-foreground mb-4">
                  What began as a passion project quickly grew into a beloved local favorite, as customers fell in love with our crispy fries, delectable momos, and other tasty treats.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to uphold our commitment to quality and taste, while expanding our menu to include more delicious options for our valued customers.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg overflow-hidden h-[400px] animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="/placeholder.svg" 
                  alt="Our restaurant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up">
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on the quality of our ingredients. Every item on our menu is made with fresh, premium ingredients.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our top priority. We strive to exceed your expectations with every order.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our recipes and explore new flavors to bring you exciting culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind your favorite snacks
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="bg-card p-6 rounded-lg border border-border text-center animate-slide-up"
                  style={{ animationDelay: `${(i-1) * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">Chef Name {i}</h3>
                  <p className="text-sm text-accent mb-3">Head Chef</p>
                  <p className="text-sm text-muted-foreground">
                    With over 10 years of culinary experience, our chef brings passion and expertise to every dish.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

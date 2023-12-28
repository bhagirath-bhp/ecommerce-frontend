import React from 'react';
import Navbar from '../components/Navbar'; // Update import paths as necessary
import Footer from '../components/Footer';// Update import paths as necessary

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className=" text-gold min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <h1 className="text-3xl font-bold mb-6">Welcome to Drakiana</h1>
            <p>
              At Drakiana, we believe in the enchanting power of magic, and we strive to bring a touch of
              mystique and wonder into your everyday life. As purveyors of extraordinary and mystical
              products, we invite you to explore a realm where spells, potions, and magical artifacts converge
              to create an enchanting shopping experience like no other.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            <p>
              At the heart of Drakiana lies a carefully curated collection of magic-infused products
              designed to captivate your senses and spark your imagination. From bewitching spell books
              to mesmerizing crystals, each item in our inventory is handpicked to ensure that it meets
              our rigorous standards of quality and authenticity.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Why Choose Drakiana</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature Blocks */}
              <FeatureBlock title="Quality Magic" />
              <FeatureBlock title="Enchanting Variety" />
              <FeatureBlock title="Secure Shopping" />
              <FeatureBlock title="Enchanting Variety" />
            </div>
          </section>

          <section className="text-center py-8">
            <p className="mb-6">
              Join us at Drakiana and let the magic unfold. Indulge your senses, ignite your imagination, and
              make every day extraordinary with our enchanting collection of magical products. Welcome to a
              world where magic is not just a concept but a tangible, enchanting reality.
            </p>
            <button className="bg-gold hover:bg-gold-dark text-black font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

const FeatureBlock = ({ title }) => {
  return (
    <div className="border border-gold p-4 rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>
        Explore a diverse range of magical items, from ancient talismans to modern mystical creations.
      </p>
    </div>
  );
};

export default AboutPage;

import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
const ProductPage = () => (
    <div className="font-sans">

        <Navbar2/>
        <main className="p-5">
            <section id="product" className="mb-5">
                <h2 className="text-xl font-bold">Product 1</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum mauris, viverra a nunc in, congue facilisis erat. In sodales lacus quis nulla laoreet placerat. Morbi sit amet elit suscipit.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Buy Now</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
                <p className="text-red-500">₹489</p>
                {/* Add your DSPs here */}
                <h3 className="text-lg font-bold">Product Details</h3>
                <ul className="list-disc list-inside">
                    <li>Product Dimensions: 15 x 15 x 25 cm; 1.2 Kilograms</li>
                    <li>Date First Enchanted: 21 February 2023</li>
                    <li>Manufacturer: MystiCraft Potions Co.</li>
                    <li>Item model number: MC-4321</li>
                    <li>Item Weight: 1.2 kg</li>
                    <li>Item Dimensions LxWxH: 15 x 15 x 25 Centimeters</li>
                    <li>Net Quantity: 1 Count</li>
                    <li>Magical Essence: Potion of Prosperity</li>
                </ul>
            </section>
            <section id="reviews" className="mb-5">
                <h3 className="text-lg font-bold">Customer Reviews</h3>
                {/* Add your reviews here */}
            </section>
            <section id="related-items">
                <h3 className="text-lg font-bold">More items you may like in apparel</h3>
                {/* Add your related items here */}
            </section>
        </main>
        <Footer/>
        
    </div>
);

export default ProductPage;

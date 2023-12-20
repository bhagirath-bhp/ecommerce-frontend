import { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import ReviewBox from "../components/ReviewBox";

const ProductPage = () => {
    return(
        <div className="font-sans">
        <Navbar2 />        
        
        <main className="p-5">
            <section className="product-details-main grid grid-cols-3 grid-rows-2 mb-5">
                <div className="image-carousel mr-9 mb-9 row-start-1 row-end-3 col-span-1">
                    <ImageCarousel />
                </div>
                <div className="product-highlights my-5 col-start-2 col-end-3 ">
                    <h2 className="text-2xl font-bold border-b-[1px] border-black">Product 1</h2>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum mauris, viverra a nunc in, congue facilisis erat. In sodales lacus quis nulla laoreet placerat. Morbi sit amet elit suscipit.</p>
                    <h3 className="text-2xl font-bold my-3">₹489</h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Buy Now</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
                </div>
                <div className="product-dsp row-start-2 row-end-3 col-start-2 col-end-4">
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                    <div className="dsp border-2 px-3 py-2">dsp</div>
                </div>
            </section>
            <section className="product-details-sub">
                {/* Add your DSPs here */}
                <h3 className="text-lg font-bold">Product Details</h3>
                <ul className="list-disc list-inside">
                    <li>
                        <h3>Product Dimensions:</h3>
                        <span>15 x 15 x 25 cm;</span>
                        <span>1.2 Kilograms</span>
                    </li>
                    <li>
                        <h3>Date First Enchanted:</h3> <span>21 February 2023</span>
                    </li>
                    <li>
                        <h3>Manufacturer:</h3> <span>MystiCraft Potions Co.</span>
                    </li>
                    <li>
                        <h3>Item model number:</h3> <span>MC-4321</span>
                    </li>
                    <li>
                        <h3>Item Weight:</h3> <span>1.2 kg</span>
                    </li>
                    <li>
                        <h3>Item Dimensions LxWxH:</h3> <span>15 x 15 x 25 Centimeters</span>
                    </li>
                    <li>
                        <h3>Net Quantity:</h3> <span>1 Count</span>
                    </li>
                    <li>
                        <h3>Magical Essence:</h3> <span>Potion of Prosperity</span>
                    </li>
                </ul>
                <section id="reviews" className="mb-5">
                    <h3 className="text-lg font-bold">Customer Reviews</h3>
                    <ReviewBox/>
                </section>
                <section id="related-items">
                    <h3 className="text-lg font-bold">More items you may like in apparel</h3>
                    {/* Add your related items here */}
                </section>
            </section>
        </main>
        <Footer />

    </div>
)};

export default ProductPage;

import { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import ReviewBox from "../components/ReviewBox";
import RippleButton from "../components/RippleButton";
import Product from "../components/Product";
import { DialogModal } from "../components/DialogModal";
import DspCollection from "../components/DspCollection";
const ProductPage = () => {
    const productData = {
        name: "Product",
        price: "$ 1111",
        dspSet: [
            { key: 1, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 2, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 3, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 4, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 5, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 6, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 7, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 8, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
        ],
        carouselImageUrls: [
            { key: 1, url: "https://images.unsplash.com/photo-1663564305303-eb4c3cbc8619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
            { key: 2, url: "https://images.unsplash.com/photo-1663564306837-4ae873fbbc3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
            { key: 3, url: "https://images.unsplash.com/photo-1663564305613-c40450f29903?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" },
            { key: 4, url: "https://images.unsplash.com/photo-1663564307102-6df750b2196b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" }
        ],
        productDetails: {
            ProductDimensions: "15 x 15 x 25 cm;1.2 Kilograms",
            DateFirstEnchanted: "21 February 2023",
            Manufacturer: "MystiCraft Potions Co.",
            ItemModelNumber: "MC-4321",
            ItemWeight: "1.2 kg",
            ItemDimensions: "15 x 15 x 25 Centimeters",
            NetQuantity: "1 Count",
            MagicalEssence: "Potion of Prosperity",
        },
    };
    const productSet = [
        { key: 1, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
        { key: 2, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
        { key: 3, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
        { key: 4, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
        { key: 5, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
        { key: 6, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" }
    ]
    const productComponentSet = productSet.map((product) => (<Product key={product.key} title={product.title} description={product.description} url={product.url} price={product.price} />))
    
    return (
        <div className="font-sans">
            <Navbar2 />

            <main className="p-5">
                <section className="product-details-main grid grid-cols-3 grid-rows-1 mb-5 w-full">
                    <div className="image-carousel mr-9 smMobile:col-start-1 smMobile:col-end-4 tablet:row-start-1 tablet:row-end-3 tablet:col-span-1">
                        <ImageCarousel urls={productData.carouselImageUrls} />
                    </div>
                    <div className="product-highlights flex my-5 tablet:row-start-1 tablet:col-start-2 tablet:col-end-4 smMobile:row-start-2 smMobile: smMobile:col-start-1 smMobile:col-end-4">
                        <div className="product-text-contents max-w-[70%]">
                            <h2 className="text-2xl font-bold border-b-[1px] border-black">Product 1</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum mauris, viverra a nunc in, congue facilisis erat. In sodales lacus quis nulla laoreet placerat. Morbi sit amet elit suscipit.</p>
                            <h3 className="text-2xl font-bold my-3">₹489</h3>
                        </div>
                        <div className="product-buttons mx-5 smMobile:hidden tablet:block">
                            <RippleButton areaLabel="Buy Now" buttonStyles=" px-4 py-2 bg-golden text-black" />
                            <RippleButton areaLabel="Add to Cart" buttonStyles=" px-4 py-2 bg-golden text-black" />
                        </div>
                    </div>
                    <div className="product-dsp grid tablet:grid-cols-4 grid-rows-3 smMobile:grid-cols-3 verySmMobile:grid-cols-2 tablet:row-start-2 tablet:row-end-3 tablet:col-start-2 tablet:col-end-4 smMobile:col-start-1 smMobile:col-end-4">
                        <DspCollection dspSet={productData.dspSet}/>
                    </div>
                    <div className="product-buttons tablet:hidden smMobile:flex smMobile:justify-between smMobile:w-[90vw] pr-3">
                        <RippleButton areaLabel="Buy Now" buttonStyles="px-4 py-2 bg-golden text-black" />
                        <RippleButton areaLabel="Add to Cart" buttonStyles="px-4 py-2 bg-golden text-black" />
                    </div>
                </section>
                <section className="product-details-sub">
                    {/* Add your DSPs here */}
                    <h3 className="text-lg font-bold">Product Details</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            <h3>Product Dimensions:</h3>
                            <span>{productData.productDetails.ItemDimensions}</span>
                            <span>{productData.productDetails.ItemWeight}</span>
                        </li>
                        <li>
                            <h3>Date First Enchanted:</h3> <span>{productData.productDetails.DateFirstEnchanted}</span>
                        </li>
                        <li>
                            <h3>Manufacturer:</h3> <span>{productData.productDetails.Manufacturer}</span>
                        </li>
                        <li>
                            <h3>Item model number:</h3> <span>{productData.productDetails.ItemModelNumber}</span>
                        </li>
                        <li>
                            <h3>Item Weight:</h3> <span>{productData.productDetails.ItemWeight}</span>
                        </li>
                        <li>
                            <h3>Item Dimensions LxWxH:</h3> <span>{productData.productDetails.ItemDimensions}</span>
                        </li>
                        <li>
                            <h3>Net Quantity:</h3> <span>{productData.productDetails.NetQuantity}</span>
                        </li>
                        <li>
                            <h3>Magical Essence:</h3> <span>{productData.productDetails.MagicalEssence}</span>
                        </li>
                    </ul>
                    <section id="reviews" className="mb-5 py-5">
                        <h3 className="text-lg font-bold">Customer Reviews</h3>
                        <ReviewBox />
                    </section>
                </section>
                <section id="related-items max-w-[90vw]">
                    <h3 className="text-2xl font-bold">More items you may like in apparel</h3>
                    <div className="more-products-set noscrollbar flex justify-between w-full my-9 overflow-x-scroll">
                        {productComponentSet}
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    )
};

export default ProductPage;

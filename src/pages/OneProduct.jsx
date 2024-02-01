import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import DspCollection from "../components/DspCollection";
import ReviewBox from "../components/ReviewBox";
import ReviewForm from "../components/ReviewForm";
import DropdownSearch from "../components/DropdownSearch";
import Product from "../components/Product";
import { Button } from "@material-tailwind/react";
import { RiHeartAddLine } from "react-icons/ri";
import { getAProductById, getFiveRandomProducts } from "../api/products";
import { CircularProgress } from "@mui/material";
import { addToCart } from "../api/cart";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toastState, userState } from "../components/state/RecoilState";
import { addToWishlist } from "../api/wishlist";


const OneProduct = () => {
    const [productData1, setProductData1] = useState({});
    const [recommendedProductSet, setRecommendedProductSet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartLoading, setCartLoading] = useState(false);
    const [buyLoading, setBuyLoading] = useState(false);
    const [isDsp, setIsDsp] = useState(false);
    const { productId } = useParams();
    const user = useRecoilValue(userState);
    const setToastState = useSetRecoilState(toastState);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProduct() {
            try {
                if (productId) {
                    const product = await getAProductById(productId);
                    setProductData1(product);
                    console.log(product.name.substring(1, 4))
                    if (product.name.substring(1, 4) === "DSP") {
                        setIsDsp(true);
                    } else {
                        setIsDsp(false)
                    }
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        async function fetchRecommendedProductSet() {
            const response = await getFiveRandomProducts();
            if (response) {
                if (Array.isArray(response)) {
                    response.forEach((product) => {
                        setRecommendedProductSet(...recommendedProductSet, product);
                    })
                }
                else {
                    setRecommendedProductSet(response);
                }
            }
        }
        fetchProduct();
        fetchRecommendedProductSet();
    }, [productId]);
    useEffect(() => {
        if (productData1.images) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [productData1]);
    const handleAddToCart = async () => {
        setCartLoading(true);
        const response = await addToCart(user.userId, productId)
        setToastState([response, 'success', 'top-right', productId]);
        console.log(response)
        if (response)
            setTimeout(() => {
                navigate('/cart');
            }, 1500);

    }
    const handleAddToWishlist = async () => {
        const response = await addToWishlist(productId, user.userId);
        console.log(response)
        setToastState([response, 'success', 'top-right', productId]);
        setTimeout(() => {
            navigate('/wishlist');
        }, 1500);
    }


    const productData = {
        // name: "Product",
        // price: "$ 1111",
        dspSet: [
            { key: 1, name: "DSP 1", details: "Lorem ipsum dolor sit amet." },
            { key: 2, name: "DSP 2", details: "Lorem ipsum dolor sit amet." },
            { key: 3, name: "DSP 3", details: "Lorem ipsum dolor sit amet." },
            { key: 4, name: "DSP 4", details: "Lorem ipsum dolor sit amet." },
            { key: 5, name: "DSP 5", details: "Lorem ipsum dolor sit amet." },
            { key: 6, name: "DSP 6", details: "Lorem ipsum dolor sit amet." },
            { key: 7, name: "DSP 7", details: "Lorem ipsum dolor sit amet." },
            { key: 8, name: "DSP 8", details: "Lorem ipsum dolor sit amet." },
            { key: 9, name: "DSP 9", details: "Lorem ipsum dolor sit amet." },
            { key: 10, name: "DSP 10", details: "Lorem ipsum dolor sit amet." },
        ],
        // carouselImageUrls: [
        //     { key: 1, url: "https://images.unsplash.com/photo-1663564305303-eb4c3cbc8619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
        //     { key: 2, url: "https://images.unsplash.com/photo-1663564306837-4ae873fbbc3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
        //     { key: 3, url: "https://images.unsplash.com/photo-1663564305613-c40450f29903?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" },
        //     { key: 4, url: "https://images.unsplash.com/photo-1663564307102-6df750b2196b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3" }
        // ],
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
    ];
    const productComponentSet = productSet.map((product) => (<Product key={product.key} name={product.title} description={product.description} url={product.url} price={product.price} />))
    // console.log(recommendedProductSet)
    // const productComponentSet = recommendedProductSet.map((product) => (<Product key={product.productId} name={product.name} description={product.description} url={product.url || "noimg.jpg"} price={product.price} />))

    return (
        <div className="font-sans">
            <Navbar2 />
            {loading ?
                (
                    <div className="h-[90vh] w-[98vw] flex justify-center items-center">
                        <CircularProgress />
                    </div>
                )
                :
                (<main className="p-5">
                    <section className="product-details-main grid grid-cols-3 grid-rows-1 mb-5 w-full">
                        <div className="image-carousel mr-9 smMobile:col-start-1 smMobile:col-end-4 tablet:row-start-1 tablet:row-end-3 tablet:col-span-1">
                            {/* <ImageCarousel urls={productData.carouselImageUrls} /> */}
                            <ImageCarousel urls={productData1.images} />
                        </div>
                        <div className="product-highlights flex my-5 tablet:row-start-1 tablet:col-start-2 tablet:col-end-4 smMobile:row-start-2 smMobile: smMobile:col-start-1 smMobile:col-end-4">
                            <div className="product-text-contents max-w-[70%]">
                                <h2 className="text-2xl font-bold border-b-[1px] border-black">{productData1.name}</h2>
                                <p className="text-gray-700">{productData1.description}</p>
                                <h3 className="text-2xl font-bold my-3 flex items-center">
                                    ₹ {productData1.price}
                                    <RiHeartAddLine className="ml-[2rem] text-3xl cursor-pointer" onClick={handleAddToWishlist} />
                                    {/* <p className="w-[50%] border-[1px] rounded-xl font-normal text-base text-center px-5 bg-goldenLight text-golden border-golden ml-[5rem]">Limited Quantities Left</p> */}
                                </h3>
                            </div>
                            <div className="product-buttons mx-5 smMobile:hidden tablet:block">
                                {/* <Button
                                    className="bg-golden text-sm text-black my-2"
                                    loading={buyLoading}
                                // onClick={handleBuy}
                                >Buy Now</Button> */}
                                <Button
                                    className="bg-golden text-sm text-black my-2"
                                    loading={cartLoading}
                                    onClick={handleAddToCart}
                                >Add to Cart</Button>
                            </div>
                        </div>
                        <div className="product-dsp grid tablet:grid-cols-4 grid-rows-3 smMobile:grid-cols-3 verySmMobile:grid-cols-2 tablet:row-start-2 tablet:row-end-3 tablet:col-start-2 tablet:col-end-4 smMobile:col-start-1 smMobile:col-end-4">
                            <DspCollection dspSet={productData.dspSet} state={isDsp} />
                        </div>
                        {isDsp && <div className="dropdown-search col-start-1 col-end-4 verySmMobile:my-[5rem] verySmMobile:mx-[2rem] tablet:my-[3rem]">
                            <p className="font-semibold text-base mb-3">Select Dragon Spell *</p>
                            <DropdownSearch />
                        </div>
                        }
                        <div className="product-buttons tablet:hidden smMobile:flex smMobile:justify-between smMobile:w-[90vw] pr-3 ">
                            {/* <Button
                                className="bg-golden text-sm text-black my-2"
                                loading={buyLoading}
                            // onClick={handleBuy}
                            >Buy Now</Button> */}
                            <Button
                                className="bg-golden text-sm text-black my-2"
                                loading={cartLoading}
                                onClick={handleAddToCart}
                            >Add to Cart</Button>
                        </div>
                    </section>
                    {/* <section className="product-details-sub">
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
                    </section> */}
                    <section id="reviews" className="mb-5 py-5">
                        <h3 className="text-lg font-bold">Customer Reviews</h3>
                        <ReviewBox productId={productId} />
                        <ReviewForm productId={productId} userId={user.userId} />
                    </section>
                    <section id="related-items max-w-[90vw]">
                        <h3 className="text-2xl font-bold">More items you may like in apparel</h3>
                        <div className="more-products-set noscrollbar flex justify-between w-full my-9 overflow-x-scroll">
                            {productComponentSet}
                        </div>
                    </section>
                </main>)}
            <Footer />

        </div>
    )
};

export default OneProduct;
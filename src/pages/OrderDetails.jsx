import { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import DeliveryStatusStepper from "../components/DeliveryStatusStepper";
import { Button } from "@material-tailwind/react";
import DeliveredItem from "../components/DeliveredItem";
const OrderDetails = () => {
    return (
        <div className="font-sans">
            <Navbar2 />

            <main className="tablet:p-[5rem] verySmMobile:p-[1rem]">
                <section className="product-details-main grid grid-cols-3 grid-rows-1 mb-5 w-full">
                    <div className="image-carousel mr-9 verySmMobile:col-span-3 tablet:col-span-1 row-span-1 verySmMobile:mx-auto tablet:mx-0">
                        <img src="/public/product-image1.png" alt="" />
                    </div>
                    <div className="product-highlights flex my-5 verySmMobile:col-span-3 tablet:col-span-2">
                        <div className="product-text-contents">
                            <h2 className="text-2xl font-bold border-b-[1px] border-black">Product 1</h2>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum mauris, viverra a nunc in, congue facilisis erat. In sodales lacus quis nulla laoreet placerat. Morbi sit amet elit suscipit.</p>
                            <h3 className="text-2xl font-bold my-3 flex items-center">
                                <Button className="text-sm mr-2" color="green">Cancel Order</Button>
                                <Button className="text-sm ml-2" variant="outlined" >View Item</Button>
                            </h3>
                        </div>
                    </div>
                </section>
                <section className="product-details-sub col-start-1">
                    <DeliveryStatusStepper />
                </section>
                <section>
                    <DeliveredItem/>
                </section>
            </main>
            <Footer />

        </div>
    )
};

export default OrderDetails
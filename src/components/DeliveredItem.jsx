import { Button } from "@material-tailwind/react"

const DeliveredItem = () => {
    return (
        <div id="delivered-item">
            <div className="text-2xl">
                <p className="font-bold">Delivered December 13, 2023</p>
            </div>
            <div className="grid smMobile:grid-cols-1 tablet:grid-cols-5">
                <div className="verySmMobile:col-span-1 tablet:col-span-4 p-4 flex verySmMobile:flex-col tablet:flex-row gap-[3rem]">
                    <div className="col-span-1">
                        <img src="/public/product-image1.png" alt="Product 1" />
                    </div>
                    <div className="col-span-1">
                        <p className="font-bold">Product 1</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus neque quae illum ex numquam dolorem, eos tempora tempore porro nulla.</p>
                        <div className="flex mt-4 smMobile:flex-col smMobile:gap-5 tablet:flex-row">
                            <Button className="text-sm" color="green">Buy Again</Button>
                            <Button variant="outlined" className="text-sm">View Item</Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <Button variant="outlined" className="text-sm my-2">Buy it again</Button>
                    <Button variant="outlined" className="text-sm my-2">Return or Replace</Button>
                    <Button variant="outlined" className="text-sm my-2">Download Invoice</Button>
                    <Button variant="outlined" className="text-sm my-2">Write Review</Button>
                </div>
            </div>
        </div>
    )
}

export default DeliveredItem
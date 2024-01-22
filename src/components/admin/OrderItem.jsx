import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import OrderProductItem from "./OrderProductItem";
import { useState } from "react";



const OrderItem = ({order}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);


    const orderItems = order.orderitems;
    const orderItemComponentSet = orderItems.map((data)=>( <OrderProductItem key={Math.random()} id={data.id} name={data.product.name} quantity={data.quantity} price={data.price}/> ))
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
                1
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                
            </td>
            <td className="px-6 py-4">
                <p>2</p>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $599
            </td>
            <td className="px-6 py-4">
                <div className="dsp m-5">
                    <Button onClick={handleOpen} variant="outlined" className="btn-gold">
                        View Order
                    </Button>
                    <Dialog open={open} handler={handleOpen} className="text-2xl" size="xl">
                        <DialogHeader>Product 1</DialogHeader>
                        <DialogBody>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-16 py-3 text-sm">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-sm">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderItemComponentSet}
                                </tbody>
                            </table>
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                            >
                                <h3 className="text-base">Cancel</h3>
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </div>
            </td>
        </tr>
    )
}

export default OrderItem
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import { getAllOrdersForAdmin } from "../../api/order";
import { DefaultPagination } from "../../components/DefaultPagination";
import OrderItem from "../../components/admin/OrderItem";

const AllOrdersAdminPage = () => {
    const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, pageSize: 6, totalPages: 1, totalProducts: 1 });


    async function fetchOrders(page) {
        const response = await getAllOrdersForAdmin(page);
        setOrders(response.orders);
        console.log(response)
        setPagination(response.pagination);
    }
    const handlePageChange = (newpage) => {
        fetchOrders(newpage);
    }
    useEffect(() => {
        fetchOrders(1);
    }, [])

    const ordersComponentSet = orders.map((orderItem)=>( <OrderItem key={Math.random()} order={orderItem}/>  ))
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <AdminNavbar />
            <div className="container py-[3rem]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3 text-sm">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3 text-sm">
                                Buyer
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
                        {ordersComponentSet}
                    </tbody>
                </table>
                <div className="pagination-container mt-6">
                    <DefaultPagination
                        totalPages={pagination.totalPages}
                        currentPage={pagination.page}
                        onPageChange={handlePageChange}
                        visiblePages={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default AllOrdersAdminPage
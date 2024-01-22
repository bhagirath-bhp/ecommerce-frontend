import { Button } from "@material-tailwind/react"

const OrderProductItem = ({id, name, quantity, price}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
                1
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {name}
            </td>
            <td className="px-6 py-4">
                {quantity}
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${price}
            </td>
            <td className="px-6 py-4">
                <Button className="btn-gold">Hello</Button>
            </td>
        </tr>
    )
}

export default OrderProductItem
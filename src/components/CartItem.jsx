// CartItem.jsx
const CartItem = ({ item, onQuantityChange, onDelete }) => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded-lg mb-4">
        {/* Dummy image placeholder */}
        <img src="path-to-product-image.jpg" alt={item.name} className="w-16 h-16 object-cover rounded mb-4 sm:mb-0 sm:mr-4" />
        <div className="flex-grow">
          <span className="text-lg font-semibold">{item.name}</span>
          <span className="text-sm text-gray-600 block mb-2">{item.description}</span>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">₹{item.price}</div>
            <div className="flex items-center">
              <button onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                      className="text-lg p-1 border border-gray-300 rounded hover:bg-gray-200">
                -
              </button>
              <span className="mx-2 text-lg">{item.quantity}</span>
              <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                      className="text-lg p-1 border border-gray-300 rounded hover:bg-gray-200">
                +
              </button>
            </div>
            <div className="text-lg font-semibold">₹{item.total}</div>
            <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 ml-4">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  
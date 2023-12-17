// AddProductPage.jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { productState } from '../../components/admin/productState';
import AdminNavbar from '../../components/admin/AdminNavbar';


const AddProductPage = () => {
  const [product, setProduct] = useRecoilState(productState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // TODO: API call to submit the product data
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="p-2 border rounded"
          type="text"
          name="name"
          placeholder="Name of Product"
          value={product.name}
          onChange={handleChange}
        />
        <textarea
          className="p-2 border rounded"
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          name="price"
          placeholder="Price of Product"
          value={product.price}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="number"
          name="quantity"
          placeholder="Quantity Available"
          value={product.quantity}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="text"
          name="deliveryTime"
          placeholder="Estimated Delivery Time"
          value={product.deliveryTime}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded"
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
        />
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
    </>
  );
};

export default AddProductPage;

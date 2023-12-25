import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { productEditState } from '../../components/admin/productEditState';
import AdminNavbar from '../../components/admin/AdminNavbar';

const EditProductPage = ({ productId }) => {
  const [product, setProduct] = useRecoilState(productEditState);
  const [isUpdating, setIsUpdating] = useState(false);

  // Dummy product data for editing
  const dummyProduct = {
    id: productId,
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: '19.99',
    quantity: '100',
    deliveryTime: '3-5 days',
    images: [
      'https://via.placeholder.com/150', // Replace with your product image URLs
    ],
  };

  useEffect(() => {
    // Simulate fetching product data
    const fetchProductDetails = async () => {
      // Simulating a fetch call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProduct(dummyProduct);
    };

    fetchProductDetails();
  }, [productId, setProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = (e) => {
    // Handle the file upload logic here
    // For now, this will just log the file to the console
    console.log(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    console.log('Updated Product:', product);

    // Here you would normally make an API call to update the product
    // For now, we'll just simulate an API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // After the "API call" is done, we set isUpdating back to false
    setIsUpdating(false);
  };
  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-4 bg-white shadow rounded-lg mt-5">
        <h2 className="text-2xl font-bold mb-4">Edit Product Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-start mb-4">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${index}`} className="w-32 h-32 object-cover mr-4" />
            ))}
            <div className="flex items-end">
              <label className="cursor-pointer bg-purple-600 text-white rounded py-2 px-4 hover:bg-purple-700">
                + Add More Images
                <input type="file" multiple onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={product.name || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full md:w-1/2"
            />
          </div>
          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              name="description"
              value={product.description || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full md:w-1/2"
            />
          </div>
          <div>
            <label className="block font-semibold">Price:</label>
            <input
              type="text"
              name="price"
              value={product.price || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full md:w-1/2"
            />
          </div>
          <div>
            <label className="block font-semibold">Quantity Available:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity || ''}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full md:w-1/2"
            />
          </div>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600" type="submit">
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProductPage;

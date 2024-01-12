import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { productState } from '../../components/admin/productState';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AddCategoryPopup from '../../components/admin/AddCategoryPopup';
import { addNewProduct, getAllCategories, getAllCollections } from '../../api/products';
import { Button } from '@material-tailwind/react';

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
    quantity: 0,
    categoryId: '',
    collectionId: '',
  });
  const [categories, setCategories] = useState([{ categoryId: null, categoryName: "" }]);
  const [collections, setCollections] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategories();
      // console.log(result)
      if (result) {
        setCategories(result);
      }
    };

    const fetchCollections = async () => {
      const result = await getAllCollections();
      if (result) {
        setCollections(result);
      }
    };

    fetchCategories();
    fetchCollections();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product)
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleCategoryChange = (e) => {
    setProduct({ ...product, categoryId: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault();

    // Call the updated addNewProduct function
    const result = await addNewProduct(product);

    if (result) {
      console.log(result); // Log the response if needed
      // TODO: Handle success, maybe redirect to a product list page
    } else {
      // TODO: Handle failure
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-[2rem]">
        <h2 className="text-3xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Product Name
            </label>
            <input
              id="name"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
              Product Description
            </label>
            <textarea
              id="description"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
              Product Price
            </label>
            <input
              id="price"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">
              Product Images
            </label>
            <input
              id="images"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
              Quantity Available
            </label>
            <input
              id="quantity"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="categoryId" className="block text-gray-700 text-sm font-bold mb-2">
              Select Category
            </label>
            <select
              id="categoryId"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              name="categoryId"
              value={product.categoryId}
              onChange={handleCategoryChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            <Button className='text-sm my-2 bg-golden' onClick={() => { setShowAddCategory(true) }}>Add Category</Button>
          </div>
          <div className="mb-2">
            <label htmlFor="collectionId" className="block text-gray-700 text-sm font-bold mb-2">
              Select Collection
            </label>
            <select
              id="collectionId"
              className="p-2 border-[1px] border-golden rounded w-full outline-none"
              name="collectionId"
              value={product.collectionId}
              onChange={handleChange}
            >
              <option value="">Select a collection</option>
              {collections.map((collection) => (
                <option key={collection.collectionId} value={collection.collectionId}>
                  {collection.name}
                </option>
              ))}
            </select>
            <Button className='text-sm my-2 bg-golden' onClick={() => { setShowAddCategory(true) }}>Add Category</Button>
          </div>
          <Button type='submit' className='bg-golden text-sm'>
            Add Product
          </Button>
        </form>
        {showAddCategory && (
          <AddCategoryPopup
            onClose={() => setShowAddCategory(false)}
          />
        )}
      </div>
    </>
  );
};

export default AddProductPage;

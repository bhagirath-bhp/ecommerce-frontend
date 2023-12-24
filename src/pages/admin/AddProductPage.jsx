import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { productState } from '../../components/admin/productState';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AddCategoryPopup from '../../components/admin/AddCategoryPopup';

const AddProductPage = () => {
  const [product, setProduct] = useRecoilState(productState);
  const [categories, setCategories] = useState(['Electronics', 'Books', 'Clothing']); // Initial categories
  const [showAddCategory, setShowAddCategory] = useState(false); // New state for showing the add category popup
  const [isVariant, setIsVariant] = useState(false);
  const [existingProducts, setExistingProducts] = useState([]); // List of existing product names
  const [selectedVariantProductId, setSelectedVariantProductId] = useState('');

  // useEffect(() => {
  //   // TODO: Fetch the list of products from the backend
  //   // setExistingProducts(fetchedProducts);
  // }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, images: e.target.files });
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === 'add-new') {
      setShowAddCategory(true);
    } else {
      setProduct({ ...product, category: e.target.value });
    }
  };

  const addNewCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setProduct({ ...product, category: newCategory });
    setShowAddCategory(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // TODO: API call to submit the product data
  };

  const handleVariantChange = (e) => {
    setIsVariant(e.target.checked);
    if (!e.target.checked) {
      setSelectedVariantProductId(''); // Reset selected variant product
      // Update the product state accordingly
      setProduct({ ...product, variantOfProductId: '' });
    }
  };

  const handleVariantProductChange = (e) => {
    setSelectedVariantProductId(e.target.value);
    // Update the product state to reflect the change
    setProduct({ ...product, variantOfProductId: e.target.value });
  };


  return (
    <>
      <AdminNavbar />
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
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
        />
          <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            checked={isVariant}
            onChange={handleVariantChange}
          />
          <span className="ml-2 text-gray-700">Is this a variant?</span>
        </label>
        {isVariant && (
        <>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="variantProduct">
            Select Base Product for Variant
          </label>
          <select
            id="variantProduct"
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedVariantProductId}
            onChange={handleVariantProductChange}
          >
            <option value="">Select a product</option>
            {existingProducts.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </>
      )}
          <select
            className="p-2 border rounded"
            name="category"
            value={product.category || ''}
            onChange={handleCategoryChange}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
            <option value="add-new">+ Add New Category</option>
          </select>
          {/* ... other inputs ... */}
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            type="submit"
          >
            Add Product
          </button>
        </form>
        {showAddCategory && (
  <AddCategoryPopup
    onAddCategory={addNewCategory} // Changed to match the function name
    onClose={() => setShowAddCategory(false)}
  />
)}
      </div>
    </>
  );
};

export default AddProductPage;

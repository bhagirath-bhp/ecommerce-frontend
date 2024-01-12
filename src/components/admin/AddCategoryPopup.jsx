// AddCategoryPopup.jsx
import React, { useState } from 'react';
import { addNewCategory } from '../../api/products';


const AddCategoryPopup = ({ onClose }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewCategory(''); // Reset the input field after submission
    const response = await addNewCategory(e.target[0].value);
    console.log(response);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="p-2 border rounded"
            type="text"
            placeholder="Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryPopup;

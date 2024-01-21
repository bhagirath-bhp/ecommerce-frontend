// AddCollectionPopup.jsx
import React, { useState } from 'react';
import { addNewCollection } from '../../api/products';

const AddCollectionPopup = ({ onClose }) => {
  const [newCollection, setNewCollection] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNewCollection(''); // Reset the input field after submission
    const response = await addNewCollection(e.target[0].value);
    console.log(response);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            className="p-2 border rounded"
            type="text"
            placeholder="Collection Name"
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
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
              Add Collection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCollectionPopup;

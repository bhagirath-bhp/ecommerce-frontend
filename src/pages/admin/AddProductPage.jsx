import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productState } from '../../components/admin/productState';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AddCollectionPopup from '../../components/admin/AddCollectionPopup';
import { addNewCollection, addNewProduct, getAllCategories, getAllCollections } from '../../api/products';
import { Button } from '@material-tailwind/react';
import { toastState, userState } from '../../components/state/RecoilState';



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
  const [showAddCollection, setShowAddCollection] = useState(false);
  const setToastState = useSetRecoilState(toastState);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const user = useRecoilValue(userState);

  useEffect(() => {
    console.log(user)
    if(user.role==="admin"){
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
    }else{
      window.location.replace("/")
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, images: e.target.files });
    console.log(product.images)
  };

  const handleCategoryChange = (e) => {
    setProduct({ ...product, categoryId: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsBtnLoading(true)
    e.preventDefault();

    // Call the updated addNewProduct function
    const result = await addNewProduct(product);

    if (result) {
      setIsBtnLoading(false);
      setProduct({
        name: '',
        description: '',
        price: '',
        images: [],
        quantity: 0,
        categoryId: '',
        collectionId: '',
      });
      setCollections([]);
      setToastState([result, 'success', 'top-right']);

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
            <Button className='text-sm my-2 bg-golden' onClick={() => { setShowAddCollection(true) }}>Add Collection</Button>
          </div>
          <Button type='submit' className='bg-golden text-sm' loading={isBtnLoading}>
            Add Product
          </Button>
        </form>
        {showAddCollection && (
          <AddCollectionPopup
            onClose={() => setShowAddCollection(false)}
          />
        )}
      </div>
    </>
  );
};

export default AddProductPage;

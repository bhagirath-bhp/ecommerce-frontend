import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { getProductsByCollectionId } from '../api/products';
import { useParams } from 'react-router-dom';
const ProductPageByCollection = () => {
  const [products, setProducts] = useState([]);
   const collectionId = useParams().collectionId;
  //  console.log(collectionId)

  async function fetchProducts (collectionId) {
    const items = await getProductsByCollectionId(collectionId);
    setProducts(items);
  }

  useEffect(() => {
    fetchProducts(collectionId);
  }, []);


  const productsComponentContainer = products.map((product) => (
    <Product
      key={product.productId}
      productId={product.productId}
      name={product.name}
      description={product.description}
      price={product.price}
      url={product.images[0]?.imageURL || "/noimg.jpg"}
    />
  ));

  return (
    <>
      <Navbar2 />
      <div className="products flex-column justify-evenly items-center min-h-screen p-9">
        <div className="products-head flex justify-between w-full">
          <div className="mb-9 font-Chivo text-black ">
            <h3 className='font-bold smMobile:text-3xl tablet:text-5xl'>Enchantments</h3>
            <p>Discover a world of magic with our enchanting products.</p>
          </div>
        </div>
        <div className="products-container flex justify-evenly gap-[10%] flex-wrap">
          {productsComponentContainer}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPageByCollection;

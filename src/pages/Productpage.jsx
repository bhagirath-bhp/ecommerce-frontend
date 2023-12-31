import Product from '../components/Product';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../api/products';

const ProductsPage = () => {
  // const products = [
  //   { key: 1, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
  //   { key: 2, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
  //   { key: 3, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
  //   { key: 4, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
  //   { key: 5, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
  //   { key: 6, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
  //   { key: 7, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
  //   { key: 8, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
  //   { key: 9, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
  //   { key: 10, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
  //   { key: 11, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
  //   { key: 12, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" }
  // ];
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchProducts(){
      const items = await fetchAllProducts()
      setProducts(items)
    }
    fetchProducts()
  },[])
  const productsComponentContainer = products.map(product => (
    <Product
      key={product.productId}
      title={product.name}
      description={product.description}
      price={product.price}
      url={product.images[0].imageURL}
    />
  ))

  return (
    <>
      <Navbar2 />
      <div className="products flex-column justify-between items-center min-h-screen p-9">
        <div className="products-head flex justify-between w-full">
          <div className="mb-9 font-Chivo text-black ">
            <h3 className='font-bold text-5xl'>Enchantments</h3>
            <p>Discover a world of magic with our enchanting products.</p>
          </div>
        </div>
        <div className="products-container flex justify-between flex-wrap">
          { productsComponentContainer }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsPage;


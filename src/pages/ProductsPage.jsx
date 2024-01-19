import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import { fetchAllProducts } from '../api/products';
import { DefaultPagination } from '../components/DefaultPagination';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pageSize: 6, totalPages: 1, totalProducts: 1 });
  async function fetchProducts(pageNumber) {
    const items = await fetchAllProducts(pageNumber);
    setPagination(items.pagination);
    setProducts(items.products);
  }
  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handlePageChange = (newPage) => {
    fetchProducts(newPage);
  };
  const productsComponentContainer = products.map((product) => (
    <Product
      key={product.productId}
      productId={product.productId}
      title={product.name}
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
            <h3 className='font-bold text-5xl'>Enchantments</h3>
            <p>Discover a world of magic with our enchanting products.</p>
          </div>
        </div>
        <div className="products-container flex justify-between flex-wrap">
          {productsComponentContainer}
        </div>
        <div className="pagination-container mt-6">
          <DefaultPagination
            totalPages={pagination.totalPages}
            currentPage={pagination.page}
            onPageChange={handlePageChange}
            visiblePages={5}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;

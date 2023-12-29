import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminProduct from '../../components/admin/AdminProduct';// Adjust the import path as needed

const AdminCatalogPage = () => {
  const navigate = useNavigate();
  const authId = 'your-auth-id'; // Replace with actual auth ID or retrieve from context/state
  const products = [
    { key:1, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:2, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
    { key:3, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
    { key:4, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
    { key:5, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:6, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
    { key:7, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:8, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
    { key:9, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
    { key:10, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
    { key:11, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:12, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" }
  ];

  const handleProductClick = (productId) => {
    // navigate(`/admin/edit-product/${authId}/${productId}`);
  };

  return (
    <>
    <AdminNavbar />
    <div className="min-h-screen p-8">
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <AdminProduct
              title={product.title}
              description={product.description}
              price={product.price}
              url={product.url}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdminCatalogPage;

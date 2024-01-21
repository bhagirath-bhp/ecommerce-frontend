import Navbar from '../components/Navbar'
import ImgDiscover from '../components/ImgDiscover'
import Product from '../components/Product';
import Footer from '../components/Footer';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { getFiveRandomProducts } from '../api/products';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const navigate = useNavigate();
  const [productSet, setProductSet] = useState([]);
  const imgSet = [
    { key: 1, url: "/public/product-image1.png" },
    { key: 2, url: "/public/product-image2.png" },
    { key: 3, url: "/public/product-image3.png" },
    { key: 4, url: "/public/product-image4.png" },
    { key: 5, url: "/public/product-image1.png" },
    { key: 6, url: "/public/product-image2.png" },
    { key: 7, url: "/public/product-image3.png" },
    { key: 8, url: "/public/product-image4.png" },
  ];

  

  useEffect(()=>{
    async function fetchProducts(){
      const response = await getFiveRandomProducts();
      console.log(response)
      if(response){
        if(Array.isArray(response)){
          response.forEach((product)=>{
            setProductSet(...productSet, product);
          })
        }
        setProductSet(response);
      }
    }
    fetchProducts();
  }, [])
  const imgComponentSet = imgSet.map(img => { return <ImgDiscover key={img.key} url={img.url || "noimg.jpg"} className='img-rect' /> });
  const productComponentSet = productSet.map((product)=>(<Product key={product.productId} productId={product.productId} name={product.name} description={product.description} price={product.price}  url={product.url || "noimg.jpg"}/>))
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Homepage */}
      <div className="homepage">


        {/* Landing Section */}
        <div className="lander grid tablet:grid-cols-3 p-9 smMobile:grid-cols-1">
          <div className="landing-para col-span-2 row-span-1 max-w-[60%] py-[50px]">
            <h3 className='font-bold text-5xl'>Discover the Magic of Drakaina's Products</h3>
            <p>Experience the enchantment of our magical products that will transport you to a world of wonder and awe.</p>
            <a href="/products">
              <Button className="bg-golden text-sm text-black my-[2rem]">Shop Now</Button>
            </a>
          </div>
          <div className="landing-img col-span-1">
            <img src="/img-tarot1.png" className="scale-y-[0.90]" />
          </div>
        </div>



        {/* Discover Section */}
        <div className="discover flex-column justify-center items-center font-Chivo px-10 py-5 min-h-[500px]">
          <div className="discover-text grid tablet:grid-cols-2 smMobile:grid-cols-1">
            <h3 className='semibold m-2'>Discover the Enchanting World of Drakaina's Magical Products</h3>
            <p className='light m-2'>At Drakaina, we offer a unique selection of high-quality magic products with mystical properties, from spell books to enchanted artifacts. Explore our website and embark on a journey into the realm of enchantment today.</p>
          </div>
          <div className="discover-img-set noscrollbar flex justify-between w-full my-9 overflow-x-scroll">
            {imgComponentSet}
          </div>
        </div>


        {/* Products Sections */}
        <div className="products flex-column justify-center items-center min-h-[500px] p-9">
          <div className="products-head flex justify-between w-full">
            <div className="mb-9 font-Chivo text-black ">
              <h3 className='font-bold text-5xl smMobile:text-4xl'>Enchantments</h3>
              <p>Discover a world of magic with our enchanting products.</p>
            </div>
            <div className="ph-right tablet:block smMobile:hidden">
              <Button className="bg-golden text-sm text-black my-2" onClick={() => { navigate('/products') }}>View All</Button>
            </div>
          </div>
          <div className="products-container flex justify-evenly flex-wrap">
            {productComponentSet}
          </div>
          <div className="ph-right tablet:hidden smMobile:block">
            <Button className="bg-golden text-sm text-black my-2" onClick={() => { navigate('/products') }}>View All</Button>
          </div>
        </div>


        {/* Testimonial  */}
        <div className="testimonial-wrapper flex-column overflow-x-hidden font-CrimsonText text-black p-9">
          <h3 className='font-bold text-3xl text-center my-9'>Our Tarot Readers</h3>
          <TestimonialCarousel type="testimonial"/>
        </div>




        <Footer />

      </div>
    </div>
  )
}

export default Homepage
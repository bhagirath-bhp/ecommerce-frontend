import React from 'react'
import Navbar from '../components/Navbar'
import ImgDiscover from '../components/ImgDiscover'
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';
const Homepage = () => {
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
  const productSet = [
    { key:1, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:2, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
    { key:3, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
    { key:4, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
    { key:5, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key:6, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" }
  ]
  const testimonialSet = [
    { key:1, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png", className: "first"},
    { key:2, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
    { key:3, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
    { key:4, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
    { key:5, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    { key:6, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    { key:7, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
    { key:8, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
    { key:9, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
    { key:10, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
  ]

  const imgComponentSet = imgSet.map(img => { return <ImgDiscover key={img.key} url={img.url} className='img-rect' /> });
  const productComponentSet = productSet.map((product) => (<Product key={product.key} title={product.title} description={product.description} url={product.url} price={product.price}/>))
  const testimonialComponentSet = testimonialSet.map((testimonial) => (<Testimonial key={testimonial.key} name={testimonial.name} message={testimonial.message} url={testimonial.url} designation={testimonial.designation}/>))
  
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Homepage */}
      <div className="homepage">
        
        
        {/* Landing Section */}
        <div className="lander">
          <div className="landing-para max-w-[40%] py-[50px]">
            <h3 className='font-bold text-5xl'>Discover the Magic of Drakaina's Products</h3>
            <p>Experience the enchantment of our magical products that will transport you to a world of wonder and awe.</p>
            <button className='btn-full-emerald my-5'>Shop Now</button>
          </div>
          <div className="landing-img">
            <img src="/img-tarot1.png" className="scale-y-[0.90]" />
          </div>
        </div>



        {/* Discover Section */}
        <div className="discover flex-column items-center font-Chivo px-10 py-5 min-h-screen">
          <div className="discover-text flex justify-between">
            <h3 className='semibold max-w-[25%]'>Discover the Enchanting World of Drakaina's Magical Products</h3>
            <p className='max-w-[55%] light'>At Drakaina, we offer a unique selection of high-quality magic products with mystical properties, from spell books to enchanted artifacts. Explore our website and embark on a journey into the realm of enchantment today.</p>
          </div>
          <div className="discover-img-set noscrollbar flex w-full my-9 overflow-x-scroll">
            {imgComponentSet}
          </div>
        </div>


        {/* Products Sections */}
        <div className="products flex-column justify-between items-center min-h-screen p-9">
          <div className="products-head flex justify-between w-full">
            <div className="mb-9 font-Chivo text-indigo ">
              <h3 className='font-bold text-5xl'>Enchantments</h3>
              <p>Discover a world of magic with our enchanting products.</p>
            </div>
            <div className="ph-right">
              <button className='btn-hollow-emerald'>View All</button>
            </div>
          </div>
          <div className="products-container flex justify-between flex-wrap">
            {productComponentSet}
          </div>
        </div>


        {/* Testimonial  */}
        <div className="testimonial-wrapper flex-column overflow-x-hidden font-CrimsonText text-indigo p-9">
          <h3 className='font-bold text-3xl text-center my-9'>Let customers speak for us</h3>
          <div className="testimonial-container blur-mask noscrollbar">
            <div className="testimonial-inner flex w-fit gap-[1rem] scroller">
              {testimonialComponentSet}
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Homepage
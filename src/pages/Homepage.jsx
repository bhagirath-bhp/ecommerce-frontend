import React from 'react'
import Navbar from '../components/Navbar'
import ImgDiscover from '../components/ImgDiscover'
const Homepage = () => {
  const imgSet = [
    {key: 1,  url: "/public/product-image1.png"},
    {key: 2, url: "/public/product-image2.png"},
    {key: 3, url: "/public/product-image3.png"},
    {key: 4, url: "/public/product-image4.png"},
    {key: 5,  url: "/public/product-image1.png"},
    {key: 6, url: "/public/product-image2.png"},
    {key: 7, url: "/public/product-image3.png"},
    {key: 8, url: "/public/product-image4.png"},
  ]
  const imgComponentSet = imgSet.map(img => { return <ImgDiscover key={img.key} url={img.url}  className='img-rect'/> })
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="lander">
          <div className="landing-para max-w-[40%]">
            <h3 className='bold'>Discover the Magic of Drakaina's Products</h3>
            <p>Experience the enchantment of our magical products that will transport you to a world of wonder and awe.</p>
            <button className='btn-emerald my-5'>Shop Now</button>
          </div>
          <div className="landing-img">
            <img src="/img-tarot1.png" className="scale-y-[0.90]" />
          </div>
        </div>
        <div className="discover flex-column items-center font-Chivo px-10 py-5">
          <div className="discover-text flex justify-between">
            <h3 className='semibold max-w-[25%]'>Discover the Enchanting World of Drakaina's Magical Products</h3>
            <p className='max-w-[55%] light'>At Drakaina, we offer a unique selection of high-quality magic products with mystical properties, from spell books to enchanted artifacts. Explore our website and embark on a journey into the realm of enchantment today.</p>
          </div>
          <div className="discover-img-set flex w-full my-9 overflow-x-scroll">
            {imgComponentSet}
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
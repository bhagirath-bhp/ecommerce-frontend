import React from 'react'
import Navbar from '../components/Navbar'
const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="homepage">
        <div className="lander">
          <div className="landing-para">
            <h3>Discover the Magic of Drakaina's Products</h3>
            <p>Experience the enchantment of our magical products that will transport you to a world of wonder and awe.</p>
            <button className='btn-emerald'>Shop Now</button>
          </div>
          <div className="landing-img"></div>
        </div>
      </div>
    </>
  )
}

export default Homepage
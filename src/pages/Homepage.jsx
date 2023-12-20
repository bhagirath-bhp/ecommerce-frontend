import Navbar from '../components/Navbar'
import ImgDiscover from '../components/ImgDiscover'
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import RippleButton from '../components/RippleButton';

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
    { key: 1, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key: 2, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" },
    { key: 3, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image3.png" },
    { key: 4, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image4.png" },
    { key: 5, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image1.png" },
    { key: 6, title: "Product1", description: "This is a very nice product.", price: 489, url: "/public/product-image2.png" }
  ]
  const testimonialSet = [
    { key: 1, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png", className: "first" },
    { key: 2, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
    { key: 3, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
    { key: 4, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
    { key: 5, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    { key: 6, name: "Chhota Bheem 1", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
    { key: 7, name: "Chhota Bheem 2", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image3.png" },
    { key: 8, name: "Chhota Bheem 3", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image4.png" },
    { key: 9, name: "Chhota Bheem 4", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image1.png" },
    { key: 10, name: "Chhota Bheem 5", message: "This is a very nice product.", designation: "CSO @ Dholakpur", url: "/public/product-image2.png" },
  ]

  const imgComponentSet = imgSet.map(img => { return <ImgDiscover key={img.key} url={img.url} className='img-rect' /> });
  const productComponentSet = productSet.map((product) => (<Product key={product.key} title={product.title} description={product.description} url={product.url} price={product.price} />))
  const testimonialComponentSet = testimonialSet.map((testimonial) => (<Testimonial key={testimonial.key} name={testimonial.name} message={testimonial.message} url={testimonial.url} designation={testimonial.designation} />))

  return (
    <div className='border-2'>
      {/* Navbar */}
      <Navbar />

      {/* Homepage */}
      <div className="homepage">


        {/* Landing Section */}
        <div className="lander grid tablet:grid-cols-3 p-9 smMobile:grid-cols-1">
          <div className="landing-para col-span-2 row-span-1 max-w-[60%] py-[50px]">
            <h3 className='font-bold text-5xl'>Discover the Magic of Drakaina's Products</h3>
            <p>Experience the enchantment of our magical products that will transport you to a world of wonder and awe.</p>
            <RippleButton areaLabel="Shop Now" buttonStyles="bg-emerald text-indigo hover:bg-emerald px-5 py-2 me-2 mb-2" />
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
            <div className="mb-9 font-Chivo text-indigo ">
              <h3 className='font-bold text-5xl smMobile:text-4xl'>Enchantments</h3>
              <p>Discover a world of magic with our enchanting products.</p>
            </div>
            <div className="ph-right tablet:block smMobile:hidden">
              <RippleButton areaLabel="View All" buttonStyles="border-2 border-emerald text-indigo hover:bg-emerald px-5 py-1 me-2 mb-2"/>
            </div>
          </div>
          <div className="products-container flex justify-evenly flex-wrap">
            {productComponentSet}
          </div>
          <div className="ph-right tablet:hidden smMobile:block">
            <RippleButton areaLabel="View All" buttonStyles="border-2 border-emerald text-indigo hover:bg-emerald px-5 py-1 me-2 mb-2"  />
          </div>
        </div>


        {/* Testimonial  */}
        <div className="testimonial-wrapper flex-column overflow-x-hidden font-CrimsonText text-indigo p-9">
          <h3 className='font-bold text-3xl text-center my-9'>Let customers speak for us</h3>
          <div className="testimonial-container blur-mask noscrollbar my-9">
            <div className="testimonial-inner flex w-fit gap-[1rem] scroll-animation-left">
              {testimonialComponentSet}
            </div>
          </div>
        </div>




        <Footer />

      </div>
    </div>
  )
}

export default Homepage
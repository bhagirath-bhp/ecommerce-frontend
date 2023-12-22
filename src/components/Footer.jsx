import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer bg-black text-white grid tablet:grid-rows-1 grid-cols-2 gap-x-[5rem] p-9">
        <div className="footer-logo col-span-3 text-4xl font-Julee my-5 text-golden">Drakina</div>
        <div className="footer-about smMobile:row-[span]">
            <h3 className="font-bold text-2xl">About</h3>
            <p>Step into Drakiana, where magic enchants the everyday. Explore spells, potions, and mystical treasures for an enchanting shopping experience like no other. Embrace the extraordinary with us. ✨ #DrakianaMagic</p>
        </div>
        <div className="footer-quicklinks mobile:flex smMobile:flex-column gap-[5rem] font-Inter font-thin">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">View Products</a></li>
                <li><a href="">Shipping</a></li>
                <li><a href="">Delivery</a></li>
                <li><a href="">Terms & Conditions</a></li>
            </ul>
            <ul className='smMobile:mt-[3rem] mobile:mt-0'>
                <li><a href="">Spells</a></li>
                <li><a href="">Potions</a></li>
                <li><a href="">Divination Tools</a></li>
                <li><a href="">Alchemy Supplies</a></li>
                <li><a href="">Celestial</a></li>
                <li><a href="">Elemental Magic</a></li>
            </ul>
        </div>
        <div className="footer-socials text-golden text-xl smMobile:col-span-3 smMobile:mt-[5rem] tablet:col-span-1 tablet:mt-0">
            <h3 className='font-bold text-2xl text-white'>Follow Us</h3>
            <div className="footer-social-items smMobile:flex tablet:block">
                <div className="social-1 flex m-3">
                    <FaInstagram className='icon mr-3'/>
                    <span className='smMobile:hidden tablet:block'>Instagram</span>
                </div>
                <div className="social-2 flex m-3">
                    <AiOutlineYoutube className='icon mr-3'/>
                    <span className='smMobile:hidden tablet:block'>Youtube</span>
                </div>
                <div className="social-3 flex m-3">
                    <FaFacebook className='icon mr-3'/>
                    <span className='smMobile:hidden tablet:block'>Facebook</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
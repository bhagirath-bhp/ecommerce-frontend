import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer bg-indigo text-white grid grid-rows-1 grid-cols-2 gap-x-[5rem] p-9">
        <div className="footer-logo col-span-3 text-4xl font-Julee my-5 text-emerald">Drakina</div>
        <div className="footer-about">
            <h3 className="font-bold text-2xl">About</h3>
            <p>Step into Drakiana, where magic enchants the everyday. Explore spells, potions, and mystical treasures for an enchanting shopping experience like no other. Embrace the extraordinary with us. ✨ #DrakianaMagic</p>
        </div>
        <div className="footer-quicklinks flex gap-[5rem] font-Inter font-thin">
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">View Products</a></li>
                <li><a href="">Shipping</a></li>
                <li><a href="">Delivery</a></li>
                <li><a href="">Terms & Conditions</a></li>
            </ul>
            <ul>
                <li><a href="">Spells</a></li>
                <li><a href="">Potions</a></li>
                <li><a href="">Divination Tools</a></li>
                <li><a href="">Alchemy Supplies</a></li>
                <li><a href="">Celestial</a></li>
                <li><a href="">Elemental Magic</a></li>
            </ul>
        </div>
        <div className="footer-socials text-emerald text-xl">
            <h3 className='font-bold text-2xl text-white'>Follow Us</h3>
            <div className="social-1 flex m-3">
                <FaInstagram className='icon mr-3'/>
                <span>Instagram</span>
            </div>
            <div className="social-2 flex m-3">
                <FaXTwitter className='icon mr-3'/>
                <span>Twitter</span>
            </div>
            <div className="social-3 flex m-3">
                <FaFacebook className='icon mr-3'/>
                <span>Facebook</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
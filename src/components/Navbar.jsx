import "../App.css";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo"></div>
        <ul>
            <li>
                {/* <Link to="hel">Shop Now</Link> */}
                Shop Now
            </li>
            <li>
                {/* <Link>About Us</Link> */}
                About Us
            </li>
            <li>
                {/* <Link>Contact</Link> */}
                Contact
            </li>
            <li>
                {/* <Link>Categories</Link> */}
                Categories
            </li>
        </ul>
        <div className="signin">
            <a href="">Sign in</a>
        </div>
    </nav>
  )
}

export default Navbar
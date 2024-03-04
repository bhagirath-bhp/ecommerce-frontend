import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import UserBadge from "../UserBadge";

const AdminNavbar = () => {
    return (
        <nav className='navbar smMobile:hidden tablet:flex'>
            <div className="logo cursor-pointer" onClick={() => { window.open('/') }}></div>
            <ul className="navul flex">
                <li className="main-ul-li">
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li className="main-ul-li">
                    <Link to="/admin/product/add">Add Product</Link>
                </li>
                <li className="main-ul-li">
                    <Link to="/admin/catalog">Product Catalogue</Link>
                </li>
            </ul>
            <div className="signin">
                {Cookies.get('token') ? (
                    <ul className="navul flex">
                        <li className="main-ul-li">
                            <Link
                                to="/"
                                className="block px-4 py-1 text-md"
                                onClick={() => {
                                    Cookies.remove('token')
                                    setUser(false);
                                    window.location.replace("/")
                                }}>Sign out</Link>
                        </li>
                    </ul>
                ) : (
                    <Link to="/login" className="mx-4 main-ul-li hover:bg-goldenLight text-center">Sign in</Link>
                )}
            </div>
        </nav>
    )
}

export default AdminNavbar
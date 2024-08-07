import { IoIosSearch, IoMdCart, IoIosArrowRoundBack } from 'react-icons/io';
import { HiBars3 } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom';
import { fetchCollections, search } from '../api/products';
import { capitalizeWords } from '../scripts/utilScripts';
import { userState } from './state/RecoilState';
import { useRecoilState } from 'recoil';
import SearchItem from './SearchItem';


const Navbar2 = () => {
    const navigate = useNavigate()
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchItems, setSearcchItems] = useState([]);
    const categoriesSet = [
        { key: 1, title: "Category 1" },
        { key: 2, title: "Category 2" },
        { key: 3, title: "Category 3" },
        { key: 4, title: "Category 4" },
        { key: 5, title: "Category 5" },
        { key: 6, title: "Category 6" },
    ]

    // const categoriesComponentSet = categoriesSet.map((category) => (<li key={category.key}>{category.title}</li>))
    const [collections, setCollections] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCollections(navigate)
            setCollections(data)
        }
        fetchData()
    }, [])

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);

        clearTimeout(searchTimeout);
        if(e.target.value.length>2){
            const newTimeout = setTimeout(async () => {
                const response = await search(searchText);
                setSearcchItems(response)
            }, 500);
        }
        else{
            setSearcchItems([]);
        }
        setSearchTimeout(newTimeout);

    }
    const collectionsComponentSet = collections.map(
        (collection) => (
            <li
                key={collection.collectionId}
                onClick={() => {
                    if (!!collection.collectionId) {
                        navigate(`/collection/${collection.collectionId}`);
                    } else {
                        setToastState(['Something went wrong!', 'error', 'top-right']);
                    }
                }}>{capitalizeWords(collection.name)}</li>))
    const searchItemsComponentSet = searchItems.map((searchItem) => (<SearchItem key={searchItem.productId} productId={searchItem.productId} name={searchItem.name} price={searchItem.price} />))
    return (
        <nav className="navbar flex">
            <div href="#" className="text-5xl cursor-pointer">
                <IoIosArrowRoundBack onClick={() => navigate('/')} />
            </div>
            <div className="flex items-center w-10/12">
                <div className="relative w-[80%] flex">
                    {/* <IoIosSearch className="text-black text-2xl my-2 mx-5" /> */}
                    <input
                        type="text"
                        placeholder="Search... (minimum 3 characters)"
                        className="bg-white w-[80%] text-black rounded-lg p-2 focus:outline-none "
                        onChange={handleSearchChange}
                    />
                    <div className="search-items absolute top-[2.5rem] font-Roboto border-y-[1px] border-black w-[80%] max-h-[50vh] overflow-y-scroll z-[100]">
                        {searchItemsComponentSet}
                    </div>
                </div>
                <Link to="/cart" className="text-3xl mx-9 text-golden">
                    <IoMdCart />
                </Link>
                <div className="text-3xl text-golden cursor-pointer" onClick={() => { isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true) }}>
                    <HiBars3 />
                </div>
                <ul className={`navul flex-column items-center w-full overflow-hidden max-h-0 opacity-0 transition-height duration-1000 ease-in-out ${isNavOpen ? "max-h-[50rem] opacity-100" : "max-h-0 opacity-0"} border-[1px] border-golden absolute top-[4.3rem] left-0 p-3 z-[999] bg-black`}>
                    <li className="main-ul-li">
                        <a href="/products">
                            Shop Now
                        </a>
                    </li>
                    <li className="main-ul-li">
                        About Us
                    </li>
                    <li className="flex justify-center text-center">
                        <ul className="dropdown top-[1.7rem] left-1/2 flex-column justify-center items-center h-auto overflow-hidden bg-black transition-height duration-500 ease-in-out w-full">
                            <div className="border-y-2 border-golden w-full my-5">
                                {collectionsComponentSet}
                            </div>
                        </ul>
                    </li>
                    <div className="signin w-full flex justify-center">
                        {Cookies.get('token') ? (
                            <ul className="py-2 w-full">
                                <li className='w-full'>
                                    <Link to="/profile" className="block px-4 py-2 text-center hover:text-golden hover:bg-goldenLight">Profile</Link>
                                </li>
                                <li className='w-full'>
                                    <Link to="/cart" className="block px-4 py-2 text-center hover:text-golden hover:bg-goldenLight">Cart</Link>
                                </li>
                                <li className='w-full'>
                                    <Link to="/wishlist" className="block px-4 py-2 text-center hover:text-golden hover:bg-goldenLight">Wishlist</Link>
                                </li>
                                <li className='w-full'>
                                    <Link to="/orders" className="block px-4 py-2 text-center hover:text-golden hover:bg-goldenLight">Orders</Link>
                                </li>
                                <li className='w-full'>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-center hover:text-golden hover:bg-goldenLight"
                                        onClick={() => {
                                            Cookies.remove('token')
                                        }}
                                    >Sign out</Link>
                                </li>
                            </ul>
                        ) : (
                            <Link to="/login" className="mx-4 main-ul-li hover:bg-goldenLight text-center">Sign in</Link>
                        )}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar2
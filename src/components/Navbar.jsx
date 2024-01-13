import { useEffect, useState } from "react";
import "../App.css";
import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";
import { fetchCollections } from "../api/products";
import { useNavigate } from "react-router-dom";
import { capitalizeWords } from "../scripts/utilScripts";


const Navbar = () => {
    const navigate = useNavigate();
    const categoriesSet = [
        {key: 1, title:"Category 1"},
        {key: 2, title:"Category 2"},
        {key: 3, title:"Category 3"},
        {key: 4, title:"Category 4"},
        {key: 5, title:"Category 5"},
        {key: 6, title:"Category 6"},
    ]
    
    const [collections,setCollections] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const data = await fetchCollections(navigate)
            console.log(data);
            setCollections(data)
        }
        fetchData()
    },[])
    const categoriesComponentSet = collections.map((collection)=>(<li key={collection.collectionId}>{capitalizeWords(collection.name)}</li>))
    return (
        <div className="nav">
            <NavbarTablet categoriesComponentSet={categoriesComponentSet}/>
            <NavbarMobile categoriesComponentSet={categoriesComponentSet}/>
        </div>
    )
}

export default Navbar
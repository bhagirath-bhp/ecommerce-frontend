import { useState } from "react";
import "../App.css";
import NavbarMobile from "./NavbarMobile";
import NavbarTablet from "./NavbarTablet";

const Navbar = () => {
    const categoriesSet = [
        {key: 1, title:"Category 1"},
        {key: 2, title:"Category 2"},
        {key: 3, title:"Category 3"},
        {key: 4, title:"Category 4"},
        {key: 5, title:"Category 5"},
        {key: 6, title:"Category 6"},
    ]
    const categoriesComponentSet = categoriesSet.map((category)=>(<li key={category.key}>{category.title}</li>))
    return (
        <div className="nav">
            <NavbarTablet categoriesComponentSet={categoriesComponentSet}/>
            <NavbarMobile categoriesComponentSet={categoriesComponentSet}/>
        </div>
    )
}

export default Navbar
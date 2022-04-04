import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
const navdata=[
    {
        bareze:'Bareeze',
    },
    {
        new:'New In',
        casual:'Casuals',
        formal:'Formals',
        print:'Prints',
        shawl:'Shawls',
        botom:'Bottoms',
        barezemen:'Bareeze Men',
        look:'Lookbook',
        sale:'Sale'
    },
    {
        search:<AiOutlineSearch/>,
        user:<FaRegUser/>,
        cart:<FaShoppingCart/>
    }

]

export default navdata;
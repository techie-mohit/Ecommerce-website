import React from 'react'
import Logo from './Logo.jsx'
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"; 




const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <Logo/>
          </Link>
        </div>


        <div className="flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-1">
          <input type="text" placeholder="search product here" className="w-full outline-none "/>
          <div className="text-lg w-10 h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <IoIosSearch />
          </div>
        </div>

        <div className= "flex items-center gap-5">

          <div className='text-2xl cursir-pointer'>
          <FaUserCircle />
          </div>

          <div className= "text-2xl px-5 cursor-pointer relative ">
            <span ><FaShoppingCart /></span>
            <div className="bg-red-600 text-white w-4 h-4 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-0">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"} className="px-6 bg-red-500 py-1 rounded-full text-white hover:bg-red-700">Login</Link>
          </div>


        </div>
      </div>
    </header>
  )
}

export default Header

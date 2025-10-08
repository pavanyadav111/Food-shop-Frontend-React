import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const[isScrolled,setIsScrolled]= useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(()=>{
      const handleScroll = ()=>{
        setIsScrolled(window.scrollY > 10)
      }
      window.addEventListener('scroll', handleScroll)
  },[])
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : null} `}>
      <nav className="max-w-[1400px] mx-auto h-[14vh] md:h-[12vh] items-center px-10  flex justify-between ">
        {/*  logo */}
        <Link to="/" className="text-3xl font-semibold">
          E-sh<span className="text-red-500 uppercase ">O</span>p
        </Link>

        {/*  nav items */}
        <ul className=" items-center gap-x-15 md:flex hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-red-500 hover:text-green-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav action  */}

        <div className="flex items-center gap-x-5">
          {/*  input field */}
          <div className="md:flex hidden p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              placeholder="search"
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-zinc-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <FaSearch />
            </button>
          </div>

          <a href="" className="text-zinc-800 text-2xl">
            <IoIosHeart />
          </a>

          <a href="" className="text-zinc-800 text-2xl">
            <HiOutlineShoppingBag />
          </a>

          {/* Hamburger  */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden "
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>

          {/* Mobile Menu */}

          <ul
            className={` flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl  p-10 top-30 -left-full transform -translate-x-1/2  items-center gap-x-15 sm:flex md:hidden absolute transition-all duration-500 ${
              showMenu ? "left-1/2" : " "
            }`}
          >
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-red-500 hover:text-green-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-green-700"
              >
                Contact Us
              </a>
            </li>
            <li className="flex  md:hidden p-1 border-2 border-orange-500 rounded-full">
              <input
                type="text"
                name="text"
                placeholder="search"
                autoComplete="off"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="bg-gradient-to-b from-zinc-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <FaSearch />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

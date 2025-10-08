import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-zinc-200  py-20 ">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-wrap ">
        <div className="flex-1  basis-[300px]">
          <a href="#" className="text-3xl font-semibold">
            E-sh<span className="text-red-500 uppercase ">O</span>p
          </a>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bread for high content of beneficial substances , Our products all fresh and healthy .
          </p>

          <p className="text-zinc-800 mt-6 ">
            2025 &copy; All Rights Reserved
          </p>
        </div>

        <ul className="flex-1 ">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 ">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 " >
              FAQ
            </a>
          </li>
        </ul>

        <ul className="flex-1 ">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 ">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 " >
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 " >
              Contact Us
            </a>
          </li>
        </ul>

        <div>
          <h5 className="text-zinc-800 text-2xl font-bold ">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions Or Feedbacks?
            <br/>
            We'd love to hear you.
          </p>

          <div className="flex bg-white-300 p-1 rounded-lg mt-6 ">
            <input typr='email' id="email" autoComplete="off" placeholder="email address"  className="h-[5vh] pl-4 flex-1  focus:outline-none bg-white "/>
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer" >
                    <MdOutlineArrowForwardIos />

              </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

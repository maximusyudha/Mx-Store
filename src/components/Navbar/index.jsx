"use client";
import React, { useState, useEffect } from "react";
import Profile from "./component/profile";
import { getCookie } from "cookies-next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookie, setCookie] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const cookie = getCookie("refreshToken");
      if (cookie) {
        setCookie(cookie);
        const refreshToken = cookie;
        setIsLoggedIn(!!refreshToken);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Your logo path */}
        </svg>
        <span className="text-white-700 font-semibold text-lg ml-2">
          MxStore
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-6">
        <a href="/" className="text-white-700 hover:text-black">
          Home
        </a>
        <a href="/shop" className="text-white-700 hover:text-black">
          Shop
        </a>
        <a href="/cart" className="text-white-700 hover:text-black">
          Cart
        </a>
        <a href="/wishlist" className="text-white-700 hover:text-black">
          Wishlist
        </a>
        <a href="/contact" className="text-white-700 hover:text-black">
          Contact
        </a>
      </div>

      {isLoggedIn ? (
        <Profile refreshToken={cookie} />
      ) : (
        <div className="hidden md:flex items-center justify-center space-x-2">
          <button className="px-4 py-2 rounded-full hover:bg-white-600">
            <a href="/SignIn">Sign In</a>
          </button>
          <button
            className="border border-white-500 px-4 py-2 rounded-full"
          >
            <a href="/SignUp">Sign Up</a>
          </button>
        </div>
      )}

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleDropdown}
          className="text-white-700 hover:text-black focus:outline-none"
        >
          {/* Your mobile menu icon */}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white border border-white-300 p-2 rounded shadow z-50">
          <a href="/" className="block py-2">
            Home
          </a>
          <a href="/shop" className="block py-2">
            Shop
          </a>
          <a href="/cart" className="block py-2">
            Cart
          </a>
          <a href="/wishlist" className="block py-2">
            Wishlist
          </a>
          <a href="/contact" className="block py-2">
            Contact
          </a>
          <button className="block py-2">
            <a href="/signin">Sign In</a>
          </button>
          <button className="block py-2">
            <a href="/signup">Sign Up</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

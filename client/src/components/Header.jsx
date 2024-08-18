import { Link, useLocation } from "react-router-dom";
import { Navbar, Button, TextInput } from "flowbite-react";
import { FaSearch, FaMoon } from "react-icons/fa";
import "./header.css"

import React from 'react';

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="px-2 border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Blazing Blog
        </span>
      </Link>

      <div className="flex items-center justify-between sm:hidden">
        <Button className="w-12 h-10" color="gray" pill>
          <FaSearch />
        </Button>
        <Navbar.Toggle />
      </div>

      <div className="hidden sm:flex gap-2 md:order-2">
        <form className="flex items-center">
          <TextInput type="text" placeholder="Search..." rightIcon={FaSearch} />
        </form>
        <nav className="flex items-center">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>

        <Button className="w-12 h-12" color="gray">
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={"div"} className="nav-link">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} className="nav-link">
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} className="nav-link">
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

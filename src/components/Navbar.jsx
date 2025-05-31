import React, { useState, useEffect } from 'react';
import image from '../../public/profile.jpeg';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';
function Navbar() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [menu]);
  const navItems = [
    {
      id: 1,
      text: 'Home',
    },
    {
      id: 2,
      text: 'About',
    },
    {
      id: 3,
      text: 'Portfolio',
    },
    {
      id: 4,
      text: 'Blog',
    },
    {
      id: 5,
      text: 'Contact',
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md sticky top-0 bg-white z-50">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex space-x-2">
            <img className="w-12 h-12 rounded-full" src={image} alt="" />
            <h1 className="text-xl cursor-pointer font-semibold">
              Sajee<span className="text-green-500 text-2xl">V</span>
              <p className=" text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map((element) => {
                return (
                  <li
                    className="hover:scale-105 duration-200 cursor-pointer"
                    key={element.id}
                  >
                    <Link
                      to={element.text.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="acive"
                    >
                      {element.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* menu icon */}
          <div
            className="md:hidden text-2xl z-50 cursor-pointer relative"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoCloseSharp /> : <AiOutlineMenu />}
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="absolute top-16 left-0 w-full shadow-md bg-white z-40">
            <ul className="md:hidden flex flex-col h-screen items-center mt-36 space-y-6 text-xl font-semibold">
              {navItems.map((element) => {
                return (
                  <li
                    className="hover:scale-105 duration-200 cursor-pointer font-semibold md:z-0"
                    key={element.id}
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={element.text.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="acive"
                    >
                      {element.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

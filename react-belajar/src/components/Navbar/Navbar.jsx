import React from 'react';
import { IoMdMenu } from "react-icons/io";
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo.png';
const NavbarMenu = [
{
    id: 1,
    title: "Home",
    path: "/",
},
{
    id: 2,
    title: "Landing",
    link: "#",
},
{
    id: 3,
    title: "Pages",
    link: "#",
},
{
    id: 4,
    title: "Docs",
    link: "#",
},
{
    id: 5,
    title: "Help",
    link: "#",
},   
];
const Navbar = () => {
  return (
  <nav className='relative z-20'>
    <div className='container py-10 flex justify-between items-center'>
        {/*Logo section */}
        <div>
            <img src={Logo} alt='Logo'/>
        </div>
        {/*Menu section */}
        <div className='hidden lg:block'>
            <ul className='flex items-center gap-3'>
                {NavbarMenu.map((menu) =>(
                    <li key={menu.id}>
                      <Link
                        to={menu.path}
                        className='inline-block py-2 px-3 hover:text-secondary relative group'
                        >
                            <div className='w-2 h-2 bg-secondary absolute mt-2 reunded-full left-1/2 -translate-x-1/2 top-1/2 buttom-0 group-hover:block hidden'></div>
                            {menu.title}
                        </Link>
                    </li>
                ))}
                <button className='primary-btn'>Get it now</button>
                <Link to="/register">
                <button className='primary-btn'>Register</button>
                </Link>
            </ul>
        </div>
        {/*Mobile Hamburger menu section */}
        <div className='lg:hidden'>
            <IoMdMenu className='text-4xl'/>
        </div>
    </div>
  </nav>
  );
};

export default Navbar;

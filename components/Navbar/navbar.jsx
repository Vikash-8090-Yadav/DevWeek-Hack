import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiFillHome } from 'react-icons/ai'
import { FaDatabase } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc'
import { BsFillTelephoneFill } from 'react-icons/bs'
// import { Web3Button } from '@web3modal/react';
// import LogoutButton from "../Component/LogoutButton"
// import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const link1 = [
    {
      id: 1,

      link: "Home",
      child: (
        <>
          <AiFillHome size={25} />
        </>
      ),
      name: "Home",
    }
  ]
  const links = [
    
    {
      id: 2,
      link: "Text",
      child: (
        <>
          <FaDatabase size={25} />
        </>
      ),
      name: "Data",
    },
    
    {
      id: 3,
      link: "About",
      child: (
        <>
          <FcAbout size={25} />
        </>
      ),
      name: "About",
    },
   
    {
      id: 4,
      link: "contact",
      child: (
        <>
          <BsFillTelephoneFill size={25} />
        </>
      ),
      name: "Support Me"
    }
  ]

  return (
    <>
      <div className='navbar w-screen  bg-gradient-to-b from-gray-900 to-black flex justify-between items-center  overflow-hidden h-14 py-2 px-1 text-slate-300 fixed z-50'>
        <div className="flex cursor-pointer">
          <div className="w-10 h-10 px-2 py-2 pt-2">
            
          </div>
          <h1 className="text-2xl font-bold text-blue-500 ml-2 max-md:text-base max-sm:ml-1 max-md:mr-3 cursor-default font-title max-md:pt-2 pt-1 hover:text-white hover:cursor-pointer">DAPP.eth</h1>
        </div>

        <ul className="hidden center pl-6 md:flex text-blue-500">
        {link1.map(({ id, link, name }) => (
            
            <li key={id} className="px-4 py-4  cursor-pointer md:hover:text-white duration-300 text-xl font-semibold">
              {link === 'Logout' ?
                <a className="hidden" onClick={handleLogout}>{link}</a> :
                <a href="/">{name}</a>
              }
            </li>
          ))}
          {links.map(({ id, link, name }) => (
            <li key={id} className="px-4 py-4  cursor-pointer md:hover:text-white duration-300 text-xl font-semibold">
              {link === 'Logout' ?
                <a className="hidden" onClick={handleLogout}>{link}</a> :
                <Link to={link} smooth duration={50}>{name}</Link>
              }
            </li>
          ))}
        </ul>

        <ul className="md:hidden flex font-extrabold text-xl text-blue-500">
          {
            links.map(({ id, link, child }) => (
              <li key={id} className="px-4 cursor-pointer py-4 text-l capitalize max-sm:px-1">
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={5000}>{child}</Link>
              </li>
            ))
          }
        </ul>

        <div className="flex">
          <button className="pl-2 py-4 text-l font-xs">
            {/* <Web3Button balance="show" icon="hide" label="Connect Wallet" /> */}
          </button>
          <button className="pl-4 py-4 px-4 text-l font-small">
            H{/* <LogoutButton handleLogout={handleLogout} /> */}
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar
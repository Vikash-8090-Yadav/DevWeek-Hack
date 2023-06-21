
import Link from 'next/link'

import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

import React from "react";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import {AiOutlineArrowRight, AiOutlineArrowDown, AiOutlineArrowLeft} from 'react-icons/ai'
import { ethers } from 'ethers';

import ProfilePic from "../../public/images/hero.png";

import { Modal, Input, Tooltip } from 'antd'

const Hero = () => {
  return (
    <>
      <div name="about" className="hero h-screen max-md:h-full w-full  bg-gradient-to-br ">
        <div className="max-w-screen-lg  mx-auto flex flex-col-reverse items-center justify-between h-full md:flex-row">
          <div className = "hero bg-blue mb-32 pr-12 flex flex-col max-md:items-center justify-center ">
            <h5 className = "text-blue-400 max-md:text-1xl text-3xl font-bold flex flex-col max-md:items-center justify-center">
              <div className = "text-blue text-1xl max-md:text-2xl py-6 mb-3">Decentralised Application for </div> 
              
            </h5>
           
            <div className = "text-yellow-400 max-md:text-1xl text-5xl font-bold flex flex-col max-md:items-center justify-center">
              <Typewriter options = {{ strings: ["Proof of ownership", "Decide the price Directly by owner"], autoStart: true, loop: true, }}/>
              </div>
            <div className="text-dark pt-5 mb-3 max-w-md text-justify">
           
            Our platform as a digital shop, small-scale textile producers may present their goods to a large audience. Manufacturers can set their own prices, submit photographs of their products, write in-depth product descriptions, and create their own online profiles. Customers can shop from a broad selection of clothing and buy straight from the producers.               <div><Link legacyBehavior href={"/Market"}><button className="group font-semibold  text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Marketplace
                <span className="md:group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight size={25} className="ml-2 font-semibold max-sm:hidden" />
                </span>
              </button>
              </Link>
              </div>
              
            </div>
          </div>
       
          <div className = "  ml-32 hero pl-12 ml-13 flex flex-col items-center justify-center md:hover:scale-125 duration-300">
            <Image src = {ProfilePic} height="450" width="550" className = " max-md:pt-10 " />         
            <div className='pr-full'><button className="group font-semibold  text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            <Link legacyBehavior href={"/Market"}>
            
            Marketplace
     
</Link>
             
                <span className="md:group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight size={25} className="ml-2 font-semibold max-sm:hidden" />
                </span>
              </button>
              </div>
          
          </div>
        </div>
        
       
      </div>
      
    </>
  );
};

export default Hero;

import React from "react";
import Link from 'next/link'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
function Hero() {
  return (
    <div className="bg-white">
    <div className="relative isolate px-6 pt-14 lg:px-8">
   
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Dev . Week
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <div >
                            <Link href="/Market">
                            <button className = "px-6 py-3 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white font-semibold" key="submit" type="primary" >
                  Market
                  </button>
                            </Link>
                        </div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
   
    </div>
    <div className="relative isolate overflow-hidden bg-white-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      
      </div>
     
    </div>
  </div>


  
  );
}

export default Hero;
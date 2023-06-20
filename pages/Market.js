import Head from 'next/head'
import { useState } from 'react';
import { useEffect } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '@3rdweb/hooks';
import Hero from "../components/Main"
import toast, { Toaster } from 'react-hot-toast';

// import web3Modal from 'web3Modal'
import Home from "./marketplace"
import Link from 'next/link';

const style = {
  wrapper: `relative`,
  walletConnectWrapper: `before:content-['']  before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://www.linkpicture.com/q/backm.png')] before:bg-cover before:bg-center before:opacity-75 `,
  button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  cardsize: `px-6 py-4`,
  bigFont: `text=[#D37506]-700   font-bold text-xl mb-2`,
  smallFont: `text-gray-700 text-base`,
  bigButton: ` text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`,
}

function Market() {
  return (
    <div className="">

      <div className={style.wrapper}>
        <nav className="border-b p-10">
          <p className="text-7xl font-medium">AgriCrop Marketplace</p>
          <div className="flex mt-4">
            <Link href="/">
              <div className="mr-6 text-black-500">
                Home
              </div>
            </Link>
            <Link href="/sellnft">
              <div className="mr-6 text-black-500">
                Sell NFT
              </div>
            </Link>
            <Link href="/mynft">
              <div className="mr-6 text-black-500">
                My NFTs
              </div>
            </Link>
            <Link href="/dashboard">
              <div className="mr-6
               text-black-500">
                Dashboard
              </div>
            </Link>
          </div>
          <Home/>
        </nav>
      </div>
    </div>


  )
}
export default Market
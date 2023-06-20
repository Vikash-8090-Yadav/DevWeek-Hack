import Head from 'next/head'
import { useState } from 'react';
import { ethers } from 'ethers';
import Main from "../components/Main"
import toast, { Toaster } from 'react-hot-toast'

const style = {
    wrapper: ``,
    // walletConnectWrapper: `bg-[orange] flex flex-col justify-center items-center h-screen w-screen  `,
    button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
    details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
    background: `max-w-sm rounded-lg overflow-hidden shadow-lg bg-[white]`,
    cardsize: `px-6 py-4`,
    bigFont: `text=[#D37506]-700   font-bold text-xl mb-2`,
    smallFont: `text-gray-700 text-base`,
    bigButton: ` text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`

}
export default function Home() {
  

    return (
        <div className={style.wrapper}>
                <div className={style.walletConnectWrapper}>
                    <Main />
                </div>
        </div>
    )
}
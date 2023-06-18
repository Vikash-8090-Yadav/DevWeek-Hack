import Head from 'next/head'
import { useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3 } from '@3rdweb/hooks';
import Hero from "../components/Hero"
import toast, { Toaster } from 'react-hot-toast'

const style = {
    wrapper: ``,
    walletConnectWrapper: `bg-[orange] flex flex-col justify-center items-center h-screen w-screen  `,
    button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
    details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
    background: `max-w-sm rounded-lg overflow-hidden shadow-lg bg-[white]`,
    cardsize: `px-6 py-4`,
    bigFont: `text=[#D37506]-700   font-bold text-xl mb-2`,
    smallFont: `text-gray-700 text-base`,
    bigButton: ` text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`

}
export default function Home() {
    const { address, connectWallet } = useWeb3()
    const [loginState, setLoginState] = useState();
    const login = async () => {
        setLoginState("Connecting to your wallet..");
        if (!window.ethereum) {
            setLoginState("No MetaMask wallet.. please install it")
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const walletAddr = await signer.getAddress();
        console.log("walletAddr", walletAddr)
        const signature = await signer.signMessage("prudhvi nibba");
        console.log('signature', signature)
    }
    return (
        <div className={style.wrapper}>
            <Toaster position="top-center" reverseOrder={false} />
            {address ? (
                <>
                    <Hero />
                </>
            ) : (
                <div className={style.walletConnectWrapper}>
                    <div className={style.background}>
                        <img src="https://www.linkpicture.com/q/metamask_1.gif" alt="" />
                        <div className={style.cardsize}>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button
                                className={style.bigButton}
                                onClick={() => connectWallet('injected')}
                            >
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
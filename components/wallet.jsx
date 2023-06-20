import styles from "../styles/nav.module.css"
import Link from "next/link"
import Script from "next/script";
import { useState } from "react";
const networks = {
    // for ganache 
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // for polygon 
    polygon:{
     chainId: `0x${Number(44787).toString(16)}`,
     chainName:"Celo",
     nativeCurrency:{
        name:"CELO",
        symbol: "CELO",
        decimals: 18

     },
     rpcUrls:["https://alfajores-forno.celo-testnet.org"],
     blockExplorerUrls:["https://alfajores-blockscout.celo-testnet.org"]

    },
    // for ropsten 
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
};

export default function   Wallet() {
    const [address , setAddress] = useState('');
    const [balance , setBalance] = useState(' ');
    async function connectWallet(){
        if(typeof window.ethereum =="undefined"){
            console.log("PLease install the metamask");
        }
        let web3 = await new Web3(window.ethereum);
        console.log(web3.version)
        if(web3.network !=="CELO"){
            await window.ethereum.request({
                method:"wallet_addEthereumChain",
                params:[{
                    ...networks["CELO"]
                }]
            })
        }
        const accounts = await web3.eth.requestAccounts();
        const Address =await  accounts[0];
        setAddress(Address);
        await web3.eth.getBalance(Address,async function(err,res){
            if(err){
                console.log("error->"+err);
            }
            else{
                const finalbalance = web3.utils.fromWei(res)+ " "+networks["polygon"]["nativeCurrency"]["name"];
                console.log("result->"+finalbalance);
                setBalance(finalbalance);

            }
        });
    } 
  return (
    <>     
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
        <div className="wallletwrapper" onClick={connectWallet}>
            {balance == ''?<bl className="bl">0</bl>:<bl className="bl"><h2>{balance.slice(0,4)} {balance.slice(-5)}</h2></bl>}
            {address == ''?<wl className="wl">Connect Wallet</wl>:<wl1 className="wl1"><h2>{address.slice(0,6)}...{address.slice(39)}</h2></wl1>}
             </div>
    </>
  )
}
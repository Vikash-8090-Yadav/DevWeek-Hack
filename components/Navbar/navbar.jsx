import { useState } from "react";
import Script from "next/script";
import Link from 'next/link'

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
  className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
    open ? "-translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 ease-in-out bg-gray filter drop-shadow-md `}
>
      <div className="flex items-center justify-center filter drop-shadow-md bg-gray h-20">
        {" "}
        {/*logo container*/}
        <Link className="styles.logo text-xl font-semibold" href="/">
          OS.Dev
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Resources
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blog
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Communities
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}

const networks = {
 
  celo:{
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


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [address , setAddress] = useState('');
  const [balance , setBalance] = useState(' ');
  async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
      console.log('Please install MetaMask');
      return;
    }

    const web3 = new Web3(window.ethereum);
    console.log(web3.version);

    try {
      const chainId = await web3.eth.getChainId();
      if (chainId !== networks.celo.chainId) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [networks.celo],
        });
      }

      const accounts = await web3.eth.requestAccounts();
      const address = accounts[0];
      setAddress(address);

      const balance = await web3.eth.getBalance(address);
      const finalBalance = web3.utils.fromWei(balance) + ' ' + networks.celo.nativeCurrency.symbol;
      console.log('Result:', finalBalance);
      setBalance(finalBalance);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <nav className="flex sticky top-0 z-50 filter drop-shadow-md bg-white px-4 py-4 h-20  items-center ">
       <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
       
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-4xl tracking-widest  font-semibold" href="/">
          {" "}
          <h3>
            <img src = 'https://i.ibb.co/bd0w4PQ/1-1.png' alt=''/>
          </h3>
        </Link>
      </div>

      <div className="hidden md:flex text-1xl font-semibold font-serif	 ml-16 w-11/12 justify-end  items-center ">
        <NavLink to="/">ABOUT US</NavLink>
        <NavLink to="/Market">Market</NavLink>
        <NavLink to="/">BLOG</NavLink>
        <NavLink to="/">COMMUNITIES</NavLink>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <button className=" hidden md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold mx-12 py-2 px-4 rounded">

        <div className="wallletwrapper" onClick={connectWallet}>
            {balance == ''?<bl className="bl">0</bl>:<bl className="bl"><h2>{balance.slice(0,4)} {balance.slice(-5)}</h2></bl>}
            {address == ''?<wl className="wl">Connect Wallet</wl>:<wl1 className="wl1"><h2>{address.slice(0,6)}...{address.slice(39)}</h2></wl1>}
             </div>

        </button>

        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}




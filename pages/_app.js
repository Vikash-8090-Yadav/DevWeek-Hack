import { useState, useEffect } from 'react';
import '../styles/globals.css';
import '../styles/marketplace.css';
import '../styles/logout.css';
import Typewriter from 'typewriter-effect';
import '../styles/sidebar.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import '../styles/Home.module.css';
import DotLoader from "react-spinners/RingLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // Assuming you have a state to track the login status

  useEffect(() => {
    // Simulate an async process, such as fetching data or checking authentication
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true); // Set to `true` if the user is logged in
    }, 5000); // Adjust the duration as per your requirement
  }, []);

  const supportedChainIds = [5];
  const connectors = {
    injected: {},
  };

  return (
    <div>
      {loading ? (
         <div className="load  justify-center w-screen h-screen flex flex-col justify-center items-center">
         <DotLoader  color={"pink"} loading={loading}  size={81} aria-label="Loading Spinner"
             data-testid="loader" />
             <div className="text-yellow-400 my-12  max-md:text-1xl text-5xl font-bold flex flex-col max-md:items-center py-2 ">
              <Typewriter options = {{ strings: ["Welcome to SustainableStitch"], autoStart: true, loop: true, }}/>
             </div></div>
      ) : loggedIn ? (
        <Component {...pageProps} />
      ) : null}
    </div>
  );
}

export default MyApp;

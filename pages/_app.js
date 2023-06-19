import '../styles/globals.css'
import '../styles/marketplace.css'
import '../styles/logout.css'
import '../styles/sidebar.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  const supportedChainIds = [5]
  const connectors = {
    injected: {},
  }
  return (
    
      <Component {...pageProps} />


  )
}

export default MyApp

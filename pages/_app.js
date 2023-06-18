import '../styles/globals.css'
import '../styles/main.css'
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
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>


  )
}

export default MyApp

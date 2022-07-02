import type { AppProps } from 'next/app'
import MainContextProvider from '../context/MainContextProvider'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </MainContextProvider>
  )
}

export default MyApp

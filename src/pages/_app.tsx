import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/front/Header'
import theme from '../theme'
import { AppProps } from 'next/app'

const inner = {
  m: '0 auto',
  maxW: '1040px',
  width: '100%',
  flexGrow: 1,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header innerWidth={inner.maxW} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

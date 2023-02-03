import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@styles/core/globals.css'
import '@styles/index.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CUSTOM_THEME = extendTheme({
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '114em',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    toast.success('This website is under development 🚀', {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: false,
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
    })
  }, [])

  return (
    <ChakraProvider theme={CUSTOM_THEME}>
      <ToastContainer />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp

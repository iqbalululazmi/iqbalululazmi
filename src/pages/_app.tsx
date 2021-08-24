import '@styles/core/globals.css'
import '@styles/pages/project.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import '@components/Loader.css'
import global from '../stitches/global.style'

const Debutur = ({ Component, pageProps }: AppProps) => {
  global()

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default Debutur

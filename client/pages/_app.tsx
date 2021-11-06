import type { AppProps } from 'next/app'

function Debutur({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Debutur

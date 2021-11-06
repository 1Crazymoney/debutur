import Head from 'next/head'
import React from 'react'

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>Debutur | {title}</title>
      <meta property='og:title' content='Debutur' />
      <meta property='twitter:title' content='Debutur' />
      <meta
        name='description'
        content='🤙 Create beautiful & customisable portfolios'
      />
      <meta
        property='og:description'
        content='🤙 Create beautiful & customisable portfolios'
      />
      <meta
        property='twitter:description'
        content='🤙 Create beautiful & customisable portfolios'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#00ABFF' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤙</text></svg>'
      />
      <meta
        property='og:image'
        content='https://github.com/harshhhdev/Debutur/blob/main/public/Banner.png?raw=true'
      />
      <meta
        property='twitter:image'
        content='https://github.com/harshhhdev/Debutur/blob/main/public/Banner.png?raw=true'
      />
    </Head>
  )
}

export default Header

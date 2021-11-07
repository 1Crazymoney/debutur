import type { NextPage } from 'next'

import Header from '@components/Head'

import globalStyle from '@css/global.style'

const Home: NextPage = () => {
  globalStyle()

  return (
    <>
      <Header title='Edit Profile' />
    </>
  )
}

export default Home

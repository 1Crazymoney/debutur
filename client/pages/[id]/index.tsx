import type { NextPage } from 'next'

import Header from '@components/Head'

import globalStyle from '@css/global.style'
import Profile from '@components/Profile/Profile'

const Home: NextPage = () => {
  globalStyle()

  return (
    <>
      <Header title='Harsh Singh' />
      <Profile />
    </>
  )
}

export default Home

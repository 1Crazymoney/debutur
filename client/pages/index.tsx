import type { NextPage } from 'next'

import Header from '@components/Head'
import HomeComponent from '@components/Home/Home'

import globalStyle from '@css/global.style'

const Home: NextPage = () => {
  globalStyle()

  return (
    <>
      <Header title='Welcome!' />
      <HomeComponent />
    </>
  )
}

export default Home

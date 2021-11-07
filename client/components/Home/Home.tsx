import React from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDribbble,
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import * as S from './Home.style'

const Home: React.FC = () => {
  return (
    <S.HomeLayout>
      <Image src='/Waving.png' alt='waving hand' width={75} height={75} />
      <S.HomeHeader>What's Up?</S.HomeHeader>
      <S.Description>Let's create something cool!</S.Description>
      <S.LoginButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
      </S.LoginButton>
      <S.LoginButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <FontAwesomeIcon icon={faGithub} /> Continue with GitHub
      </S.LoginButton>
      <S.LoginButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <FontAwesomeIcon icon={faTwitter} /> Continue with Twitter
      </S.LoginButton>
    </S.HomeLayout>
  )
}

export default Home

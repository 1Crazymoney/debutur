import React from 'react'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import * as S from './Home.style'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const buttonContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const button = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <S.HomeLayout>
      <S.ContentBox initial='hidden' animate='visible' variants={container}>
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 10,
            delay: 1,
          }}
        >
          <Image src='/Waving.png' alt='waving hand' width={75} height={75} />
        </motion.div>
        <S.HomeHeader text="What's Up?" type='heading1' />
        <S.Description text="Let's create something cool!" type='paragraph' />
      </S.ContentBox>
      <S.ContentBox
        variants={buttonContainer}
        initial='hidden'
        animate='visible'
      >
        <S.LoginButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variants={button}
          href='http://localhost:3001/api/user/auth/google'
        >
          <FontAwesomeIcon icon={faGoogle} /> Continue with Google
        </S.LoginButton>
        <S.LoginButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variants={button}
          href='http://localhost:3001/api/user/auth/google'
        >
          <FontAwesomeIcon icon={faGithub} /> Continue with GitHub
        </S.LoginButton>
        <S.LoginButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          variants={button}
          href='http://localhost:3001/api/user/auth/google'
        >
          <FontAwesomeIcon icon={faTwitter} /> Continue with Twitter
        </S.LoginButton>
      </S.ContentBox>
    </S.HomeLayout>
  )
}

export default Home

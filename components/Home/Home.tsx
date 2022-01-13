import React from 'react'
import Image from 'next/image'

import * as S from './Home.style'
import * as anims from '@anims/index'

import { motion } from 'framer-motion'

import { useSpring, to, animated } from 'react-spring'

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
]
const trans1 = (x: number, y: number) =>
  `translate3d(${x / 10 + 200}px,${y / 10 + 10}px,0)`
const trans2 = (x: number, y: number) =>
  `translate3d(${x / 10 - 100}px,${y / 10 - 500}px,0)`

const Home: React.FC = () => {
  const [props, set]: any = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 100, tension: 500, friction: 500 },
  }))

  const [props2, set2]: any = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 100, tension: 1000, friction: 500 },
  }))

  return (
    <S.Container
      onMouseMove={({ clientX: x, clientY: y }: React.MouseEvent) => {
        set({ xy: calc(x, y) })
        set2({ xy: calc(x, y) })
      }}
    >
      <S.LoginContainer
        variants={anims.ScaleContainer}
        initial="hidden"
        animate="visible"
      >
        <S.Header variants={anims.Fade}>
          Your Own <S.Colourised>Homepage</S.Colourised>
        </S.Header>
        <S.Description variants={anims.Fade}>
          Create and personalise your beautiful interactive homepage for your
          new video, blog post, GitHub project - or your pet dog. Your choice!
        </S.Description>
        <S.LoginButton
          href="/user/login"
          variants={anims.Fade}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Create Your Profile
        </S.LoginButton>
      </S.LoginContainer>
      <S.ProfileContainer>
        <animated.div style={{ transform: to(props2.xy, trans1) }}>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <S.ImageContainer>
              <Image
                src="/Profile2.png"
                alt="Profile"
                height={600}
                width={277}
                draggable={false}
                objectFit="cover"
              />
            </S.ImageContainer>
          </motion.div>
        </animated.div>
        <animated.div style={{ transform: to(props.xy, trans2) }}>
          <S.Profile
            src="/Profile.png"
            alt="Profile"
            draggable="false"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </animated.div>
      </S.ProfileContainer>
    </S.Container>
  )
}

export default Home

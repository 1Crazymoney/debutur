import React from 'react'

import * as S from './Profile.style'

const Profile: React.FC<{ avatar: string; name: string; bio: string }> = ({
  avatar,
  name,
  bio,
}) => {
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

  const buttons = [
    'My Portfolio',
    'My Projects',
    'My Blog',
    'My Designs',
    'My Tweets',
  ]

  return (
    <S.ProfileContainer>
      <S.ProfileBox initial='hidden' animate='visible' variants={container}>
        <S.Avatar
          src={avatar}
          alt='profile picture'
          draggable='false'
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 10,
            delay: 1,
          }}
        />
        <S.Name text={name} type='heading1' />
        <S.Description text={bio} type='paragraph' />
      </S.ProfileBox>
      <S.ButtonContainer
        variants={buttonContainer}
        initial='hidden'
        animate='visible'
      >
        {buttons.map((btn, index) => (
          <S.Button
            variants={button}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            target='_blank'
            key={index}
          >
            {btn}
          </S.Button>
        ))}
      </S.ButtonContainer>
    </S.ProfileContainer>
  )
}

export default Profile

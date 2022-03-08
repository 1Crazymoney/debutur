import React from 'react'

import * as anims from '@anims/index'
import * as S from './Profile.style'

import { useSession } from 'next-auth/react'

const Profile: React.FC<{
  id: string
  avatar: string
  name: string
  bio: string
  email: string
  button_titles: string[]
  button_links: string[]
}> = ({ id, avatar, name, bio, email, button_titles, button_links }) => {
  const { data: session, status } = useSession()

  let Buttons = button_titles.map((t, i) => ({
    href: button_links[i],
    text: t,
  }))

  return (
    <S.ProfileContainer>
      <S.ProfileBox
        initial="hidden"
        animate="visible"
        variants={anims.ScaleContainer}
      >
        <S.Avatar
          src={
            avatar.startsWith('https://pbs.twimg.com')
              ? avatar.replace('_normal', '')
              : ''
          }
          alt="profile picture"
          draggable="false"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 10,
            delay: 1,
          }}
        />
        <S.Name variants={anims.FadeReverse}>{name}</S.Name>
        <S.Description variants={anims.Fade}>{bio}</S.Description>
      </S.ProfileBox>
      <S.ButtonContainer
        variants={anims.FadeContainer}
        initial="hidden"
        animate="visible"
      >
        {Buttons.map((btn, index) => (
          <S.Button
            variants={anims.Fade}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            key={index}
            href={btn.href}
          >
            {btn.text}
          </S.Button>
        ))}
        {session?.user?.email === email ? (
          <S.Button
            variants={anims.FadeReverse}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            href={`${id}/edit`}
          >
            Edit Profile
          </S.Button>
        ) : (
          ''
        )}
      </S.ButtonContainer>
    </S.ProfileContainer>
  )
}

export default Profile

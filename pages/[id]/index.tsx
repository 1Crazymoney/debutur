import React from 'react'

import Header from '@components/SEO'
import Profile from '@components/Profile/Profile'
import Error from '@pages/404'

import * as themes from '@themes/index'

import prisma from '@lib/prisma'
import { Profile as DebuturProfile } from '.prisma/client'

import { ThemeProvider, useTheme } from 'next-themes'

const UserProfile: React.FC<{ user: DebuturProfile }> = ({ user }) => {
  if (user === null) return <Error />

  const { setTheme, resolvedTheme } = useTheme()
  setTheme(user.theme)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={user.theme}
      value={{
        light: themes.Light.className,
        dark: themes.Dark.className,
        neon: themes.Neon.className,
        purple: themes.Purple.className,
        aqua: themes.Aqua.className,
        nord: themes.Nord.className,
      }}
    >
      <Header title={user.name} description={user.bio} />
      <Profile
        id={user.login}
        avatar={user.avatar_url}
        name={user.name}
        bio={user.bio}
        email={user.email}
        buttonTitles={user.buttonTitles}
        buttonLinks={user.buttonLinks}
      />
    </ThemeProvider>
  )
}

export const getServerSideProps = async (context: any) => {
  const user = await prisma.profile.findUnique({
    where: {
      login: context.params.id,
    },
  })

  return {
    props: {
      user,
    },
  }
}

export default UserProfile
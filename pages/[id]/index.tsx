import { GetServerSideProps, NextPage } from 'next'

import Header from '@components/SEO'
import Profile from '@components/Profile/Profile'
import Error from '@pages/404'

import * as themes from '@themes/index'

import prisma from '@lib/prisma'
import { profile as DebuturProfile } from '.prisma/client'

import { ThemeProvider, useTheme } from 'next-themes'

const UserProfile: NextPage<{ user: DebuturProfile }> = ({ user }) => {
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
        button_titles={user.button_titles}
        button_links={user.button_links}
      />
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await prisma.profile.findUnique({
    where: {
      login: context.params?.id?.toString(),
    },
  })

  return {
    props: {
      user,
    },
  }
}

export default UserProfile

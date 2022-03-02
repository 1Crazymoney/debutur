import React from 'react'

import { useSession } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import Header from '@components/SEO'
import EditComponent from '@components/Edit/Edit'
import Loader from '@components/Loader'

import prisma from '@lib/prisma'
import { Profile as DebuturProfile } from '.prisma/client'

import * as themes from '@themes/index'

const Edit: React.FC<{ user: DebuturProfile }> = ({ user }) => {
  const { data: session, status } = useSession()
  if (session?.user?.email !== user.email) return <Loader />

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
      <Header
        title="Edit Profile"
        description="Create an Account to Get Started Today!"
      />
      <EditComponent
        username={user.login}
        name={user.name}
        bio={user.bio}
        avatar={user.avatar_url}
        theme={user.theme}
        links={user.button_links}
        titles={user.button_titles}
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

export default Edit

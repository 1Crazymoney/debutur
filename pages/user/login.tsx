import React from 'react'
import { useRouter } from 'next/router'

import SEO from '@components/SEO'
import LoginComponent from '@components/Login/Login'

import { getProviders, useSession } from 'next-auth/react'
import { Provider } from 'next-auth/providers'

const Login: React.FC<{ providers: Provider }> = ({ providers }) => {
  const router = useRouter()

  const { data: session, status } = useSession()
  if (session) router.push('/')

  return (
    <>
      <SEO title="Login" description="Create your Debutur account!" />
      <LoginComponent provider={providers} />
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: { providers: await getProviders() },
  }
}

export default Login

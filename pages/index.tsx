import { useEffect } from 'react'

import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import SEO from '@components/SEO'
import LoginComponent from '@components/Login/Login'
import Loading from '@components/Loader'

import { getProviders, useSession } from 'next-auth/react'
import { Provider } from 'next-auth/providers'

const Login: NextPage<{ providers: Provider }> = ({ providers }) => {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) router.push(`/${session?.login}`)
  }, [session])

  return (
    <>
      {session ? (
        <Loading />
      ) : (
        <>
          <SEO title="Get Started" description="Create your Debutur account!" />
          <LoginComponent provider={providers} />
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { providers: await getProviders() },
  }
}

export default Login

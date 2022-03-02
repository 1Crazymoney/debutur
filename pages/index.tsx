import { GetServerSideProps, NextPage } from 'next'

import SEO from '@components/SEO'
import LoginComponent from '@components/Login/Login'

import { getProviders, useSession } from 'next-auth/react'
import { Provider } from 'next-auth/providers'
import Loading from '@components/Loader'

const Login: NextPage<{ providers: Provider }> = ({ providers }) => {
  const { data: session, status } = useSession()

  return (
    <>
      {session ? (
        <>
          <SEO title="Get Started" description="Create your Debutur account!" />
          <LoginComponent provider={providers} />
        </>
      ) : (
        <Loading />
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

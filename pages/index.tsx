import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'

import SEO from '@components/SEO'
import LoginComponent from '@components/Login/Login'

import { getProviders, useSession } from 'next-auth/react'
import { Provider } from 'next-auth/providers'
import Loading from '@components/Loader'

const Login: NextPage<{ providers: Provider }> = ({ providers }) => {
  const router = useRouter()

  const { data: session, status } = useSession()
  const [done, setDone] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/jwt')
      res.json().then((json) => {
        if (json !== null) router.push(`/${json.sub}`)
        else setDone(true)
      })
    }

    fetchData()
  }, [session])

  return (
    <>
      {done ? (
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

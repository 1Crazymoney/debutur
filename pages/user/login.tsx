import React from 'react'
import { useRouter } from 'next/router'

import SEO from '@components/SEO'
import LoginComponent from '@components/Login/Login'

import { getProviders, useSession } from 'next-auth/react'
import { Provider } from 'next-auth/providers'
import Loading from '@components/Loader'

const Login: React.FC<{ providers: Provider }> = ({ providers }) => {
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
          <SEO title="Login" description="Create your Debutur account!" />
          <LoginComponent provider={providers} />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: { providers: await getProviders() },
  }
}

export default Login

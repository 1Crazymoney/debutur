import React from 'react'
import { useRouter } from 'next/router'

import SEO from '@components/SEO'
import Home from '@components/Home/Home'

import { getProviders, useSession } from 'next-auth/react'
import Loading from '@components/Loader'

const Login: React.FC = () => {
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
          <SEO
            title="Home"
            description="🚀 Create, and personalise your own simple and beautiful homepage"
          />
          <Home />
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

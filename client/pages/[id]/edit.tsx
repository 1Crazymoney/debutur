import { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'

import Header from '@components/Head'
import Edit from '@components/Edit/Edit'

import globalStyle from '@css/global.style'

const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  const [theme, setTheme] = useState('')

  globalStyle()

  axios.get(`http://localhost:3001/api/user/auth/${id}`).then((res) => {
    console.log(res.data)
    setUsername(res.data.username)
    setName(res.data.name)
    setAvatar(res.data.avatar)
    setBio(res.data.about)
    setTheme(res.data.theme)
  })

  return (
    <>
      <Header title='Edit Profile' />
      <Edit
        username={username}
        name={name}
        avatar={avatar}
        bio={bio}
        theme={theme}
      />
    </>
  )
}

export default Home

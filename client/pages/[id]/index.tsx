import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '@components/Head'
import Profile from '@components/Profile/Profile'

import globalStyle from '@css/global.style'

const UserProfile: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')

  globalStyle()

  axios
    .get(`http://localhost:3001/api/user/auth/${id}`)
    .then((res) => {
      setName(res.data.name)
      setAvatar(res.data.avatar)
      setBio(res.data.about)
    })
    .catch((err) => console.log(err))

  return (
    <>
      <Header title={name} />
      <Profile avatar={avatar} name={name} bio={bio} />
    </>
  )
}

export default UserProfile

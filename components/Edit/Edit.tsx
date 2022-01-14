import React from 'react'

import * as S from './Edit.style'
import * as anims from '@anims/index'

import axios from 'axios'

import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type UserInfo = {
  username: string
  avatar: string
  name: string
  bio: string
  theme: string
  links: string[]
  titles: string[]
}

const Edit: React.FC<UserInfo> = ({
  username,
  avatar,
  name,
  bio,
  theme,
  links,
  titles,
}) => {
  const router = useRouter()

  const nameInputRef = React.useRef<HTMLInputElement>(null)
  const bioInputRef = React.useRef<HTMLTextAreaElement>(null)
  const themeInputRef = React.useRef<HTMLSelectElement>(null)

  const avatarRef = React.useRef<HTMLImageElement>(null)
  const fileUploadRef = React.useRef<HTMLInputElement>(null)
  const linkTitleInputRef = React.useRef<HTMLInputElement>(null)
  const linkUrlInputRef = React.useRef<HTMLInputElement>(null)

  const [url, setUrl] = React.useState(avatar)

  const [options, updateOptions] = React.useState<
    { text: string; href: string }[]
  >(titles.map((t, i) => ({ href: links[i], text: t })))
  const [items, setItems] = React.useState([0, 1, 2, 3])

  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = (theme: string) => setTheme(theme)

  const Error = (message: string) => {
    toast.error(message, {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const UploadImage = (file: string) => {
    if (!file) return Error('Please Select An Image!')

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'debutur_avatar')
    data.append('cloud_name', 'debutur')

    fetch('https://api.cloudinary.com/v1_1/debutur/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err))
  }

  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )

  const AddLink = () => {
    if (
      linkTitleInputRef.current!.value == '' ||
      linkUrlInputRef.current!.value == ''
    )
      return Error('Fields Must Not be Empty!')
    else if (!urlPattern.test(linkUrlInputRef.current!.value))
      return Error('Invalid URL! Check your spelling')

    updateOptions([
      ...options,
      {
        text: linkTitleInputRef.current!.value,
        href: linkUrlInputRef.current!.value.startsWith('http')
          ? linkUrlInputRef.current!.value
          : `https://${linkUrlInputRef.current!.value}`,
      },
    ])

    linkTitleInputRef.current!.value = ''
    linkUrlInputRef.current!.value = ''
  }

  const DeleteLink: React.MouseEventHandler<SVGElement> = (e) => {
    const text = e.currentTarget.getAttribute('id')
    updateOptions(options.filter((options) => options.text !== text))
  }

  const UpdateProfile = async () => {
    if (nameInputRef.current!.value === '')
      return Error('Name Field Must Not be Empty!')

    await axios.post('/api/update', {
      username: username,
      name: nameInputRef.current!.value,
      bio: bioInputRef.current!.value,
      avatar_url: url,
      theme: themeInputRef.current!.value,
      buttonTitles: options.map((option) => option.text),
      buttonLinks: options.map((option) => option.href),
    })

    router.push(`/${username}`)
  }

  React.useEffect(() => setTheme(theme), [])

  return (
    <S.EditContainer
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <S.ImagePreview
        src={url === '' ? avatar : url}
        draggable={false}
        ref={avatarRef}
        variants={anims.Image}
      />
      <S.Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => fileUploadRef.current!.click()}
        top
        margin
        variants={anims.FadeReverse}
      >
        Choose Avatar
      </S.Button>
      <S.MockInput
        type="file"
        ref={fileUploadRef}
        onChange={(e: any) => {
          UploadImage(e.target.files[0])
        }}
      />
      <S.ThemeSelector
        defaultValue={theme}
        ref={themeInputRef}
        onChange={(e) => toggleTheme(e.currentTarget.value)}
        variants={anims.FadeReverse}
      >
        <S.Theme value="light">Light</S.Theme>
        <S.Theme value="dark">Dark</S.Theme>
        <S.Theme value="neon">Neon</S.Theme>
        <S.Theme value="purple">Purple</S.Theme>
        <S.Theme value="aqua">Aqua</S.Theme>
        <S.Theme value="nord">Nord</S.Theme>
      </S.ThemeSelector>
      <S.Input
        type="name"
        defaultValue={name}
        ref={nameInputRef}
        spellCheck="false"
        variants={anims.FadeReverse}
      />
      <S.BioInput
        defaultValue={bio}
        ref={bioInputRef}
        variants={anims.FadeReverse}
      />
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="Title"
          ref={linkTitleInputRef}
          spellCheck="false"
          variants={anims.FadeReverse}
        />
        <S.Input
          type="url"
          placeholder="URL"
          ref={linkUrlInputRef}
          spellCheck="false"
          variants={anims.FadeReverse}
        />
        <S.Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={AddLink}
          top
          variants={anims.FadeReverse}
        >
          Add New Link
        </S.Button>
      </S.InputContainer>
      <S.LinksContainer>
        {options.map((link, index) => (
          <S.LinkBox variants={anims.FadeReverse}>
            <S.Link href={link.href} rel="norefferer" target="blank">
              {link.text}
            </S.Link>
            <S.TrashBin onClick={DeleteLink} id={link.text} />
          </S.LinkBox>
        ))}
      </S.LinksContainer>
      <S.Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={UpdateProfile}
        style={{ marginTop: 200 }}
        variants={anims.FadeReverse}
      >
        Save Profile
      </S.Button>
      <S.Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        href={`/${username}`}
        margin
        variants={anims.FadeReverse}
      >
        Cancel
      </S.Button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </S.EditContainer>
  )
}

export default Edit

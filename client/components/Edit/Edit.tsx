import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import * as S from './Edit.style'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type UserInfo = {
  username: string
  avatar: string
  name: string
  bio: string
  theme: string
}

const Edit: React.FC<UserInfo> = ({ username, avatar, name, bio, theme }) => {
  const router = useRouter()

  const nameInputRef = React.useRef<HTMLInputElement>(null)
  const bioInputRef = React.useRef<HTMLTextAreaElement>(null)
  const themeInputRef = React.useRef<HTMLSelectElement>(null)

  const avatarRef = React.useRef<HTMLImageElement>(null)
  const fileUploadRef = React.useRef<HTMLInputElement>(null)
  const linkTitleInputRef = React.useRef<HTMLInputElement>(null)
  const linkUrlInputRef = React.useRef<HTMLInputElement>(null)

  const [titles, setTitles] = React.useState<string[]>([])
  const [urls, setUrls] = React.useState<string[]>([])

  const [url, setUrl] = React.useState(avatar)

  const links = React.useMemo<
    { index: number; title: string; url: string }[]
  >(() => {
    return titles.map((title, index) => {
      return {
        index,
        title,
        url: urls[index],
      }
    })
  }, [titles, urls])

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

    setTitles((prevTitle) => [...prevTitle, linkTitleInputRef.current!.value])
    setUrls((prevUrl) => [...prevUrl, linkUrlInputRef.current!.value])

    // setLinks([
    //   ...links,
    //   {
    //     index: links.length + 1,
    //     title: linkTitleInputRef.current!.value,
    //     url: linkUrlInputRef.current!.value,
    //   },
    // ])

    linkTitleInputRef.current!.value = ''
    linkUrlInputRef.current!.value = ''

    console.log(links)
  }

  const DeleteLink: React.MouseEventHandler<SVGElement> = (e) => {
    const index = e.currentTarget.getAttribute('id')
    // setLinks(links.filter((link) => link.index.toString() !== index))
  }

  const UpdateProfile = async () => {
    if (nameInputRef.current!.value === '')
      return Error('Name Field Must Not be Empty!')

    // await axios.put(`http://localhost:3001/api/user/auth/harshhhdev/edit`, {
    //   name: nameInputRef.current!.value,
    //   bio: bioInputRef.current!.value,
    //   theme: themeInputRef.current!.value,
    // })

    // router.replace(`/${username}`)

    console.log(titles)
    console.log(urls)
  }

  return (
    <S.EditContainer>
      <S.ImagePreview
        src={url === '' ? avatar : url}
        draggable={false}
        ref={avatarRef}
      />
      <S.Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => fileUploadRef.current!.click()}
        top
        margin
      >
        Choose Avatar
      </S.Button>
      <S.MockInput
        type='file'
        ref={fileUploadRef}
        onChange={(e: any) => {
          UploadImage(e.target.files[0])
        }}
      />
      <S.ThemeSelector value={theme} ref={themeInputRef}>
        <S.Theme value='light'>Light</S.Theme>
        <S.Theme value='dark'>Dark</S.Theme>
        <S.Theme value='neon'>Neon</S.Theme>
        <S.Theme value='purple'>Purple</S.Theme>
        <S.Theme value='aqua'>Aqua</S.Theme>
        <S.Theme value='nord'>Nord</S.Theme>
      </S.ThemeSelector>
      <S.Input type='name' defaultValue={name} ref={nameInputRef} />
      <S.BioInput defaultValue={bio} ref={bioInputRef} />
      <S.InputContainer>
        <S.Input type='text' placeholder='Title' ref={linkTitleInputRef} />
        <S.Input type='url' placeholder='URL' ref={linkUrlInputRef} />
        <S.Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={AddLink}
          top
        >
          Add New Link
        </S.Button>
      </S.InputContainer>
      <S.LinksContainer>
        {links.map((link, index) => (
          <S.LinkBox key={index}>
            <S.Link href={link.url} rel='norefferer' target='blank'>
              {link.title}
            </S.Link>
            <S.TrashBin onClick={DeleteLink} id={link.index.toString()} />
          </S.LinkBox>
        ))}
      </S.LinksContainer>
      <S.Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={UpdateProfile}
        style={{ marginTop: 200 }}
      >
        Save Profile
      </S.Button>
      <S.Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} margin>
        Cancel
      </S.Button>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </S.EditContainer>
  )
}

export default Edit

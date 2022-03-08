import React from 'react'
import { styled } from '@css/theme.config'

import SEO from '@components/SEO'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '98vh',
  userSelect: 'none',
})

const Error = styled('h1', {
  fontSize: '30vw',
  color: '#D6EEFE',
  position: 'fixed',
  zIndex: -999,
})

const ContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '30vw',
})

const Header = styled('h1', {
  fontSize: '$6',
  color: '#000',
})

const Description = styled('p', {
  fontSize: '$4',
  color: '$black10',
  marginTop: 20,
})

const Link = styled('a', {
  color: '$skyBlue6',
})

const NotFound: React.FC = () => {
  return (
    <Container>
      <SEO title="404" description="This page does not exist!" />
      <Error>404</Error>
      <ContentContainer>
        <Header>You seem lost...</Header>
        <Description>
          Some things just don’t go the way you want. Like the page you’re
          looking for is gone, or the link is broken. Check the URL and try
          reloading the page - or go back to <Link href="/">dbtr.hxrsh.in</Link>{' '}
          to customise and create your own profile!
        </Description>
      </ContentContainer>
    </Container>
  )
}

export default NotFound

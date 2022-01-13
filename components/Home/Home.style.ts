import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  '@iPhonePlus': {
    flexDirection: 'column',
  },
})

export const LoginContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginRight: 300,
  '@media (max-width: 1367px)': {
    marginRight: 0,
  },
  '@iPad': {
    alignItems: 'center !important',
    textAlign: 'center',
    margin: 0,
  },
})

export const Header = styled(motion.h1, {
  color: '$black1',
  fontSize: 92,
  maxWidth: 600,
  '@media (max-width: 1366px)': {
    fontSize: 72,
  },
  '@iPhonePlus': {
    marginTop: 50,
  },
})

export const Colourised = styled(motion.span, {
  color: '$main',
  fontSize: '$skyBlue6',
  '@media (max-width: 1366px)': {
    fontSize: '$8',
  },
})

export const Description = styled(motion.p, {
  fontSize: '$4',
  color: '$black10',
  maxWidth: 600,
  margin: '50px 0',
  '@iPhonePlus': {
    fontSize: '$3',
    margin: '20px 20px 100px 20px',
  },
})

export const ProfileContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 0,
  minHeigh: '90vh',
  '@media (max-width: 1440px)': {
    marginRight: 200,
  },
  '@iPad': {
    display: 'none',
  },
})

export const Profile = styled(motion.img, {
  position: 'absolute',
  width: 277,
  height: 600,
  borderRadius: 10,
  boxShadow: '0px 0px 50px 0px #00000070',
  '@media (max-width: 1366px)': {
    marginLeft: 100,
  },
  variants: {
    margin: {
      true: {
        marginLeft: 250,
        marginTop: -150,
      },
    },
  },
})

export const ImageContainer = styled('div', {
  borderRadius: 10,
  overflow: 'hidden',
  boxShadow: '0px 0px 50px 0px #00000070',
  height: 600,
  width: 277,
})

export const SearchContainer = styled(motion.div, {
  width: 500,
  height: 70,
  boxShadow: '0px 0px 70px 0px #00000020',
  borderRadius: 100,
  padding: '40px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@iPhonePlus': {
    width: 350,
  },
})

export const URL = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const Text = styled('h3', {
  fontSize: '$3',
})

export const UsernameInput = styled('input', {
  color: '$skyBlue6',
  fontSize: '$3',
  outline: 'none',
  border: 'none',
  marginLeft: 5,
  width: 150,
  '@iPhonePlus': {
    width: 30,
  },
})

export const LoginButton = styled(motion.a, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '25px 30px',
  background: 'linear-gradient(135deg, #916aff 0%, #6788ff 100%)',
  color: '$white10',
  fontSize: '$3',
  textDecoration: 'none',
  borderRadius: 5,
  boxShadow: '0px 0px 70px 0px #00000030',
})

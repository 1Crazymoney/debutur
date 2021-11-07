import { styled } from '@stitches/react'
import { motion } from 'framer-motion'
import WavyText from '@anims/WavyText'

export const ProfileContainer = styled(motion.div, {
  minHeight: '95vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ProfileBox = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  h1: {
    fontSize: '$6',
  },
  p: {
    fontSize: '$3',
  },
})

export const Avatar = styled(motion.img, {
  width: 100,
  height: 100,
  borderRadius: '100%',
  marginBottom: 50,
})

export const Name = styled(WavyText, {
  color: '#000',
  fontSize: '$6',
})

export const Description = styled(WavyText, {
  color: '#000',
})

export const ButtonContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 75,
})

export const Button = styled(motion.a, {
  width: 300,
  padding: '20px 50px',
  color: '$white10',
  background: '$main',
  fontSize: '$3',
  border: 'none',
  borderRadius: 10,
  margin: '10px 0',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
})

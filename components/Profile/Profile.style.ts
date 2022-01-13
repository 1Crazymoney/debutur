import { styled } from '@stitches/react'
import { motion } from 'framer-motion'

export const ProfileContainer = styled(motion.div, {
  minHeight: '95vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '50px 0',
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
})

export const Name = styled(motion.h1, {
  color: '$text',
  fontSize: '$6',
  margin: '50px 0 20px 0',
})

export const Description = styled(motion.p, {
  color: '$text',
})

export const ButtonContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 100,
})

export const Button = styled(motion.a, {
  width: 300,
  padding: '20px 50px',
  color: '$buttonText',
  background: '$buttonBg',
  fontSize: '$3',
  border: 'none',
  borderRadius: 10,
  margin: '10px 0',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',
})

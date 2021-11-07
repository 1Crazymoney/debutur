import { styled } from '@stitches/react'
import { motion } from 'framer-motion'

export const HomeLayout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
})

export const HomeHeader = styled('h1', {
  fontSize: '$5',
  marginTop: 50,
})

export const Description = styled('p', {
  fontSize: '$2',
  margin: '20px 0',
})

export const FormFieldBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  borderRadius: 100,
  margin: '20px 0',
  svg: {
    width: 30,
    height: 30,
    color: '#a5adc6',
    padding: 0,
    margin: '0px 0px 50px 50px',
  },
})

export const FormField = styled('input', {
  outline: 'none',
  border: 'none',
  fontSize: '$2',
  color: '$white5',
  background: 'transparent',
  transition: '0.3s linear',
  '&:focus': {
    color: '#a5adc6',
  },
})

export const LoginButton = styled(motion.button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',
  padding: '15px 50px',
  background: '$main',
  border: 'none',
  borderRadius: 30,
  color: '$white10',
  fontWeight: 600,
  marginTop: 20,
  cursor: 'pointer',
  width: 350,
  svg: {
    margin: '0px 10px 1px 0px',
  },
})

export const SignUp = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '#a5adc6',
  fontSize: '$2',
  margin: '30px 0 100px 0',
  textDecoration: 'none',
  svg: {
    marginLeft: 0,
    transition: '0.1s linear',
  },
  '&:hover': {
    svg: {
      transform: 'translateX(5px)',
    },
  },
})

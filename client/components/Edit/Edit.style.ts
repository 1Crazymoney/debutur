import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'
import { Trash2 } from 'react-feather'

export const EditContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 150,
})

export const ImagePreview = styled('img', {
  width: 100,
  height: 100,
  borderRadius: 100,
})

export const MockInput = styled('input', { display: 'none' })

export const Button = styled(motion.button, {
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
  cursor: 'pointer',
  width: 250,
  textDecoration: 'none',
  marginBottom: 20,
  variants: {
    margin: {
      true: {
        marginBottom: 75,
      },
    },
    top: {
      true: {
        marginTop: 20,
      },
    },
  },
})

export const ThemeSelector = styled('select', {
  color: '$black1',
  outline: 'none',
  minWidth: 150,
  border: '#c9c9c9 3px solid',
  padding: 10,
  borderRadius: 5,
  fontSize: '$2',
  transition: '0.1s linear',
  background: '$white9',
  userSelect: 'none',
  marginTop: 20,
  '&:focus': {
    border: '$main 3px solid',
  },
})

export const Theme = styled('option', {
  background: '$white9',
  '&:hover': {
    background: '#000',
  },
})

export const Input = styled('input', {
  color: '$black1',
  resize: 'none',
  outline: 'none',
  minWidth: 200,
  border: '#c9c9c9 3px solid',
  padding: 20,
  borderRadius: 5,
  fontSize: '$2',
  transition: '0.1s linear',
  marginTop: 20,
  '&:focus': {
    border: '$main 3px solid',
  },
})

export const BioInput = styled('textarea', {
  color: '$black1',
  marginTop: 30,
  resize: 'none',
  outline: 'none',
  minWidth: 600,
  minHeight: 300,
  border: '#c9c9c9 3px solid',
  padding: 20,
  borderRadius: 5,
  fontSize: '$2',
  transition: '0.1s linear',
  '&:focus': {
    border: '$main 3px solid',
  },
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0 0 0',
})

export const Error = styled('p', {
  color: '#FF5B5B',
  fontSize: '$3',
})

export const LinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 200,
})

export const LinkBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
})

export const Link = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$3',
  textDecoration: 'none',
  color: '#c9c9c9',
  marginRight: 10,
  '&:hover': {
    color: '$main',
  },
})

export const TrashBin = styled(Trash2, {
  width: 30,
  height: 30,
  cursor: 'pointer',
  color: '#c9c9c9',
  '&:hover': {
    color: '#FF5B5B',
  },
})

import { styled } from '@css/theme.config'
import { motion } from 'framer-motion'
import { Trash2 } from 'react-feather'

export const EditContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 150,
})

export const ImagePreview = styled(motion.img, {
  width: 100,
  height: 100,
  borderRadius: 100,
})

export const MockInput = styled('input', { display: 'none' })

export const Button = styled(motion.a, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$3',
  padding: '15px 50px',
  background: '$buttonBg',
  border: '3px solid $buttonBorder',
  borderRadius: 30,
  color: '$buttonText',
  cursor: 'pointer',
  width: 275,
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

export const ThemeSelector = styled(motion.select, {
  color: '$text',
  outline: 'none',
  minWidth: 150,
  border: '$inactive 3px solid',
  padding: 10,
  borderRadius: 5,
  fontSize: '$2',
  transition: '0.1s linear',
  background: '$inactiveBg',
  userSelect: 'none',
  marginTop: 20,
  '&:focus': {
    border: '$buttonBorder 3px solid',
  },
})

export const Theme = styled('option', {
  background: '$inactiveBg',
  '&:hover': {
    background: '#000',
  },
})

export const Input = styled(motion.input, {
  color: '$text',
  resize: 'none',
  outline: 'none',
  minWidth: 200,
  border: '$inactive 3px solid',
  padding: 20,
  borderRadius: 5,
  fontSize: '$2',
  transition: '0.1s linear',
  background: '$inactiveBg',
  marginTop: 20,
  '&:focus': {
    border: '$buttonBorder 3px solid',
  },
})

export const BioInput = styled(motion.textarea, {
  color: '$text',
  marginTop: 30,
  resize: 'none',
  outline: 'none',
  minWidth: 600,
  minHeight: 300,
  border: '$inactive 3px solid',
  padding: 20,
  borderRadius: 5,
  fontSize: '$2',
  background: '$inactiveBg',
  transition: '0.1s linear',
  '&:focus': {
    border: '$buttonBorder 3px solid',
  },
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0 0 0',
})

export const LinksContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 200,
})

export const LinkBox = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
  userSelect: 'none',
})

export const Link = styled(motion.a, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$3',
  textDecoration: 'none',
  width: 200,
  background: '$inactiveBg',
  padding: 20,
  borderRadius: 10,
  color: '$text',
  marginRight: 10,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const TrashBin = styled(Trash2, {
  width: 30,
  height: 30,
  cursor: 'pointer',
  color: '$inactive',
  '&:hover': {
    color: '#FF5B5B',
  },
})

import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily: '$main',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    background: '$white9',
    overflowX: 'hidden',
  },
  '::selection': {
    background: '#000',
    color: '#fff',
  },
  '::placeholder': {
    color: '$white5',
  },
  img: {
    userSelect: 'none',
  },
  button: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: 'none',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$main',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
})

export default globalStyle

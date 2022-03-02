import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    background: '$background',
    overflowX: 'hidden',
    fontFamily: '$main',
  },
  'input, textArea, button, select': {
    fontFamily: '$main',
    fontWeight: 200,
  },
  '::selection': {
    background: '$buttonBg',
    color: '$white10',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$buttonBg',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '.ring.hovered': {
    width: 80,
    height: 80,
  },
  '::placeholder': {
    color: '$black10',
  },
})

export default globalStyle

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
    background: '#4560F060',
  },
  img: {
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
})

export default globalStyle

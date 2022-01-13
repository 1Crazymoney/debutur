import { createStitches } from '@stitches/react'
import { SkyBlue, White, Black } from 'kraftuur'

export const { css, styled, globalCss, getCssText, keyframes, createTheme } =
  createStitches({
    theme: {
      colors: {
        ...SkyBlue,
        ...White,
        ...Black,
        buttonBg: '$skyBlue6',
        gradient: 'linear-gradient(135deg, #916aff 0%, #6788ff 100%)',
      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '48px',
      },
      fonts: {
        main: 'Averta, sans-serif',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      iPhonePlus: '(max-width: 425px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
    },
  })

export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})

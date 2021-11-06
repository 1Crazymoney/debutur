import { createStitches } from '@stitches/react'

import { SkyBlue, White } from 'kraftuur'

export const { css, styled, globalCss, getCssText, keyframes } = createStitches(
  {
    theme: {
      colors: {
        main: '#00ABFF',
        ...White,
        ...SkyBlue,
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
        main: 'GTWelsheim Pro, sans-serif',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      iPhonePlus: '(max-width: 414px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
    },
  }
)

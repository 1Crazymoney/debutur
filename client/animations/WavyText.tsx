import React from 'react'
import { motion } from 'framer-motion'
import GraphemeSplitter from 'grapheme-splitter'
import { Props } from 'framer-motion/types/types'
const splitter = new GraphemeSplitter()

const Wrapper = (props: Props) => {
  return <span className='word-wrapper'>{props.children}</span>
}

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
}

const AnimatedCharacters = (props: { text: string; type: string }) => {
  const item = {
    hidden: {
      y: '200%',
      color: '#fff',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
    visible: {
      y: 0,
      color: '#000',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
    },
  }

  const splitWords = props.text.split(' ')

  const words: any[] = []

  for (const [, item] of splitWords.entries()) {
    words.push(splitter.splitGraphemes(item))
  }

  words.map((word: any) => {
    return word.push('\u00A0')
  })

  // @ts-ignore
  const Tag = tagMap[props.type]

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element: React.FC, index: number) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              )
            })}
          </Wrapper>
        )
      })}
    </Tag>
  )
}

export default AnimatedCharacters

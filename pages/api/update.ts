import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const session = await getSession({ req })

  const { name, bio, avatar_url, theme, username, buttonLinks, buttonTitles } =
    req.body

  if (session) {
    await prisma.profile.update({
      where: {
        login: username,
      },
      data: {
        name: name,
        bio: bio,
        avatar_url: avatar_url,
        theme: theme,
        buttonLinks: buttonLinks,
        buttonTitles: buttonTitles,
      },
    })

    return res.status(200).end()
  } else
    res.send({
      error: 'User unauthenticated!',
    })

  return res.status(500).end()
}

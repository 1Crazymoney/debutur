import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()
  const session = await getSession({ req })

  if (session) {
    const {
      name,
      bio,
      avatar_url,
      theme,
      username,
      button_links,
      button_titles,
    } = req.body

    await prisma.profile.findFirst({
      where: {
        login: username,
      },
    })
  }
}

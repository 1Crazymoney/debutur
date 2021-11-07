import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const Token = (req: Request, res: Response) => {
  const user: any = req.user

  const token = jwt.sign(
    {
      sub: user.id,
      isVerified: user.isVerified,
      provider: user.provider,
      username: user.username,
      name: user.name,
      email: user.email,
      googleId: user.googleId,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '2h' }
  )

  // .redirect('http://localhost:3000')
  res.status(200).cookie('jwt', token, { maxAge: 2 * 3600000, httpOnly: true })
    .send(`
    <html>
      <head>
        <title>Debutur</title>
      </head>
      <body>
      <p>Debutur Authorized.</p>
      <p>You can close this window now</p>
      <script>
        window.onload = window.close();
        let originUrl = window.location.origin;
        if (window.location.hostname === 'localhost') {
          originUrl = 'http://localhost:3000'
        }
        window.opener.postMessage('success', originUrl);
      </script>
      </body>
    </html>
  `)
}

export default Token

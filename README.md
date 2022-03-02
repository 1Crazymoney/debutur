<p align="center">
  <img src="https://raw.githubusercontent.com/harshhhdev/debutur/master/public/Banner.png" />
  <a href="https://dbtr.vercel.app/">
    <h2 align="center">Debutur</h2>
  </a>
</p> 
<p align="center">🚀 Create, and personalise your own simple and beautiful homepage</p>
<p align="center">
  <a href="https://dbtr.hxrsh.in/">Demo</a>
      ·
  <a href="https://dev.to/harshhhdev/debutur-fa">Dev.to</a>
 </p>

# 🚀 Quickstart

Run the website locally

```
git clone https://github.com/harshhhdev/debutur.git
```

## Setting up the project

```bash
cd debutur

# Install dependencies
yarn
```

## Setting up environment variables

Rename `.env.EXAMPLE` to `.env`

Go to your [Twitter Developers Dashboard](https://developer.twitter.com/en/portal/dashboard), create a new project and obtain an API key from the "keys and tokens" section.

Fill in the `TWITTER_SECRET` and `TWITTER_ID` fields.

Then, to your [GitHub Developer Applications > OAuth Apps](https://github.com/settings/developers), create a new project and generate a new API client secret.

Fill in the `GITHUB_ID` and `GITHUB_SECRET` fields

Next, make sure to set your secret inside the `.env` file. You can set this to anything, however, you should preferably choose something secure.

If you're on Linux, you can run `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🖼 Gallery

![3](https://user-images.githubusercontent.com/69592270/149421305-a4e5af7f-2846-4637-8b53-af482ffb8e73.gif)
![1](https://user-images.githubusercontent.com/69592270/149421298-f4d9265a-a02b-4619-b515-b30b9ff67258.gif)
![2](https://user-images.githubusercontent.com/69592270/149421300-4351b00c-2fc8-4883-9e7e-b13635091d04.gif)
![4](https://user-images.githubusercontent.com/69592270/149421311-eb349e56-9e1e-46e4-86f1-2a266aaee491.gif)

# 🔧 Tools Used

- [Next.js](https://github.com/vercel/next.js)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://typescriptlang.org)
- [Figma](https://figma.com)
- [next-themes](https://next-themes-example.vercel.app/)
- [Framer Motion](https://framer.com/motion)
- [React Spring](https://react-spring.io)
- [CockroachDB](https://www.cockroachlabs.com/)
- [Stitches](https://stitches.dev/)
- [NextAuth](https://next-auth.js.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Feather Icons](https://feathericons.com/)
- [Simple Icons](https://simpleicons.org/)
- [Kraftuur (made by me!)](https://harshhhdev.github.io/kraftuur)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```

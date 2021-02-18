<p align="center">
  <a href="https://deb.myst.rs/">
    <img alt="Icon" src="https://user-images.githubusercontent.com/69592270/108409369-26180780-71f4-11eb-97ff-9ac1fea2213d.png" />
    <h2 align="center">Debutur</h2>
  </a>
</p> 

<p align="center">Build and customise your own homepage with over 5 beautiful themes and links</p>

# 🚀 Building

Build for development 

Before starting, make sure to create a MongoDB database

- Clone this repository `git clone https://github.com/harshhhdev/debutur.git`
- Install packages `yarn`
- Rename `.env.EXAMPLE` to `.env`
- Change the fields in the `.env`
- Run `yarn dev` to start the development environment
- Navigate to [port 5000](https://localhost:5000/)

# 📂 Structure

Take a quick look at the folder structure of this project

```
.
├── dist
│   ├── config
│   │   ├── auth.js
│   │   └── passport.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   ├── docs.js
│   │   ├── index.js
│   │   └── users.js
│   └── server.js
├── package.json
├── README.md
├── src
│   ├── config
│   │   ├── auth.ts
│   │   └── passport.ts
│   ├── models
│   │   └── User.ts
│   ├── routes
│   │   └── users.ts
│   └── server.ts
├── tsconfig.json
├── views
│   ├── dashboard.ejs
│   ├── debut.ejs
│   ├── edit.ejs
│   ├── home.ejs
│   ├── layout.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── styles
│   │   ├── all.css
│   │   ├── assets
│   │   │   ├── Debutur.png
│   │   │   └── DebuturShowcase.png
│   │   └── pages
│   │   ├── docs.ts
│   │   ├── index.ts
│   │       ├── edit.css
│   │       ├── home.css
│   │       ├── login.css
│   │       ├── show.css
│   │       └── terms.css
│   └── terms.ejs
├── yarn-error.log
└── yarn.lock
```

# 🤞 Contributing 

Want to contribute to this project? 

Start by cloning the repository 

`git clone https://github.com/harshhhdev/debutur.git`

Then, follow the steps in the build above to start the development environment 

When you're done, push your changes to GitHub and create a pull request. 

```
git add .
git commit -m "feat: added new stuff"
git push YOUR_REPO_URL BRANCH_NAME
```

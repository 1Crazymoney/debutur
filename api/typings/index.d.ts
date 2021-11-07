declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      TWITTER_CONSUMER_KEY: string
      TWITTER_CONSUMER_SECRET: string
      DRIBBBLE_CLIENT_ID: string
      DRIBBBLE_CLIENT_SECRET: string
      TOKEN_SECRET: string
    }
  }
}

export {}

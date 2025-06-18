declare namespace NodeJs {
  export type ProcessEnv = {
    PORT: number
    DATABASE_URL: string
    BCRYPT_ROUNDS: number
    DATABASE_LOCAL: string
  }
}

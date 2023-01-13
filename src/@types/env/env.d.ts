declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      API_PER_PAGE: string;
      API_ACCESS_TOKEN: string;
    }
  }
}

export {}

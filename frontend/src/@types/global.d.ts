export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_GOOGLE_KEY: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

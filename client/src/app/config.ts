export const API_URL: string =
  process.env.API_URL ?? // build time
  process.env.NEXT_PUBLIC_API_URL ?? // run time
  "http://localhost:4000"; // fallback

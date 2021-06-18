export const serverUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://learnpages.vercel.app";

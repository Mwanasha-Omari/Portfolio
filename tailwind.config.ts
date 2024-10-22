import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1B2344',
        'light-blue':'#E4FOFS',
        'primary color': '#EEEEEE',
      },
    },
  },
  plugins: [],
};
export default config;

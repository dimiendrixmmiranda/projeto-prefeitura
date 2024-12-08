import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': '425px',  // Novo breakpoint
        'md': '768px',  // Tamanho padrão
        'lg': '1024px', // Tamanho padrão
        'xl': '1280px', // Tamanho padrão
        '2xl': '1440px', // Tamanho padrão
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px', // Punto de quiebre personalizado
        's': '380px', // Punto de quiebre personalizado
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue': '#06c0ce',
      },
      perspective: {
        500: "500px",
      },
      rotate: {
        10: "10deg",
      },
    },
  },
  plugins: [],
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        '11.5' : '2.875rem',
        '24.5' : '6.25rem'
      },
      width: {
        '100' : '52.5rem'
      },
      colors: {
        project: {
          'y' : '#ebd96b',
          'w' : '#C2C8DA',
        }
      }
        
    },
  },
  plugins: [],
}
export default config

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
      },
      boxShadow: {
        'customS' : 'box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08)',
        'customH' : '2px 4px 12px rgba(0, 0, 0, 0.24)'
      }
    },
  },
  plugins: [],
}
export default config

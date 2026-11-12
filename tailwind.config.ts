import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05040a',
          2: '#0a0814',
          3: '#110e1f',
        },
        fg: {
          DEFAULT: '#f4f2ff',
          2: '#b3adcc',
          3: '#8f89ab',
        },
        violet: {
          300: '#d2b8ff',
          400: '#b98cff',
          500: '#8b5cf6',
          600: '#7140e0',
          700: '#5b21b6',
        },
        ember: '#ff9a5c',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: '1200px',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          to: { opacity: '0.15' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'blur-in': {
          from: { opacity: '0', filter: 'blur(8px)', transform: 'translateY(8px)' },
          to: { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 7s ease-in-out infinite',
        twinkle: 'twinkle 5s ease-in-out infinite alternate',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'blur-in': 'blur-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
export default config

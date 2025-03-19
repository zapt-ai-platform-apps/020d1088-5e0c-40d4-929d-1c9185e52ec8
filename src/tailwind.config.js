export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#5E1A5D',
                    light: '#7e3079',
                    dark: '#4c1548'
                },
                secondary: {
                    DEFAULT: '#85AFC0',
                    light: '#a7c5d5',
                    dark: '#6f9db7'
                },
                tertiary: {
                    DEFAULT: '#CEADCB',
                    light: '#e0dce7',
                    dark: '#c0b9cd'
                },
                accent1: {
                    DEFAULT: '#0674AB',
                    light: '#278cc0',
                    dark: '#045b85'
                },
                accent2: {
                    DEFAULT: '#0E5A75',
                    light: '#0674AB',
                    dark: '#094560'
                }
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-in-up': 'fadeInUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
};
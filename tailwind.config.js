export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#651B60',
                    light: '#7e3079',
                    dark: '#4c1548'
                },
                secondary: {
                    DEFAULT: '#8BB1C6',
                    light: '#a7c5d5',
                    dark: '#6f9db7'
                },
                tertiary: {
                    DEFAULT: '#D2CDDC',
                    light: '#e0dce7',
                    dark: '#c0b9cd'
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
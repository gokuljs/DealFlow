import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient':
                    'linear-gradient(128deg, rgba(255,255,255,1) 0%, rgba(198,85,206,1) 72%)',

                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'text-gradient':
                    'linear-gradient(197deg, rgba(255,255,255,1) 0%, rgba(198,85,206,1) 72%)'
            },
            colors: {
                borderCustomGrey: '#64708414'
            }
        }
    },
    plugins: []
};
export default config;

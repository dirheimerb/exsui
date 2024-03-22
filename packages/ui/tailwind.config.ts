import type { Config } from 'tailwindcss';
// import sharedConfig from '@exsui/tailwind-config';
// const config: Pick<Config, "prefix" | "presets" | "content"> = {
//     content: ["./src/**/*.tsx"],
//     prefix: "ui-",
//     presets: [sharedConfig],
//   };
const config: Config = {
    content: ['./index.ts', './src/**/*.{ts,tsx, js, jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
            },
            fontFamily: {
                body: ['Nunito'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

export default config;

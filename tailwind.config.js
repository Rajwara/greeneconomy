/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["*",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            roboto: ["Roboto", "sans"],
            poppins: ['Poppins'],
            montserrat: ['Montserrat'],

        }
    },
    plugins: [
        require('flowbite/plugin')({
            charts: true,
        }),
    ],
});
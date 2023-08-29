/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#1f2937",
                "dark-gray": "#E5e7eb",
                "off-white": "#F9FaF8",
                "button-blue": "#3882f6",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};

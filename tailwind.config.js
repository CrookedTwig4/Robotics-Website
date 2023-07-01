/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "teamYellow-100": "#fcfaca",
                "teamYellow-200": "#fcf797",
                "teamYellow-300": "#fcf465",
                "teamYellow-400": "#fcf232",
                "teamYellow-500": "#fcf000",
                "teamYellow-550": "#d9ce00",
                "teamYellow-600": "#bfb600",
                "teamYellow-700": "#8c8500",
                "teamYellow-800": "#595500",
                "teamYellow-900": "#262400",
                midnight: "#050226",
            },
            screens: {
                "-2xl": { max: "1535px" }, // inverse 2xl
                "-xl": { max: "1279px" }, // inverse xl
                "-lg": { max: "1023px" }, // inverse lg
                hlg: { min: "896px" }, // half between lg and md
                "-hlg": { max: "895px" }, // inverse half between lg and md
                "-md": { max: "767px" }, // inverse md
                hmd: { min: "704px" }, // half between md and sm
                "-hmd": { max: "703px" }, // inverse half between md and sm
                "-sm": { max: "639px" }, // inverse sm
                "-xs": { max: "390px" }, // inverse xs
                "2xs": { min: "390px" }, // inverse 2xs
                oxl: { min: "1280px", max: "1535px" }, // only xl
                olg: { min: "1024px", max: "1279px" }, // only lg
                omd: { min: "768px", max: "1023px" }, // only md
                osm: { min: "639px", max: "767px" }, // only sm
                oxs: { min: "390px", max: "639px" }, // only xs
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
				sans: ["var(--font-raleway)"],
				"bebas-neue": ["var(--font-bebas-neue)"],
			},
        },
    },
    plugins: [],
};

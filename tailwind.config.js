/** @type {import('tailwindcss').Config} */

module.exports = {
    corePlugins: {
        container: false,
    },

    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    safelist: ["bg-lightgray", "bg-green"],
    theme: {
        screens: {
            tablet: "810px",
            laptop: "1280px",
            desktop: "1440px",
        },

        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#FFFFFF",
            darkblue: "#000064",
            lightblue: "#7678ED",
            green: "#00FFC4",
            lightgray: "#EEEEEE",
            black: "#000000"
        },

        fontSize: {
            0: "0rem",
            14: "0.875rem",
            16: "1rem",
            20: "1.25rem",
            24: "1.5rem",
            28: "1.75rem",
            32: "2rem",
            36: "2.25rem",
            40: "2.5rem",
            44: "2.75rem",
            48: "3rem",
        },

        fontFamily: {
            poppins: ['"Poppins"'],
        },

        extend: {
            borderWidth: {
                1: "1",
            },

            transitionProperty: {
                scale: "scale(0)",
            },

            transitionDuration: {
                0: "0ms",
                400: "400ms",
            },
        },
    },
    plugins: [
        // ..
    ],
};

const colorNames = {
    lightGrey: "#F5F5FA",
    platinum: "#E5E5E5",
    grey: "#E4E6F0",
    black: "#000000",
    darkGrey: "#7E839A",
    white: "#FFFFFF",
    blue: "#0044CC",
    lightBlue: "#D6E4FF",
    yellow: "#FCD420",
    silverSand: "#C4C4C4",
    eerieBlack: "#18181B",
    slateGray: "#74788B",
}

const breakpoints = {
    xsmall: 576,
    small: 768,
    medium: 992,
    large: 1200,
}

export const theme = {
    colors: {
        textPrimary: colorNames.black,

        header: {
            background: colorNames.black,
            border: colorNames.grey,
        },

        site: {
            background: colorNames.platinum,
            text: colorNames.black,
        },
    },

    ...breakpoints,
}
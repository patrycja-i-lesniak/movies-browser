const colorNames = {
    lightGrey: "#F5F5FA",
    platinum: "#E5E5E5",
    mystic: "#E4E6F0",
    black: "#000000",
    darkGrey: "#7E839A",
    white: "#FFFFFF",
    blue: "#0044CC",
    lightBlue: "#D6E4FF",
    yellow: "#FCD420",
    silverSand: "#C4C4C4",
    eerieBlack: "#18181B",
    slateGray: "#74788B",
    lynch: "#627489",
};

const common = {
    breakpoints: {
        xxsmall: 476,
        xsmall: 576,
        small: 768,
        medium: 992,
        large: 1200,
    }
};

export const theme = {
    colors: {
        textPrimary: colorNames.black,

        navigation: {
            background: colorNames.black,
            border: colorNames.mystic,
            elems: colorNames.white,
            searchIcon: colorNames.lynch,
        },
        site: {
            background: colorNames.lightGrey,
            text: colorNames.black,
        },
        tile: {
            background: colorNames.white,
            tagBackground: colorNames.mystic,
            details: colorNames.slateGray,
            year: colorNames.darkGrey,
        },
    },
        },
        button: {
            background: colorNames.blue,
            text: colorNames.white,
        },
        loader: {
            circle: colorNames.snuff,
            elipse: colorNames.black,
        },

        ...common,
    },
};
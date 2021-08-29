const colorNames = {
    lightGrey: "#F5F5FA",
    mystic: "#E4E6F0",
    black: "#000000",
    darkGrey: "#7E839A",
    white: "#FFFFFF",
    blue: "#0044CC",
    lightBlue: "#D6E4FF",
    silverSand: "#C4C4C4",
    eerieBlack: "#18181B",
    lynch: "#627489",
    shark: "#2E2F33",
    crimson: "#DC143C",
    woodsmoke: "#27272B",
    codGray: "#111111",
    desertStorm: "#EEEEEC",
    wildBlueYonder: "rgba(119, 139, 177, 0.5)",

};

const common = {
    breakpoints: {
        xxsmall: 476,
        xsmall: 576,
        small: 768,
        medium: 992,
        large: 1200,
        xlarge: 1350,
        xxlarge: 1650,
    }
};

export const theme = {
    colors: {
        textPrimary: colorNames.black,
        textSecondary: colorNames.darkGrey,
        textTertiary: colorNames.white,
        navigationBackground: colorNames.black,
        headerBackground: colorNames.black,
        itemsColor: colorNames.white,
        searchIcon: colorNames.lynch,
        siteBackground: colorNames.lightGrey,
        tilesBackground: colorNames.white,
        tagBackground: colorNames.mystic,
        substitutionPicture: colorNames.silverSand,
        hoverColor: colorNames.darkGrey,
        activeColor: colorNames.lightBlue,
        backgroundButton: colorNames.blue,
        loaderElipse: colorNames.black,
        paginationPrimaryText: colorNames.eerieBlack,
        paginationBackground: colorNames.lightBlue,
        paginationBackgroundDisabled: colorNames.mystic,
        paginationArrow: colorNames.blue,
        boxShadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
    },
    ...common,
};

export const darkTheme = {
    colors: {
        textPrimary: colorNames.desertStorm,
        textSecondary: colorNames.darkGrey,
        textTertiary: colorNames.white,
        navigationBackground: colorNames.codGray,
        headerBackground: colorNames.black,
        itemsColor: colorNames.desertStorm,
        searchIcon: colorNames.lynch,
        siteBackground: colorNames.woodsmoke,
        tilesBackground: colorNames.codGray,
        tagBackground: colorNames.shark,
        substitutionPicture: colorNames.silverSand,
        hoverColor: colorNames.wildBlueYonder,
        activeColor: colorNames.lightBlue,
        backgroundButton: colorNames.blue,
        loaderElipse: colorNames.black,
        paginationPrimaryText: colorNames.eerieBlack,
        paginationBackground: colorNames.lightBlue,
        paginationBackgroundDisabled: colorNames.mystic,
        paginationArrow: colorNames.blue,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",

    },
    ...common,
};
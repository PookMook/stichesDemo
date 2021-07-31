import { styled, theme } from "./stitches.config"

export const Text = styled("p", {
  margin: 0,
  color: theme.colors.primary,
  "h1&": {
    fontWeight: "normal",
    fontFamily: "$black",
    fontSize: "$title",
    textAlign: "center",
    color: "$plum12",
  },
  "h2&": {
    fontWeight: "normal",
    fontFamily: "$medium",
    fontSize: "$largeExtra",
    textAlign: "center",
    color: "$plum12",
  },
  "li&": {
    "&:not(last-child)": {
      marginBottom: "$small",
    },
  },
  variants: {
    Size: {
      Tagline: {
        "&:is(&)": {
          fontWeight: "bold",
          fontSize: "$banner",
          textAlign: "center",
          color: "$tagline",
        },
      },
      Title: {
        fontWeight: "bold",
        fontSize: "$title",
        textAlign: "center",
        color: "$title",
      },
    },
  },
})

// This is an unbreakable space (alt+255), use to prevent wrapping mid important stuff
export const nbsp = " "

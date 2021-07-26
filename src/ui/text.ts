import { styled } from "./stitches.config"

export const Text = styled("p", {
  margin: 0,

  "h1&": {
    fontWeight: "bold",
    fontSize: "$title",
    textAlign: "center",
  },
  "h2&": {
    fontWeight: "bold",
    fontSize: "$largeExtra",
    textAlign: "center",
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
        },
      },
      Title: {
        fontWeight: "bold",
        fontSize: "$title",
        textAlign: "center",
      },
    },
  },
})

export const nbsp = " "

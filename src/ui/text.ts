import { styled } from "./stitches.config"

export const Text = styled("p", {
  margin: 0,
  variants: {
    Size: {
      Tagline: {
        fontSize: "$banner",
      },
    },
  },
})

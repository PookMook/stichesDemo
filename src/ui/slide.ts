import { styled } from "./stitches.config"
import { Text } from "./text"

export const Slide = styled("article", {
  height: "100vh",
  width: "100vw",
  display: "grid",
  padding: "$large",
  placeItems: "center",
  variants: {
    Disposition: {
      Center: {
        placeItems: "center",
      },
      Titled: {
        gridTemplate: `"title" auto
        "main" 1fr / 1fr`,
      },
    },
  },
  defaultVariants: {
    Disposition: "Titled",
  },
})

export const Title = styled(Text, {
  gridArea: "title",
})

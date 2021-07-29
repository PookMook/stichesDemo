import { styled, theme } from "./stitches.config"
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
    up: {
      true: {
        "div.vertical:before": {
          content: "▲",
          fontSize: "$largeExtra",
          position: "absolute",
          top: theme.sizes.medium,
          color: "$greyed",
          filter: "blur(8px)",
        },
      },
    },
    right: {
      true: {
        "&::after": {
          content: "▶",
          fontSize: "$largeExtra",
          position: "absolute",
          right: theme.sizes.medium,
          color: "$greyed",
          filter: "blur(8px)",
        },
      },
    },
    left: {
      true: {
        "&:before": {
          content: "◀",
          fontSize: "$largeExtra",
          position: "absolute",
          left: theme.sizes.medium,
          color: "$greyed",
          filter: "blur(8px)",
        },
      },
    },
    down: {
      true: {
        "div.vertical": {
          position: "absolute",
          top: 0,
          bottom: 0,
        },
        "div.vertical:after": {
          content: "▼",
          fontSize: "$largeExtra",
          position: "absolute",
          bottom: theme.sizes.medium,
          color: "$greyed",
          filter: "blur(8px)",
        },
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

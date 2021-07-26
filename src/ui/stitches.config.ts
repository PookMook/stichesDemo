import { createCss, defaultThemeMap } from "@stitches/react"

function calculateScale(step: number, unit = "rem"): string {
  // Static config
  const baseScale = 1.618 // Golden ratio scale
  const halfStep = false

  const effectiveStep = halfStep ? Math.pow(baseScale, 0.5) : baseScale
  return Math.pow(effectiveStep, step) + unit
}

export const { styled, getCssString, keyframes, global, theme } = createCss({
  theme: {
    colors: {
      primary: "blue",
    },
    fontSizes: {
      halfScreen: "50%",
      clientSize: "100%",
      smallExtra: calculateScale(-2),
      small: calculateScale(-1),
      medium: calculateScale(0),
      large: calculateScale(1),
      largeExtra: calculateScale(2),
      title: calculateScale(3),
      banner: calculateScale(4),
    },
    sizes: {
      smallExtra: calculateScale(-2),
      small: calculateScale(-1),
      medium: calculateScale(0),
      large: calculateScale(1),
      largeExtra: calculateScale(2),
      title: calculateScale(3),
      banner: calculateScale(4),
    },
  },
  media: {
    tablet: "(min-width: 520px)",
    desktop: "(min-width: 1200px)",
    print: "print",
    withMotion: "(prefers-reduced-motion)",
  },
  themeMap: {
    ...defaultThemeMap,
    padding: "sizes",
    marginBottom: "sizes",
  },
})

export const ScreenShareTheme = theme("streaming", {
  fontSizes: {
    halfScreen: "75%",
    clientSize: "200%",
  },
})

export const globalStyles = global({
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
  html: {
    fontSize: "$halfScreen",
    "@desktop": {
      fontSize: "$clientSize",
    },
  },
  body: {
    margin: 0,
    boxSizing: "border-box",
  },
})

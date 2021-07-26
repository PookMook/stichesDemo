import { useEffect } from "react"

export function useSetTheme(theme: string): void {
  useEffect(() => {
    const Root = document.querySelector("html")
    if (Root) {
      Root.className = theme
    }
  })
}

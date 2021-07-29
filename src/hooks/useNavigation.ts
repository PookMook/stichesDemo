import { useRouter } from "next/router"
import { useHotkeys } from "react-hotkeys-hook"

type Navigation = {
  right?: string
  left?: string
  up?: string
  down?: string
}

// Not ideal, but easier to write
type NavigationHelper = {
  right?: true
  left?: true
  up?: true
  down?: true
}

export function useNavigation({ left, right, up, down }: Navigation): NavigationHelper {
  const router = useRouter()
  useHotkeys("left", () => {
    left && router.push(left)
  })
  useHotkeys("right", () => {
    right && router.push(right)
  })
  useHotkeys("up", () => {
    up && router.push(up)
  })
  useHotkeys("down", () => {
    down && router.push(down)
  })

  return {
    right: right ? true : undefined,
    left: left ? true : undefined,
    up: up ? true : undefined,
    down: down ? true : undefined,
  }
}

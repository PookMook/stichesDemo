import { useRouter } from "next/router"
import { useHotkeys } from "react-hotkeys-hook"

export function useNavigation(next: string | null, prev: string | null): void {
  const router = useRouter()
  useHotkeys("left", () => {
    prev && router.push(prev)
  })
  useHotkeys("right", () => {
    next && router.push(next)
  })
}

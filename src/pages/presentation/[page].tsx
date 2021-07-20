import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"

export default function PresentationPage(): JSX.Element {
  const router = useRouter()
  const { page } = router.query
  const [pageHook, setPage] = useState(Number(page))

  useHotkeys("right", () => {
    console.log(page)
    setPage((prev) => prev + 1)
  })

  useEffect(() => {
    router.push("/presentation/" + pageHook + 1)
  }, [pageHook, router])

  return <p>{page}</p>
}

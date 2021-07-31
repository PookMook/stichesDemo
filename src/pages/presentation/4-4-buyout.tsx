import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/5-Stitches",
    left: "/presentation/3-TailwindCSS",
    down: "/presentation/4-4-buyout",
    up: "/presentation/4-3-Inconsistency",
  })
  return (
    <Slide {...variants}>
      <div className="vertical" />
      <Text as="h2">Dev buy out</Text>
      <img src="/devBuyOut.png" style={{ width: "70vw", outline: "medium solid black" }} />
    </Slide>
  )
}

import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/7-Basics",
    left: "/presentation/5-Stitches",
    up: "/presentation/6-Caveats",
    down: "/presentation/6-Caveats",
  })
  return (
    <Slide {...variants}>
      <div className="vertical" />
      <Text as="h2">Installation base</Text>
      <img src="/npmtrends.png" style={{ width: "70vw", outline: "medium solid black" }} />
    </Slide>
  )
}

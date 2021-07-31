import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/5-Stitches",
    left: "/presentation/3-TailwindCSS",
    down: "/presentation/4-4-buyout",
    up: "/presentation/4-2-Interpolation",
  })
  return (
    <Slide {...variants}>
      <div className="vertical" />
      <Text as="h2">inconsistency</Text>
      <img src="/inconsistent.png" style={{ height: "70vh", outline: "medium solid black" }} />
    </Slide>
  )
}

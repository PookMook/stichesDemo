import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/5-Stitches",
    left: "/presentation/3-TailwindCSS",
    up: "/presentation/4-Problems",
    down: "/presentation/4-2-Interpolation",
  })
  return (
    <Slide {...variants}>
      <div className="vertical" />
      <Text as="h2">Interpolation</Text>
      <img src="/interpolation.png" style={{ width: "70vw", outline: "medium solid black" }} />
    </Slide>
  )
}

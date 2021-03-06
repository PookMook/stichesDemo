import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/5-Stitches",
    left: "/presentation/3-TailwindCSS",
    // up: "/presentation/4-test",
    down: "/presentation/4-1-Interpolation",
  })
  return (
    <Slide {...variants}>
      <div className="vertical" />
      <Text as="h2">Problems</Text>
      <ul>
        <Text as="li">Hard to build</Text>
        <Text as="li">Hard to maintain</Text>
        <Text as="li">Often ends up inconsistent over large codebases</Text>
      </ul>
    </Slide>
  )
}

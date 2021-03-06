import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/7-Basics",
    left: "/presentation/5-Stitches",
    down: "/presentation/6-2",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Caveats</Text>
      <ul>
        <Text as="li">Beta library, v1 releases soon</Text>
        <Text as="li">Unopinionated</Text>
        <Text as="li">Very small install base</Text>
      </ul>
    </Slide>
  )
}

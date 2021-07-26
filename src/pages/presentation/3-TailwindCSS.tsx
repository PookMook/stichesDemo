import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { nbsp, Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  useNavigation("/presentation/4-Problems", "/presentation/2-NoStyles")
  return (
    <Slide>
      <Text as="h2">
        Example of UI{nbsp}Design{nbsp}System: Tailwind{nbsp}CSS
      </Text>
      <main></main>
    </Slide>
  )
}

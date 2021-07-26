import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { nbsp, Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  useNavigation("/presentation/2-NoStyles", "/")
  return (
    <Slide>
      <Text as="h2">
        Before{nbsp}we{nbsp}start, what&apos;s a UI{nbsp}Design{nbsp}System?
      </Text>
      <ul>
        <Text as="li">UI portion of a Design System (way broader subject)</Text>
        <Text as="li">Collection of standard components you can use in your app</Text>
        <Text as="li">Ensure the visual consistency of your app</Text>
      </ul>
    </Slide>
  )
}

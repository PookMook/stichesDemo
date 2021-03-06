import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { nbsp, Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({ right: "/presentation/2-NoStyles", left: "/" })
  return (
    <Slide {...variants}>
      <Text as="h2">
        Before{nbsp}we{nbsp}start, what is a UI{nbsp}Design{nbsp}System?
      </Text>
      <ul>
        <Text as="li">UI portion of a Design System (way broader subject)</Text>
        <Text as="li">Collection of standard components you can use in your app</Text>
        <Text as="li">Ensure the visual consistency of your app</Text>
      </ul>
    </Slide>
  )
}

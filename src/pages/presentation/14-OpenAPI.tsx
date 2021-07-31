import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/15-FreeToGo",
    left: "/presentation/13-ClosedApi",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Open API</Text>
      <ul>
        <Text as="li">Lego building blocks</Text>
        <Text as="li">Can build a lot more stuff</Text>
      </ul>
    </Slide>
  )
}

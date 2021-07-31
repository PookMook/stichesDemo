import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/16-Links",
    left: "/presentation/14-OpenAPI",
  })
  return (
    <Slide {...variants} Disposition="Center">
      <Text as="h1">That's it</Text>
    </Slide>
  )
}

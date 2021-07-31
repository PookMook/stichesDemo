import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/9-Tokens",
    left: "/presentation/7-Basics",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Variants</Text>
    </Slide>
  )
}

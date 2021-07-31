import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/10-Config",
    left: "/presentation/8-Variants",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Tokens</Text>
    </Slide>
  )
}

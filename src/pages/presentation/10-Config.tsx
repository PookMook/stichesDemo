import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/11-ConfigAdvanced",
    left: "/presentation/9-Tokens",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Configuration</Text>
      <ul>
        <Text as="li">Scales</Text>
        <Text as="li">css prop uses tokens</Text>
      </ul>
    </Slide>
  )
}

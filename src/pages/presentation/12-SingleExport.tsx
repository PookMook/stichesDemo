import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/13-ClosedApi",
    left: "/presentation/11-ConfigAdvanced",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Single Export Pattern</Text>
      <ul>
        <Text as="li">1 component, lots of Variants</Text>
        <Text as="li">Central location to update</Text>
        <Text as="li">Consistency + css escape hatch</Text>
      </ul>
    </Slide>
  )
}

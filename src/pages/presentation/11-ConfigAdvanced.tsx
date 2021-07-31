import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/12-SingleExport",
    left: "/presentation/10-Config",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">more tools</Text>
      <ul>
        <Text as="li">utils</Text>
        <Text as="li">Breakpoints</Text>
        <Text as="li">theme</Text>
        <Text as="li">global getCssString </Text>
      </ul>
    </Slide>
  )
}

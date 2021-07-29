import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/14-ClosedApi",
    left: "/presentation/12-SingleExport",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Template</Text>
      <ul>
        <Text as="li"></Text>
        <Text as="li">Hard to maintain / upgrade</Text>
        <Text as="li">Often ends up inconsistent over large codebases</Text>
      </ul>
    </Slide>
  )
}

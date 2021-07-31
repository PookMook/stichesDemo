import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/14-OpenAPI",
    left: "/presentation/12-SingleExport",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Closed API</Text>
      <ul>
        <Text as="li">Easy to use: Playmobil</Text>
        <Text as="li">Difficult to code every possibility</Text>
      </ul>
    </Slide>
  )
}

import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/8-Variants",
    left: "/presentation/6-Caveats",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Basics</Text>
      <ul>
        <Text as="li">JS object</Text>
        <Text as="li">Pseudo class</Text>
        <Text as="li">Pseudo selector</Text>
        <Text as="li">media/supports</Text>
        <Text as="li">css props</Text>
      </ul>
    </Slide>
  )
}

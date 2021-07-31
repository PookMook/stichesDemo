import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/6-Caveats",
    left: "/presentation/4-Problems",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">Stitches</Text>
      <ul>
        <Text as="li">CSS-in-JS</Text>
        <Text as="li">Near-zero runtime</Text>
        <Text as="li">SSR</Text>
        <Text as="li">Variants as first class citizen</Text>
      </ul>
    </Slide>
  )
}

import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { nbsp, Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({
    right: "/presentation/4-Problems",
    left: "/presentation/2-NoStyles",
  })
  return (
    <Slide {...variants}>
      <Text as="h2">
        Example of UI{nbsp}Design{nbsp}System: Tailwind{nbsp}CSS
      </Text>
      <main>
        <img src="/tailwind.png" style={{ width: "70vw", outline: "medium solid black" }} />
      </main>
    </Slide>
  )
}

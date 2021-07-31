import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"
import { Text } from "ui/text"

export default function PresentationPage(): JSX.Element {
  const variants = useNavigation({ left: "/presentation/15-FreeToGo" })
  return (
    <Slide {...variants} Disposition="Center">
      <ul>
        <Text as="li">My name is Arthur Juchereau</Text>
        <Text as="li">Welbi is hiring engineers</Text>
        <Text as="li">twitter @ArthurBienSur</Text>
        <Text as="li">youtube.com/c/ArthurJuchereau</Text>
      </ul>
    </Slide>
  )
}

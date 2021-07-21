import { ReactElement } from "react"
import { Slide } from "ui/slide"
import { useNavigation } from "hooks/useNavigation"
import { Text } from "ui/text"

export default function IndexPage(): ReactElement {
  useNavigation("presentation/1", null)

  return (
    <Slide>
      <Text Size="Tagline" as="h1">
        Stitches.js Presentation
      </Text>
    </Slide>
  )
}

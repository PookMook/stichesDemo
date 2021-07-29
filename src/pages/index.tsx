import { ReactElement } from "react"
import { Slide } from "ui/slide"
import { useNavigation } from "hooks/useNavigation"
import { Text, nbsp } from "ui/text"

export default function IndexPage(): ReactElement {
  const variants = useNavigation({ right: "presentation/1-whatUIDS" })

  return (
    <Slide Disposition="Center" {...variants}>
      <Text as="h1">
        Creating a UI{nbsp}Design{nbsp}System with{nbsp}Stitches
      </Text>
    </Slide>
  )
}

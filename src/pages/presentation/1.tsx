import { useNavigation } from "hooks/useNavigation"
import { Slide } from "ui/slide"

export default function PresentationPage(): JSX.Element {
  useNavigation("presentation/2", "/")
  return <Slide>The Problem</Slide>
}

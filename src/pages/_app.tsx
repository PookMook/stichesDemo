import { useSetTheme } from "hooks/useSetTheme"
import "css/fonts.css"
import type { AppProps } from "next/app"
import { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { globalStyles, ScreenShareTheme } from "ui/stitches.config"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps): ReactElement {
  globalStyles()
  useSetTheme(ScreenShareTheme)

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

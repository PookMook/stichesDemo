import type { AppProps } from "next/app"
import { FC, ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { globalStyles } from "ui/stitches.config"

const queryClient = new QueryClient()

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: {
    extra?: FC
  }
}): ReactElement {
  globalStyles()
  if (Component.extra) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component.extra>
          <Component {...pageProps} />
        </Component.extra>
      </QueryClientProvider>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

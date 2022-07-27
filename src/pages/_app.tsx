// i18n
import { NextIntlProvider } from 'next-intl'

// Nextjs
import type { AppProps } from 'next/app'

// Styles
import '@theme/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp

import React from 'react'
import { ThemeProvider } from 'styled-components'

// i18n
import { useTranslations } from 'next-intl'

// Nextjs
import Head from 'next/head'

// Types
import { LayoutProps } from '@layouts/Default.types'

// Styles
import { theme } from '@theme/default'

// Components
import { Header } from '@components/Header'

const DefaultLayout = ({
  children,
  title,
  description
}: LayoutProps) => {
  const t = useTranslations('global')

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          {title} | Gymtastic© - {t('heading')}
        </title>
        <meta
          name="description"
          content={description ? description : t('heading')}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header
        title={title}
      />
      {children}
    </ThemeProvider>
  )
}

export { DefaultLayout }

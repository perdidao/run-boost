import React from 'react'

// i18n
import { useTranslations } from 'next-intl'

// Helpers

// Components
import Link from 'next/link'

// Assets

// Env

// Types
import { HeaderProps as Props } from './Header.types'

// Styles
import * as Styled from './Header.styles'

const Header = (props: Props): JSX.Element => {
  const {
    title
  } = props

  const t = useTranslations('global')

  return (
    <Styled.Container>
      <Styled.Title>{t('title')}</Styled.Title>
      <nav>
        {title}
        <Link href="/another-page">Outra página</Link>
      </nav>
    </Styled.Container>
  )
}

export { Header }

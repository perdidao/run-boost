import React from 'react'

// i18n
// import { useTranslations } from 'next-intl'

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

  // const { t } = useTranslations()

  return (
    <Styled.Container>
      <Styled.Title>Run Boost</Styled.Title>
      <nav>
        {title}
        <Link href="/teste">Teste</Link>
      </nav>
    </Styled.Container>
  )
}

export { Header }

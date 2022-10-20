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
import { useGetProjectInfo } from '@services/useGetProjectInfo'

const Header = (props: Props): JSX.Element => {
  const {
    title
  } = props

  const t = useTranslations('global')

  const {
    data,
    isFetching,
    isError
  } = useGetProjectInfo()

  console.log(data)

  const renderContent = (): JSX.Element => {
    if (isFetching) {
      return <p>Carregando...</p>
    }
    
    if (isError || !data) {
      return <p>An error occurred...</p>
    }

    return (
      <>
        <Styled.Title>{data.title}</Styled.Title>
        <p>{data.description}</p>
        <nav>
          {title}
          <Link href="/another-page">Outra página</Link>
        </nav>
      </>
    )
  }

  return (
    <Styled.Container>
      {renderContent()}
    </Styled.Container>
  )
}

export default Header

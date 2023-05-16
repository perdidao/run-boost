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
import * as S from './Header.styles'
import { useGetProjectInfo } from '@services/useGetProjectInfo'

const Header = (props: Props): JSX.Element => {
  const { title } = props

  const t = useTranslations('global')

  const { data, isFetching, isError } = useGetProjectInfo()

  const renderContent = (): JSX.Element => {
    if (isFetching) {
      return <p>{t('states.loading')}</p>
    }

    if (isError || !data) {
      return <p>{t('states.error')}</p>
    }

    return (
      <>
        <S.Title>{data.title}</S.Title>
        <p>{data.description}</p>
        <nav>
          {title}
          <Link href="/another-page">Outra página</Link>
        </nav>
      </>
    )
  }

  return <S.Container>{renderContent()}</S.Container>
}

export default Header

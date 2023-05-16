import React from 'react'

// i18n
import { useTranslations } from 'next-intl'

// Helpers

// Components
import Image from 'next/image'
import logo from '@images/logo.png'

// Assets

// Env

// Types
// import { HeaderProps as Props } from './Header.types'

// Styles
import * as S from './Header.styles'
import { useGetProjectInfo } from '@services/useGetProjectInfo'

const Header = (): JSX.Element => {
  const t = useTranslations('global')

  const projectInfoRequest = useGetProjectInfo()

  if (projectInfoRequest.isFetching) {
    return <p>{t('states.loading')}</p>
  }

  if (projectInfoRequest.isError || !projectInfoRequest.data) {
    return <p>{t('states.error')}</p>
  }

  return (
    <S.Container>
      <Image
        src={logo.src}
        alt={projectInfoRequest.data.title}
        width={271}
        height={35}
      />
      <S.Title>{projectInfoRequest.data.description}</S.Title>
    </S.Container>
  )
}

export default Header

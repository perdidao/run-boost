import React from 'react'

// i18n

// Helpers

// Components

// Assets

// Env

// Types

// Styles
import * as S from './HomeContent.styles'

const HomeContent = (): JSX.Element => {
  return (
    <S.Container>
      <S.About>
        Welcome to Run Boost, an easy way to start lusty projects with NextJs +
        TS
      </S.About>
      <S.Title>Core features</S.Title>
      <S.Features>
        <S.Feature>
          Tokenized theme structure with helpers using Styled Components
        </S.Feature>
        <S.Feature>i18n ready with next-intl</S.Feature>
        <S.Feature>React Query for request handling</S.Feature>
        <S.Feature>
          PLOP for creating new components and keeping code consistency
        </S.Feature>
      </S.Features>
    </S.Container>
  )
}

export default HomeContent

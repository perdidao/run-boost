import styled from 'styled-components'

// Helpers
import { fontTitle, color, spacing, toRem } from '@helpers/designSystem'

// Types

// Core element styles
export const Container = styled.div`
  max-width: ${toRem(860)};
  margin: 0 auto;
  padding: ${spacing('xxl')} 0;
`

export const Title = styled.h1`
  ${fontTitle('sm')}
  color: ${color('brand-primary')};
  margin-top: ${spacing('xxxs')};
`

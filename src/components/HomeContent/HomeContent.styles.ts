import {
  color,
  fontBody,
  fontTitle,
  spacing,
  toRem,
} from '@helpers/designSystem'
import styled from 'styled-components'

// Helpers
// import { } from '@helpers/designSystem'

// Types

// Core element styles
export const Container = styled.div`
  max-width: ${toRem(860)};
  margin: 0 auto;
`

export const About = styled.p`
  ${fontBody()};
  margin-bottom: ${spacing('xs')};
`

export const Title = styled.h2`
  ${fontTitle('lg')};
  color: ${color('brand-primary')};
  margin-bottom: ${spacing('xxxs')};
`

export const Features = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-gap: ${toRem(20)};
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Feature = styled.li`
  background-color: ${color('background-secondary')};
  padding: ${spacing('xxs')};
  margin: 0;
  border-radius: ${toRem(5)};
  ${fontBody()};
`

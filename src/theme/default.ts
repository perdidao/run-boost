import { colors } from './colors'
import { fonts } from './fonts'
import { spacing } from './spacing'

export const theme: Record<string, unknown> = {
  fonts: fonts,
  colors: colors,
  spacing: spacing,
  animation: {
    bezier: '200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    easeInOut: '200ms ease-in-out',
  },
}

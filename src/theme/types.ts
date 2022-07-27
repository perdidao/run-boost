export type Size =
  | 'nano'
  | 'tiny'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'huge'
  | 'giga'

export type FontSize =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export type LineHeight =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export type FontSpacing = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase'

export type FontFamily = 'primary' | 'secondary'

export type FontWeight = 'normal' | 'medium' | 'semibold'

export type FontPresetSize = 'sm' | 'md' | 'lg'

export type MediaSize = 'mobile' | 'tablet' | 'desktop'

export interface ThemeOptions {
  [key: string]: Record<string, unknown>
}

export interface FontProps {
  family?: string
  weight?: FontWeight
  size?: FontSize
  height?: LineHeight
  spacing?: FontSpacing
  transform?: TextTransform
}

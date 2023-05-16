import { ThemeColorsProps } from './types'

export const colors: ThemeColorsProps = {
  primary: '#FF781F',
  white: '#FFFFFF',
  black: '#000000',

  brand: {
    primary: '#FF781F',
  },

  shadow: {
    focus: '#356afd66',
  },

  background: {
    default: '#141414',
    primary: '#1a1a1a',
    secondary: '#1F1F1F',
    tertiary: '#292929',
    highlight: 'rgba(255,255,255,.04)',
  },

  border: {
    primary: 'rgba(255,255,255,.48)',
    secondary: 'rgba(255,255,255,.24)',
    tertiary: 'rgba(255,255,255,.12)',
  },

  content: {
    primary: '#FFF',
    secondary: 'rgba(255,255,255,.80)',
    tertiary: 'rgba(255,255,255,.40)',
    inverted: {
      primary: 'rgba(0,0,0,.88)',
      secondary: 'rgba(0,0,0,.64)',
      tertiary: 'rgba(0,0,0,.40)',
    },
  },

  feedback: {
    error: '#f43630',
    info: '#308cf4',
    success: '#8fb300',
    warning: '#FCA903',
  },
}

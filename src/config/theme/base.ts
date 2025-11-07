import type { ThemeOptions } from '@mui/material/styles'

export const baseOptions: ThemeOptions = {
  customLayout: {
    sideBarSize: '25.52rem'
  },
  cssVariables: {
    colorSchemeSelector: '.theme-%s'
  },
  colorSchemes: {
    light: true,
    dark: true
  }
}

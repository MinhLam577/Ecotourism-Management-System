import '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Theme {
    customLayout: {
      sideBarSize: string
    }
  }
  interface ThemeOptions {
    customLayout?: {
      sideBarSize?: string
    }
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'outline-danger': true
    ghost: true
    gradient: true
  }

  interface ButtonPropsSizeOverrides {
    extraLarge: true
    icon: true
  }
}

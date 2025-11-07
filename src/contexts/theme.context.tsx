import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../config'
import { darkTheme } from '../config'
import type { ThemeContextProviderProps } from '../types/theme'

export function ThemeContextProvider({
  children,
  defaultMode = 'system'
}: ThemeContextProviderProps) {
  const theme = {
    ...lightTheme,
    ...darkTheme
  }

  return (
    <ThemeProvider theme={theme} defaultMode={defaultMode}>
      {children}
    </ThemeProvider>
  )
}

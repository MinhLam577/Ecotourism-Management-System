import { useColorScheme } from '@mui/material/styles'
import type { CurrentThemeMode, ThemeMode } from '~/types/theme'
export function useThemeMode() {
  const { mode, setMode, systemMode } = useColorScheme()
  const currentThemeMode = mode === 'system' ? systemMode : mode

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode)
  }

  return {
    mode: mode as ThemeMode,
    currentThemeMode: currentThemeMode as CurrentThemeMode,
    setMode: setThemeMode
  }
}

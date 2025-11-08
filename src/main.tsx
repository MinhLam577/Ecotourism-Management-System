import { createRoot } from 'react-dom/client'
import '~/styles/global.css'
import '~/styles/index.css'
import App from '~/App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { lightTheme } from '~/config'
import { ThemeProvider } from '@mui/material/styles'
createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)

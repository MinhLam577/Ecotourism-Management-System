import Container from '@mui/material/Container'
import SideBar from './sidebar'
interface MainLayoutProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="min-h-screen"
      sx={{
        display: 'grid',
        gridTemplateColumns: (theme) => `${theme.customLayout.sideBarSize} 1fr`
      }}
    >
      <SideBar />
      {children}
    </Container>
  )
}
export default MainLayout

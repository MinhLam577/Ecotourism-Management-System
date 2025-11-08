import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { useTheme } from "@mui/material/styles"
import { useState } from "react"
import SideBar from "~/components/layout/sidebar"
import { pxToRem } from "~/utils/convert-px-to-unit.utils"
interface MainLayoutProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const [open, setOpen] = useState(true)

  const theme = useTheme()
  const sidebarWidth = open ? theme.customLayout.sideBarSize : pxToRem(64)
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="min-h-screen"
      sx={{
        display: "grid",
        gridTemplateColumns: `${sidebarWidth} 1fr`,
        transition: (theme) =>
          theme.transitions.create("grid-template-columns", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          })
      }}
    >
      {/* SIDEBAR */}
      <SideBar open={open} setOpen={setOpen} />

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ overflow: "auto", minHeight: "100%" }}>
        {children}
      </Box>
    </Container>
  )
}
export default MainLayout

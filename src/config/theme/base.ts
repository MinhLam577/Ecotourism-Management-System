import type { ThemeOptions } from "@mui/material/styles"
import colors from "tailwindcss/colors"
import { pxToRem } from "~/utils/convert-px-to-unit.utils"
import { normalizeTailwindColor } from "~/utils/tailwind.utils"

export const baseOptions: ThemeOptions = {
  customLayout: {
    openSideBarSide: "25.52rem",
    closeSideBarSide: pxToRem(64),
    closePaddingSideBar: `${pxToRem(12)} ${pxToRem(12)}`,
    openPaddingSideBar: `${pxToRem(12)} ${pxToRem(2)}`
  },
  customBackgroundColor: {
    main: "linear-gradient(to right, #16a34a, #eab308)",
    hoverListItemColor: normalizeTailwindColor(colors.green[200], 0.5)
  },
  cssVariables: {
    colorSchemeSelector: ".theme-%s"
  },
  colorSchemes: {
    light: true,
    dark: true
  }
}

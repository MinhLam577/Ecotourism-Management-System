import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
export default function HeaderUserPage() {
  return (
    <Box className="flex justify-between items-center">
      <Typography
        className="text-[3rem]!"
        sx={{
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          background: (theme) => theme.customBackgroundColor.main,
          color: 'transparent',
          backgroundClip: 'text',
          fontWeight: 600
        }}
      >
        Quản lý người dùng
      </Typography>
      <Typography className="inline-flex! items-center! justify-center! font-medium! whitespace-nowrap! bg-yellow-500! text-white shadow-sm! px-[1.6rem]! py-[0.8rem]! text-[1.8rem]! gap-4! rounded-xl! [&_svg]:text-[1.8rem]!">
        <PeopleOutlineIcon />
        <span> 5 Users</span>
      </Typography>
    </Box>
  )
}

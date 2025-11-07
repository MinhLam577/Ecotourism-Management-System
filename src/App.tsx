import Box from '@mui/material/Box'
import MainLayout from './container/layout/main-layout'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            <Route path="/" element={<Box className="bg-secondary">header</Box>} />
            <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

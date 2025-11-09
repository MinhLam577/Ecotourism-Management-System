import { MainLayout } from "~/components/layout"
import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import { DashBoard } from "~/pages"
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App

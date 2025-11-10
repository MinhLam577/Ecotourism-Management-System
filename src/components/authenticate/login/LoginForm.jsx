import React, { useState } from 'react'
import './LoginForm.css'
import { login } from '~/api/instances/Au'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email là bắt buộc'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ'
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu là bắt buộc'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    setGeneralError('')

    try {
      const response = await login(formData.email, formData.password)

      // Lưu token vào localStorage
      if (response.Token || response.token) {
        localStorage.setItem('token', response.Token || response.token)
      }

      // Lưu thông tin user nếu có (backend có thể trả về UserInfo hoặc userInfo)
      const userInfo = response.UserInfo || response.userInfo
      if (userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }

      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      const errorMessage = error.message || 'Đăng nhập thất bại. Vui lòng thử lại!'
      setGeneralError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="login-container max-w-[65%] grid grid-col-1 gap-[2.4rem] lg:gap-0 lg:grid-cols-[1fr_1fr] w-full place-content-center text-[160%]!">
        <div className="lg:flex flex-col gap-[2.4rem] bg-[#ede8df] items-center hidden justify-center">
          <img src="/images/logo.png" alt="Logo" className="max-w-[100%] h-auto" />
        </div>
        <div className="login-card rounded-none!">
          <div className="brand"></div>
          <h3 className="title">Đăng nhập</h3>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email của bạn"
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <div className="input-wrapper with-toggle">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Nhập mật khẩu"
                  className={errors.password ? 'error' : ''}
                />
                <span className="toggle-icon" aria-hidden>
                  👁️
                </span>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            {generalError && (
              <div
                className="error-message general-error"
                style={{
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  backgroundColor: '#fee',
                  color: '#c33',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}
              >
                {generalError}
              </div>
            )}
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Ghi nhớ đăng nhập
              </label>
              <a href="/forgot-password" className="forgot-password">
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Đang đăng nhập...
                </>
              ) : (
                'Đăng nhập'
              )}
            </button>
          </form>
          <div className="divider">
            <span>HOẶC</span>
          </div>
          <button className="google-button">
            <span className="g-icon">G</span>
            Đăng nhập bằng Google
          </button>
          <div className="signup-link">
            <p>
              Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

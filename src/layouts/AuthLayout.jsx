import { Outlet } from 'react-router-dom'
import HeaderAuth from '@/components/headerAuth'

export default function AuthLayout() {
  return (
    <>
      <HeaderAuth />
      <Outlet />
    </>
  )
}

import { Outlet } from 'react-router-dom'
import HeaderAuth from '@/components/HeaderAuth'

export default function AuthLayout() {
  return (
    <>
      <HeaderAuth />
      <Outlet />
    </>
  )
}

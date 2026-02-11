import { Outlet } from 'react-router-dom'
import HeaderSearch from '@/components/headerSearch'

export default function AppLayout() {
  return (
    <>
      <HeaderSearch />
      <Outlet />
    </>
  )
}

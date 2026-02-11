import { Outlet } from 'react-router-dom'
import HeaderSearch from '@/components/HeaderSearch'

export default function AppLayout() {
  return (
    <>
      <HeaderSearch />
      <Outlet />
    </>
  )
}

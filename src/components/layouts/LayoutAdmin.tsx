import React, {  FC } from 'react'
import AdminHeader from '../commons/admin/AdminHeader'
import Footer from '../commons/Footer'
import { LayoutRouteProps, Outlet } from 'react-router-dom'

const LayoutAdmin: FC<LayoutRouteProps> = ({ children }) => {
  return (
    <div className='fixed top-0'>
    <AdminHeader/>
    <div className="content w-full flex justify-center pt-24  pt-24">
        <div className=" max-w-7xl px-4 w-4/5">{children || <Outlet />}</div>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutAdmin

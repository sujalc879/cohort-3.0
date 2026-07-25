import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div>
      this is header of AuthLayout
      <Outlet />
      this is Footer of AuthLayout
    </div>
  )
}

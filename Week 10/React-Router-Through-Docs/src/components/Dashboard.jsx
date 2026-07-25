import React from 'react'
import { Outlet } from 'react-router'

export default function Dashboard() {
  return (
    <div>
      this is the header of Dashboard
      <Outlet />
      this is the footer of Dashboard
    
    </div>
  )
}

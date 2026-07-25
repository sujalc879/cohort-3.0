import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import MyLoginForm from './MyLoginForm';
import Header from './Header';
import Footer from './Footer';
import SearchResults from './SearchReasults';

export default function Layout() {
    // const navigate = useNavigate();
  return (
    <div>
      <SearchResults />
    </div>
  )
}

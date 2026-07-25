import { BrowserRouter, Route, Routes, useNavigate } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import AuthLayout from "./components/AuthLayout"
import Login from "./components/Login"
import Register from "./components/Register"
import ConcertsHome from "./components/ConcertsHome"
import City from "./components/City"
import Trending from "./components/Trending"

import Dashboard from "./components/Dashboard"
import Settings from "./components/Settings"
import Header from "./components/Header"
import Contact from "./components/Contact"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import MyLoginForm from "./components/MyLoginForm"

function App() {
  

  // let navigate = useNavigate(); // 🧠 Step 1: Get the navigate function

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Layout />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Landing from "./components/Landing"
import Class11Program from "./components/Class11Program"
import Class12Program from "./components/Class12Program"
import ErrorPage from "./components/ErrorPage"
import Layout from "./components/Layout"
// import { Landing, Class11Program, Class12Program } from "./components/index.jsx"
function App() {
  return (
    <>
    <div>
      <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />}/>
          <Route path="/neet/class-11" element={<Class11Program />}/>
          <Route path="/neet/class-12" element={<Class12Program />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

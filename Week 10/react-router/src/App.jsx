import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Layout from "./Layout";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
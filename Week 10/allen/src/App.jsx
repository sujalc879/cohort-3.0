import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import OnlineCourse from "./components/pages/OnlineCourse";
import ClassroomCourse from "./components/pages/ClassroomCourse";
import Scholarship from "./components/pages/Scholarship";
import TestSeries from "./components/pages/TestSeries";
import Result from "./components/pages/Result";
import AllenStore from "./components/pages/AllenStore";
import More from "./components/pages/More";
import RequestCall from "./components/pages/RequestCall";
import Login from "./components/pages/Login";

export default function App() {
  return(
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/classroom-courses" element={<ClassroomCourse />} />
          <Route path="/online-courses" element={<OnlineCourse />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/result" element={<Result />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/allen-store" element={<AllenStore />} />
          <Route path="/more" element={<More />} />
          <Route path="/request-call" element={<RequestCall />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <Link to={"/"}>
      Allen
      </Link>
      | 
      <Link to={"/neet/class-11"}>
        class 11
      </Link>
       |
       <Link to={"/neet/class-12"}>
        class 12
        </Link >

        <Outlet />
        footer
    </div>
  )
}

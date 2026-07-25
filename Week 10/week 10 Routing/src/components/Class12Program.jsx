import { Link, useNavigate } from "react-router-dom"


export default function Class12Program() {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/");
  }
  return (
    <div>
      Class 12 Program Here
      <Link to={"/"}>
      go to home
      </Link> 
    </div>
  )
}

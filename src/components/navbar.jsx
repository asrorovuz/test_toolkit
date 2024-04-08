import { Link } from "react-router-dom"
import { logo } from "../constants"

const navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <div className="w-25">
      <Link to={"/"}><img src={logo} width={80} alt="logo"/></Link>
      </div>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={"/login"} class="me-3 py-2 link-body-emphasis text-decoration-none">Login</Link>
        <Link to={"/register"} class="me-3 py-2 link-body-emphasis text-decoration-none">Register</Link>
      </nav>
    </div>
  )
}

export default navbar
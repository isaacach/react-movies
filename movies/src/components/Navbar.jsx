import { Link } from "react-router-dom";
import '../styles/navbar.css';
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Navbar() {

  return (
    <nav>
      <div className="logo">
        <h2>MovieMosaic</h2>
      </div>
      <div className="links">
        <div className="link-wrapper">
          <Link>Tv Shows</Link>
        </div>
        <div className="link-wrapper">
          <Link>Movies</Link>
        </div>
        <div className="link-wrapper">
          <FaMagnifyingGlass />
        </div>
      </div>
    </nav>
  )
}
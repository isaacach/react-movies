import '../styles/searchbar.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <form >
      <input type="text" />
      <div className="search">
        <FaMagnifyingGlass />
      </div>
      
    </form>
  )
}
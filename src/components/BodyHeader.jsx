import { NavLink } from "react-router-dom";

const Header = () => {
 return  <header>
         <nav className="navbar navbar-expand-lg">
            <div className="container d-flex">
                <NavLink className="navbar-brand" to="/">Meetup</NavLink>
                <input className="me-2 rounded" type="search" placeholder="Search by event title and tags" aria-label="Search"/>
            </div>
        </nav>
        <hr />
      </header>
}

export default Header;
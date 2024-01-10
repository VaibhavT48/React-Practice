import { LOGO_URL } from "../utils/constants";


// Header component for header section: Logo, Nav Items
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
        <img className="logo" src= {LOGO_URL} />
    
        </div>
    
        <div className="nav-items">
          <ul>
            
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;


import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/ragu" activeStyle>
            Ragu
          </NavLink>
          <NavLink to="/pretty" activeStyle>
            Pretty
          </NavLink>
          <NavLink to="/molly" activeStyle>
            Molly
          </NavLink>
          <NavLink to="/daisy" activeStyle>
            Daisy
          </NavLink>
          <NavLink to="/alli" activeStyle>
            Alli
          </NavLink>
          <NavLink to="/catshare" activeStyle>
            Tell Us About Your Cat!
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
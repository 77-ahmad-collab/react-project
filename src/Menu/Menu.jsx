import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuitems">
      <NavLink
        exact
        activeClassName="active"
        className="singleitem"
        to="/birthday"
      >
        Birthday
      </NavLink>
      <NavLink exact activeClassName="active" className="singleitem" to="/tour">
        Tour
      </NavLink>
    </div>
  );
};

export default Menu;

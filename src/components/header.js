import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>HOME</Link>
          </div>
          <a className='menu' href="mailto:johnnie-l@live.ca">CONTACT</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="container">
        <li>
          <div onClick={() => window.open("https://johnnielaii.wordpress.com", "_blank")}>
            BLOG
        </div>
        </li>
        <li>
          <div onClick={() => window.open("https://github.com/krytical", "_blank")}>
            GITHUB
        </div>
        </li>
        <li>
          <div onClick={() => window.open("https://www.linkedin.com/in/johnnielai", "_blank")}>
            LINKEDIN
        </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
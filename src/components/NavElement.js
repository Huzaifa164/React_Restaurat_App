import React from "react";

const NavElement = ({ category, filterItem }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(category)
    filterItem(category);
  }
  return (
    <div onClick={handleClick}>
      <li className="nav-item">
        <a className="nav-link active" href="/">
          {category}
        </a>
      </li>
    </div>
  );
};

export default NavElement;

import React from "react";
import NavElement from "./NavElement";

// console.log(categories);

const Navbar = ({ categories, filterItem }) => {
  return (
    <div className="p-5">
      <ul className="nav justify-content-center">
        {categories.map((category, index) => {
          return <NavElement key={index} category={category} filterItem={filterItem} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;

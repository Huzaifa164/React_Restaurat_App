import React from "react";
import Card from "./Card";

const MenuCards = ({ item }) => {
  return (
    <div className="row container-fluid">
      {item.map((currElem) => {
        return <Card item={currElem} key={currElem.id} />;
      })}
    </div>
  );
};

export default MenuCards;

import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
      <div className="card text-center">
        <img src={item.image} className="card-img-top" alt="..." style={{width: '100%', height: '250px'}}></img>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.description}
          </p>
          <p className="card-text"><span className="font-weight-bold">Category:</span> {item.category}</p>
          <p className="card-text"><span className="font-weight-bold">Price:</span> {item.price}</p>
          <a href="/" className="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

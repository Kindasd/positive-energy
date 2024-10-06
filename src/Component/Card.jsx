import React from "react";


const Card = ({photo}) => {

  return (
    <div className="card" >
      <img  src={photo} alt={photo} />
    </div>
  );
};

export default Card;

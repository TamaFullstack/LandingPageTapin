import React from "react";

const Button = ({ title, bg, py}) => {
  return (
    <button className={`btn btn-${bg} py-${py} rounded`} type="button">
      {title}
    </button>
  );
};

export default Button;

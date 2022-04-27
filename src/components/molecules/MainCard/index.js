import React from "react";
import Button from "../../atoms/Button";
import { CardPtitle } from "./styled";

const MainCard = ({ title, title2, paragraf, image, BtnTitle }) => {
  return (
    <div className="card bg-grey border-0">
      <img
        src={image}
        className="card-img-top img-card rounded-circle mx-auto "
        alt="..."
      />
      <div className="card-body text-center ">
        <h2 className="fw-bold">{title}</h2>
        <h2 className="fw-bold">{title2}</h2>
        <CardPtitle>{paragraf}</CardPtitle>
        <div class="d-grid gap-2 mt-5">
          <Button title={BtnTitle} bg={"green"} py={"4"} />
        </div>
      </div>
      
    </div>
  );
};

export default MainCard;

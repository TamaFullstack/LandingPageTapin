import React from "react";
import { Card, CardBody, CardImage, CardTitle, CardTanggal } from "./styled";
import Button from "./../../atoms/Button/index";

const ArticleCard = () => {
  return (
    <Card>
      <CardImage src="https://desa.gides.id/uploads/2cf5702c193b4f4f486e53f821f8de5b.jpg" />
      <CardBody>
        <CardTitle>
          Panen Jagung Desa Anyar Sangat Berlimpah Tahun Ini
        </CardTitle>
        <CardTanggal> 28 March 2022 </CardTanggal>
        Kades Anyar melakukan panen jagung secara masal bersama warga desa ...
        <br></br>
        <div className="d-grid gap-2 mt-5">
          <Button title={"Selengkapnya"} bg={"Outline-green"} py={"4"} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;

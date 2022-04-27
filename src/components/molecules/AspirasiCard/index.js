import React from "react";
import { Card, CardHeader } from "./styled";

const AspirasiCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="d-flex">
          <img
            src="https://desa.gides.id/assets/templates/images/review.png"
            class="img-fluid} me-4"
            alt=""
          />

          <h3>Kritik dan Saran</h3>
        </div>

        
      </CardHeader>
    </Card>
  );
};

export default AspirasiCard;

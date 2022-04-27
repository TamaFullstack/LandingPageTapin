import React from "react";
import AspirasiCard from "../../molecules/AspirasiCard";

const Aspirasi = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className=" col-12 col-md-12">
          <h1>Aspirasi Masyarakat Desa</h1>
        </div>

        <div className="row">
          <div className=" col-12 col-md-12">
            <AspirasiCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aspirasi;

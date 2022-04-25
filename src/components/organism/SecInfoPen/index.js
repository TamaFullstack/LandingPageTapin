import React from "react";
import "./index.css";
import Button from "../../atoms/Button";

const SecInfoPen = () => {
  return (
    <>
      <h2 className="text-center fw-bold mt-5">Informasi Grafis</h2>
      <h2 className="text-center fw-bold mb-4">Desa Benua Halat</h2>

      <div className="row bg-green text-center ms-0 me-0">
        <div className="col-12 col-md-3">
          <img
            src="https://desa.gides.id/assets/templates/images/map.png"
            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
            alt=""
          />
          <p className="pendd">Area</p>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Luas Tanah Kas Desa</p>
          <span className="fw-bold">30000m2</span>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Luas Tanah </p>
          <span className="fw-bold">14640000m2</span>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Luas DKHP</p>
          <span className="fw-bold">0m2</span>
        </div>
      </div>

      <div className="row bg-green-1 text-center ms-0 me-0">
        <div className="col-12 col-md-3">
          <img
            src="https://desa.gides.id/assets/templates/images/users.png"
            class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
            alt=""
          />
          <p className="pendd">Populasi</p>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Jumlah Penduduk</p>
          <span className="fw-bold">14451</span>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Laki - laki</p>
          <span className="fw-bold">4451</span>
        </div>
        <div className="col-12 col-md-3">
          <p className="m-0">Perempuan</p>
          <span className="fw-bold">10000</span>
        </div>

        <div>
          <Button title="Lihat Selengkapnya" bg={"yellow"} />
        </div>
      </div>
    </>
  );
};

export default SecInfoPen;

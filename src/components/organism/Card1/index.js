import React from "react";
import { MainCard } from "../../molecules";
import "./card.css";

const Card1 = () => {
  return (
    <section className="Container mt-5 ">
      <div className="text-center label">
        <h2 className="fw-bold">Fokus Pengembangan</h2>
        <h2 className="fw-bold">Desa Percontohan</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <MainCard
              image="https://desa.gides.id/assets/templates/images/penyelengaraan.png"
              title="Penyelenggaraan"
              title2="Pemerintah Desa"
              paragraf="Masyarakat yang adil dan sejahtera"
              BtnTitle="Lihat Selengkapnya"
            />
          </div>
          <div className="col-12 col-md-4">
            <MainCard
              image="https://desa.gides.id/assets/templates/images/pembangunan.png"
              title="Pelaksanaan"
              title2="Pembangunan Desa"
              paragraf="Masyarakat yang jujur dan Agamis"
              BtnTitle="Lihat Semua"
            />
          </div>
          <div className="col-12 col-md-4">
            <MainCard
              image="https://desa.gides.id/assets/templates/images/pembinaan.png"
              title="Pembinaan"
              title2="Kemasyarakatan Desa"
              paragraf="Masyarakat Fullstack"
              BtnTitle="Lihat Semuanya"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;

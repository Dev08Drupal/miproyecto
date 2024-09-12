import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../assets/styles/components/pages/_actividad1.scss";

const Actividad1 = () => {
  const breadcrumbItems = [
    { label: "Inicio", href: "/miproyecto" },
    { label: "Actividad 1", isActive: true },
  ];

  return (
    <section>
      <Breadcrumb items={breadcrumbItems} />
      <div className="actividad1 my-5">
        <div className="row">
          <div className="col-4">
            <div className="contenido-tarjeta text-center">
              <p>Pasando row</p>
            </div>
          </div>
          <div className="col-4">
            <div className="contenido-tarjeta text-center">
              <p>Pasando row</p>
            </div>
          </div>
          <div className="col-4">
            <div className="contenido-tarjeta text-center">
              <p>Pasando row</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actividad1;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={item.id || index} // Usa un identificador único si está disponible
            className={`breadcrumb-item${item.isActive ? " active" : ""}`}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.isActive ? (
              item.label // Si es el ítem activo, solo muestra el texto
            ) : (
              <Link to={item.href}>{item.label}</Link> // Si no es el ítem activo, muestra el enlace
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Validación de Props
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      id: PropTypes.string, // Asegúrate de que 'id' sea una propiedad opcional
      isActive: PropTypes.bool, // Agrega validación para 'isActive'
    })
  ).isRequired,
};

export default Breadcrumb;

import React from "react";
import { Link } from "react-router-dom";
import ImagenA1 from "../images/images-1.png";
import ImagenB2 from "../images/images-2.jpg";
import ImagenC3 from "../images/images-3.jpg";
import ImagenD4 from "../images/images-4.jpg";
import ImagenE5 from "../images/images-5.jpg";
import ImagenF6 from "../images/images-6.jpg";

const Navegacion = () => {
  return (
    <div className="container mt-3 father">
      <Link to="/Imagen-1" className="links">
        <figure>
          <img src={ImagenA1} alt="Imagen 1" className="size-img" />
          <figcaption>Imagen 1</figcaption>
        </figure>
      </Link>

      <Link to="/Imagen-2" className="links">
        <figure>
          <img src={ImagenB2} alt="Imagen 2" className="size-img" />
          <figcaption>Imagen 2</figcaption>
        </figure>
      </Link>

      <Link to="/Imagen-3" className="links">
        <figure>
          <img src={ImagenC3} alt="Imagen 3" className="size-img" />
          <figcaption>Imagen 3</figcaption>
        </figure>
      </Link>

      <Link to="/Imagen-4" className="links">
        <figure>
          <img src={ImagenD4} alt="Imagen 4" className="size-img" />
          <figcaption>Imagen 4</figcaption>
        </figure>
      </Link>

      <Link to="/Imagen-5" className="links">
        <figure>
          <img src={ImagenE5} alt="Imagen 5" className="size-img" />
          <figcaption>Imagen 5</figcaption>
        </figure>
      </Link>

      <Link to="/Imagen-6" className="links">
        <figure>
          <img src={ImagenF6} alt="Imagen 6" className="size-img" />
          <figcaption>Imagen 6</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navegacion;
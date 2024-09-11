import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light">
      <div className="container pt-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <NavLink to="/actividad1">Actividad 1</NavLink>
              </p>
              <p>
                <NavLink to="/actividad1">Actividad 1</NavLink>
              </p>
              <p>
                <NavLink to="/actividad1">Actividad 1</NavLink>
              </p>
              <p>
                <NavLink to="/actividad1">Actividad 1</NavLink>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-google"></i>
              </NavLink>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink to="#!" className="btn btn-primary btn-floating m-1">
                <i className="fab fa-github"></i>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-3">
        © 2020 Copyright:
        <NavLink to="https://mdbootstrap.com/">Actividad 1</NavLink>
        MDBootstrap.com
      </div>
    </footer>
  );
};

export default Footer;

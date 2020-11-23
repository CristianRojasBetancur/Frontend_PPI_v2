import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../css/Carousel.css";

export default class Carrusel extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <div
              className="d-block w-100 carousel_item"
              style={{ backgroundColor: "#F6F8A9" }}
              alt="First slide"
            ></div>
            <Carousel.Caption>
              <div className="col-lg-12">
                <img
                  className="d-inline col-lg-6 m-4 imagen_carrusel"
                  style={{
                    width: "200px",
                    height: "150px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  src="https://github.com/CristianRojasBetancur/Frontend_PPI/blob/master/src/img/7.jpg?raw=true"
                  alt=""
                ></img>
              </div>
              <div className="col-lg-12">
                <h3>Pantaloneta</h3>
                <h4>$ 19.700</h4>
                <p>Comoda pantaloneta para realizar la actividad física.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 carousel_item"
              style={{ backgroundColor: "#B0F8A9" }}
              alt="First slide"
            ></div>

            <Carousel.Caption>
              <div className="col-lg-12">
                <img
                  className="d-inline col-lg-6 m-4 imagen_carrusel"
                  style={{
                    width: "200px",
                    height: "150px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  src="https://github.com/CristianRojasBetancur/Frontend_PPI/blob/master/src/img/2.jpg?raw=true"
                  alt="Camiseta de Gala"
                ></img>
              </div>
              <div className="col-lg-12">
                <h3>Camiseta diario</h3>
                <h4>$ 32.500</h4>
                <p>
                  Luce el escudo de nuestra institución con esta elegante camisa
                  de diario.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 carousel_item"
              style={{ backgroundColor: "#F8A9A9" }}
              alt="First slide"
            ></div>

            <Carousel.Caption>
              <div className="col-lg-12">
                <img
                  className="d-inline col-lg-6 m-4 imagen_carrusel"
                  style={{
                    width: "200px",
                    height: "150px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  src="https://github.com/CristianRojasBetancur/Frontend_PPI/blob/master/src/img/5.jpg?raw=true"
                  alt="Camiseta de Gala"
                ></img>
              </div>
              <div className="col-lg-12">
                <h3>Camiseta diario</h3>
                <h4>$ 32.500</h4>
                <p>
                  Luce el escudo de nuestra institución con esta elegante camisa
                  de diario.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

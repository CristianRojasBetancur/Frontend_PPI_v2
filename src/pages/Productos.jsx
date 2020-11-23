import React from "react";
import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";
import "../css/Productos.css";

export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      talla: "Seleccionar talla..."
    };
  }

  handleSelect = (value) => {
    this.setState({
      talla: value
    });
  };

  ruta = () => {
    this.setRedirect("/carrito");
  };

  render() {
    var listaTallas = "8 10 12 14 16 S M L XL";
    console.log(listaTallas.split(" "));
    return (
      <>
        <div style={{ backgroundColor: "#CBFFC6", paddingBottom: "10px" }}>
          <h3 style={{ paddingTop: "80px", textAlign: "center" }}>
            Confirmar pedido
          </h3>
        </div>
        <br />
        <div className="container-fluid">
          <img
            style={{ width: "90vw" }}
            className="img-fluid"
            src="https://github.com/CristianRojasBetancur/Frontend_PPI/blob/master/src/img/1.jpg?raw=true"
            alt="Camisa ed. Física"
          />
        </div>
        <h3 className="mt-2 text-center">Camiseta de educación física</h3>
        <br />
        <div className="container d-flex justify-content-center">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-split-basic">
              {this.state.talla}
            </Dropdown.Toggle>
            <Dropdown.Menu id="listamenu">
              {this.listaTallas.split(" ").map((item) => {
                return (
                  <Dropdown.Item
                    onClick={() => this.handleSelect(item)}
                    key={item}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <br />
        </div>
        <div className="d-flex justify-content-center">
          <h4 className="text-center mt-2">$ 29.900</h4>
        </div>
        <br />
        <br />
        <div className="container d-flex justify-content-center">
          <button
            style={{ marginBottom: "20px" }}
            type="button"
            className="btn btn-outline-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Pedido
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Confirmación de pedido
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h4>Prenda:</h4>
                  <p>Camiseta educación física</p>
                  <h4>Talla:</h4>
                  <p>XL</p>
                  <h4>Precio:</h4>
                  <p>$ 29.000</p>
                  <h4>No. referencia:</h4>
                  <p>2027 5009 4021</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <a
                    href="/carrito"
                    type="button"
                    className="btn btn-success"
                    id="nuevo-pedido"
                    onClick={function handleClick() {
                      return () => "#exampleModal".modal("hide");
                    }}
                  >
                    Confirmar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

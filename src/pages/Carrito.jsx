import React, { Component } from "react";
import { Card } from "react-bootstrap";
import imagen from "../img/1.jpg";

export default class Carrito extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "violet" }}>
          <h3 style={{ paddingTop: "60px", textAlign: "center" }}>Pedidos</h3>
          <hr />
        </div>

        <div className="col-sm-12 col-lg-3 m-2 ">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Title>Camisa educación física</Card.Title>
              <Card.Text>
                <h4>Talla</h4>
                XL
              </Card.Text>
              <button
                type="button"
                className="btn btn-outline-dark"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Ver referencia
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Referencia de la compra
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
                      <h4>Numero de referencia: </h4>
                      2027 5009 4021
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

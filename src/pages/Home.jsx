import React, { Component } from "react";
import Carousel from "../components/Carousel";
import data_cards from "../data/data_cards.json";
import "../styles.css";
import MiCard from "../components/Card";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: data_cards
    };
  }

  render() {
    return (
      <>
        <Carousel data={this.props.data} />
        <br></br>
        <h2>Categorias</h2>
        <br />
        <div className="contButtons container">
          <Link
            to="/productos"
            style={{ backgroundColor: "#E5FF6F", border: "none" }}
            className="mr-2 btn btn-dark"
          >
            {" "}
            Superior
          </Link>{" "}
          <Link
            to="/productos"
            style={{ backgroundColor: "#A0FF6F", border: "none" }}
            className="mr-2 btn btn-dark"
          >
            {" "}
            Inferior
          </Link>{" "}
          <Link
            to="/productos"
            style={{ backgroundColor: "#6FFFA7", border: "none" }}
            className="btn btn-dark"
          >
            {" "}
            Natación
          </Link>{" "}
          <Link
            to="/productos"
            style={{ backgroundColor: "#6FFFF5", border: "none" }}
            className="m-2 btn btn-dark"
          >
            {" "}
            Zapatos
          </Link>{" "}
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <MiCard data={this.state.data} />
          </div>
        </div>
        <br />
      </>
    );
  }
}

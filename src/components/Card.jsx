import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class MiCard extends Component {
    render() {
        return (
            <>
                {this.props.data.map((elemento) => (
                        <div className="col-sm-12 col-lg-3 m-2 " key={elemento.id} >
                            <Card style={{ width: '18rem' }}  className="mb-4 text-center">
                                <Card.Img variant="top" src={elemento.img} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{elemento.prenda}</Card.Title>
                                    <Card.Text>
                                        <h4>{elemento.precio}</h4>
                                    </Card.Text>
                                    <Link to="/productos" className="btn btn-outline-dark">Pedido</Link>
                                </Card.Body>
                            </Card>
                        </div>
                ))}
            </>
        )
    }
}
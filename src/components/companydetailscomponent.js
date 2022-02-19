import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import axios from 'axios';

function CompanyDetailsComponent(props) {
    localStorage.getItem("userId")
    localStorage.getItem("isLoggedIn")
    if (props.loggedIn) {
        if (props.watch) {
            return (
                <Col lg={4}>
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Header>{props.companyName}</Card.Header>
                            <Card.Text>{props.description}</Card.Text>
                            <Card.Footer>
                            <Row className="d-flex px-3">
                                <span style={{ fontWeight: 'bold' }}>
                                    Today's Price : ${props.price}
                                    <button class="btn btn-danger" onClick={props.onClick}>Remove</button>
                                </span>
                               
                            </Row>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            )
        }
        else {
            return (

                <Col lg={4} >
                    <Card className="m-3">
                        
                            <Card.Header>{props.companyName}</Card.Header>
                            <Card.Text>{props.description}</Card.Text>
                            <Card.Footer>
                            <Row className="d-flex px-3">
                                <span style={{ fontWeight: 'bold' }}>
                                    Today's Price : ${props.price}

                                    <button class="btn btn-primary" onClick={() => {
                                        axios.post("http://localhost:8080/watchList", {
                                            userId: props.userId,
                                            companyId: props.companyId
                                        }).then((res) => {
                                            alert("Successfully added to the watchlist")
                                        })
                                    }}>Watch</button>
                                </span>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        }
    }
    else {
        return (
            <Col lg={4}>
                <Card className="m-3">
                    
                        <Card.Header><h5>{props.companyName}</h5></Card.Header>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Footer>
                            <span style={{ fontWeight: 'bold' }}>
                                Today's Price : $ {props.price}
                            </span>
                        </Card.Footer>

                    
                </Card>
            </Col>
        )
    }
}

export default CompanyDetailsComponent

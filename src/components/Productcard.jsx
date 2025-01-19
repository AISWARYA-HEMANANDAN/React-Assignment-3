import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Productcard({ item }) {

    return (
        <>
            <Card className="card">
                <Card.Img variant="top" src={item?.image} className="productimage" />
                <Card.Body className="cardbody">
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text className="text-muted">{item?.description.slice(0, 100)}...</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <span><Card.Text className="fw-bold">${item?.price}</Card.Text></span>

                        <Link to={`productdetails/${item.id}`}>
                            <Button variant="primary" className="btn-sm">View Details</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Productcard

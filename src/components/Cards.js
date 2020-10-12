import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Cards({storeName, image, address, profile}) {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{storeName}</Card.Title>
                <Card.Text>
                    {address}
                </Card.Text>
                <a href={profile}><Button variant="primary">Know more</Button></a>
            </Card.Body>
        </Card>
    );
}

export default Cards;

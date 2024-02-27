"use client"
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Celu from '../../../../public/ListaSmartphone/celu1.webp'


export const Tarjeta = () => {
	return (
		<Card className="card-container">
			<Card.Img className="card-image" variant="top" src={Celu.src} />
			<div className="card-content">
				<Card.Body>
					<Card.Title>Xiaomi Redmi Note 10s 6gb/128gb Gris</Card.Title>
					<Card.Text>
          $413.197
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Cras justo odio</ListGroup.Item>
					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}


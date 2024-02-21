import React from 'react';
import Card from 'react-bootstrap/Card';
import Celu1 from '../../../../public/celu1.webp';

export const ListaVisual = () => {
	return (
		<Card>
			<Card.Img variant="top" src={Celu1.src}/>
			<div>
				<Card.Body>
					<Card.Title>Xiaomi Redmi Note 10</Card.Title>
					<Card.Text>
						$450.000
					</Card.Text>
					<Card.Text>
						6 cuotas sin interes
					</Card.Text>
					<Card.Text>
						Envio Gratis
					</Card.Text>
				</Card.Body>
			</div>
		</Card>
	);
}


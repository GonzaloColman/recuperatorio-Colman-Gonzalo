import React from 'react';
import Card from 'react-bootstrap/Card';
import Celu1 from '../../../../public/celu1.webp';
/* a continuacion es la parte visual de como se vera la targeta en la lista */
export const ListaVisual = () => {
	return (
		<Card>
			{/* una tarjeta donde ira una foto y la informacion basica */}
			<Card.Img variant="top" src={Celu1.src} />
			{/*agrega una imagen y la posiciona arriba  */}
			<div>
				<Card.Body>{/* informacion que ira en el cuerpo de la targeta */}
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


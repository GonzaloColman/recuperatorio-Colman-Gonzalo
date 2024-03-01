"use client"
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Celular } from '@/app/interfaces/celular';
import { IdContext } from '@/app/context/SecionContext';

export const Tarjeta = (props: Celular) => {
	const { Nombre, Marca, Imagen1, Imagen2, Imagen3, Imagen4, Precio, Almacenamiento, SistemaOp, CamaraInf, Camara, Bateria, BateriaInf, Caracteristica } = props;
	const { id, setId } = useContext(IdContext); // Usa IdContext aquí

	return (
		<Card className="card-container" onClick={() => setId(props.id)}>
			<Card.Img className="card-image" variant="top" src={Imagen1} />
			<div className="card-content">
				<Card.Body>
					<Card.Title>{Nombre}</Card.Title>
					<Card.Text>
						Precio: {Precio}
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Marca: {Marca}</ListGroup.Item>
					<ListGroup.Item>Almacenamiento: {Almacenamiento}</ListGroup.Item>
					<ListGroup.Item>Sistema Operativo: {SistemaOp}</ListGroup.Item>
					<ListGroup.Item>Información de la cámara: {CamaraInf}</ListGroup.Item>
					<ListGroup.Item>Cámara: {Camara}</ListGroup.Item>
					<ListGroup.Item>Batería: {Bateria}</ListGroup.Item>
					<ListGroup.Item>Información de la batería: {BateriaInf}</ListGroup.Item>
					<ListGroup.Item>Características: {Caracteristica}</ListGroup.Item>
				</ListGroup>
				<Card.Body>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#">Another Link</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}


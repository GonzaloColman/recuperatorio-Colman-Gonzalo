"use client"
import React, { useContext } from 'react';
import { IdContext } from '@/app/context/SecionContext';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import { Celular } from '@/app/interfaces/celular';

export const VisualLista = (props: Celular) => {
	const { id, Nombre, Imagen1, Precio } = props;
	const { setId } = useContext(IdContext);

	const handleClick = () => {
		setId(id);
	}

	return (
		<Card style={{ width: '18rem' }} onClick={handleClick}>
			<Image
				loader={() => Imagen1}
				unoptimized={true}
				src={Imagen1} alt={''} width='120' height='200'
			/>
			<Card.Body>
				<Card.Title>{Nombre}</Card.Title>
				<Card.Text>
					Precio:{Precio}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}


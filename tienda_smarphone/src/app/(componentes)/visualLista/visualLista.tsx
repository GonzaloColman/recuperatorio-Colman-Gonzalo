"use client"
import { useState } from 'react';
import Image from 'next/image'
import { DataCelular } from '../../../../public/listaSmartphone';
import Card from 'react-bootstrap/Card';
interface Celular {
	id: string;
	Nombre: string;
	Marca: string;
	Imagen1: any;
	Imagen2: any;
	Imagen3: any;
	Imagen4: any;
	Precio: string;
	Almacenamiento: string;
	SistemaOp: string;
	CamaraInf: string;
	Camara: string;
	Bateria: string;
	BateriaInf: string;
	Caracteristica: string;
}

export function Tarjeta({ Nombre, Marca, Imagen1, Precio, Almacenamiento, SistemaOp, CamaraInf, Camara, Bateria, BateriaInf, Caracteristica }: Celular) {
	return (
		<Card style={{ width: '18rem' }}>
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

interface ListaDeTarjetasProps {
	datosTarjetas: Celular[];
}

function ListaDeTarjetas({ datosTarjetas }: ListaDeTarjetasProps) {
  return (
    <div id="listadoTarjetas" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {datosTarjetas.map((tarjeta) => (
        <Tarjeta key={tarjeta.id} {...tarjeta} />
      ))}
    </div>
  );
}



function App() {

	const [tarjetas] = useState<Celular[]>(DataCelular);

	return (
		<div>
			<ListaDeTarjetas datosTarjetas={tarjetas} />
		</div>
	);
}

interface ListaVisualProps {
	Celular: Celular;
}

export const ListaVisual = ({ Celular }: ListaVisualProps) => {
	return (
		App()
	)
}

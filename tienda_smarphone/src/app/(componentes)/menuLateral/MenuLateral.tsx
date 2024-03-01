"user client"
import { useContext } from 'react';
import { IdContext } from '@/app/context/SecionContext';

export const MenuLateral = () => {
	const { celulares, setCelulares } = useContext(IdContext);

	const ordenarPorPrecioAsc = () => {
		const celularesOrdenados = [...celulares].sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));
		setCelulares(celularesOrdenados);
	};

	const ordenarPorPrecioDesc = () => {
		const celularesOrdenados = [...celulares].sort((a, b) => parseFloat(b.Precio) - parseFloat(a.Precio));
		setCelulares(celularesOrdenados);
	};

	return (
		<div className='menu'>
			<div>
				<a onClick={ordenarPorPrecioAsc}>Ordenar por precio (ascendente)</a>
				<a onClick={ordenarPorPrecioDesc}>Ordenar por precio (descendente)</a>
				<h2>Marca</h2>
				<a>Xiaomi</a>
				<a>Samsung</a>
				<a>Motorola</a>
				<a>Apple</a>
				<a>TCL</a>
			</div>
		</div>
	);
};

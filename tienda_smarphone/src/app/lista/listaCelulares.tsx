"use client"
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VisualLista } from '../(componentes)/visualLista/visualLista';
import { useRouter } from 'next/navigation';
import { IdContext } from '@/app/context/SecionContext';

export const ListaCelulares = () => {
	const router = useRouter();
	const { celulares } = useContext(IdContext);

	const goPage = (id: string) => {
		router.push(`/pages/paginaVenta/${id}`)
	}

	return (
		<div className='lista flex-container '>
			{celulares.map(Celular => (
				<a onClick={() => goPage(Celular.id)} key={Celular.id}>
					<VisualLista {...Celular} />
				</a>
			))}
		</div>
	)
}




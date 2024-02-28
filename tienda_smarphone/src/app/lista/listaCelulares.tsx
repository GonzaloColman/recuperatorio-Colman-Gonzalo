"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VisualLista } from '../(componentes)/visualLista/visualLista';
import { DataCelular } from '../../../public/listaSmartphone';
import { useRouter } from 'next/navigation';
import { IdContext, IdLista } from './idLista';

export const ListaCelulares = () => {
	const router = useRouter();

	const goPage = (id: string) => {
		router.push(`/page2/${id}`)
	}

	return (
		<IdLista>
			<div className='lista flex-container '>
				{DataCelular.map(Celular => (
					<a onClick={() => goPage(Celular.id)} key={Celular.id}>
						<VisualLista {...Celular} />
					</a>
				))}
			</div>
		</IdLista>
	)
}



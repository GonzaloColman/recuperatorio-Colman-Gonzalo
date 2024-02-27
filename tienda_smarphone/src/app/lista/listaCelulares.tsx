"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tarjeta } from '../(componentes)/visualLista/visualLista';
import { useRouter } from 'next/navigation';
import { DataCelular } from '../../../public/listaSmartphone';

export const Lista = () => {
	const router = useRouter();

	const goPage = () => {
		router.push("/page2")
	}

	return (
		<div className='lista flex-container '>
			{DataCelular.map(Celular => (
				<a onClick={goPage} key={Celular.id}>
					<Tarjeta {...Celular} />
				</a>
			))}
		</div>
	)
}
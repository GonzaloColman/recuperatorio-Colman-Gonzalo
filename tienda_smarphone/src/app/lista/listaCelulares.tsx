"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListaVisual } from '../(componentes)/visualLista/visualLista'
import { useRouter } from 'next/navigation';

export const Lista = () => {
	const router = useRouter(); {/*funcion para llamar al router */ }

	const goPage = () => {//funcion para ir a la pagina
		router.push("/page2")
	}
	return (
		<div className='lista flex-container '>{/* aplico la clase lista para que tenga un formato y tamaño y el flex para que se organice segun la cantidad que se vea en pantalla  */}
			{/* a continuacion llamo a las tarjetas y le aplico onClick para que funcione como boton y redirija a la pagina con la informacion completa */}
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
			<a onClick={goPage}><ListaVisual /></a>
		</div>
	)
}
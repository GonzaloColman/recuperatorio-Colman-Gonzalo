"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListaVisual } from '../(componentes)/visualLista/visualLista'

export const Lista = () => {
	return (
		<div className='lista flex-container '>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
			<a><ListaVisual /></a>
		</div>
	)
}

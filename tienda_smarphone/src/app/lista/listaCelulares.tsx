"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup';
import {ListaVisual} from '../(componentes)/visualLista/visualLista'

export const Lista = () => {
  return (
    <div className='lista'>
      <ListGroup >
        <ListGroup.Item>celu3  </ListGroup.Item>
        <ListGroup.Item><ListaVisual/></ListGroup.Item>
        <ListGroup.Item><ListaVisual/></ListGroup.Item>
        <ListGroup.Item><ListaVisual/></ListGroup.Item>
      </ListGroup>
    </div>
  )
}
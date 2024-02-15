import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup';

export const Lista = () => {
  return (
    <div className='lista'>
      <ListGroup >
        <ListGroup.Item>celu1</ListGroup.Item>
        <ListGroup.Item>celu1</ListGroup.Item>
        <ListGroup.Item>celu3</ListGroup.Item>
        <ListGroup.Item>celu4</ListGroup.Item>
      </ListGroup>
    </div>
  )
}
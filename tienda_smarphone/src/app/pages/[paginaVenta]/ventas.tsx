"use client"
import React, { useContext } from 'react';
import { Tarjeta } from '@/app/(componentes)/tarjeta/tarjeta';
import { Encabezado } from '@/app/encabezados_PieDePagina/encabezado';
import { PieDePagina } from '@/app/encabezados_PieDePagina/pieDePagina';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataCelular } from '../../../../public/listaSmartphone';
import { IdContext } from '@/app/context/SecionContext'; 

export default function Venta() {
  const { id, setId } = useContext(IdContext); 
  const selectedCard = DataCelular.find(celular => celular.id === id);

  return (
    <main>
      <Encabezado />
      <div className=" color cuerpo-page2">
        {selectedCard && <Tarjeta {...selectedCard} />}
      </div>
      <PieDePagina />
    </main>
  );
}
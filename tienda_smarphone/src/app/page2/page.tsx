import React, { useContext } from 'react';
import { Tarjeta } from "../(componentes)/tarjeta/tarjeta";
import { Encabezado } from "../encabezados_PieDePagina/encabezado";
import { PieDePagina } from "../encabezados_PieDePagina/pieDePagina";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import { DataCelular } from '../../../public/listaSmartphone';
import { IdContext } from '@/app/lista/idLista'; // Importa IdContext en lugar de IdLista

export default function Page2() {
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
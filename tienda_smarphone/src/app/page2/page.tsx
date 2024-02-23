import { Encabezado } from "../encabezados_PieDePagina/encabezado";

import { PieDePagina } from "../encabezados_PieDePagina/pieDePagina";
import { MenuApple } from "../(componentes)/menuLateral/menuComponentes/menuApple";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      <Encabezado/>
      <MenuApple/>
      <PieDePagina/>
      
    </main>

  )
}
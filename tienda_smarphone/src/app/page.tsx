import { Encabezado } from "./encabezados_PieDePagina/encabezado";
import { Lista } from "./lista/listaCelulares";
import { PieDePagina } from "./encabezados_PieDePagina/pieDePagina";
import { MenuLateral } from "./(componentes)/menuLateral/MenuLateral";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main >
      <div >
        <Encabezado />
      </div>
      <div className="cuerpo color">
        <MenuLateral />
        <Lista />
      </div>
      <div>
        <PieDePagina />
      </div>
    </main>
  );
}

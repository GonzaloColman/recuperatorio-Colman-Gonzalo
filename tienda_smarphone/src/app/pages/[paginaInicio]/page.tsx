import { Encabezado } from "../../encabezados_PieDePagina/encabezado";
import { ListaCelulares } from "../../lista/listaCelulares";
import { PieDePagina } from "../../encabezados_PieDePagina/pieDePagina";
import { MenuLateral } from "../../(componentes)/menuLateral/MenuLateral";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageInicio() {
  return (
    <main >
      <div >
        <Encabezado />
        {/* llamo al titulo */}
      </div>
      <div className="cuerpo color">{/*declaro dos clases uno para ponerle color y otro para organizar el espacio y aparesca uno al lado del otro  */}
        <MenuLateral />{/* llamo al menu lado izquierdo */}
        <ListaCelulares />{/* llamo a la lista por defecto */}
      </div>
      <div>
        <PieDePagina />{/* fin de pagina */}
      </div>
    </main>
  );
}
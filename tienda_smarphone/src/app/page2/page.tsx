
import { Encabezado } from "../encabezados_PieDePagina/encabezado";
import { Targeta } from "../(componentes)/tarjeta/tarjeta";
import { PieDePagina } from "../encabezados_PieDePagina/pieDePagina";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	return (
		<main>
			<Encabezado />
			<div className=" color cuerpo-page2">
				<Targeta />
			</div>

			<PieDePagina />

		</main>

	)
}
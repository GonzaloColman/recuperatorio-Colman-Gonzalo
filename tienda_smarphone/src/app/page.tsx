import Image from "next/image";
import { Encabezado } from "./encabezados_PieDePagina/encabezado";
import { Lista } from "./lista/listaCelulares";
import { PieDePagina } from "./encabezados_PieDePagina/pieDePagina";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <main>
      <Encabezado/>
      <Lista/>
      <PieDePagina/>
    </main>
  );
}

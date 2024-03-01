import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { Celular } from "../interfaces/celular";

type ContextType = {
	id: string;
	setId: Dispatch<SetStateAction<string>>;
	celulares: Celular[];
	setCelulares: Dispatch<SetStateAction<Celular[]>>;
};

// Creo un objeto inicial para el contexto con el tipo explícito
const initialContext: ContextType = {
	id: "",
	setId: () => { },
	celulares: [],
	setCelulares: () => { },
};

// Creo el contexto
export const IdContext = createContext<ContextType>(initialContext);

// Defines el tipo para las props
type Props = {
	children: ReactNode;
};

// Creo el proveedor del contexto
export const IdLista = ({ children }: Props) => {

	// Uso el estado para guardar el ID
	const [id, setId] = useState("");
	const [celulares, setCelulares] = useState<Celular[]>([]);

	// Agrego el ID y la función para actualizarlo a todos los componentes hijos
	return (
		<IdContext.Provider value={{ id, setId, celulares, setCelulares }}>
			{children}
		</IdContext.Provider>
	);
};

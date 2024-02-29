import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Defino el type para el contexto
type ContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

// Creo un objeto inicial para el contexto con el tipo explícito
const initialContext: ContextType = {
  id: "",
  setId: () => {},
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

  // Agrego el ID y la función para actualizarlo a todos los componentes hijos
  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};
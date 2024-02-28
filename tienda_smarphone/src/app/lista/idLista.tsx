import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Defines el tipo para el contexto
type ContextType = {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
};

// Creas un objeto inicial para el contexto con el tipo explícito
const initialContext: ContextType = {
  id: "",
  setId: () => {},
};

// Creas el contexto
export const IdContext = createContext<ContextType>(initialContext);

// Defines el tipo para las props
type Props = {
  children: ReactNode;
};

// Creas el proveedor del contexto
export const IdLista = ({ children }: Props) => {

  // Usas el estado para guardar el ID
  const [id, setId] = useState("");

  // Provees el ID y la función para actualizarlo a todos los componentes hijos
  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};
"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageInicio from "./pages/[paginaInicio]/page";
//utilizo broeserRouter para inicialisar la pagina 
export default function Page() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<PageInicio/>} />
   </Routes>
    </BrowserRouter>
  );
};
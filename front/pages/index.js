import Head from "next/head";
import Image from "next/image";
import Navbar from "@/componentes/navbar";
import styled from "styled-components";


function Mybutton(){
  return(
    <button>ImButton</button>
  )
}

export default function Home() {
  return (
    <div>
    <h1>Gerenciador de Tarefas</h1>
    </div>
  
  );
}

import React from "react";
import InfosUsuario from "./InfosUsuario";

function CardVideo(props) {
  const usuario = {
    nome: "Zibiruta",
    foto: "https://picsum.photos/id/237/70/55"
  }
  
  return (
    <div className="box-pagina-principal" onClick={props.reproduzVideo}>
      <img src={props.video.imagem} alt="" />
      <h4>{props.video.titulo}</h4>
      <InfosUsuario usuario={usuario} />
    </div>
  );
}

export default CardVideo;

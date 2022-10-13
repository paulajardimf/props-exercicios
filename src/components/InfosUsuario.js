import React from "react";

function InfosUsuario(props) {
  
  return (
    <div className="container-usuario">
      <img src={props.usuario.foto} className="imagem-usuario" alt="imagem do usuário"/>
      <h4>Autor: {props.usuario.nome}</h4>
    </div>
  );
}

export default InfosUsuario;

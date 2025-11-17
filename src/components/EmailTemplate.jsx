import * as React from "react";

export function EmailTemplate({ name, email, tel, message }) {
  return (
    <div>
      <h1 style={{ color: "rgb(237, 122, 140)" }}>Um contato do site</h1>
      <div>
        <h2 style={{ color: "rgb(23, 64, 113)" }}>Nome</h2>
        <h2>{name}</h2>
        <br />
        <h3 style={{ color: "rgb(23, 64, 113)" }}>Email</h3>
        <h3>{email}</h3>
        <br />
        <h3 style={{ color: "rgb(23, 64, 113)" }}>Telefone</h3>
        <h3>{tel}</h3>
      </div>
      <div style={{ margin: "10px" }}>
        <h3 style={{ color: "rgb(23, 64, 113)" }}>Mensagem</h3>
        <br />
        <span style={{ fontSize: "20px" }}>{message}</span>
      </div>
    </div>
  );
}

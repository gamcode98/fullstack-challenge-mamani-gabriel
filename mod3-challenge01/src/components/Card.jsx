import React, { useState } from "react";

export default function Card({ id, name, status, species, image, setChar }) {
  return (
    <div className="card" onClick={() => setChar(image)}>
      <img src={image} alt={name} />
      <p> Nombre: {name}</p>
      <p>Species: {species}</p>
      <p>Status: {status}</p>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { getCharacters } from "../service";
import Card from "./Card";

export default function List() {
  const [isLoading, setIsLoading] = useState(false);
  const [charList, setCharList] = useState([]);
  const [char, setChar] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="cards">
      {char ? <img className="img-char" src={char} alt="" /> : "No hay imagen"}
      {!isLoading ? (
        charList.map(({ id, name, status, species, image }) => (
          <Card
            key={id}
            name={name}
            status={status}
            species={species}
            image={image}
            setChar={setChar}
          />
        ))
      ) : (
        <p>Cargando</p>
      )}
    </section>
  );
}

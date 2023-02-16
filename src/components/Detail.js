import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [character, setCharacter] = useState();

  // const params = useParams();
  // console.log(params);
  const { detailId } = useParams();
  //console.log(detailId);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <h2 style={{ color: "white" }}>{character?.name}</h2>
        <p style={{ color: "white" }}>{character?.status}</p>
        <p style={{ color: "white" }}>{character?.species}</p>
        <p style={{ color: "white" }}>{character?.gender}</p>
        <p style={{ color: "white" }}>{character?.origin?.name}</p>
      </div>
      <Link to={`/home`}>Home</Link>
      <div>
        <img src={character?.image} alt={character?.name}></img>
      </div>
    </div>
  );
};

export default Detail;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../favoritos/favorites.modules.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  return (
    <div>
      {myFavorites.map((charac) => {
        return (
          <div>
            <Link to={`/detail/${charac.id}`}>{charac.name}</Link>
            <h2>{charac.gender}</h2>
            <h2>{charac.species}</h2>
            <img
              src={charac.image}
              alt={charac.image}
              id={style["img-personaje"]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;

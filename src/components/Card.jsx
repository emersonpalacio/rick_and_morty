import { Link } from "react-router-dom";
import style from "../components/card.module.css";
import { addFavorite, deleteFavoritos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Card({ name, species, gender, image, onClose, id }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavoritos(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, species, gender, image, onClose, id }));
    }
    isFav ? (
      <button onClick={handleFavorite}>❤️</button>
    ) : (
      <button onClick={handleFavorite}>🤍</button>
    );
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div id={style.personaje} className={style.letra}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={onClose} className={style.btn1}>
        X
      </button>
      <Link to={`/detail/${id}`}>{name}</Link>
      <h2>{gender}</h2>
      <h2>{species}</h2>
      <img src={image} alt={image} id={style["img-personaje"]} />
    </div>
  );
}

import Card from "./Card";
import style from "../components/cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div id={style["contenedor-personajes"]}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
}

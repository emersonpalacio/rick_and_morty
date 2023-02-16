import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const hadleChange = (e) => setCharacter(e.target.value);
  return (
    <div>
      <input type="search" value={character} onChange={hadleChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
}

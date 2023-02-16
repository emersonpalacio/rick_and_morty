import "./App.css";
import Cards from "./components/Cards.jsx";
import "./bootstrap.min.css";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/favoritos/Favorites";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "emersonpalaciootalvaro@gmail.com";
  const password = "A1b2c3d4";

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(
            "No hay personajes con ese Ithere are no characters with that ID"
          );
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (form) => {
    if (form.username === username && form.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }} id={"background-image"}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

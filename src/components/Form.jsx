import { useState } from "react";
import validation from "./validation";

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  formInput: {
    width: "50%",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid gray",
  },
  formButton: {
    width: "30%",
    padding: "0.5rem",
    marginTop: "1rem",
    borderRadius: "5px",
    backgroundColor: "lightblue",
    border: "none",
    cursor: "pointer",
  },
};

const Form = ({ login }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  return (
    <div onSubmit={handleSubmit}>
      <form style={styles.formContainer}>
        <label htmlFor="username">Username</label>
        <input
          style={styles.formInput}
          type="text"
          name="username"
          value={form.username}
          onChange={handleInputChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <label htmlFor="password">Password</label>
        <input
          style={styles.formInput}
          type="text"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button style={styles.formButton} type="submit" name="password">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Form;

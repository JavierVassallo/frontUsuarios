import { useState } from "react";
import { createUser } from "../services";

const FormUser = () => {
  const [cuerpo, setCuerpo] = useState({
    username: "",
    rol: "",
    password: "",
    nombre: "",
  });
  const nuevoUsuario = async () => {
    let resp = await createUser(cuerpo);
    if (resp._id) {
      alert("usuario creado");
    } else {
      alert(
        "usuario no creado intenete nuevamente mas tarde y complete todos los campos"
      );
    }
  };
  const handleChangeGeneral = (event) => {
    let cuerpo2 = { ...cuerpo };
    cuerpo2[event.target.name] = event.target.value;
    setCuerpo(cuerpo2);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(event) => handleChangeGeneral(event)}
      />
      <input
        type="text"
        name="rol"
        placeholder="rol"
        onChange={(event) => handleChangeGeneral(event)}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={(event) => handleChangeGeneral(event)}
      />
      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        onChange={(event) => handleChangeGeneral(event)}
      />
      <button onClick={nuevoUsuario}>crear</button>
    </div>
  );
};

export default FormUser;

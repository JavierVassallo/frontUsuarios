import { useState } from "react";
import Listado from "./listado";

const Menu = () => {
  const [mostrarListado, setMostrarListado] = useState(false);
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [mostrarUsuario, setMostrarUsuario] = useState(false);

  const handleListadoClick = () => {
    setMostrarListado(true);
    setMostrarCrear(false);
    setMostrarUsuario(false);
  };
  const handleCrearClick = () => {
    setMostrarListado(false);
    setMostrarCrear(true);
    setMostrarUsuario(false);
  };
  const handleUsuarioClick = () => {
    setMostrarListado(false);
    setMostrarCrear(false);
    setMostrarUsuario(true);
  };
  const mockListado = [
    {
      nombre: "Javier",
      username: "javi_userad",
      rol: "administrador",
      fechaCreacion: "2020-05-12",
    },
    {
      nombre: "Juan",
      username: "juan_456",
      rol: "usuario",
      fechaCreacion: "2020-07-22",
    },
  ];
  return (
    <div
      style={{
        marginTop: "2vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-betwwen",
        }}
      >
        <div
          style={{
            height: "50px",
            width: "30%",
            border: "1px solid #000",
            backgroundColor: "green",
          }}
          onClick={handleListadoClick}
        >
          Listado
        </div>
        <div
          style={{
            height: "50px",
            width: "30%",
            border: "1px solid #000",
            backgroundColor: "red",
          }}
          onClick={handleCrearClick}
        >
          Crear
        </div>
        <div
          style={{
            height: "50px",
            width: "30%",
            border: "1px solid #000",
            backgroundColor: "yellow",
          }}
        >
          Usuario
        </div>
      </div>

      <div style={{ marginTop: "2vh" }}>
        {mostrarListado && <Listado listaUsuarios={mockListado} />}
      </div>
    </div>
  );
};

export default Menu;

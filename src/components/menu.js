import { useEffect, useState } from "react";
import Listado from "./listado";
import { getUsers } from "../services";
import VistaUsuario from "./vistaUsuario";
import FormUser from "./formUser";

const Menu = () => {
  const [mostrarListado, setMostrarListado] = useState(false);
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [mostrarUsuario, setMostrarUsuario] = useState(false);

  const [listadoBack, setListadoBack] = useState([]);
  const [userNameSelected, setUserNameSelected] = useState(null);
  const handleChangeUser = (username) => {
    console.log("me ejecuto");
    setUserNameSelected(username);
  };

  const handleListadoClick = async () => {
    setMostrarListado(true);
    setMostrarCrear(false);
    setMostrarUsuario(false);
    let listado = await getUsers();
    setListadoBack(listado);
  };
  const handleCrearClick = () => {
    setMostrarListado(false);
    setMostrarCrear(true);
    setMostrarUsuario(false);
  };
  const mostrarUsuarioFuncion = () => {
    setMostrarListado(false);
    setMostrarCrear(false);
    setMostrarUsuario(true);
  };
  useEffect(() => {
    if (userNameSelected) {
      mostrarUsuarioFuncion();
    }
  }, [userNameSelected]);
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
        {mostrarListado && (
          <Listado
            listaUsuarios={listadoBack}
            handleChangeUser={handleChangeUser}
          />
        )}

        {mostrarUsuario && <VistaUsuario username={userNameSelected} />}

        {mostrarCrear && <FormUser />}
      </div>
    </div>
  );
};

export default Menu;

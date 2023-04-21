import { useEffect, useState } from "react";
import { getUser } from "../services";

const VistaUsuario = ({ username }) => {
  const [user, setUser] = useState(null);
  const getUsuario = async () => {
    let resp = await getUser(username);
    setUser(resp);
  };
  useEffect(() => {
    getUsuario();
  }, []);
  return user ? (
    <div>
      <p>username : {user.username}</p>
      <p>name: {user.nombre} </p>
    </div>
  ) : (
    "....cargando"
  );
};

export default VistaUsuario;

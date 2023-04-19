const Listado = ({ listaUsuarios }) => {
  return listaUsuarios.length > 0 ? (
    <table>
      <tr>
        <td>Nombre</td>
        <td>Username</td>
        <td>Rol</td>
        <td>Fecha Creacion </td>
        <td>Acciones </td>
      </tr>
      {listaUsuarios.map((usuario, key) => {
        return (
          <tr>
            <td> {usuario.nombre}</td>
            <td> {usuario.username}</td>
            <td> {usuario.rol}</td>
            <td>{usuario.fechaCreacion}</td>
            <td
              onClick={() => {
                alert("soy el usuario" + key);
              }}
              style={{ color: "blue", cursor: "pointer" }}
            >
              ver
            </td>
          </tr>
        );
      })}
    </table>
  ) : (
    <p>no hay usuarios</p>
  );
};

export default Listado;

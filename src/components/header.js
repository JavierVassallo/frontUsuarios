import { useState } from "react";
import { loginUser } from "../services";

const Header = () => {
  const [body, setBody] = useState({
    username: "",
    password: "",
  });
  const login = async () => {
    let login = await loginUser(body);

    if (login.success) {
      localStorage.setItem("token", login.token);
    } else {
      alert(login.mensaje);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setBody({
      username: "",
      password: "",
    });
  };
  return (
    <div
      style={{
        marginTop: "1vh",
        borderBottom: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <button
        style={{ marginBottom: "1vh", marginRight: "2vw" }}
        onClick={login}
      >
        Login
      </button>
      <button
        style={{ marginBottom: "1vh", marginRight: "2vw" }}
        onClick={logout}
      >
        Logout
      </button>

      <div>
        <input
          type="text"
          name="username"
          value={body.username}
          onChange={(e) => {
            setBody({ ...body, username: e.target.value });
          }}
        />
        <input
          type="text"
          name="password"
          value={body.password}
          onChange={(e) => {
            setBody({ ...body, password: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default Header;

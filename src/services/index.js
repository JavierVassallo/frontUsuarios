export const getUsers = async () => {
  let resp = await fetch("http://localhost:5000/usuarios");
  return resp.json();
};

export const loginUser = async (cuerpo) => {
  let resp = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cuerpo),
  });
  return resp.json();
};

export const getUser = async (username) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTY4MjAzNTA1OSwiZXhwIjoxNjgyMDM1MzU5fQ.WqxChCZc6eX1E9Ea1ha4QFzOpOe01waD--UoHbF9Esc";
  let resp = await fetch(
    "http://localhost:5000/usuarioByUsername?username=" + username,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Baerer " + token,
      },
    }
  );
  return resp.json();
};

export const createUser = async (cuerpo) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1YW4xMjMiLCJyb2wiOiJ1c3VhcmlvIiwiaWF0IjoxNjgyMDM2NDYyLCJleHAiOjE2ODIwMzY3NjJ9.QClzdo6zobu_PDCoC1kw0zhDfMa33PKtHrUFSW0S5KE";
  let resp = await fetch("http://localhost:5000/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Baerer " + token,
    },
    body: JSON.stringify(cuerpo),
  });
  return resp.json();
};

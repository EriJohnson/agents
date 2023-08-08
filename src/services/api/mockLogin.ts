const db = [{ id: "1", email: "teste@pontua.com.br", password: "123456" }];

export const fakeLogin = async (email: string, password: string) => {
  const user = db.find(
    (user) => user.email === email && user.password === password
  );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (user) {
    return Promise.resolve(user.id);
  } else {
    return Promise.reject(new Error("Email ou senha inválidos."));
  }
};

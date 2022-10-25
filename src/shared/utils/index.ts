export const filter = <T>(f: Function, iter: T[]) => {
  const response = [];
  for (const i of iter) {
    if (f(i)) response.push(i);
  }

  return response;
};

export const map = <T>(f: Function, iter: T[]) => {
  const response = [];

  for (let value of iter) {
    response.push(f(value));
  }

  return response;
};

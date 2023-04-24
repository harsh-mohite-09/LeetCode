const makeReq = (n) =>
  new Promise((res) => setTimeout(() => res(n * 10), 2000));
const A = (m) => makeReq(m).then((res) => console.log(res));

const chainAllThen = () => {
  let chain = A(0);
  for (let i = 1; i < 10; i++) {
    chain = chain.then(() => A(i));
  }
  return chain;
};

chainAllThen();

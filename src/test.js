const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
const level=add(1)
console.log(level(2)(3))
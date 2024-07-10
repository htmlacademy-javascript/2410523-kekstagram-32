const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const usersIdIndex = () => {
  let id = 1;
  return () => {
    id ++;
    return id;
  };
};

const randomIdIndex = usersIdIndex();

export {getRandomInteger, randomIdIndex};

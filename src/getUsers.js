export const getUserById = (source, id) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
};

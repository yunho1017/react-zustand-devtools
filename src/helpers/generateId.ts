export const generateId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

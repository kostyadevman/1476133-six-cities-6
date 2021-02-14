export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getArrayFromOneToN = (N) => {
  return [...Array(N)].map((_, i) => i + 1);
};

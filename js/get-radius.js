export const getRadius = (coefficient, radius) => {
  const stroke = Math.trunc(2 * Math.PI * radius);
  const offset = Math.trunc(stroke - stroke * coefficient);
  return {
    stroke,
    offset
  };
};

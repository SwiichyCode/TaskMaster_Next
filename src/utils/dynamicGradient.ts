export const dynamicGradient = (color: []) => {
  // randomize the gradient and the direction and the pourcentage
  const direction = Math.floor(Math.random() * 360);
  const random = Math.floor(Math.random() * 100);

  color.forEach((color, index) => {
    return `linear-gradient(${direction}deg, ${color[index]} ${random}%, ${color} ${random}%)`;
  });
};

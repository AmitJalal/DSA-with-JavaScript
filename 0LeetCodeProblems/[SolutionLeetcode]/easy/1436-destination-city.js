const destCity = (paths) => {
  const destinationMap = new Map();

  for (let i = 0; i < paths.length; i += 1) {
    destinationMap.set(paths[i][1], true);
  }

  for (let i = 0; i < paths.length; i += 1) {
    if (destinationMap.has(paths[i][0])) destinationMap.delete(paths[i][0]);
  }

  return destinationMap.keys().next().value;
};

export default destCity;

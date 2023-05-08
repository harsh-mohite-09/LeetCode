// 1436. Destination City

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

var destCity = function (paths) {
  const destinations = paths.map((e) => e[1]);
  const origins = new Set(paths.map((e) => e[0]));
  return destinations.filter((e) => !origins.has(e))[0];
};

// Using Map object in JS.

var destCity = function (paths) {
  const hash = new Map(paths);
  for (const dest of hash.values()) {
    if (!hash.has(dest)) return dest;
  }
};

console.log(
  destCity([
    ["Lima", "Sao Paulo"],
    ["London", "New York"],
    ["New York", "Lima"],
  ])
);
console.log(
  destCity([
    ["C", "A"],
    ["B", "C"],
    ["D", "B"],
  ])
);

// console.log(
//   destCity([
//     ["pYyNGfBYbm", "wxAscRuzOl"],
//     ["kzwEQHfwce", "pYyNGfBYbm"],
//   ])
// );

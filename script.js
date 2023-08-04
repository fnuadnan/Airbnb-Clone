
// Filter by city


function filterByCity(city, cityArray) {
  let indices = [];
  for (let i = 0; i < cityArray.length; i++) {
    if (cityArray[i].toLowerCase() === city.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

// Filter by types
function filterByTypes(types, typesArray) {
  let indices = [];
  for (let i = 0; i < typesArray.length; i++) {
    if (types.includes(typesArray[i])) {
      indices.push(i);
    }
  }
  return indices;
}

// Filter by price
function filterByPrice(minPrice, maxPrice, priceArray) {
  let indices = [];
  for (let i = 0; i < priceArray.length; i++) {
    if (priceArray[i] >= minPrice && priceArray[i] <= maxPrice) {
      indices.push(i);
    }
  }
  return indices;
}

const getMealsList = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then((res) => res.json());
  return data;
};

const getItem = async (id) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json());
  return data;
};

module.exports = { getMealsList, getItem };
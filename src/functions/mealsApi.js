const getMealsList = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then((res) => res.json());
  return data;
};

module.exports = { getMealsList };
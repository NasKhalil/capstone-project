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

const getLikes = async() => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s01zcq66FTJkk56FIxxy/likes');
  const likeArr = await response.json();
  return likeArr;
};

module.exports = { getMealsList, getItem, getLikes };
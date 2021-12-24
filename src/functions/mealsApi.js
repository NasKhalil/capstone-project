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

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vkGMD7UlcUJL5hx4gyle/likes');
  const likeArr = await response.json();
  return likeArr;
};

const sendComment = async (id, uName, uComment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vkGMD7UlcUJL5hx4gyle/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `item${id}`,
      username: uName,
      comment: uComment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

module.exports = {
  getMealsList, getItem, getLikes, sendComment,
};
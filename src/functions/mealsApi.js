const getMealsList = async() => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then((res) => res.json());
    return data;
};

const getLikes = async() => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bjeHLEObVtTi6m0Zp622/likes');
    const likeArr = await response.json();
    return likeArr;
};


module.exports = { getMealsList, getLikes };
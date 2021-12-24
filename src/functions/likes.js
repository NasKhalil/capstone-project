/* eslint-disable */
const url1 = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bjeHLEObVtTi6m0Zp622/likes';

const fetchData = (url, CostumSettings = {}) => {
    const response = fetch(url, CostumSettings)
        .then((res) => res.json());
    return response;
};

const getData = () => fetchData(url1);

export const getLikes = () => fetchData(url2);

export const addLikes = async(index) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          item_id: `item${index}`,
        })
    };
    const res = await fetchData(url2, settings)
        .catch(err => err);
    return res
}

export default getData;
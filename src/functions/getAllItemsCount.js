import { getMealsList } from './mealsApi.js';

const getAllItemsCount = async () => {
  const data = await getMealsList();
  const itemsCount = document.querySelector('#items-count');
  itemsCount.innerHTML = `Meals(${data.meals.length})`;
};

export default getAllItemsCount;
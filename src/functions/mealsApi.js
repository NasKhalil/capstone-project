import Meals from './displayList.js';
import mealCounter from './mealCounter.js';

const getMeals = async () => {
  try {
    return await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .then((response) => response.json())
      .then((json) => {
        Meals.showBoard(json.meals);
        mealCounter(json.meals.length);
      });
  } catch (e) {
    return null;
  }
};

export { getMeals as default };
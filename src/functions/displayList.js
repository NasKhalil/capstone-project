import { getMealsList } from './mealsApi.js';

const mealsList = document.querySelector('#main-page');

export default async () => {
  const data = await getMealsList();
  let htmlCode = '';
  data.meals.forEach((item) => {
    htmlCode += `
        <div id="card">
            <img src="${item.strMealThumb}" alt="">
            <div id='description'>
                <h3>${item.strMeal}</h3>
                <p><i class="fas fa-heart"></i> 0 Likes</p>
            </div>
            <div id='btns'>
                <button id=${item.idMeal} class='comment-btn'><i class="fas fa-comment"></i> Comments</button>
            </div>
        </div>
      `;
  });
  mealsList.innerHTML = htmlCode;

  return document.querySelectorAll('.comment-btn');
};
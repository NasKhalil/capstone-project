import { getMealsList } from './mealsApi.js';

const mealsList = document.querySelector('#main-page');

const displayList = async () => {
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
                <button id='comment-btn'><i class="fas fa-comment"></i> Comments</button>
                <button id='reservation-btn'><i class="fas fa-ticket-alt"></i> Reservations</button>
            </div>
        </div>
      `;
  });
  mealsList.innerHTML = htmlCode;
};

export default displayList;
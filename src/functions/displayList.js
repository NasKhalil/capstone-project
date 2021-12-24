import { getMealsList, getLikes } from './mealsApi.js';

const mealsList = document.querySelector('#main-page');

export default async () => {
  const data = await getMealsList();
  let likes = await getLikes();
  console.log(likes)
  let htmlCode = '';
  data.meals.forEach((item, index) => {
    
    htmlCode += `
        <div id="card">
            <img src="${item.strMealThumb}" alt="">
            <div id='description'>
                <h3>${item.strMeal}</h3>
                <p><i class="fas fa-heart"></i> ${likes[index].likes} Likes</p>
            </div>
            <div id='btns'>
                <button id=${item.idMeal} class='comment-btn'><i class="fas fa-comment"></i> Comments</button>
            </div>
        </div>
      `;
  });
  mealsList.innerHTML = htmlCode;

  const likeButton = document.querySelectorAll('.fa-heart');
  const likeNumber = document.querySelectorAll('.likeNumber');
 likeButton.forEach((element, index) => {
  element.addEventListener('click', async () => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/s01zcq66FTJkk56FIxxy/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: `item${index}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    likes = await getLikes();
    likeNumber[index].innerHTML = `${likes[index].likes} Likes`

  });
});

  return document.querySelectorAll('.comment-btn');
};
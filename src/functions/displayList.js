import { getMealsList } from './mealsApi.js';
import { getLikes } from './mealsApi.js';


const mealsList = document.querySelector('#main-page');

const displayList = async() => {
    const data = await getMealsList();
    const likes = await getLikes();
    console.log(likes)
    let htmlCode = '';
    data.meals.forEach((item, index) => {
        console.log(item.idMeal + '  idMeal')
        console.log(likes.filter((el) => {
            el.item_id === item.idMeal
        }))
        htmlCode += `
        <div id="card">
            <img src="${item.strMealThumb}" alt="">
            <div id='description'>
                <h3>${item.strMeal}</h3>
                <p class='likeNumber' data-id=${item.idMeal}><i class="fas fa-heart"></i> ${likes[index].likes} Likes</p>
            </div>
            <div id='btns'>
            
                <button id='comment-btn'><i class="fas fa-comment"></i> Comments</button>
                <button id='reservation-btn'><i class="fas fa-ticket-alt"></i> Reservations</button>
            </div>
        </div>
      `;
    });
    mealsList.innerHTML = htmlCode;

    const likeButton = document.querySelectorAll('.fa-heart');
    const likeNumber = document.querySelectorAll('.likeNumber');
   likeButton.forEach((element, index) => {
    element.addEventListener('click', async () => {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bjeHLEObVtTi6m0Zp622/likes', {
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
};

export default displayList;
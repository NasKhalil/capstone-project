import { getItem } from './mealsApi.js';

const commPopup = document.getElementById('comment-pop-up');

const closePopup = () => {
  commPopup.style.display = 'none';
};

export default async (btn) => {
  const data = await getItem(btn.id);
  let popUp = '';
  data.meals.map((meal) => {
    popUp += `
        <div id="modal-container">
            <div id='poupup-upper'>
                <i class="fas fa-times"></i>
                <div id='meal-info'>
                    <img id='popup-img' src="${meal.strMealThumb}" alt="">
                    <h2>${meal.strMeal}</h2>
                    <a href=${meal.strYoutube} >Youtube Link</a>
                    <p> Ingredients: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}</p>
                </div>
                <div>
                    
                </div>
            </div>
            <div id="comment-container">
                <div id='comment-title'>
                    <h2>Comments </h2>
                </div>
                <div id='add-comment-section'>
                    <h4>Add a comment</h4>
                    <input type="text" id='input-name' placeholder='Your name'>
                    <textarea name="message" id="comment-text" placeholder='Your insights' cols="25" rows="5"></textarea>
                    <button type="button" id="comment-add">Comment</button>
                </div>
            </div>
        </div>
          `;
    commPopup.innerHTML = popUp;
    return commPopup.innerHTML;
  });

  commPopup.style.display = 'block';

  const closeButton = document.querySelector('.fa-times');
  closeButton.addEventListener('click', closePopup);
};
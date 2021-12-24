import { getItem, sendComment, getComments } from './mealsApi.js';

const commPopup = document.getElementById('comment-pop-up');

const closePopup = () => {
  commPopup.style.display = 'none';
};

export default async (btn) => {
  const data = await getItem(btn.id);
  const commentsArr = await getComments(btn.id);
  commPopup.innerHTML += `
        <div id="modal-container">
            <div id='poupup-upper'>
                <i class="fas fa-times"></i>
                <div id='meal-info'>
                    <img id='popup-img' src="${data.meals[0].strMealThumb}" alt="">
                    <h2>${data.meals[0].strMeal}</h2>
                    <a href=${data.meals[0].strYoutube} >Youtube Link</a>
                    <p> Ingredients: ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}, ${data.meals[0].strIngredient6}, ${data.meals[0].strIngredient7}</p>
                </div>
                <div>
                    
                </div>
            </div>
            <div id="comment-container">
                <h2>Comments</h2>
                <div id='comment-section'>
                    
                </div>
                <div id='add-comment-section'>
                    <h4>Add a comment</h4>
                    <form id='comment-form'>
                      <input type="text" id='input-name' placeholder='Your name' required>
                      <textarea name="message" id="comment-text" placeholder='Your insights' cols="25" rows="5" required></textarea>
                      <button type="submit" id="comment-add">Comment</button>
                    </form>
                </div>
            </div>
        </div>
          `;

  const commentsContainer = document.querySelector('#comment-section');

  commentsArr.forEach((item) => {
    commentsContainer.innerHTML += `
                  <div>
                  <p class="comment-date">${item.creation_date}</p>
                  <p>${item.username}:</p>
                  <p>${item.comment}</p>
                  </div>
                  `;
  });

  const form = document.querySelector('#comment-form');
  form.addEventListener('submit', async (event) => {
    const UserName = document.querySelector('#input-name').value;
    const UserComment = document.querySelector('#comment-text').value;
    event.preventDefault();
    sendComment(btn.id, UserName, UserComment);
    form.reset();
  });

  commPopup.style.display = 'block';
  const closeButton = document.querySelector('.fa-times');
  closeButton.addEventListener('click', closePopup);
};
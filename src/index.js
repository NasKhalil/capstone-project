/* eslint-disable */
import './style.css';
import displayList from './functions/displayList.js';
import addLike from './functions/likes.js';



document.addEventListener('click', async(e) => {
    if (e.target.matches('.fas.fa-heart')) {

        const item_id = Number(e.target.idMeal)
        let like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
        e.target.nextSibling.textContent = `${like + 1} likes`;
        //await addLike(item_id);
    }
})
displayList();
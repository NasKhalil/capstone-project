import './style.css';
import displayList from './functions/displayList.js';
import comment from './functions/comment.js';
import getAllItemsCount from './functions/getAllItemsCount.js';

window.addEventListener('load', async () => {
  const commentBtn = await displayList();

  commentBtn.forEach(async (btn) => {
    btn.addEventListener('click', () => {
      comment(btn);
    });
  });

  document.addEventListener('click', async (e) => {
    if (e.target.matches('.fas.fa-heart')) {
      const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
      e.target.nextSibling.textContent = `${like + 1} likes`;
    }
  });

  getAllItemsCount();
});
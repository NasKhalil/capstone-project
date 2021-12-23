import './style.css';
import displayList from './functions/displayList.js';
import comment from './functions/comment.js';

window.addEventListener('load', async () => {
  const commentBtn = await displayList();

  commentBtn.forEach(async (btn) => {
    btn.addEventListener('click', () => {
      comment(btn);
    });
  });
});

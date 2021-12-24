/* eslint-disable import/no-cycle */
import './functions/commentstyle.css';
import './styles.css';
import Logo from './functions/images/meal-logo.png';
import getMeals from './functions/mealsApi.js';
import getLikes from './functions/getLikes.js';

const logoLink = document.getElementById('logo');
logoLink.src = Logo;

document.addEventListener('DOMContentLoaded', getMeals());
document.addEventListener('DOMContentLoaded', getLikes());
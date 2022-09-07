/* eslint-disable linebreak-style */
import { createComment } from './comment';
import './style.css';

document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault();
  createComment();
});
// document.querySelector("#submit").addEventListener("click", load());

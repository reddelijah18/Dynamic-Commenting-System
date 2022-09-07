/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
export default class Comment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document
      .getElementById('template')
      .content.cloneNode(true);

    shadow.append(template);

    this.namePlaceholder = this.shadowRoot.querySelector('#usersname');
    this.emailPlaceholder = this.shadowRoot.querySelector('#users-email');
    this.commentPlaceholder = this.shadowRoot.querySelector('#users-comment');

    const name = this.getAttribute('name');
    if (name) {
      this.namePlaceholder.textContent = name;
    }
    const email = this.getAttribute('email');
    if (email) {
      this.emailPlaceholder.textContent = email;
    }
    const comment = this.getAttribute('comment');
    if (comment) {
      this.commentPlaceholder.textContent = comment;
    }
  }
}

customElements.define('comment-com', Comment);

export const createComment = () => {
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const commentValue = document.getElementById('comment').value;

  const component = document.createElement('comment-com');

  component.setAttribute('name', nameValue);
  component.setAttribute('email', emailValue);
  component.setAttribute('comment', commentValue);

  const results = document.querySelector('#results-field');
  results.append(component);
};

/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
export default class Comment extends HTMLElement {
  constructor() {
    super();
  }

  // when we already have the custom compenent on the page
  static get observedAttributes() {
    return ['name', 'email', 'comment'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (property === 'name') {
      this.namePlaceholder.textContent = newValue;
    }

    if (property === 'email') {
      this.emailPlaceholder.textContent = newValue;
    }

    if (property === 'comment') {
      this.commentPlaceholder.textContent = newValue;
    }
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

customElements.define('movie-comment', Comment);

export const createComment = () => {
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const commentValue = document.getElementById('movie-comment').value;

  // const component = document.createElement('comment');

  const template = document.createElement('div');
  template.setAttribute('id', 'template');
  const name = document.createElement('div');
  name.setAttribute('id', 'usersname');
  const email = document.createElement('div');
  email.setAttribute('id', 'users-email');
  const comment = document.createElement('div');
  comment.setAttribute('id', 'users-comment');
  template.appendChild(name);
  template.appendChild(email);
  template.addpendChild(comment);


  template.setAttribute('name', nameValue);
  template.setAttribute('email', emailValue);
  template.setAttribute('comment', commentValue);

  const results = document.querySelector('#results-field');
  results.append(template);
};

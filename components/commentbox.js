class CommentBox extends HTMLElement {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this)
    }
    async addComment(e) {
        // Prevent the default behaviour of form submit
        e.preventDefault()
        // Get the value of the comment box
        // and make sure it not some empty strings
        const comment = e.target.elements.comment.value.trim()
        const name = e.target.elements.name.value.trim()
        // Get the current time.
        const timestamp = Date.now()
        if (name && comment) {
            const commentObject = { name, comment, timestamp }
            // Publish comment
            channel.publish("add_comment", commentObject, (err) => {
              if (err) {
                console.log("Unable to publish message err = " + err.message)
              }
            })
            // Clear input fields
            e.target.elements.name.value = ""
            e.target.elements.comment.value = ""
          }
        }

        render() {
            return (
            <div>
                <h1 className="title">Please leave your feedback below</h1>
                <form onSubmit={this.addComment}>
                  <div className="field">
                    <div className="control">
                      <input
                      required
                        type="text"
                        className="input"
                        name="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                      required
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                      required
                        type="checkbox"
                        className="input"
                        name="checkbox"
                      />
                      <label>Would you like your comment to be posted?</label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="comment"
                        placeholder="Add a comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            )
          }
}

connectedCallback(); {
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.getElementById('user-info').content.cloneNode(true);
    shadow.append(template);
}

customElements.define('comment-box', CommentBox);


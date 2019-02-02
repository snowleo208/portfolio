import React, { Component } from 'react';
// import * as json from './portfolio.json';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: true,
      emailValid: true,
      messageValid: true,
      formValid: false,
      isSubmit: false,
    };
  }

  formChange = item => {
    console.log(item.target.value, item.target.validity.valid);
    this.setState({
      [item.target.name]: item.target.value,
      [`${item.target.name}Valid`]: item.target.validity.valid,
    });
  };

  onSubmit = e => {
    console.log(e);
    e.preventDefault();
    if (!this.state.isSubmit) {
      this.setState({
        isSubmit: true,
      });
    }
  };

  render() {
    // const translate = json.default;
    return (
      <section className="c-contact u-section-padding">
        <div className="c-contact-details">
          <h1>Contact Info:</h1>
          <p>
            Need a project? Feel free to contact me and let me know what you
            need. Everything would be tailor-made and suit for your needs.
          </p>
        </div>
        <form className="c-form" id="form" action="" method="POST">
          <label htmlFor="email">
            <span className="c-form-label">
              Email <abbr title="Required">*</abbr>
            </span>
            <input
              className="c-form-input"
              id="form-email"
              type="email"
              name="email"
              required="required"
              pattern=".{3,}"
              onChange={e => this.formChange(e)}
              aria-invalid={
                this.state.isSubmit && this.state.emailValid ? 'true' : 'false'
              }
            />
            <span
              className={this.state.emailValid ? 'u-alert' : 'u-alert invalid'}
              id="form-email-error"
            >
              Please enter a valid email format
            </span>
          </label>
          <label htmlFor="name">
            <span className="c-form-label">Name</span>
            <input
              className="c-form-input"
              id="form-name"
              type="text"
              name="name"
              pattern="^[A-Za-z ,.'-]+$"
              onChange={e => this.formChange(e)}
              aria-invalid={
                this.state.isSubmit && this.state.nameValid ? 'true' : 'false'
              }
            />
            <span
              className={this.state.nameValid ? 'u-alert' : 'u-alert invalid'}
              id="form-name-error"
            >
              Please enter a valid name with alphabets only
            </span>
          </label>
          <label htmlFor="message">
            <span className="c-form-label">
              Message <abbr title="Required">*</abbr>
            </span>
            <textarea
              className="c-form-input"
              id="form-message"
              minLength="10"
              maxLength="400"
              rows="4"
              name="message"
              required="required"
              onChange={e => this.formChange(e)}
              aria-invalid={
                this.state.isSubmit && this.state.messageValid
                  ? 'true'
                  : 'false'
              }
            />
            <span className="c-form-input__length">
              <span id="form-message-length">0</span>
              /400
            </span>
            <span
              className={
                this.state.messageValid ? 'u-alert' : 'u-alert invalid'
              }
              id="form-message-error"
            >
              Please enter at least 10 characters and less than 400 characters.
            </span>
          </label>
          <input
            className="u-btn c-form-submit"
            id="form-submit"
            type="submit"
            value="Submit"
            name="submit"
            onClick={e => this.onSubmit(e)}
          />
          <span
            className={
              this.state.isSubmit && !this.state.formValid
                ? 'u-alert invalid'
                : 'u-alert'
            }
            id="form-submit-error"
          >
            Please correct all information and try again.
          </span>
        </form>
      </section>
    );
  }
}

export default Contact;

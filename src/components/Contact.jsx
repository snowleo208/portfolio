import React, { Component } from 'react';
import * as json from './portfolio.json';

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
      showThankyou: false,
    };
    this.emailField = React.createRef();
    this.nameField = React.createRef();
    this.messageField = React.createRef();
  }

  formChange = e => {
    e.preventDefault ? e.preventDefault() : '';

    //if func triggered by event like input, it will use e.target, otherwise would be e.current, from React ref
    const target = e.current ? e.current : e.target;
    this.setState({
      [target.name]: target.value,
      [`${target.name}Valid`]: target.validity.valid,
    });
    target.setAttribute('data-input', 'true');
  };

  checkAllValid = () => {
    let count = 0; // var for checking validated field
    const form = [this.emailField, this.nameField, this.messageField];
    form.forEach(ele => {
      this.formChange(ele);

      //if field is correct, add count
      if (ele.current.validity.valid) {
        count++;
      }
    });

    return count === form.length;
  };

  onSubmit = e => {
    e.preventDefault();
    const result = this.checkAllValid();
    const body = {
      email: this.state.email,
      name: this.state.name,
      message: this.state.message,
    };

    //set isSubmit and formValid to true and validation value to trigger error message under form
    this.setState({
      isSubmit: true,
      formValid: result,
    });

    if (result) {
      return fetch('https://snowleo208.atrera.com/post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(res => res.json())
        .then(json => {
          if (json.status === 'true') {
            this.setState({
              showThankyou: true,
            });
          }
        });
    }
  };

  render() {
    const translate = json.default;
    return (
      <section className="c-contact u-section-padding fade-in">
        <div className="c-contact-details">
          <h1>{translate.contactHeader}</h1>
          <p>{translate.contactText}</p>
        </div>
        <form
          className={this.state.showThankyou ? 'c-form u-hide' : 'c-form'}
          id="form"
          method="POST"
        >
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
              aria-invalid={!this.state.emailValid ? 'true' : 'false'}
              data-input="false"
              ref={this.emailField}
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
              aria-invalid={!this.state.nameValid ? 'true' : 'false'}
              data-input="false"
              ref={this.nameField}
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
              maxLength="400"
              rows="4"
              name="message"
              required="required"
              onChange={e => this.formChange(e)}
              aria-invalid={!this.state.messageValid ? 'true' : 'false'}
              data-input="false"
              ref={this.messageField}
            />
            <span className="c-form-input__length">
              <span id="form-message-length">{this.state.message.length}</span>
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
        <div
          className={
            this.state.showThankyou
              ? 'c-form-thankyou'
              : 'c-form-thankyou u-hide'
          }
          aria-hidden={this.state.showThankyou ? 'false' : 'true'}
        >
          <p>Thank you for your message! </p>
        </div>
      </section>
    );
  }
}

export default Contact;

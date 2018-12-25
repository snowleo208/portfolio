import React, { Component } from 'react';
// import * as json from './portfolio.json';

class Contact extends Component {
  render() {
    // const translate = json.default;
    return (
      <section className="c-contact u-section-padding">
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
            />
            <span className="u-alert" id="form-email-error">
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
            />
            <span className="u-alert" id="form-name-error">
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
            />
            <span className="c-form-input__length">
              <span id="form-message-length">0</span>/400
            </span>
            <span className="u-alert" id="form-message-error">
              Please enter at least 10 characters and less than 400 characters.
            </span>
          </label>
          <input
            className="u-btn c-form-submit"
            id="form-submit"
            type="submit"
            value="Submit"
            name="submit"
          />
          <span className="u-alert" id="form-submit-error">
            Please correct all information and try again.
          </span>
        </form>
      </section>
    );
  }
}

export default Contact;

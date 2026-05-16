import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import translate from '../portfolio';
import {
  Container, ContactGrid, StyledForm, Label, TextInput, Button, TextArea, Error,
} from './Contact.styles';

type ContactFormValues = {
  email: string;
  name: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>();
  const [showThankyou, setShowThankYou] = useState(false);

  const onSubmit = (data: ContactFormValues) => {
    if (!data) {
      throw Error('Submit Error');
    }

    return fetch('https://formspree.io/mzbkpjdj', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setShowThankYou(true);
        }
      });
  };

  return (
    <Container>
      <ContactGrid>
        <div>
          <h1>{translate.contactHeader}</h1>
          <p>{translate.contactText}</p>
        </div>
        {!showThankyou && (<StyledForm
          id="form"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">
            <Label>
              Email
            </Label>
            <TextInput id="email" {...register('email', { required: true })} />
            {errors?.email && (
            <Error id="form-email-error">
              Please enter a valid email format
            </Error>
            )}
          </label>
          <label htmlFor="name">
            <Label>Name</Label>
            <TextInput
              id="name"
              {...register('name', { required: true, maxLength: 20 })}
            />
            {errors?.name && (
            <Error id="form-name-error">
              Please enter a valid name with alphabets only
            </Error>
            )}
          </label>
          <label htmlFor="message">
            <Label>
              Message
            </Label>
            <TextArea
              id="message"
              rows={4}
              {...register('message', { required: true, maxLength: 400, minLength: 10 })}
            />
            {errors?.message && (
            <Error
              id="form-message-error"
            >
              Please enter at least 10 characters and less than 400 characters.
            </Error>
            )}
          </label>
          <Button
            type="submit"
            value="Submit"
            name="submit"
          />
        </StyledForm>)}
        {showThankyou && (
        <div
          aria-hidden={showThankyou ? 'false' : 'true'}
          data-testid="contact-thank-you"
        >
          <p>Thank you for your message! </p>
        </div>
        )}
      </ContactGrid>
    </Container>
  );
}

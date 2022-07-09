import React from 'react';
import { Helmet } from 'react-helmet';

import { Contact } from '../Contact';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Yuki Cheung</title>
      </Helmet>
      <Contact />
    </>
  );
}

export default ContactPage;

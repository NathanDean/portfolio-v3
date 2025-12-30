'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm('mbdjwvro');

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center h-screen"
    >
      {state.succeeded ? (
        <div className="space-y-4 text-xl text-center">
          <p>Thanks for getting in touch!</p>
          <p>{`I'll`} get back to you as soon as I can.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </section>
  );
}

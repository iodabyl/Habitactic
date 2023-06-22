import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
      <section className='section-center'>
        <h1>Thank you for contacting Habitactic</h1>
        <div className="underline-1"></div>
        <h2>Your response has been submitted.  We will get back to you by email within 48 hours with a link to book your trial appointment</h2>
        <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
      </section>
  );
}

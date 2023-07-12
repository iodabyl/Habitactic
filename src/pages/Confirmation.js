import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
      <section className='section'>
          <div className="section-center">
            <div className="section-title">
              <h1>Thank you for contacting Habitactic</h1>
              <div className="underline-1"><span></span></div>
              <h4>Your response has been submitted.  <br />We will get back to you by email within 48 hours with a link to book your trial appointment.</h4>
              <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
            </div>
          </div>
      </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
      <section className='section-center'>
        <h1>About page</h1>
        <div className="underline-1"></div>
        <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
      </section>
  );
}

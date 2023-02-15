import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
      <section className='section-center'>
        <h1>404</h1>
        <div className="underline-1"></div>
        <h2>Page not found</h2>
        <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
      </section>
  );
}

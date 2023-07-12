import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
      <section className='section'>
            <div className="section-center">
              <div className="section-title">
                <h1>Whoops! <br />We can't seem to find that page.</h1>
                <div className="underline-1"><span></span></div>
                <h4>We're sorry for the inconvinience, and will try to fix the issue as soon as possible. <br />Would you be please go back to our homepage and try again?</h4>
                <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
              </div>
            </div>
      </section>
  );
}

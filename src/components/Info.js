import React from 'react';
import {Link} from 'react-router-dom'
import landing1 from '../images/Landing1.jpg'


export default function Info() {
  return (
    <section className="section">
        <div className="services-center section-center">
            <div className="section-title">
                <h2 className='btm0px'>Why Habitactic</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <div className="coaching-center flex-row-rev">
                <div className="details container-60">
                    <p>
                        At Habitactic we believe that every student learns differently and that instruction should be personalized to help them discover how they learn best.  
                        Our approach centers around one-on-one tutoring to internalize:
                        <br /><br />
                        Habits: Acquired behaviors that have become nearly involuntary.
                        <br />
                        Tactics: Realized plans for promoting desired results.
                        <br /><br />
                        The goal of this approach is to make learning easier by making it routine, while providing students with the roadmap and tools necessary to improve their learning quality and efficiency.
                        Work together with your Habitactic mentor to revolutionize your learning.
                    </p>
                </div>
                <div className="coaching-img-container container-40"><img src={landing1} alt="Success" /></div>
            </div>
        </div>
    </section>
  );
}

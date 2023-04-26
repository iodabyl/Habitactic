import React from 'react';
import {Link} from 'react-router-dom'

export default function Info() {
  return (
    <section className="section">
        <div className="services-center section-center">
            <div className="section-title">
                <h2 className='btm0px'>Why Habitactic</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <div className="info-body">
                <h4>At Habitactic we believe that every student learns differently and that instruction should be personalized to help them discover how they learn best.  
                    The name Habitactic reflects our approach for helping students discover their potential, through a combination of good study habits and effective tactics.
                    <br /><br />
                    Habit: An acquired behavior that has become nearly involuntary.
                    <br />
                    The goal of building good study habits is to make learning routine, thereby reducing the stress of studying, and making learning more enjoyable.
                    <br /><br />
                    Tactic: A plan for promoting a desired result.
                    <br />
                    All studying is not created equal.  Tactics are the tools a student can employ to allow them to make their studying more effective.
                    <br /><br />
                    There is no one size fits all approach for a student to succeed.  We put this belief into action by working with each student to discover how they learn best,
                    helping them employ these practices both in and out of school.
                </h4>
            </div>
        </div>
    </section>
  );
}

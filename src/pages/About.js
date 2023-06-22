import React from 'react';
import Hero from '../components/AboutHero'
import coaching_0 from '../images/coaching_0.jpg'
import sarah from '../images/Sarah2.jpg'
import useWindowSize from '../components/useWindowSize'

export default function About() {
  return (
    <>
    <Hero />
    <section className="section">
        <div className="services-center section-center">
            <div className="info-body">
              <p className='dark-grey indent'>
                I'm a lifelong learner who has been exploring studying strategies for the past 10 years.  
                I began seriously exploring my own studying systems as an engineering undergraduate at Brown University, 
                trying to find the best way to balance time consuming assignments and demanding exams across multiple deadlines.  
                I adapted these systems to the exam intensive courses while studying at Keio University, 
                and balancing studying for graduate school entrance exams while working full time as a mechanical engineer.  
                I am continuing to evolve my own learning, now in self driven research at The University of Tokyo.  
                Throughout these years I have tried countless tactics to find the set that work best for myself within each unique learning environment.  
                As a college application mentor I taught these tactics to help students get into colleges such as Duke University, 
                University of Wisconsin Madison, and Harvard University.
                <br /><br />
                I created Habitactic to share these resources with more students from an early point in their educational journeys, 
                and assist them in their first steps as lifelong learners.
              </p>
            </div>
        </div>
        <div className="coaching-block bkgd-white">
                    <div className="section-title">
                      <h2 className='btm0px'>Meet Our Team</h2>
                      <div className="underline-2"><span></span></div>
                    </div>
                    <div className="coaching-center">
                        <div className="details container-60">
                            <h3 className='navy'>Hi, I'm Sarah!</h3>
                            <div className="details-text">
                                <p className='dark-grey'>
                                  I'm a lifelong learner who has been exploring studying strategies for the past 10 years.  
                                  I began seriously exploring my own studying systems as an engineering undergraduate at Brown University, 
                                  trying to find the best way to balance time consuming assignments and demanding exams across multiple deadlines.  
                                  I adapted these systems to the exam intensive courses while studying at Keio University, 
                                  and balancing studying for graduate school entrance exams while working full time as a mechanical engineer.  
                                  I am continuing to evolve my own learning, now in self driven research at The University of Tokyo.  
                                  Throughout these years I have tried countless tactics to find the set that work best for myself within each unique learning environment.  
                                  As a college application mentor I taught these tactics to help students get into colleges such as Duke University, 
                                  University of Wisconsin Madison, and Harvard University.
                                </p>
                            </div>
                        </div>
                      <div className="coaching-img-container container-40 team-pic-div"><img classname='team-pic' src={sarah} alt="Sarah" /></div>
                    </div>
                </div>
                <div className="coaching-block bkgd-white">
                    <div className="coaching-center">
                        <div className="coaching-img-container container-40 team-pic-div"><img src={sarah} alt="Why ILL" /></div>
                        <div className="details container-60">
                            <h3 className='navy'>Hi, I'm Sarah!</h3>
                            <div className="details-text">
                                <p className='dark-grey'>
                                  I'm a lifelong learner who has been exploring studying strategies for the past 10 years.  
                                  I began seriously exploring my own studying systems as an engineering undergraduate at Brown University, 
                                  trying to find the best way to balance time consuming assignments and demanding exams across multiple deadlines.  
                                  I adapted these systems to the exam intensive courses while studying at Keio University, 
                                  and balancing studying for graduate school entrance exams while working full time as a mechanical engineer.  
                                  I am continuing to evolve my own learning, now in self driven research at The University of Tokyo.  
                                  Throughout these years I have tried countless tactics to find the set that work best for myself within each unique learning environment.  
                                  As a college application mentor I taught these tactics to help students get into colleges such as Duke University, 
                                  University of Wisconsin Madison, and Harvard University.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    </>

  );
}

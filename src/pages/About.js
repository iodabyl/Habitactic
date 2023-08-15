import React from 'react';
import Hero from '../components/AboutHero'
import coaching_0 from '../images/coaching_0.jpg'
import sarah from '../images/Sarah.jpg'
import useWindowSize from '../components/useWindowSize'

export default function About() {
  return (
    <>
    <Hero />
    <section className="section">
        <div className="services-center section-center">
            <div className="info-body">
              <p className='dark-grey indent'>
                I'm a lifelong learner who has been exploring studying strategies for the past decade.  
                I began seriously exploring my own studying systems as an engineering undergraduate at Brown University, 
                trying to find the best way to balance time consuming assignments and demanding exams across multiple deadlines. 
                I devised class specific note-taking systems, exam preparation protocols, and study routines for increased focus and retention. 
                I adapted these systems to the exam intensive courses while studying at Keio University, 
                and for balancing graduate school entrance exam studying with a full time  profession as a mechanical engineer.  
                I am continuing to evolve my own learning, now in my self-driven research as a graduate student at The University of Tokyo, 
                and by conducting further explorations on the underlying scientific literature surrounding learning systems.
                <br />Throughout these years I have tried countless tactics to find the set that work best for myself within each unique 
                learning environment, and endevoured to create a framework by which to teach these learning skills. As a college application 
                mentor I taught these tactics to help students get into colleges such as Duke University, University of Wisconsin Madison, 
                and Harvard University.
                <br /><br />
                I created Habitactic to share these resources with more students from an early point in their educational journeys, 
                and assist them in their first steps as lifelong learners. Let us help you 
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
                                I'm the educational program design consultant at Habitactic. My interest in helping students find the methods for their optimal learning 
                                stems from my decade of experience as an educator for students ranging from K-12th grade.  In this role I discovered 
                                that students would often have as many questions about how they should study, organize assignments and take notes as they did about 
                                the topics being covered.  These students wanted to learn how to learn.  
                                <br />This question of how to teach learning has been at the forefront of my scholarly pursuits of education.  
                                As an undergraduate at Keio University I focused on comparative education in an effort to determine the impacts of different 
                                education systems and environments on student growth.  I conducted research on the impact of grit and resilience on 
                                learning within this context.  Through an M.A. in Developmental Psychology at Harvard Graduate School of Education, 
                                I furthered this inquiry by exploring the neural and psychological systems for learning with an emphasis on translating those 
                                systems to the education technology space.  These findings form the backbone of the individualized tutoring program I designed at Habitactic.
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
                            <h3 className='navy'>Hi, I'm Takami!</h3>
                            <div className="details-text">
                                <p className='dark-grey'>
                                I'm the college application program consultant at Habitactic.  
                                <br />The college application process and transition to college are stressful, and full of unknowns 
                                for any student.  I felt this first hand during my application process and transition to 
                                Brown University.  It was a process I got through with the help of knowledgeable mentors, 
                                a luxury not afforded to all prospective students.  At Brown I pursued a course of study focused on 
                                addressing systemic issues related to race and class on equitable access to opportunities, 
                                and took on numerous mentorship roles for younger students.  
                                <br />Following graduation I joined Crimson Education as a student success manager and helped over 
                                one-hundred students navigate the application process for schools ranging from small liberal arts schools to giant research institutions, 
                                across the US, UK, and Canada.  I hope to leverage the expertise I gained helping these students to help you reach your dream school.
                                <br />My current role as an administrator at Temple University enables me to focus on students' transitions to university life. 
                                The final component of the application program I designed at Habitactic aims to leverage this competency, 
                                to go beyond the acceptance letter and prepare you for the best first step to college.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    </>

  );
}

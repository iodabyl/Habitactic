import React from 'react'
import Hero from '../components/CoachingHero'
import coaching1 from '../images/coaching1.png'
import coaching2 from '../images/coaching2.png'
import coaching3 from '../images/coaching3.png'
import coaching4 from '../images/coaching4.jpg'
import coaching5 from '../images/coaching5.jpg'
import coaching6 from '../images/coaching6.png'


export default function Coaching() {
  return (
    <>
    <Hero />
    <section className="section">
            <section className="coaching-body">
                {/* <div className="coaching-block bkgd-white">
                    <div className="coaching-center">
                        <div className="details container-100">
                            <h2 className='navy'>Our beliefs</h2>
                            <div className="details-text">
                                <p className='dark-grey indent'>The ability to learn is the most important skill of the 21st century.  It is a lifelong skill to help you through high school, college and beyond.  However it is a skill that traditional educational institutions cannot teach, as it must be discovered and honed individually.  Habitactic gives you the individualized support to discover your unique learning style, and the tools to maximize your potential.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="services-center section-center">
                    <div className="section-title">
                        <h2 className='btm0px'>Our Beliefs</h2>
                        <div className="underline-2"><span></span></div>
                    </div>
                    <div className="info-body">
                        <p className='dark-grey indent'>The ability to learn is the most important skill of the 21st century.  It is a lifelong skill to help you through high school, college and beyond.  However it is a skill that traditional educational institutions cannot teach, as it must be discovered and honed individually.  Habitactic gives you the individualized support to discover your unique learning style, and the tools to maximize your potential.</p>
                        <p className="dark-grey indent">pargraph 2</p>
                    </div>
                </div>
                {/* <div className="coaching-block back-hexagon"> */}
                <div className="coaching-block bkgd-white">
                    {/* <div className="back-gradient-green cover100"> */}
                    <div className="coaching-center">
                        <div className="details container-60">
                            <h2 className='navy'>Step 1: Two risk free sessions</h2>
                            <div className="details-text">
                                <p className='dark-grey'>We start with two free sessions to help you decide if Habitactic is right for you!</p>
                                <ol className='dark-grey'>
                                    <li><p>An expert consultation session to get to know your needs, and goals.</p></li>
                                    <li><p>A trial coaching session to assess current proficiencies and opportunities for growth.</p></li>
                                </ol>
                            </div>
                        </div>
                        <div className="coaching-img-container container-40"><img src={coaching1} alt="Why ILL" /></div>
                    </div>
                    {/* </div> */}
                    {/* <div className="blur-green-white"></div> */}
                </div>
                {/* <div className="coaching-block back-bamboo"> */}
                <div className="coaching-block bkgd-white">
                    <div className="coaching-center">
                        <div className="coaching-img-container container-40"><img src={coaching2} alt="Why ILL" /></div>
                        <div className="details container-60">
                            <h2 className='navy'>Step 2: Your Personalized Roadmap</h2>
                            <div className="details-text">
                                <p className='dark-grey'>Based off the initial consultation and coaching session we will create your personalized roadmap to success.</p>
                                <p className='dark-grey'>This first big-picture roadmap will help you visualize the skills and habits you will build on your road to success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="coaching-block back-diamond"> */}
                <div className="coaching-block bkgd-white">
                    {/* <div className="back-gradient-green cover100"> */}
                    <div className="coaching-center">
                        <div className="details container-60">
                            <h2 className='navy'>Step 3: Individual Suite of Tools</h2>
                            <div className="details-text">
                                <p className='dark-grey'>We work to find the best combination of study, and management tools to develop your own learning style.</p>
                                <ul className='dark-grey dot'>
                                    <li><p>Time and Priorities Management: Beginwith task tracking, time blocking and weekly planning.</p></li>
                                    <li><p>Note Taking Systems: Implement note taking tactics for maximized retention and recall.</p></li>
                                    <li><p>Study Systems: Encoding, Active Recall, Spaced Repitition and more to maximize efficiency.</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="coaching-img-container container-40"><img src={coaching3} alt="Why ILL" /></div>
                    </div>
                    {/* </div> */}
                </div>
                {/* <div className="coaching-block back-wiggle"> */}
                <div className="coaching-block bkgd-white">
                    <div className="coaching-center">
                    <div className="coaching-img-container container-40"><img src={coaching4} alt="Why ILL" /></div>
                    <div className="details container-60">
                            <h2 className='navy'>Step 4: Subject Based Support</h2>
                            <div className="details-text">
                                <p className='dark-grey'>Put the concepts of effective learning to practice under mentor guidance with subject based support.</p>
                                <ul className='dark-grey dot'>
                                    <li><p>Apply note taking tactics for clearer history notes that illuminate the connections between events</p></li>
                                    <li><p>Study for a Math test in half the time by implementing self-made study materials</p></li>
                                    <li><p>Utilize weekly office hours for frequent support outside of the core weekly session</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="coaching-block back-hexagon"> */}
                <div className="coaching-block bkgd-white">
                    {/* <div className="back-gradient-green cover100"> */}
                    <div className="coaching-center">
                        <div className="details container-60">
                            <h2 className='navy'>Step 5: Expand Beyond the Classroom</h2>
                            <div className="details-text">
                                <p className='dark-grey'>Support for finding programs and extracurriculars outside of the classroom to take advantage of unique opportunities offered to high school students including:</p>
                                <ul className='dark-grey dot'>
                                    <li><p>University research programs and research workshops</p></li>
                                    <li><p>Medium and short term study abroad opportunities</p></li>
                                    <li><p>Leadership programs and youth conferences</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="coaching-img-container container-40"><img src={coaching5} alt="Why ILL" /></div>
                    </div>
                    {/* </div> */}
                    {/* <div className="blur-green-brown"></div> */}
                </div>
                {/* </div> */}

                {/* <div className="coaching-block back-bamboo"> */}
                <div className="coaching-block bkgd-white">
                    {/* <div className="back-brown cover100"> */}
                    <div className="coaching-center">
                        <div className="coaching-img-container container-40"><img src={coaching6} alt="Why ILL" /></div>
                        <div className="details container-60">
                            <h2 className='navy'>Step 6: Assitance with Applications for US Colleges </h2>
                            <div className="details-text">
                                <p className='dark-grey'>Take the final step in your international education and apply for foreign Universities!  We will assist you on everything from school choice, Toefl and SAT prep, college essay support and more.</p>
                                <p className='dark-grey'>Get a leg up on your college planning by starting early with your mentor!</p>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* </div> */}
            </section>
    </section>
    </>
  )
}

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [background, setBackground] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      let newBackground = background + 1;
      if (newBackground > 2){
        newBackground=0;
      }
      return setBackground(newBackground);
    }, 5000);
    return () => clearInterval(timer);
  }, [background])
  
  return (
    <section className={`hero hero-${background}`}>
        <div className="hero-center">
            <h1>Take your first step to becoming an Ivy League Learner</h1>
            <div className="underline-1"><span></span></div>
            <h4>Learn the study habits, skills, and motivation to take your learning to the next level.<br/>Start today risk free.</h4>
            <Link to='/rooms' className='btn btn-primary'>Book a free consultation</Link>
        </div>
    </section>
  );
}

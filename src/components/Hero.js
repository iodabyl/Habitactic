import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [background, setBackground] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     let newBackground = background + 1;
  //     if (newBackground > 2){
  //       newBackground=0;
  //     }
  //     return setBackground(newBackground);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [background])
  
  return (
    <section className={`hero hero-${background}`}>
        <div className="hero-center">
            <h1>Develop the study habits and tactics to excell at school with Habitactic</h1>
            <div className="underline-1"><span></span></div>
            <h4>Book a free consultation today, and take your first steps towards revolutionizing your learning</h4>
            <Link to='/signup' className='btn btn-primary'>Book a free consultation</Link>
        </div>
        <div className="hero-blur"></div>
    </section>
  );
}

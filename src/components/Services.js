import React, {useState} from 'react';
import ServiceDetails from './ServiceDetails'
import {FaMapSigns, FaMapMarkedAlt, FaToolbox, FaRocket, FaEdit, FaUserGraduate} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Services() {
    const [service, setService] = useState(0);
    const {title, details} = ServiceDetails[service].fields
  return (
    <section className="section">
        <div className="services-center section-center">
            <div className="section-title">
                <h2 className='btm0px'>Our Services</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <div className="services-body">
                <div className="service">
                    <button onClick={()=>setService(0)}>
                        <FaMapSigns className={`service-icon ${service===0 && 'active-service'}`}/>
                        <h4>1. Accessing your needs</h4>
                    </button>
                </div>
                <div className="service">
                    <button onClick={()=>setService(1)}>
                        <FaMapMarkedAlt className={`service-icon ${service===1 && 'active-service'}`}/>
                        <h4>2. Personalized RoadMap</h4>
                    </button>
                </div>
                <div className="service">
                    <button onClick={()=>setService(2)}>
                        <FaToolbox className={`service-icon ${service===2 && 'active-service'}`}/>
                        <h4>3. Full Suite of Tools</h4>
                    </button>
                </div>
                <div className="service">
                    <button onClick={()=>setService(3)}>
                        <FaEdit className={`service-icon ${service===3 && 'active-service'}`}/>
                        <h4>4. Subject Based Tutoring Support</h4>
                    </button>
                </div>
                <div className="service">
                    <button onClick={()=>setService(4)}>
                        <FaRocket className={`service-icon ${service===4 && 'active-service'}`}/>
                        <h4>5. Expand Beyond the ClassRoom</h4>
                    </button>
                </div>

                <div className="service">
                    <button onClick={()=>setService(5)}>
                        <FaUserGraduate className={`service-icon ${service===5 && 'active-service'}`}/>
                        <h4>6. US College Admissions Support</h4>
                    </button>
                </div>
            </div>
            <div className="service-description">
                <h3>{title}</h3>
                <p>{details}</p>
            </div>
           <Link to='/coaching' className='btn btn-primary'>Learn more</Link>
        </div>
    </section>
  );
}

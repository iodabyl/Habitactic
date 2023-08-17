import React, {useState} from 'react';
import ServiceDetails from './ServiceDetails'
import {FaMapSigns, FaMapMarkedAlt, FaToolbox, FaRocket, FaEdit, FaUserGraduate, FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Services() {
    const [service, setService] = useState(0);
    const {title, details} = ServiceDetails[service].fields
    const checkNumber = (number) => {
        if (number > 5) {
          return 0;
        }
        if (number < 0) {
          return 5;
        }
        return number;
    };
    const nextPerson = () => {
        setService((service) => {
          let newIndex = service + 1;
          return checkNumber(newIndex);
        });
    };
      const prevPerson = () => {
        setService((service) => {
          let newIndex = service - 1;
          return checkNumber(newIndex);
        });
    };

  return (
    <section className="section">
        <div className="services-center section-center">
            <div className="section-title">
                <h2 className='btm0px'>Our Services</h2>
                <div className="underline-2"><span></span></div>
            </div>
            <div className="services-body">
                <div className="service">
                    <button className={`${service===0 && 'active-service'}`} onClick={()=>setService(0)}>
                        <FaMapSigns className="service-icon"/>
                        <h3>1. Access your needs</h3>
                    </button>
                </div>
                <div className="service">
                    <button className={`${service===1 && 'active-service'}`} onClick={()=>setService(1)}>
                        <FaMapMarkedAlt className="service-icon"/>
                        <h3>2. Personal Roadmap</h3>
                    </button>
                </div>
                <div className="service">
                    <button className={`${service===2 && 'active-service'}`} onClick={()=>setService(2)}>
                        <FaToolbox className="service-icon"/>
                        <h3>3. Suite of Tools</h3>
                    </button>
                </div>
                <div className="service">
                    <button className={`${service===3 && 'active-service'}`} onClick={()=>setService(3)}>
                        <FaEdit className="service-icon"/>
                        <h3>4. Subject Based Support</h3>
                    </button>
                </div>
                <div className="service">
                    <button className={`${service===4 && 'active-service'}`} onClick={()=>setService(4)}>
                        <FaRocket className="service-icon"/>
                        <h3>5. Beyond the Classroom</h3>
                    </button>
                </div>

                <div className="service">
                    <button className={`${service===5 && 'active-service'}`} onClick={()=>setService(5)}>
                        <FaUserGraduate className="service-icon"/>
                        <h3>6. College Admissions Support</h3>
                    </button>
                </div>
            </div>
            <div className="service-panel">
                <button className='prev-btn blue' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <div className="service-description">
                    <h3>{title}</h3>
                    <p>{details}</p>
                </div>
                <button className='next-btn blue' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
           <Link to='/coaching' className='btn btn-primary'>Learn more</Link>
        </div>
    </section>
  );
}

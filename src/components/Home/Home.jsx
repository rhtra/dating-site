import React from 'react'
import './Home.css'
import left from './1.jpg'
import mobile3 from './2.jpg'
import {Link} from 'react-router-dom'
//import MultiStepForm from './components/MultiStepForm/MultiStepForm';

const Home = () => {
    return (
        <div className="app-main-home">
            <div data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000" 
            className="app-main-left">
                <h1 className="app-main-title">
                    <span
                    data-aos="fade-right"  
                    className="app-main-title-front-span">Snap</span>Site</h1>
                <p className="app-main-home-desc">
                    You are about to discover the <br/>
                    BRAND NEW SEX DATING SITE <br/>
                    that everyone is talking about...
                </p>
            </div>
            
            <div className="app-main-left-deco">Snap</div>
            
            <div data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000" 
            className="app-main-right">
                <div className="app-main-item">
                        <img className="app-main-item-img" src={left} alt=""/>
                        <div className="app-main-item-title">
                           100% Certified Profiles
                        </div>
                        <div className="app-main-item-desc">
                            What are you waiting for?
                        </div>
                        <Link to='/register'>
                        <button className="app-main-item-btn">Register now <i class="bi bi-arrow-right"></i></button>
                        </Link>
                </div>
                <div data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000" 
                className="app-main-item">
                        <div className="app-main-item-title ordr2">
                            Continue?
                        </div>
                        <div className="app-main-item-desc ordr3">
                            Lots of matches already waiting for you
                        </div>
                        <Link to='/' className="ordr4">
                        <button className="app-main-item-btn">Login now
                         <i class="bi bi-arrow-right"></i> </button>
                        </Link>
                        <img className="app-main-item-img" src={mobile3} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Home

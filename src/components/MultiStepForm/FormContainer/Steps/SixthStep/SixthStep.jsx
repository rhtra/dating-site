import React from 'react'
import './SixthStep.css'
import thanks from '../../../assets/icon-thank-you.svg'

const StepSix = () => {
    return (
        <section className="multi-step-form-step-five df"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600">
            <div className="multi-step-form-step-five-container">
                <img src={thanks} alt="" className="multi-step-form-thanks-img"/>
                <h3 className="multi-step-form-thanks-title">
                    Thank You!
                </h3>
                <p className="multi-step-form-thanks-text">
                    Thank you so much for your patronage! One of our agent will be with you shortly to confirm everything. If you ever need support, please feel free to email us at support@snapsite.com.
                </p>
            </div>
        </section>
    )
}

export default StepSix

import React, {useContext} from 'react'
import './SecondStep.css'
import {MultiStepFormContext} from '../../../MultiStepForm'
import Nav from '../../Nav/Nav'
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const StepOne = () => {

    const {gender, targetGender, birthday, setBirthday, setGender, setTargetGender, error} = useContext(MultiStepFormContext)
    
    const handleBirthday = (e) => {
        document.getElementById('multiFormBirthdayError').style.display = 'none'
        const InputField = document.getElementById('multiFormBirthdayInput');
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setBirthday(e)
    }
    return (
        <section className="multi-step-form-step-one"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Preference
            </h2>
            <form action="" className='multi-step-form-person-form'>
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormPhoneError">I am</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormGenderError'
                >
                    {error}
                </div>                
                </div>
                <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Prefer not to say</option>
                </select>
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormPhoneError">Looking for</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormTargetGenderError'
                >
                    {error}
                </div>                
                </div>
                <select name="targetGender" value={targetGender} onChange={(e)=>setTargetGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Everyone">Everyone</option>
                </select>
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormPhoneError">Your birthday</label>
                <div
                    className="multi-step-form-person-form-error"
                    id='multiFormBirthdayError'
                >
                    {error}
                </div>                
                </div>
                <DatePicker
                    selected={birthday}
                    onChange={(date) => handleBirthday(date)} 
                    maxDate={moment().subtract(18, 'years')._d}
                    id="multiFormBirthdayInput"
                    onKeyDown={(e) => {
                        e.preventDefault();
                    }}
                />
            </form>
            <Nav></Nav>
        </section>
    )
}

export default StepOne

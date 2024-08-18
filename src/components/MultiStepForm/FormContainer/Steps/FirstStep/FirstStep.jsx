import React, {useContext} from 'react'
import './FirstStep.css'
import {MultiStepFormContext} from '../../../MultiStepForm'
import Nav from '../../Nav/Nav'

const StepOne = () => {

    const { name, email, password, error, setName, setEmail, setPassword } = useContext(MultiStepFormContext)


    const handleName = (e) => {
        document.getElementById('multiFormNameError').style.display = 'none'
        const InputField = document.getElementById('multiFormNameInput')
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        document.getElementById('multiFormEmailError').style.display = 'none'
        const InputField = document.getElementById('multiFormEmailInput')
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setEmail(e.target.value)
    }
    
    const handlePassword = (e) => {
        document.getElementById('multiFormPasswordError').style.display = 'none'
        const InputField = document.getElementById('multiFormPasswordInput');
        if(InputField.classList.contains('multi-step-form-person-form-field-error')) {
            InputField.classList.remove('multi-step-form-person-form-field-error')
        }
        setPassword(e.target.value)
    }



    return (
        <section className="multi-step-form-step-one"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="600"
        >
            <h2 className="multi-step-form-step-title">
                Personal info
            </h2>
            <p className="multi-step-form-step-desc">
                Please provide your name, email address, and phone number.
            </p>
            <form action="" className='multi-step-form-person-form'>
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormNameError">Name</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormNameError'
                >
                    {error}
                </div>
                </div>
                <input id='multiFormNameInput' type="text" placeholder='e.g. John Doe'
                    value={name}
                    onChange={handleName}
                />
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormNameInput" >Email Adress</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormEmailError'
                >
                    {error}
                </div>                
                </div>
                <input id='multiFormEmailInput' type="input" placeholder='john_doe@email.com'
                    value={email}
                    onChange={handleEmail}
                />
                <div className="multi-step-form-person-form-info">
                <label htmlFor="multiFormNameInput" >Password</label>
                <div className="multi-step-form-person-form-error"
                id='multiFormPasswordError'
                >
                   {error}
                </div>                
                </div>
                <input id='multiFormPasswordInput' type="password"
                value={password}
                onChange={handlePassword}
                />
            </form>
            <Nav></Nav>
        </section>
    )
}

export default StepOne

import React, {useContext} from 'react'
import './Nav.css'
import {MultiStepFormContext} from '../../MultiStepForm'

const Nav = () => {


    const {stepIndex, setStepIndex, name, email, password, birthday, setError } = useContext(MultiStepFormContext)

    const showPrevPage = () => {
        setStepIndex(prev => prev - 1)
    }

    const showNextPage = () => {
        // eslint-disable-next-line 
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(stepIndex === 1) {
            if(name === '') {
                setError('This field is required')
                document.getElementById('multiFormNameError').style.display = 'block';
                document.getElementById('multiFormNameInput').classList.add('multi-step-form-person-form-field-error');
                return
            }
            else if(email === '' || !email.match(isValidEmail)) {
                document.getElementById('multiFormEmailError').style.display = 'block';
                document.getElementById('multiFormEmailInput').classList.add('multi-step-form-person-form-field-error');
                if (email === '')
                    setError('Pleave provide an e-mail')
                else
                    setError('Please provide a valid e-mail');
                return
            }
            else if(password === '' || password.length < 8) {
                document.getElementById('multiFormPasswordError').style.display = 'block';
                document.getElementById('multiFormPasswordInput').classList.add('multi-step-form-person-form-field-error');
                if (password === '')
                    setError('Pleave provide a password');
                else
                    setError('Password is too short');
                return
            }
            else if(birthday === '') {
                document.getElementById('multiFormPasswordError').style.display = 'block';
                document.getElementById('multiFormPasswordInput').classList.add('multi-step-form-person-form-field-error');
                setError('Please provide your birthday');
                return
            }
        } else if(stepIndex === 2) {
            console.log(birthday)
            if(!birthday) {
                document.getElementById('multiFormBirthdayError').style.display = 'block';
                document.getElementById('multiFormBirthdayInput').classList.add('multi-step-form-person-form-field-error');
                setError('Please provide your birthday');
                return
            }
        }

        setStepIndex(prev => prev + 1)
    }

    return (
        <nav className='multi-step-form-nav'>

            {stepIndex > 1 &&
            <button className="multi-step-form-nav-back-btn"
            onClick={showPrevPage}
            >
                Go back
            </button>
            }
            {stepIndex === 4 ? 
            <button className="multi-step-form-nav-next-btn
            multi-step-form-nav-confirm-btn"
            onClick={showNextPage}
            >
                Confirm
            </button>
            :
            <button className="multi-step-form-nav-next-btn"
            onClick={showNextPage}
            >
                Next Step
            </button>
        
        }
        </nav>
    )
}

export default Nav

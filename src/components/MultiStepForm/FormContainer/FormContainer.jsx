import React, {useContext} from 'react'
import './FormContainer.css'
import {MultiStepFormContext} from '../MultiStepForm'
import FirstStep from './Steps/FirstStep/FirstStep'
import SecondStep from './Steps/SecondStep/SecondStep'
import ThirdStep from './Steps/ThirdStep/ThirdStep'
import FourthStep from './Steps/FourthStep/FourthStep'
import FifthStep from './Steps/FifthStep/FifthStep'
import SixthStep from './Steps/SixthStep/SixthStep'

const FormContainer = () => {

    const {stepIndex} = useContext(MultiStepFormContext)

    const steps = {
        1 : <FirstStep></FirstStep> ,
        2 : <SecondStep></SecondStep>,
        3 : <ThirdStep></ThirdStep>, 
        4 : <FourthStep></FourthStep>,
        5 : <FifthStep></FifthStep>,
        6 : <SixthStep></SixthStep>,
    }

    return (
        <section className='multi-step-form-section'>
            {steps[stepIndex]}
        </section>
    )
}

export default FormContainer

import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';

import MultiStepForm from './components/MultiStepForm/MultiStepForm';



const App = () => {

AOS.init({
    once:"true"
});

    return (
        <div className='app'>
            <Router>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route exact path='/register' element={<MultiStepForm></MultiStepForm>}/>
            </Routes>
            </Router>
        </div>
    )
}

export default App

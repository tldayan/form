import React from 'react'
import NavigateContainer from './NavigateContainer'

export default function FormContainer({isMobile,currentStage,setCurrentStage}) {
  return (
    <div className="main_signup_container">
          <h1>Personal Info</h1>
          <p className='info'>Please provide your name, email address and phone number.</p>
          {<form>
              <div className="field_container">
                  <label className='field_name' htmlFor="">Name</label>
                  <input className='input_field' placeholder='e.g. Stephen King' type="text" /> 
              </div>
              <div className="field_container">
                  <label className='field_name' htmlFor="">Email address</label>
                  <input className='input_field' placeholder='e.g. stephenking@lorem.com' type="email" /> 
              </div>
              <div className="field_container">
                  <label className='field_name' htmlFor="">Phone number</label>
                  <input className='input_field' placeholder='e.g. +1 234 567 890' type="tel" name="" id="" />
              </div>
          </form>}
          {!isMobile && <NavigateContainer currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
      </div>
  )
}

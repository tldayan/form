import React, { useEffect } from 'react'


export default function FormProgress({currentStage}) {



    
  return (
    <div className="form_progress_container">
        <div className="progress_steps_container">
            <div className="steps_container">
              <div className="step">1</div>
              <div className="step_info">
                <span className='step_text'>STEP 1</span>
                <p className='step_detail'>YOUR INFO</p>
              </div>  
            </div>
            <div className="steps_container">
              <div className="step">2</div>
              <div className="step_info">
                <span className='step_text'>STEP 2</span>
                <p className='step_detail'>SELECT PLAN</p>
              </div>  
            </div>
            <div className="steps_container">
              <div className="step">3</div>
              <div className="step_info">
                <span className='step_text'>STEP 3</span>
                <p className='step_detail'>ADD-ONS</p>
              </div>  
            </div>
            <div className="steps_container">
              <div className="step">4</div>
              <div className="step_info">
                <span className='step_text'>STEP 4</span>
                <p className='step_detail'>SUMMARY</p>
              </div>  
            </div>
            <div className="steps_container">
              <div className="step">5</div>
              <div className="step_info">
                <span className='step_text'>STEP 5</span>
                <p className='step_detail'>COMPLETE</p>
              </div>  
            </div>
        </div>
    </div>
  )
}

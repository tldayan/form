import React from 'react'

export default function NavigateContainer({currentStage,setCurrentStage}) {


/*   function handleNextPage() {

  } */


  return (
    <div className="navigate_container">
      {currentStage !== 1 ? <a onClick={() => setCurrentStage(prevStage => prevStage - 1)} className='go_back_btn'>Go Back</a> : <div></div>}
      <a onClick={() => setCurrentStage(prevStage => prevStage + 1)} className='next_step_btn'>Next step</a>
    </div>
  )
}

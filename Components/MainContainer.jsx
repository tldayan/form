import React, { useState, useEffect } from 'react'
import FormProgress from './FormProgress'
import NavigateContainer from './NavigateContainer'
import FormContainer from './FormContainer'
import PlansContainer from './PlansContainer'
import AddOnsContainer from './AddOnsContainer'
import SummaryContainer from './SummaryContainer'
import ThankYouContainer from './ThankYouContainer'




export default function MainContainer({isMobile,currentStage,setCurrentStage,planDuration,setPlanDuration}) {

  const [selectedPlan, setSelectedPlan] = useState("arcade")
  const [addOns,setAddOns] = useState([])



  useEffect(() => {

    let stepElements = document.querySelectorAll(".step")
    
   stepElements.forEach(element => {
    if(Number(element.innerHTML) === currentStage) {

      if(currentStage === 5) {
        element.style.backgroundColor = "rgb(0, 255, 51)"
      } else {
        element.style.backgroundColor = "rgb(0, 0, 0)"
      }

      
      console.log(element.innerHTML)
    } else {
      element.style.backgroundColor = "transparent"
    }
  });
   
  },[currentStage])


  return (
    <>
    {isMobile && <FormProgress currentStage={currentStage} />}
    <div className="main_container">
    {!isMobile && <FormProgress currentStage={currentStage} />}
    {currentStage === 1 && <FormContainer isMobile={isMobile} currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
    {currentStage === 2 && <PlansContainer isMobile={isMobile} currentStage={currentStage}
         setCurrentStage={setCurrentStage} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planDuration={planDuration} setPlanDuration={setPlanDuration}/>}
    {currentStage === 3 && <AddOnsContainer isMobile={isMobile} currentStage={currentStage}
         setCurrentStage={setCurrentStage} addOns={addOns} setAddOns={setAddOns} planDuration={planDuration} />}
    {currentStage === 4 && <SummaryContainer isMobile={isMobile} currentStage={currentStage}
         setCurrentStage={setCurrentStage} selectedPlan={selectedPlan} planDuration={planDuration} addOns={addOns}  />}
    {currentStage === 5 && <ThankYouContainer isMobile={isMobile} currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
    </div>
    </>
  )
}

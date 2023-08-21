import React from 'react'
import NavigateContainer from './NavigateContainer'


export default function SummaryContainer({isMobile,currentStage,setCurrentStage,selectedPlan,planDuration,addOns}) {
  
    let chosenPlan = selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)
    let chosenPlanPrice = undefined
    let chosenPlanDuration = undefined
    let totalAddOnPrice = 0
    
    if(addOns) {

        addOns.forEach(addOn => {

            if (addOn === "Online Service") {
                if(planDuration === "monthly") {
                    totalAddOnPrice += 1 
                 } else {
                   totalAddOnPrice += 10  
                 } 
                }
            if (addOn === "Large Storage") {
                if(planDuration === "monthly") {
                    totalAddOnPrice += 2 
                 } else {
                   totalAddOnPrice += 20  
                 } 
                }
            if (addOn === "Customizable Profile") {
                if(planDuration === "monthly") {
                    totalAddOnPrice += 2 
                 } else {
                   totalAddOnPrice += 20  
                 } 
                }
        });
    }


    if(planDuration === "monthly") {
        chosenPlanDuration = "month"
    } else {
        chosenPlanDuration = "year"
    }

    if(selectedPlan === "arcade") {
        if(planDuration === "monthly") {
            chosenPlanPrice = 9
        } else {
            chosenPlanPrice = 90
        }
        
    } else if (selectedPlan === "advanced") {
        if(planDuration === "monthly") {
            chosenPlanPrice = 12
        } else {
            chosenPlanPrice = 120
        }

    } else {
        if(planDuration === "monthly") {
            chosenPlanPrice = 15
        } else {
            chosenPlanPrice = 150
        }
    }

    function getPrice(addOn) {
        if(addOn === "Online Service") {
            if(planDuration === "monthly") {
                return 1
            } else {
                return 10
            } 
        } else if(addOn === "Large Storage") {
            if(planDuration === "monthly") {
                return 2
            } else {
                return 20
            } 
        } else if(addOn === "Customizable Profile") {
            if(planDuration === "monthly") {
                return 2
            } else {
                return 20
            } 
        } 
    }


    return (
    <div className="summary_main_container">
        <h1>Finishing up</h1>
        <p className='info'>Double-check everything looks OK before confirming.</p>
        <div className="summary_container">
            <div className="selected_plan_container">
                <div className="selected_plan">
                    <h3>{chosenPlan} ({planDuration})</h3>
                    <button className='change_btn' onClick={() => setCurrentStage(2)}>Change</button>
                </div>
                <span>${chosenPlanPrice}/{chosenPlanDuration}</span>
            </div>
            <hr />
            {addOns.length > 0 && <div className="summary_add_ons">
                {addOns.map(eachAddOn => {
                    return <div className="summary_add_ons_containers" key={eachAddOn}>
                            <p>{eachAddOn}</p>
                            <span>+${getPrice(eachAddOn)}/{planDuration === "monthly" ? "month" : "year"}</span>
                           </div>
                })}
            </div>}
        </div>
        <div className="total_container">
            <p className='total_text'>Total(per {planDuration === "monthly" ? "month" : "year"})</p>
            <span className='total_price'>${totalAddOnPrice + chosenPlanPrice}</span>
        </div>
        {!isMobile && <NavigateContainer currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
    </div>
  )
}

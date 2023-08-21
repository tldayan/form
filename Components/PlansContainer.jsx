import React, { useEffect } from 'react'
import ArcadeIcon from "../assets/images/icon-arcade.svg"
import AdvancedIcon from "../assets/images/icon-advanced.svg"
import ProIcon from "../assets/images/icon-pro.svg"
import NavigateContainer from './NavigateContainer'



export default function PlansContainer({isMobile,currentStage,setCurrentStage,selectedPlan,setSelectedPlan,planDuration,setPlanDuration}) {

      
    function handleToggle() {
        setPlanDuration(prevValue => {
            if(prevValue === "monthly") {
                return "yearly"
            } else {
                return "monthly"
            }
        })
    }
    

  return (
    <div className="plan_container">
        <h1>Select your plan</h1>
        <p className='info'>You have the option of monthly or yearly billing.</p>
        <div className="plans_container">
            <button onClick={() => setSelectedPlan("arcade")} className={`arcade_plan_container ${selectedPlan === "arcade" && "plan_active"}`}>
                <img className='plan_icons' src={ArcadeIcon} alt="" />
                <div className="plan_details">
                    <h3>Arcade</h3>
                    <span>${planDuration === "monthly" ? "9 / month" : "90 / year"}</span>
                    {planDuration === "yearly" && <div className='yearly_notice'>2 months free</div>}
                </div>
            </button>
            <button onClick={() => setSelectedPlan("advanced")} className={`advanced_plan_container ${selectedPlan === "advanced" && "plan_active"}`}>
                <img className='plan_icons' src={AdvancedIcon} alt="" />
                <div className="plan_details">
                    <h3>Advanced</h3>
                    <span>${planDuration === "monthly" ? "12 / month" : "120 / year"}</span>
                    {planDuration === "yearly" && <div className='yearly_notice'>2 months free</div>}
                </div>
            </button>
            <button onClick={() => setSelectedPlan("pro")} className={`pro_plan_container ${selectedPlan === "pro" && "plan_active"}`}>
                <img className='plan_icons' src={ProIcon} alt="" />
                <div className="plan_details">
                    <h3>Pro</h3>
                    <span>${planDuration === "monthly" ? "15 / month" : "150 / year"}</span>
                    {planDuration === "yearly" && <div className='yearly_notice'>2 months free</div>}
                </div>
            </button>
        </div>
        <div className="plan_duration">
            <div className="main_toggle_container">
                <p>Monthly</p>
                <div onClick={() => handleToggle()} className="toggle_container">
                    <div className={`toggle ${planDuration === "yearly" && "toggle_switch"}`}></div>
                </div>
                <p>Yearly</p>
            </div>
        </div>
        {!isMobile && <NavigateContainer currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
    </div>
  )
}

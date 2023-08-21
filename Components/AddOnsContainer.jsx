import React, { useEffect } from 'react'
import NavigateContainer from './NavigateContainer'

export default function AddOnsContainer({isMobile,currentStage,setCurrentStage,addOns,setAddOns,planDuration}) {

  
  useEffect(() => {
    addOns.forEach(addOns => {

      let unformatedClassName = addOns.toLowerCase().replace(/\s+/g, "_")
      let eachAddOnElement = document.querySelector(`.${unformatedClassName} input[type="checkbox"]`);

      eachAddOnElement.checked = true    
    });
  })



  function handleAddOn(selectedAddOnClassName) {
    
    let selectedAddOnElementCheckbox = document.querySelector(`.${selectedAddOnClassName} input[type="checkbox"]`);

    if (selectedAddOnElementCheckbox) {
      selectedAddOnElementCheckbox.checked = !selectedAddOnElementCheckbox.checked;
    }

    setAddOns(prevList => {
      const formattedAddOn = selectedAddOnClassName
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return prevList.includes(formattedAddOn)
        ? prevList.filter(addOn => addOn !== formattedAddOn)
        : [...prevList, formattedAddOn];
    });
  }


  return (
    <div className="add_on_container">
        <h1>Pick add-ons</h1>
        <p className='info'>Add-ons help enhance your gaming experience.</p>
        <div className="add_on_main_container">
          <div onClick={(e) => handleAddOn(e.target.className)} className="online_service">
              <input className='add_on_checkbox' type="checkbox" name="" id="" />
              <div className="add_on_details_container">
                <h3 className="addOn_Title">Online Service</h3>
                <p className='add_on_desc'>Access to multiplayer games</p>
              </div>
              <span className='add_on_price'>+${planDuration === "monthly" ? "1/mo" : "10/yr"}</span>
          </div>
          <div onClick={(e) => handleAddOn(e.target.className)} className="large_storage">
              <input className='add_on_checkbox' type="checkbox" name="" id="" />
              <div className="add_on_details_container">
                <h3 className="addOn_Title">Larger storage</h3>
                <p className='add_on_desc'>Extra 1TB of cloud save</p>
              </div>
              <span className='add_on_price'>+${planDuration === "monthly" ? "2/mo" : "20/yr"}</span>
          </div>
          <div onClick={(e) => handleAddOn(e.target.className)} className="customizable_profile">
              <input className='add_on_checkbox' type="checkbox" name="" id="" />
              <div className="add_on_details_container">
                <h3 className="addOn_Title">Customizable Profile</h3>
                <p className='add_on_desc'>Custom theme on your profile</p>
              </div>
              <span className='add_on_price'>+${planDuration === "monthly" ? "2/mo" : "20/yr"}</span>
          </div>
        </div>
        {!isMobile && <NavigateContainer currentStage={currentStage}
         setCurrentStage={setCurrentStage} />}
    </div>
  )
}

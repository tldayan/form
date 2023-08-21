import React from 'react'
import ThankYouIcon from "../assets/images/icon-thank-you.svg"

export default function ThankYouContainer() {
  return (
    <div className="thankyou_container">
          <img className='thankyouicon' src={ThankYouIcon} alt="" />
          <h1>Thank you!</h1>
          <p className='thankyou_desc'>Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to mail us at <a href="mailto:support@loremgaming.com">support@loremgaming.com</a></p>
      </div>
  )
}

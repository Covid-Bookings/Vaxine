import React from 'react'
import './disclaimer.css'

const Disclaimer = () => {

  return (
    <div>
    <div className="disclaimer">
      <p>DISCLAIMER: VAXYN IS A VACCINE SCHEDULING SYSTEM. 
        IT DOES NOT GIVE ANY MEDICAL ADVICE ON VACCINATION OR ANY SIDE EFFECTS. 
        THE DISPENSATION OF THE VACCINE IS AT THE MEDICAL DISCRETION OF THE 
        PERSON ADMINISTERING THE VACCINE. OTHENA TAKES NO RESPONSIBILITY FOR ANY 
        INJURY, MEDICAL EFFECTS OR ADVERSE EFFECTS OF VACCINATION. 
        IT IS WELL ESTABLISHED THAT NO VACCINE IS 100 PERCENT EFFECTIVE. 
        OTHENA IS NOT RESPONSIBLE FOR THE RARE 5-7 PERCENT OF PATIENTS WHO DEVELOP 
        COVID-19 DESPITE VACCINATION, OR FOR ANY ADVERSE EFFECTS OR INJURY THEREOF. </p>
     
  {/* <span className="checkmark"></span> */}
  <label className="container">I agree to the terms listed above.
  <input className="box-update" type="checkbox"/>
  <span className="checkmark"></span>

</label>
  
</div>
    </div>
  )
}

export default Disclaimer;

import { useState} from 'react'
import MainContainer from '../Components/MainContainer'
import NavigateContainer from '../Components/NavigateContainer'


function App() {

  
  let stages = [1,2,3,4,5]
  const [currentStage, setCurrentStage] = useState(1)
  const [planDuration,setPlanDuration] = useState("monthly")



  let isMobile = false

  // Get the screen width
  const screenWidth = window.innerWidth;
  if(screenWidth < "740") {
    isMobile = true
  }
  

  return (
    <>
      <div className='App'>
        <MainContainer
         isMobile={isMobile}
         currentStage={currentStage}
         setCurrentStage={setCurrentStage}
         setPlanDuration={setPlanDuration}
         planDuration={planDuration}
        />

         

        {isMobile && currentStage !== 5 && <NavigateContainer currentStage={currentStage}
         setCurrentStage={setCurrentStage}/>}
      </div>
    </>
  )
}

export default App

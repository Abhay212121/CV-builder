import './App.css'
import ResumeData from './components/Resumedata'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import { personalData, educationData } from './utils/constants'

function App() {

  const [PersonalInfo, setPersonalInfo] = useState(personalData)

  const [educationInfo, setEducationInfo] = useState(educationData)

  return (
    <div className='flex font-mono'>
      <Sidebar personalData={PersonalInfo} setPersonalData={setPersonalInfo}
        educationData={educationInfo} setEducationData={setEducationInfo} />
      <ResumeData personalData={PersonalInfo} educationData={educationInfo} />
    </div>
  )
}

export default App

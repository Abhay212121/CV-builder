import './App.css'
import ResumeData from './components/Resumedata'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {

  const [PersonalInfo, setPersonalInfo] = useState({
    name: 'Abhay', email: 'abhay.work.02@gmail.com', phone: '+91 9971119813', github: 'github.com/Abhay212121', linkedin: 'linkedin.com/in/abhay-sharma2121'
  })

  return (
    <div className='flex font-mono'>
      <Sidebar personalData={PersonalInfo} setPersonalData={setPersonalInfo} />
      <ResumeData personalData={PersonalInfo} setPersonalData={setPersonalInfo} />
    </div>
  )
}

export default App

import "./App.css";
import ResumeData from "./components/Resumedata";
import Sidebar from "./components/Sidebar";
import { useRef, useState } from "react";
import {
  personalData,
  educationData,
  experienceData,
  projectData,
} from "./utils/constants";

function App() {
  const [PersonalInfo, setPersonalInfo] = useState(personalData);

  const [educationInfo, setEducationInfo] = useState(educationData);

  const [experienceInfo, setExperienceInfo] = useState(experienceData);

  const [projectInfo, setProjectInfo] = useState(projectData);

  const printRef = useRef(null);

  return (
    <div className="flex font-mono">
      <Sidebar
        personalData={PersonalInfo}
        setPersonalData={setPersonalInfo}
        educationData={educationInfo}
        setEducationData={setEducationInfo}
        experienceData={experienceInfo}
        setExperienceData={setExperienceInfo}
        projectData={projectInfo}
        setProjectData={setProjectInfo}
        printRef={printRef}
      />
      <ResumeData
        personalData={PersonalInfo}
        educationData={educationInfo}
        experienceData={experienceInfo}
        projectData={projectInfo}
        ref={printRef}
      />
    </div>
  );
}

export default App;

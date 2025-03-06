import "./App.css";
import ResumeData from "./components/Resumedata";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
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
      />
      <ResumeData
        personalData={PersonalInfo}
        educationData={educationInfo}
        experienceData={experienceInfo}
        projectData={projectInfo}
      />
    </div>
  );
}

export default App;

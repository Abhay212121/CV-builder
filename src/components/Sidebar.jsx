import { Btn } from "./Btn";
import Personalsection from "./Personalsection";
import Section from "./Section";
import {
  newPersonalData,
  newEducationData,
  newExperienceData,
  newProjectData,
  projectData as dummyProjectData,
  educationData as dummyEducationData,
  personalData as dummyPersonalData,
  experienceData as dummyExperienceData,
} from "../utils/constants";

function Sidebar({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  projectData,
  setProjectData,
}) {
  function handleNewCV() {
    setPersonalData(newPersonalData),
      setEducationData(newEducationData),
      setExperienceData(newExperienceData),
      setProjectData(newProjectData);
  }

  function handleLoadCV() {
    setPersonalData(dummyPersonalData),
      setEducationData(dummyEducationData),
      setExperienceData(dummyExperienceData),
      setProjectData(dummyProjectData);
  }

  return (
    <div className="flex min-h-180 w-1/3 flex-col items-center gap-6 bg-gray-200 px-12 py-12">
      <h2 className="text-4xl text-red-800 underline">Build your Resume!</h2>
      <div className="flex w-2/3 place-content-evenly text-xl text-red-900">
        <Btn btnText={"New CV"} doFunc={handleNewCV} />
        <Btn btnText={"Sample CV"} doFunc={handleLoadCV} />
      </div>
      <Personalsection
        sectionHeading={"Personal Information"}
        sectionFormData={personalData}
        setSectionFormData={setPersonalData}
      />

      <Section
        sectionHeading={"Education"}
        sectionFormData={educationData}
        setSectionFormData={setEducationData}
      />

      <Section
        sectionHeading={"Experience"}
        sectionFormData={experienceData}
        setSectionFormData={setExperienceData}
      />
      <Section
        sectionHeading={"Projects"}
        sectionFormData={projectData}
        setSectionFormData={setProjectData}
      />
    </div>
  );
}

export default Sidebar;

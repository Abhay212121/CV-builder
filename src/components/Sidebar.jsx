import Btn from "./Btn"
import Personalsection from "./Personalsection"
import Section from "./Section"
function Sidebar({ personalData, setPersonalData, educationData, setEducationData, experienceData, setExperienceData, projectData, setProjectData }) {

    return (
        <div className="  w-1/3 px-12 py-12 bg-gray-200 flex flex-col items-center gap-6 min-h-180 ">
            <h2 className="underline text-red-800 text-4xl ">Build your Resume!</h2>
            <div className="flex w-2/3 place-content-evenly text-red-900 text-xl">
                <Btn btnText={'New CV'} />
                <Btn btnText={'Load CV'} />
            </div>
            <Personalsection sectionHeading={'Personal Information'} sectionFormData={personalData} setSectionFormData={setPersonalData} />


            <Section sectionHeading={'Education'} sectionFormData={educationData} setSectionFormData={setEducationData} />

            <Section sectionHeading={'Experience'} sectionFormData={experienceData} setSectionFormData={setExperienceData} />
            <Section sectionHeading={'Projects'} sectionFormData={projectData} setSectionFormData={setProjectData} />


            {/* <Section sectionHeading={'Technical Skills'} sectionFormData={educationData} setSectionFormData={setEducationData} /> */}
        </div>
    )
}

export default Sidebar
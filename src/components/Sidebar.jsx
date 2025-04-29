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
import React from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

function Sidebar({
  personalData,
  setPersonalData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
  projectData,
  setProjectData,
  printRef,
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

  async function handleDownloadCV() {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "in",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  }

  return (
    <div className="flex min-h-180 flex-col items-center gap-6 bg-gray-200 px-6 py-12 xl:w-4/10 2xl:w-3/10">
      <h2 className="text-4xl text-red-800 underline">Build your Resume!</h2>
      <div className="flex justify-around text-xl text-red-900 2xl:w-4/5">
        <Btn btnText={"New CV"} doFunc={handleNewCV} />
        <Btn btnText={"Sample CV"} doFunc={handleLoadCV} />
        <Btn btnText={"Download CV"} doFunc={handleDownloadCV} />
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

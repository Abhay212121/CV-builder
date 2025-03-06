import Icon from "@mdi/react";
import { mdiChevronDown, mdiCloseCircleOutline } from "@mdi/js";
import { useState } from "react";
import { Btn } from "./Btn";
import {
  newEducationData,
  newExperienceData,
  newProjectData,
} from "../utils/constants";

export default function Section({
  sectionHeading,
  sectionFormData,
  setSectionFormData,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleChange(obj) {
    setSectionFormData((prev) => prev.filter((item) => item != obj));
  }

  function handleAddMore(heading) {
    if (heading === "Education") {
      setSectionFormData((prev) => prev.push(newEducationData));
    }

    if (heading === "Experience") {
      setSectionFormData((prev) => prev.push(newExperienceData));
    }

    if (heading === "Projects") {
      setSectionFormData((prev) => prev.push(newProjectData));
    }
  }

  return (
    <div className="w-4/5 rounded-xl border-3 px-3 py-1">
      <div className="flex w-full justify-between">
        <div className="text-xl underline">{sectionHeading}</div>
        <button
          className="hover:cursor-pointer hover:rounded-xl hover:bg-gray-300"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <Icon path={mdiChevronDown} size={1} />
        </button>
      </div>
      {isActive && (
        <div className="flex flex-col items-start text-xl">
          {console.log(sectionFormData)}
          {sectionFormData.map((data, index) => {
            return (
              <div
                key={data.name}
                className="mt-3 mb-5 w-full rounded-md border-2 border-dashed px-5 pb-5"
              >
                <button
                  className="float-right my-1 text-red-500 hover:cursor-pointer"
                  onClick={() => handleChange(data)}
                >
                  <Icon path={mdiCloseCircleOutline} size={1} />
                </button>
                {Object.keys(data).map((dataKey) => {
                  return (
                    <div
                      className="flex w-full items-center justify-between py-2"
                      key={dataKey}
                    >
                      <label className="capitalize" key={dataKey + "label"}>
                        {dataKey}:
                      </label>
                      <input
                        className="rounded-md border-2 border-black p-1 text-lg"
                        type="text"
                        value={data[dataKey]}
                        key={"data" + dataKey}
                        onChange={(e) => {
                          let newArr = [...sectionFormData];
                          let newObj = { ...data };
                          newObj[dataKey] = e.target.value;
                          newArr[index] = newObj;
                          setSectionFormData(newArr);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="m-auto pb-8 text-blue-700">
            <Btn
              btnText={"Add more"}
              heading={sectionHeading}
              doFunc={handleAddMore}
            />
          </div>
        </div>
      )}
    </div>
  );
}

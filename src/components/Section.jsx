import Icon from "@mdi/react";
import { mdiChevronDown, mdiCloseCircleOutline } from "@mdi/js";
import { useCallback, useState } from "react";
import { Btn } from "./Btn";
import {
  emptyEducationData,
  emptyExperienceData,
  emptyProjectData,
} from "../utils/constants";

export default function Section({
  sectionHeading,
  sectionFormData,
  setSectionFormData,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleRemoveSection(obj) {
    setSectionFormData((prev) => prev.filter((item) => item != obj));
  }

  // const handleInputChange = useCallback((e, data, dataKey, index) => {
  //   let newArr = [...sectionFormData];
  //   let newObj = { ...data };
  //   newObj[dataKey] = e.target.value;
  //   newArr[index] = newObj;
  //   setSectionFormData(newArr);
  // }, [sectionFormData]);

  function handleInputChange(e, data, dataKey, index) {
    let newArr = [...sectionFormData];
    let newObj = { ...data };
    newObj[dataKey] = e.target.value;
    newArr[index] = newObj;
    setSectionFormData(newArr);
  }

  function handleAddMore(heading) {
    if (heading === "Education") {
      let tempArr = [...sectionFormData];
      tempArr.push(emptyEducationData);
      setSectionFormData(tempArr);
    }

    if (heading === "Experience") {
      setSectionFormData((prev) => {
        let tempArr = [...prev];
        tempArr.push(emptyExperienceData);
        return tempArr;
      });
    }

    if (heading === "Projects") {
      setSectionFormData((prev) => prev.push(emptyProjectData));
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
          {sectionFormData.map((data, index) => {
            return (
              <div
                key={data.name}
                className="mt-3 mb-5 w-full rounded-md border-2 border-dashed px-5 pb-5"
              >
                <button
                  className="float-right my-1 text-red-500 hover:cursor-pointer"
                  onClick={() => handleRemoveSection(data)}
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
                        key={"data" + data}
                        onChange={(e) => {
                          handleInputChange(e, data, dataKey, index);
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
              sectionHeading={sectionHeading}
              doFunc={handleAddMore}
            />
          </div>
        </div>
      )}
    </div>
  );
}

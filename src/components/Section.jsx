import Icon from "@mdi/react";
import {
  mdiChevronDown,
  mdiCloseCircleOutline,
  mdiDeleteForever,
} from "@mdi/js";
import { useState } from "react";
import { Btn, Btn3 } from "./Btn";
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

  function handleInputChange(e, data, dataKey, index) {
    let newArr = [...sectionFormData];
    let newObj = { ...data };
    newObj[dataKey] = e.target.value;
    newArr[index] = newObj;
    setSectionFormData(newArr);
  }

  function handleDescInputChange(e, data, dataKey, index, i2) {
    let newArr = [...sectionFormData];
    let newObj = { ...data };
    newObj[dataKey][i2] = e.target.value;
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
      let tempArr = [...sectionFormData];
      tempArr.push(emptyExperienceData);
      setSectionFormData(tempArr);
    }

    if (heading === "Projects") {
      let tempArr = [...sectionFormData];
      tempArr.push(emptyProjectData);
      setSectionFormData(tempArr);
    }
  }

  function handleAddDesc(obj, index) {
    let tempArr = [...sectionFormData];
    let newObj = { ...obj };
    newObj.desc.push("");
    tempArr[index] = newObj;
    setSectionFormData(tempArr);
  }

  function handleDescDelete(obj, index, arrIndex) {
    let tempArr = [...sectionFormData];
    let newObj = { ...obj };
    newObj.desc.splice(index, 1);
    tempArr[arrIndex] = newObj;
    setSectionFormData(tempArr);
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
                key={index}
                className="mt-3 mb-5 w-full rounded-md border-2 border-dashed px-5 pb-5"
              >
                <button
                  className="float-right my-1 text-red-500 hover:cursor-pointer"
                  onClick={() => handleRemoveSection(data)}
                >
                  <Icon path={mdiCloseCircleOutline} size={1} />
                </button>
                {Object.keys(data).map((dataKey, i) => {
                  return (
                    <div
                      className="flex w-full flex-col items-center justify-between gap-5 py-2"
                      key={dataKey}
                    >
                      {dataKey == "desc" ? (
                        data[dataKey].map((des, i2) => {
                          return (
                            <div
                              className="flex w-full items-center justify-between"
                              key={sectionHeading + i2}
                            >
                              <div className="flex items-center justify-between hover:cursor-pointer">
                                <button
                                  className="hover:cursor-pointer"
                                  onClick={() => {
                                    handleDescDelete(data, i2, index);
                                  }}
                                >
                                  <Icon path={mdiDeleteForever} size={1} />
                                </button>
                                <label
                                  className="capitalize"
                                  key={dataKey + "label"}
                                >
                                  {dataKey + " " + (i2 + 1)}:
                                </label>
                              </div>
                              <input
                                className="rounded-md border-2 border-black p-1 text-lg"
                                type="text"
                                value={data[dataKey][i2]}
                                key={sectionHeading + dataKey + i2}
                                onChange={(e) => {
                                  handleDescInputChange(
                                    e,
                                    data,
                                    dataKey,
                                    index,
                                    i2,
                                  );
                                }}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <div className="flex w-full items-center justify-between">
                          <label className="capitalize" key={dataKey + "label"}>
                            {dataKey}:
                          </label>
                          <input
                            className="rounded-md border-2 border-black p-1 text-lg"
                            type="text"
                            value={data[dataKey]}
                            key={"data" + data + i}
                            onChange={(e) => {
                              handleInputChange(e, data, dataKey, index);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
                {(sectionHeading == "Experience" ||
                  sectionHeading == "Projects") && (
                  <div className="mt-4 flex justify-center text-lg text-green-700 underline">
                    <Btn3
                      btnText={"Add desc"}
                      obj={data}
                      index={index}
                      doFunc={handleAddDesc}
                    />
                  </div>
                )}
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

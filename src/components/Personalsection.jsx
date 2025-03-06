import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function Personalsection({
  sectionHeading,
  sectionFormData,
  setSectionFormData,
}) {
  const [isActive, setIsActive] = useState(false);
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
          {Object.keys(sectionFormData).map((dataKey) => {
            return (
              <div
                className="flex w-full items-center justify-between py-2"
                key={dataKey}
              >
                <label className="capitalize" key={dataKey + "label"}>
                  {dataKey}:
                </label>
                <input
                  className="rounded-md border-2 border-blue-400 p-0.5 text-lg"
                  type="text"
                  value={sectionFormData[dataKey]}
                  key={"data" + dataKey}
                  onChange={(e) => {
                    let newObj = { ...sectionFormData };
                    newObj[dataKey] = e.target.value;
                    setSectionFormData(newObj);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

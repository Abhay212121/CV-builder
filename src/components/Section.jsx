import { useState } from "react"
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

export default function Section({ sectionHeading, sectionFormData, setSectionFormData }) {

  const [isActive, setIsActive] = useState(false)
  return (
    <div className="border-3 px-3 py-1 rounded-xl w-full">
      <div className="flex w-full justify-between" >
        <div className="underline">{sectionHeading}</div>
        <button className=" hover:bg-gray-300 hover:rounded-xl hover:cursor-pointer" onClick={() => {
          setIsActive(!isActive)
        }}>
          <Icon path={mdiChevronDown} size={1} />
        </button>
      </div>
      {isActive && <div className="flex flex-col items-start">
        {Object.keys(sectionFormData).map(dataKey => {
          return (<div className="flex w-full justify-between py-2">
            <label key={dataKey + 'label'}>{dataKey}:</label>
            <input className="border-3 rounded-md p- border-blue-400" type="text" placeholder={dataKey} value={sectionFormData[dataKey]} key={'data' + dataKey} onChange={(e) => {
              let newObj = { ...sectionFormData }
              newObj[dataKey] = e.target.value
              setSectionFormData(newObj)
            }} />
          </div>
          )
        })}
      </div>}
    </div >
  )
}
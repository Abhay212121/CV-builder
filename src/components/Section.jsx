import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import { useState } from 'react';
import Btn from './Btn';

export default function Section({ sectionHeading, sectionFormData, setSectionFormData }) {

    const [isActive, setIsActive] = useState(false)

    function handleChange() {
        console.log('clicked')
    }


    function handleAddMore() {
        console.log('clicked')
    }

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
                {sectionFormData.map((data) => {
                    return (
                        <div className='border-2 rounded-md mb-5 w-full px-5 border-dashed mt-3 '>
                            <button className='text-red-500 float-right' onClick={handleChange}>X</button>
                            {Object.keys(data).map(dataKey => {
                                return (<div className="flex w-full justify-between items-center py-2">
                                    <label key={dataKey + 'label'}>{dataKey}:</label>
                                    <input className="border-2 rounded-md border-blue-400 p-0.5" type="text" value={data[dataKey]} key={'data' + dataKey} onChange={(e) => {
                                        let newObj = { ...sectionFormData }
                                        newObj[dataKey] = e.target.value
                                        setSectionFormData(newObj)
                                    }} />
                                </div>)
                            })}
                        </div>
                    )
                })}
                <div className='m-auto pb-8 text-green-500'>
                    <Btn btnText={'Add more'} doFunc={handleAddMore} />
                </div>
            </div>}
        </div>
    )
}
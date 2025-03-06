
function ResumeData({ personalData, educationData, experienceData, projectData }) {
    return (
        <div className="w-2/3 bg-gray-200 font-body">
            <div className="bg-white w-2/3 my-15 m-auto px-15 py-10  min-h-screen">

                {/* Personal info */}
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-4xl font-display font-black">{personalData.name}</h1>
                    <div className="text-lg flex gap-2">
                        <span>{personalData.phone}</span>
                        <span>|</span>
                        <span className="underline hover:cursor-pointer">{personalData.email}</span>
                    </div>
                    <div className="text-lg flex gap-2">
                        <span className="underline hover:cursor-pointer">{personalData.linkedin}</span>
                        <span>|</span>
                        <span className="underline hover:cursor-pointer">{personalData.github}</span>
                    </div>
                </div>

                {/* Education info */}
                <div className="mt-5">
                    <h2 className="font-display font-black text-2xl">Education</h2>
                    <hr />
                    {educationData.map(data => {
                        return (
                            <div className="p-2">
                                <div className="flex justify-between  my-0.5  font-display font-black text-xl">
                                    <span>{data.name}</span>
                                    <span>{data.location}</span>
                                </div>
                                <div className="flex justify-between text-lg  font-body">
                                    <span>{data.course}</span>
                                    <span className="font-body text-lg">{data.duration}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>


                {/* Experience info */}
                <div className="mt-5">
                    <h2 className="font-display font-black text-2xl">Experience</h2>
                    <hr />
                    {experienceData.map(data => {
                        return (
                            <div className="p-2">
                                <div className="flex justify-between font-display  mt-0.5 text-xl">
                                    <span className="font-black">{data.role}</span>
                                    <span className="font-body text-lg">{data.time}</span>
                                </div>
                                <div className="flex justify-between text-lg  font-display font-black underline">
                                    <span>{data.name}</span>
                                </div>
                                <div className="flex justify-between text-lg  font-body">
                                    {/* need to add some code here. */}
                                    <li>{data.desc}</li>
                                </div>
                            </div>
                        )
                    })}
                </div>


                {/* Project info */}
                <div className="mt-5">
                    <h2 className="font-display font-black text-2xl">Projects</h2>
                    <hr />
                    {projectData.map(data => {
                        { console.log(data) }
                        return (
                            <div className="p-2">
                                <div className="flex justify-between font-display my-0.5 text-xl">
                                    <span className="font-black">{data.projectName}</span>
                                    <span className="font-body text-lg" >{data.time}</span>
                                </div>
                                <div className="flex justify-between text-lg  font-body">
                                    {/*need to add some code here. */}
                                    <li>{data.desc}</li>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default ResumeData
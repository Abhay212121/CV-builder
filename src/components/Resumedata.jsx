function ResumeData({
  personalData,
  educationData,
  experienceData,
  projectData,
  ref,
}) {
  return (
    <div className="font-body bg-gray-200 xl:w-6/10 2xl:w-7/10">
      <div
        ref={ref}
        className="m-8 my-15 h-fit min-h-screen w-fit bg-white px-15 py-10 2xl:m-auto"
      >
        {/* Personal info */}
        <div className="flex flex-col items-center">
          <h1 className="font-display text-center text-4xl font-black">
            {personalData.name}
          </h1>
          <div className="flex gap-2 text-lg">
            <span>{personalData.phone}</span>
            {personalData.phone == "" ? null : <span>|</span>}
            <span className="underline hover:cursor-pointer">
              {personalData.email}
            </span>
          </div>
          <div className="flex gap-2 text-lg">
            <span className="underline hover:cursor-pointer">
              {personalData.linkedin}
            </span>
            {personalData.linkedin == "" ? null : <span>|</span>}
            <span className="underline hover:cursor-pointer">
              {personalData.github}
            </span>
          </div>
        </div>

        {/* Education info */}
        <div className="mt-5">
          <h2 className="font-display border-b-2 pb-1 text-2xl font-black">
            Education
          </h2>
          {educationData.map((data) => {
            return (
              <div className="p-2" key={data.collegeName}>
                <div className="font-display my-0.5 flex justify-between text-xl font-black">
                  <span>{data.collegeName}</span>
                  <span>{data.location}</span>
                </div>
                <div className="font-body flex justify-between text-lg">
                  <span>{data.course}</span>
                  <span className="font-body text-lg">{data.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience info */}
        <div className="mt-5">
          <h2 className="font-display text-2xl font-black">Experience</h2>
          <hr />
          {experienceData.map((data) => {
            return (
              <div className="p-2" key={data.companyName}>
                <div className="font-display mt-0.5 flex justify-between text-xl">
                  <span className="font-black">{data.role}</span>
                  <span className="font-body text-lg">{data.time}</span>
                </div>
                <div className="font-display flex justify-between text-lg font-black underline">
                  <span>{data.companyName}</span>
                </div>
                <div className="font-body flex flex-col justify-between text-lg">
                  {data.desc.map((description) => {
                    return <li>{description}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project info */}
        <div className="mt-5">
          <h2 className="font-display text-2xl font-black">Projects</h2>
          <hr />
          {projectData.map((data) => {
            return (
              <div className="p-2" key={data.projectName}>
                <div className="font-display my-0.5 flex justify-between text-xl">
                  <span className="font-black">{data.projectName}</span>
                  <span className="font-body text-lg">{data.time}</span>
                </div>
                <div className="font-body flex flex-col justify-between text-lg">
                  {data.desc.map((description) => {
                    return <li>{description}</li>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResumeData;

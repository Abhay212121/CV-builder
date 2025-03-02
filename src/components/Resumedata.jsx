function ResumeData({ personalData }) {
    return (
        <div className="w-2/3 bg-gray-200 font-body">
            <div className="bg-white px-5 py-10 my-15 mx-20  min-h-screen">

                {/* Personal info */}
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-4xl font-display font-black">{personalData.name}</h1>
                    <div className="flex gap-2">
                        <span>{personalData.phone}</span>
                        <span>|</span>
                        <span className="underline hover:cursor-pointer">{personalData.email}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="underline hover:cursor-pointer">{personalData.linkedin}</span>
                        <span>|</span>
                        <span className="underline hover:cursor-pointer">{personalData.github}</span>
                    </div>
                </div>

                {/* Education info */}
                <div className="mt-5 font-display font-black text-2xl">
                    <h2>Education</h2>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ResumeData
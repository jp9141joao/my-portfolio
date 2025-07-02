import Skills from "../skills/skills";

export default function AboutMe() {

    return (
        <div className="px-[1.3rem] py-[2.3rem] bg-[#2a2a33] h-[140vh]">
            <div className="grid gap-3 ">
                <div>
                    <div>
                        <h1 className="text-4xl font-semibold font-poppins text-white">
                            Behinde 
                        </h1>
                    </div>
                    <div className="flex gap-2.5">
                        <h1 className="text-4xl text-white font-semibold font-poppins">
                            The
                        </h1>
                        <h1 className="underline text-4xl font-semibold font-poppins bg-gradient-to-r from-[#00FF99] to-[#00CFFF] bg-clip-text text-transparent">
                            Code<span className="text-[#FFB6C1]">🧠...</span>
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm text-gray-100">
                            A Bit About Who I Am and What I Do
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-white">
                        I am a Full Stack Developer with a passion for creating innovative solutions that bridge the gap between software and hardware. My journey in technology has been driven by a desire to transform ideas into impactful digital experiences. With expertise in both front-end and back-end development, I thrive on building powerful web and system solutions that meet the needs of users and businesses alike.
                    </p>
                </div>
                <Skills />
            </div>
        </div>
    )
}
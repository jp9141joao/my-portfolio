import { FaCode } from "react-icons/fa6";

export default function AboutMe() {

    return (
        <div className="px-[1.3rem] py-[2.3rem] bg-[#2a2a33] h-[120vh]">
            <div>
                <h1 className="text-4xl font-semibold font-poppins text-white">
                    Behinde 
                </h1>
            </div>
            <div className="flex gap-2.5">
                <h1 className="text-4xl text-white font-semibold font-poppins">
                    The
                </h1>
                <h1 className="text-4xl font-semibold font-poppins bg-gradient-to-r from-[#00FF99] to-[#00CFFF] bg-clip-text text-transparent">
                    Code<span className="text-[#FFB6C1]">🧠...</span>
                </h1>
            </div>
        </div>
    )
}
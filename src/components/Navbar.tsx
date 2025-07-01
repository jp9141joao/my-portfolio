import { Button } from "./ui/button";

export default function Navbar({ heightRef }: { heightRef: React.RefObject<HTMLDivElement | null> }) {

    return (
        <div ref={heightRef} className="w-full fixed top-0 flex justify-between items-center bg-[#1c1c24] border-b-1 border-b-gray-600 px-[1.3rem] py-[0.5rem]">
            <div className="">
                <h1 className="font-semibold font-poppins text-2xl text-white">
                    JP
                </h1>
            </div>
            <div>
                <Button className="bg-gradient-to-r from-[#00FF99] to-[#00CFFF] font-semibold font-poppins text-black">
                    Contact me
                </Button>
            </div>
        </div>
    )
}
import { Button } from "./ui/button";

export default function Navbar() {

    return (
        <div className="flex justify-between items-center border-b-1 border-b-gray-400 px-[1.3rem] py-[0.5rem]">
            <div className="">
                <h1 className="font-semibold font-poppins text-2xl text-gray-800">
                    JP
                </h1>
            </div>
            <div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 font-semibold font-poppins">
                    Contact me
                </Button>
            </div>
        </div>
    )
}
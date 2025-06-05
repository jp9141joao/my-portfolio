import { Button } from "../ui/button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Menu from './Menu';
import { LuArrowRight } from "react-icons/lu";

export default function Header() {

    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="hidden text-xl 2xs:text-2xl font-semibold ">
                    Hi, I'm João
                </h1>
            </div>
            <div className="flex gap-2">
                <Button
                    className="flex"
                >
                    <p className="text-sm 2xs:text-base">
                        Let's Talk
                    </p>
                    <LuArrowRight className="2xs:size-4"/>
                </Button>
                <Menu />
            </div>
        </div>
    )
}
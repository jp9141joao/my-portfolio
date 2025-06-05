import { Button } from "../ui/button";
import Menu from './Menu';
import { LuArrowRight } from "react-icons/lu";

export default function Header1() {

    return (
        <div className="flex justify-between items-center">
            <div className="">
                <Menu />
            </div>
            <div>
                <h1 className="text-xl 2xs:text-2xl font-semibold ">
                    Hi, I&apos;m João 👋
                </h1>
            </div>
            <div>
                <Button
                    className="flex"
                >
                    <p className="text-sm 2xs:text-base">
                        Let&apos;s Talk
                    </p>
                    <LuArrowRight className="2xs:size-4"/>
                </Button>
            </div>
        </div>
    )
}
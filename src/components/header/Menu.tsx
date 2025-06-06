"use client"
import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { LuSquareUserRound, LuBrain, LuCodeXml, LuBriefcase } from "react-icons/lu";

export default function Menu({ widthRef }: { widthRef: React.RefObject<HTMLDivElement | null> }) {

    const [ showMenu, setShowMenu ] = useState<boolean>(false);
    const [ width, setWidth ] = useState<number>(0);

    useEffect(() => {

        if (widthRef.current) {
            setWidth(widthRef.current.offsetWidth);
        }

    }, [widthRef.current?.offsetWidth]);
    
    return (
        <Popover 
            open={ showMenu }
            onOpenChange={(open) => {
                setShowMenu(open);
            }}
        >
            <PopoverTrigger asChild>
                <Button className="p-0">
                    {
                        showMenu ?
                        <HiX className="size-4.5 2xs:size-5" /> :
                        <HiMenu className="size-4.5 2xs:size-5" /> 
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent 
                className="grid place-items-start items-center gap-1 2xs:gap-2"
                align="end"
                style={{ width: width ? `${width - 16}px` : "auto" }}
            >
                <div className="flex justify-center items-center gap-2">
                        <LuSquareUserRound className="text-white size-4.5 2xs:size-5"/>
                    <p className="text-white">
                        About me
                    </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <LuBrain className="text-white size-4.5 2xs:size-5"/>
                    <p className="text-white">
                        Skills
                    </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <LuBriefcase className="text-white size-4.5 2xs:size-5"/>
                    <p className="text-white">
                        Experience
                    </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <LuCodeXml className="text-white size-4.5 2xs:size-5"/>
                    <p className="text-white">
                        Projects
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    )
}
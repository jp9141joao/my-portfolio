"use client"
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { LuUserSearch, LuBrain, LuCodeXml, LuBriefcase } from "react-icons/lu";
import { setSourceMapsEnabled } from "process";

export default function Menu() {

    const [ showMenu, setShowMenu ] = useState<boolean>(false);

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
                className="grid gap-1 2xs:gap-2 px-0" 
                align="end"
            >
                <div>
                    <Button className="p-0">
                        <LuUserSearch className="text-white size-4.5 2xs:size-5"/>
                    </Button>
                </div>
                <div>
                    <Button className="p-0">
                        <LuBrain className="text-white size-4.5 2xs:size-5"/>
                    </Button>
                </div>
                <div>
                    <Button className="p-0">
                        <LuBriefcase className="text-white size-4.5 2xs:size-5"/>
                    </Button>
                </div>
                <div>
                    <Button className="p-0">
                        <LuCodeXml className="text-white size-4.5 2xs:size-5"/>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
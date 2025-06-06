"use client"
import { useRef } from "react";
import { Button } from "../ui/button";
import { LuArrowRight } from "react-icons/lu";
import Menu from './Menu';

export default function Header() {

    const widthRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-xl 2xs:text-2xl font-semibold">
                    Hi, <span className="break-normal whitespace-nowrap">I&apos;m João 👋</span>
                </h1>
            </div>
            <div 
                ref={widthRef}
                className="flex gap-2 bg-gray-300 p-2 rounded-4xl"
            >
                <Button
                    className="flex"
                >
                    <p className="text-sm 2xs:text-base shadow">
                        Let&apos;s Talk
                    </p>
                    <LuArrowRight className="2xs:size-4"/>
                </Button>
                <Menu widthRef={widthRef} />
            </div>
        </div>
    )
}
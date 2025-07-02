import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero({ heightRef }: { heightRef: React.RefObject<HTMLDivElement | null> }) {

    const [ height, setHeight ] = useState<number>(0);

    useEffect(() => {

        if (heightRef.current) {
            setHeight((heightRef.current.offsetHeight / window.innerHeight) * 100);
        }

    }, [heightRef.current?.offsetWidth]);

    return (
        <div 
            className='grid place-items-end items-center text-start py-[0.5rem] bg-[#1c1c24]'
            
        >
            <div className='grid gap-3 px-[1.3rem] mt-[12vh] mb-[3vh]'>
                <div className=''>
                    <h1 className="text-4xl text-white font-semibold font-poppins">
                        Hello.
                    </h1>
                    <h1 className="text-4xl text-white font-semibold font-poppins">
                        I&apos;m <span className='bg-gradient-to-r from-[#00FF99] to-[#00CFFF] bg-clip-text text-transparent'>João!</span>👋
                    </h1>
                    <p className='text-sm text-gray-200 font-poppins font-medium'>
                        Full Stack Developer | Network Analyst.
                    </p>
                </div>
                <div>
                    <p className='text-sm font-poppins leading-6 text-white'>
                        I build powerful web and system solutions that combine software and hardware, transforming ideas into high-impact digital experiences.                
                    </p>
                </div>
                <div className='mt-6'>
                    <div className='rounded-2xl block bg-white w-[90vw] h-[24vh]'></div>
                </div>
            </div>
            
        </div>
    )
}
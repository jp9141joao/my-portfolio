import Image from 'next/image';
import HeroImageMain from '@/assets/safar-safarov-koOdUvfGr4c-unsplash.jpg'
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
            className='grid place-items-start items-center text-start py-[0.5rem] bg-[#1c1c24]'
            style={{ height: height ? `${70 - height}vh` : "auto" }}
        >
            <div className='grid gap-3 px-[1.3rem]'>
                <div className=''>
                    <h1 className="text-4xl text-white font-semibold font-poppins">
                        Hello.
                    </h1>
                    <h1 className="text-4xl text-white font-semibold font-poppins">
                        I'm <span className='bg-gradient-to-r from-[#00FF99] to-[#00CFFF] bg-clip-text text-transparent'>João!</span>👋
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
            </div>
            <div className='w-full' >
                <div className='w-full flex justify-end items-right' >
                    
                </div>
            </div>
        </div>
    )
}
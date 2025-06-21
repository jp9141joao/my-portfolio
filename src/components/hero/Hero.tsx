import Image from 'next/image';
import HeroImageMain from '@/assets/mohammad-rahmani-oXlXu2qukGE-unsplash.jpg'

export default function Hero() {

    return (
        <div className='flex px-[1.3rem] py-[0.5rem]'>
            
            <div className=''>
                <Image src={HeroImageMain} alt='hero image' className='rounded-2xl'/>
            </div>
        </div>
    )
}
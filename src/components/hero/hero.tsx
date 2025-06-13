import Image from 'next/image';
import HeroImage from '@/assets/image.png';

export default function Hero() {

    return (
        <div className='rounded-2xl block'>
            <img 
                src={HeroImage} 
                alt="image"  
            />
        </div>
    )
}
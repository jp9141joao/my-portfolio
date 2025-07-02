import { Carousel, CarouselContent, CarouselItem} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

export default function Skills() {

    const hardSkills = [
        'Python',
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Express',
        'Next.js',
    ];
  
    return (
        <div className="mt-1">
            <div>
                <div className="">
                    <h1 className="text-2xl font-semibold font-poppins text-white">
                        <span className="text-blue-400 underline">Soft</span> Skills
                    </h1>
                </div>
               
<Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
            </div>
            <div className="mt-4">
                <div>
                    <h1 className="text-2xl font-semibold font-poppins text-white">
                        <span className="text-red-400 underline">Hard</span> Skills
                    </h1>
                </div>
                <div>
                    <ul className="list-disc ml-4 grid gap-2 pt-2 ">
                        {hardSkills.map((skill, index) => (
                            <li key={index} className="text-sm text-gray-100 ">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
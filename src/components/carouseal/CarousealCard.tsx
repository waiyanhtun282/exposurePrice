import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import E1 from "@/assets/images/EXPOSURE 2025 Event Packages /0001.png";
import E2 from "@/assets/images/EXPOSURE 2025 Event Packages /0002.png";
import E3 from "@/assets/images/EXPOSURE 2025 Event Packages /0003.png";
import E4 from "@/assets/images/EXPOSURE 2025 Event Packages /0004.png";
import E5 from "@/assets/images/EXPOSURE 2025 Event Packages /0005.png";
import E6 from "@/assets/images/EXPOSURE 2025 Event Packages /0006.png";





 const Price  = [
  { id: "uuid1", images: E1 },
  { id: "uuid2", images: E2 },
  { id: "uuid3", images: E3 },

  { id: "uuid4", images: E4 },

  { id: "uuid5", images: E5 },

  { id: "uuid6", images: E6 },
];




export default function CarouselCard() {
  return (
    <Carousel className="w-full max-w-[80%] md:max-w-[60%] lg:max-w-[40%] h-auto ">
      <CarouselContent>
        {Price.map((p) => {
          return (
            <CarouselItem className="" key={p.id}>
              <div className="">
                <img
                  src={p.images}
                  alt="event"
                  className="w-full h-auto  md:max-h-[780px] lg:max-h-[780px] object-cover "
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Products } from "@/types";

interface PriceProps {
  products: Products[];
}
export default function CarouselCard({ price }: PriceProps) {
  return (
    <Carousel className="w-full max-w-[80%] md:max-w-[60%] lg:max-w-[40%] h-auto ">
      <CarouselContent>
        {price.map((p) => {
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

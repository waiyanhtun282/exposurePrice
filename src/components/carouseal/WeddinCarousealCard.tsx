import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import P1 from "@/assets/images/Exposure PreWedding Pkg (1)/0001.png";
import P2 from "@/assets/images/Exposure PreWedding Pkg (1)/0002.png";

import P3 from "@/assets/images/Exposure PreWedding Pkg (1)/0003.png";

import P4 from "@/assets/images/Exposure PreWedding Pkg (1)/0004.png";
import P5 from "@/assets/images/Exposure PreWedding Pkg (1)/0005.png";
import P6 from "@/assets/images/Exposure PreWedding Pkg (1)/0006.png";

import P7 from "@/assets/images/Exposure PreWedding Pkg (1)/0007.png";

import P8 from "@/assets/images/Exposure PreWedding Pkg (1)/0008.png";
import P9 from "@/assets/images/Exposure PreWedding Pkg (1)/0009.png";
import P10 from "@/assets/images/Exposure PreWedding Pkg (1)/0010.png";

import P11 from "@/assets/images/Exposure PreWedding Pkg (1)/0011.png";

import P12 from "@/assets/images/Exposure PreWedding Pkg (1)/0012.png";

 const PreWeddingPrice= [
  { id: "uuid11", images: P1 },
  { id: "uuid12", images: P2 },
  { id: "uuid13", images: P3 },

  { id: "uuid14", images: P4 },

  { id: "uuid15", images: P5 },

  { id: "uuid16", images: P6 },
  { id: "uuid17", images: P7 },
  { id: "uuid18", images: P8 },
  { id: "uuid19", images: P9 },

  { id: "uuid110", images: P10 },

  { id: "uuid111", images: P11 },

  { id: "uuid112", images: P12 },
];


// interface PriceProps {
//   products: Products[];
// }
export default function WeddingCarousealCard() {
  return (
    <Carousel className="w-full max-w-[80%] md:max-w-[60%] lg:max-w-[40%] h-auto ">
      <CarouselContent>
        {PreWeddingPrice.map((wedd) => {
          return (
            <CarouselItem className="" key={wedd.id}>
              <div className="">
                <img
                  src={wedd.images}
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

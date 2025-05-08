import Logo from "@/assets/Exposure.png";
import CarouselCard from "@/components/carouseal/CarousealCard";
import { PreWeddingPrice, Price } from "@/data/price";
const PricePages = () => {
  return (
    <section className=" container mx-auto">
      <header className="flex  justify-center items-center ">
        <img src={Logo} alt="logo" className="w-[100px]  " />
      </header>
      <section className=" container mx-auto">
        <p className=" text-white text-center font-bold  text-[20px] md:text-3xl my-6 tracking-wider md:my-12  md:leading-12 md:tracking-wider">
          Pre Wedding Services
        </p>
        <div className=" flex  justify-center">
          <CarouselCard price={Price} />
        </div>
      </section>
      <section className=" container mx-auto">
        <p className=" text-white text-center font-bold  text-[20px] md:text-3xl my-6 tracking-wider md:my-12  md:leading-12 md:tracking-wider">
          Wedding Services
        </p>
        <div className=" flex  justify-center">
          <CarouselCard price={PreWeddingPrice} />
        </div>
      </section>
    </section>
  );
}

export default PricePages
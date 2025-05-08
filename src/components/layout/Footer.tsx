import logo from "@/assets/Exposure.png";
import { Icons } from "../Icons";
function Footer() {
  return (
    <footer className="mt-12">
      <div className=" bg-[#2F2F31] ">
        <div className=" container mx-auto md:py-5 py-2 lg:py-8 px-8">
          <div className=" grid grid-cols-1  gap-6 items-center  md:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <img src={logo} alt="logo" className="w-[150px] lg:w-auto" />

            <div className="text-[#D9D9D9] text-lg leading-8">
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Services</h3>
              <h3>Gallery</h3>
            </div>

            <div className=" text-lg leading-8">
              <h3 className="text-[#FFFFFF]">Contact Us</h3>
              <h3 className="text-[#D9D9D9]">+95 9123 456 789</h3>
              <h3 className="text-[#D9D9D9]">
                exposureweddingstudiomm@gmail.com
              </h3>
              <h3 className="text-[#D9D9D9]">No.123 Park.Yangon</h3>
            </div>

            <div className="flex flex-row justify-evenly md:justify-baseline md:flex-col text-[#FFFFFF]  md:space-y-4 md:ml-38 lg:ml-14">
              <Icons.Facebook className="size-6 lg:size-8 " />
              <Icons.Messenger className="size-6 lg:size-8" />
              <Icons.Instagram className="size-6 lg:size-8" />
              <Icons.tiktok className="size-6 lg:size-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <section className="bg-[#FCD980] py-6">
          <div className="   flex flex-col md:flex-row md:justify-between  items-center container mx-auto px-12">
            <h2 className=" text-[black]  tracking-wider">
              &copy;2025 Exposure Wedding Stduio .All right reserved
            </h2>
            <h1 className=" mt-6 md:mt-0  font-bold text-xl text-[#000]">
              Exposure
            </h1>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer;

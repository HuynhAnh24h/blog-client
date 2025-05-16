import { popularTags } from "../../constants"
import bannerSectionHero from "../../assets/home/bannerSectionHero.svg"
import { IoSearch } from "react-icons/io5"
const Hero = () => {
  return (
    <section className="container px-4 py-10 md:mx-auto
    lg:flex lg:justify-between lg:items-center
    ">
        <div className="flex flex-col justify-center items-center gap-5
         md:items-center md:flex-12
         lg:flex-1 lg:items-start lg:w-full
        ">
            <h1 className="text-center text-4xl font-bold text-[#183B56]
            2xl:text-7xl
            xl:text-6xl
            lg:text-5xl lg:text-start
            sm:text-3xl 
            md:text-5xl 
            md:text-center
            ">Read the most interesting articles</h1>
            <p className="text-center text-lg text-[#5A7184]
            md:text-2xl
            lg:text-start
            lg:text-xl 
            xl:text-3xl
            ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="shadow-md flex justify-between items-center gap-5 px-2 py-2 rounded
              w-full
            ">
              <IoSearch style={{fontSize:"30px", fontWeight:800, color:"#5A7184"}}/>
              <input type="text" placeholder="Search here..." className="
              w-full outline-none text-lg text-[#5A7184] font-medium italic
              "/>
              <button className="px-5 py-2 font-bold text-white bg-blue-800 rounded-sm hover:opacity-[0.9] hover:cursor-pointer transition-all">Search</button>
            </div>
           <div className="flex flex-col justify-center items-center gap-3 w-full
            lg:flex-col md:justify-start md:flex-col
            lg:justify-start lg:items-start
            xl:flex-row
           ">
              <span className="text-xl font-semibold italic text-[#5A7184]">Popular Tags:</span>
              <ul className="grid grid-cols-3 justify-between items-center gap-3 
                md:flex">
                {popularTags.map((item,index)=>(
                  <li key={index} className="px-2 py-1 rounded bg-blue-200 text-[#1565D8] font-semibold transition-all
                  hover:opacity-[0.9] hover:cursor-pointer
                  ">
                    <a href="#">{item.name}</a>
                  </li>
                ))}
              </ul>
           </div>

        </div>
        <div className="hidden md:hidden lg:block lg:flex-1 w-full h-full">
          <img src={bannerSectionHero} alt="Banner Section Hero" className="w-full h-full" />
        </div>
    </section>
  )
}

export default Hero

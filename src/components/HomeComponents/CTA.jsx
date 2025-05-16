import ctaImage from "../../assets/cta-image.png"

const CTA = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-40 translate-y-[1px]" preserveAspectRatio="none" viewBox="0 0 2160 263"
        fill="none">
          <path id="Wave" fill-rule="evenodd"
          clip-rule="evenodd" d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z" fill="#0D2436" />
      </svg>
      <div className="w-full bg-[#0D2436] pt-5">
        <div className="container px-4 md:mx-auto ">
          <div className="lg:flex lg:flex-row-reverse justify-between items-center z-0">
            <div className="hidden md:flex justify-center items-center md:mb-5 lg:mb-0 lg:flex-1
            relative z-50
              after:content=[''] after:absolute after:translate-x-[-100%] after:translate-y-[5%] after:right-0 after:w-[20%] after:h-[60%] after:bg-[#FC5A5A] after:rounded-2xl
              after:z-[-9999]
              before:content=[''] before:absolute before:translate-x-[80%] before:translate-y-[0%] before:left-0 before:w-[25%] before:h-[50%] before:bg-[#1A2E3C] before:rounded-2xl
              before:z-[-9999] before:bottom-[-10%]
            
            ">
              <div className="bg-white md:w-[50%] px-2 py-2 rounded-2xl flex flex-col gap-2 pb-5 ">
                <img src={ctaImage} alt=""  className="w-full"/>
                <p className="text-xl font-bold text-[#0D2436] px-2 z-20">The best aticles every week</p>
                <p className="text-lg text-[#0D2436] px-2 z-20">
                    Our insurance plans offers are priced the same everywhere else.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:flex-1 md:mt-20 mt-0">
              <p className=" text-white font-bold text-3xl 
              md:text-5xl md:text-center lg:text-start
              ">Get our stories delivered From us to your inbox weekly.</p>
              <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-1">
                  <input type="email" placeholder="Your Email" className="bg-white px-3 py-3 text-[#5A7184] outline-none rounded
                    font-semibold italic lg:w-full lg:flex-2
                  " />
                  <button className="block bg-blue-600 rounded py-3 font-bold text-white text-xl
                    lg:flex-1 
                  ">Get started</button>
              </div>
              <p className="text-[#5A7184]"><span className="font-bold text-md lg:text:lg">Get a response tomorrow</span> if you submit by 9pm today. 
                If we received after 9pm will get a reponse the following day.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTA

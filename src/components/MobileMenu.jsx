import { IoClose } from "react-icons/io5"

const MobileMenu = ({navMenus,menuHandle }) => {
  console.log(menuHandle)
  return (
    <div className="w-full h-screen fixed left-0 top-0 right-0 bottom-0 z-2">
      <div className="absolute right-0 w-[60%] h-screen flex flex-col justify-center items-center bg-[#0D2436] shadow-sm z-9">
        <ul className="flex flex-col justify-around items-start gap-5">
          {navMenus.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-lg text-[#959EAD] font-bold transition-all hover:text-white cursor-pointer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-[18px] right-[18px] z-9" onClick={()=>menuHandle(false)}>
          <IoClose style={{color: "#ffffff", fontSize:"25px", fontWeight:"bold"}} className="text-white"/>
      </div>
    </div>
  );
};

export default MobileMenu;

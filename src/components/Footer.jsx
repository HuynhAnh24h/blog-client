import { footerItem } from "../constants"
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
 const listIcon = [
  { component: FaFacebookF, defaultColor: "#5A7184", hoverColor: "#183B56" },
  { component: FaYoutube, defaultColor: "#5A7184", hoverColor: "#183B56" },
  { component: FaTiktok, defaultColor: "#5A7184", hoverColor: "#183B56" }
];
  return (
    <div className="bg-[#0D2436]">
        <div className="container mx-auto px-4 md:mx-auto px flex flex-wrap justify-around gap-5 md:flex-row md:justify-between items-start py-30">
            <div className="flex-2 flex-col justify-items-start gap-3">
              <div className="mb-2">
                <a href="/" className="text-xl font-bold text-white ">
                  <span className="uppercase">Software</span> Blog
                </a>
              </div>
              <p className="text-[#5A7184] mb-2">Build a mordem and creative website with 24hCoding </p> 
              <div className="flex justify-items-start items-center gap-3">
                 {listIcon.map((icon,index)=>(
                    <div className="flex justify-center items-center px-2 py-2 border rounded-[50%] border-[#5A7184] 
                    hover:bg-[#5A7184] hover:text-white" key={index}
                      onMouseEnter={(e) => e.currentTarget.querySelector("svg").style.color = icon.hoverColor}
                      onMouseLeave={(e) => e.currentTarget.querySelector("svg").style.color = icon.defaultColor}
                    >
                        {<icon.component color={icon.defaultColor}/>}
                    </div>
                  ))}
              </div>
            </div>
            {footerItem.map((item, index)=>(
                <div key={index} className="flex-2">
                  <p className="text-[#5A7184] font-bold text-lg mb-2">{item.title}</p>
                  {item.listLink.map((value,index)=>(
                    <div key={index}>
                      <p className="text-[#959EAD] text-sm pb-3 hover:text-white">
                        <a href={value.link}>{value.name}</a>
                      </p>
                    </div>
                  ))}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer

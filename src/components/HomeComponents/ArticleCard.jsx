import { imageBlog } from "../../constants"
import { FaCheck } from "react-icons/fa6"

// Xử lý dữ liệu từ components cha gửi qua
const ArticleCard = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl flex flex-col gap-3 max-w-md">
        <img src={imageBlog.blogImage1} alt="Blog Image" />
        <div className="flex flex-col justify-center items-start gap-5 px-5 py-5">
          <p className="text-xl font-bold text-[#183B56] italic">Future of Work</p>
          <p className="text-lg text-[#183B56]">Majority of people will work in jobs that don't exist today.</p>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <img src={imageBlog.author} alt="Author Images"  className="rounded-full w-10 h-10 object-cover"/>
             <div>
                 <p className="font-bold text-[#183B56]">Huỳnh Anh Developer</p>
                 <div className="flex items-center gap-3">
                    <FaCheck color="#36B37E" style={{background:"#33FF99", borderRadius:"50%", padding:"5px", width:"20px", height:"20px"}}/>
                    <p className="text-[#183B56] italic">Verified writer</p>
                 </div>
             </div>
               
            </div>
              <p className="text-lg font-bold text-[#183B56] italic">02 May</p>
          </div>
        </div>
    </div>
  )
}

export default ArticleCard

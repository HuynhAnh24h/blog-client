import { imageBlog } from "../../constants"
import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

// Xử lý dữ liệu từ components cha gửi qua
const ArticleCard = ({ title,
  shortDesc,
  blogImage,
  author,
  verify,
  date,
  id, }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl flex flex-col gap-3 lg:max-w-md md:max-w-sm max-w-sm w-full" key={id}>
      <img src={blogImage} alt="Blog Image" />
      <div className="flex flex-col justify-center items-start gap-5 px-5 py-5">
        <p className="text-xl font-bold text-[#183B56] italic">{title}</p>
        <p className="text-lg text-[#183B56]">{shortDesc}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <img src={imageBlog.author} alt="Author Images" className="rounded-full w-10 h-10 object-cover" />
            <div>
              <p className="font-bold text-[#183B56]">{author}</p>
              {verify ? (<div className="flex items-center gap-3">
                <FaCheck color="#36B37E" style={{ background: "#cbffcb", borderRadius: "50%", padding: "5px", width: "20px", height: "20px", fontSize:"35px", fontWeight:"bold" }} />
                <p className="text-[#183B56] italic">Verified writer</p>
              </div>):(
                <div className="flex items-center gap-3">
                <IoClose color="red" style={{ background: "#ffbfaa", borderRadius: "50%", padding: "5px", width: "20px", height: "20px", fontSize:"35px", fontWeight:"bold" }} />
                <p className="text-[#183B56] italic">User not verified</p>
              </div>
              )}
            </div>

          </div>
          <p className="text-lg font-bold text-[#183B56] italic">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard

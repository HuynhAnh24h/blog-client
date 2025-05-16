
import ArticleCard from './HomeComponents/ArticleCard'
import { blogData } from '../constants'

// Nhận Data Api ở đây
const Articles = () => {
  return (
    <section className='container px-4 lg:mx-auto w-full
    flex flex-wrap md:justify-around lg:justify-between items-center md:gap-x-3 gap-y-3 py-10 
    '>

        {/* Phân rã API Cho Component Con */}
        {blogData.map((item)=>(
            <ArticleCard
              title = {item.title}
              shortDesc = {item.shortDesc}
              blogImage = {item.blogImage}
              author = {item.author}
              verify = {item.verify}
              date = {item.date}
              id = {item.id}
            />
        ))}
    </section>
  )
}

export default Articles

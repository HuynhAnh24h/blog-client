
import ArticleCard from './HomeComponents/ArticleCard'
import { blogData } from '../constants'

// Nhận Data Api ở đây
const Articles = () => {
  return (
    <section className='container px-4 md:mx-auto'>
        <div className='flex flex-wrap justify-center md:justify-center items-center md:gap-x-5 gap-y-5 py-10'>
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
        </div>
        <div className='flex justify-center items-center'>
            <button className='px-5 py-2 border-2 border-blue-600 rounded text-blue-600
              font-bold text-md hover:bg-blue-600 hover:text-white hover:cursor-pointer
              md:text-md lg:text-xl
            '>Load more</button>
        </div>
    </section>
  )
}

export default Articles

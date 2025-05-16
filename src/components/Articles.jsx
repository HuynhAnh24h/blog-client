
import ArticleCard from './HomeComponents/ArticleCard'

// Nhận Data Api ở đây
const Articles = () => {
  return (
    <section className='container px-4 md:mx-auto
    flex flex-wrap justify-between items-center md:gap-x-5 gap-y-5 py-10
    '>

        {/* Phân rã API Cho Component Con */}
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </section>
  )
}

export default Articles

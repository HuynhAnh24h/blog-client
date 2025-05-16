import MainLayout from '../layouts/MainLayout'
import { Articles, CTA, Hero } from '../../components'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <Articles/>
      <CTA/>
    </MainLayout>
  )
}

export default HomePage

import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Articles, Hero } from '../../components'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <Articles/>
    </MainLayout>
  )
}

export default HomePage

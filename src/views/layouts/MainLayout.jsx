import React from 'react'
import { Footer, Header } from '../../components'


// This is Main layout Using for all Page
const MainLayout = ({children}) => {

  return (
   <>
    <Header/>
      {children}
    <Footer/>
   </>
  )
}

export default MainLayout

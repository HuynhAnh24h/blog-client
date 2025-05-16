import React from 'react'
import { Footer, Header } from '../../components'


// This is Main layout Using for all Page
const MainLayout = ({children}) => {

  return (
   <>
    <Header/>
       <div className='w-full'>
         {children}
       </div>
    <Footer/>
   </>
  )
}

export default MainLayout

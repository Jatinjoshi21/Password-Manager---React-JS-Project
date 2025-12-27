import React from 'react'
import NavBar from './components/navbar'
import Manager from './components/manager'
import Footer from './components/footer'
const App = () => {
  return (
    <>
      
     <NavBar />
     <div className="min-h-[80vh]">

     <Manager />
     </div>
     <Footer />
     
    </>
  )
}

export default App
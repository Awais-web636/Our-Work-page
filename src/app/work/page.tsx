import React from 'react'
import Navbar from './Component/Navbar'
import RecentWork from './Component/Recentwork'
import Logogallery from './Component/Logogallery'
import WhyChooseUsSection from './Component/WhyChooseUs'
import Cta from './Component/Cta'
import Projects from './Component/Projects'
import Footer from './Component/Footer'
function page() {
  return (
    <div>
      <Navbar/>
      <RecentWork/>
      <Logogallery/>
      <Projects/>
      <WhyChooseUsSection/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default page

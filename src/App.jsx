import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChora from './components/WhyChora'
import CoursesPreview from './components/CoursesPreview'
import QuoteStrip from './components/QuoteStrip'
import Corporate from './components/Corporate'
import Community from './components/Community'
import Founder from './components/Founder'
import DraftingBoard from './components/DraftingBoard'
import Footer from './components/Footer'
import AllCourses from './components/AllCourses'
import OurStory from './components/OurStory'
import AutoCADCourse from './components/AutoCADCourse'
import ApplicationForm from './components/ApplicationForm'

function App() {
  const [page, setPage] = useState('home')

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const openHomePage = () => {
    setPage('home')
    scrollTop()
  }

  const openCoursesPage = () => {
    setPage('courses')
    scrollTop()
  }

  const openStoryPage = () => {
    setPage('story')
    scrollTop()
  }

  const openAutoCADPage = () => {
    setPage('autocad')
    scrollTop()
  }

  const openApplicationPage = () => {
    setPage('application')
    scrollTop()
  }

  return (
    <>
      <Navbar openHomePage={openHomePage} />

      <main>
        {page === 'home' && (
          <>
            <Hero openStoryPage={openStoryPage} />

            <WhyChora />

            <CoursesPreview
              openCoursesPage={openCoursesPage}
              openAutoCADPage={openAutoCADPage}
            />

            <QuoteStrip />

            <Corporate />

            <Community />

            <Founder />

            <DraftingBoard />

            <Footer />
          </>
        )}

        {page === 'courses' && (
          <AllCourses
            openHomePage={openHomePage}
            openAutoCADPage={openAutoCADPage}
          />
        )}

        {page === 'story' && (
          <OurStory
            openHomePage={openHomePage}
            openCoursesPage={openCoursesPage}
          />
        )}

        {page === 'autocad' && (
          <AutoCADCourse
            openHomePage={openHomePage}
            openCoursesPage={openCoursesPage}
            openApplicationPage={openApplicationPage}
          />
        )}

        {page === 'application' && (
          <ApplicationForm
            openHomePage={openHomePage}
            openAutoCADPage={openAutoCADPage}
          />
        )}

      </main>
    </>
  )
}

export default App
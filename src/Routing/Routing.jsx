import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import CaseStudy from '../Pages/CaseStudy'
import { Playground } from '../Pages/Playground'
import { Contact } from '../Pages/Contact'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/casestudy' element={<CaseStudy />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Routing
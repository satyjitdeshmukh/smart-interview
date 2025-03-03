import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {Interview} from "../Components/Interview"
import { InterviewTypes } from '../Components/InterviewTypes'

import { Contact } from '../Pages/Contact'
import { Home } from '../Pages/Home'
import Homes from '../Pages/Homes'

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/interviews' element={<InterviewTypes/>}/>
            <Route path='/homes' element={<Homes/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/interview/:techStack' element={<Interview/>}/>
        </Routes>
    </div>
  )
}

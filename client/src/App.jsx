import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navigations/Navbar'
import PostError from './components/pages/PostError'
import PostForm from './components/pages/PostForm'
import PostPage from './components/pages/PostPage'
import PostContextProvider from './context/PostProvider'



function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='container bg-gray-100 mx-auto py-4 px-20 md:bg-gray-100'>
        <PostContextProvider>
          <Routes>
            <Route path='/' element={<PostPage />} />
            <Route path='/new' element={<PostForm />} />
            <Route path='/edit/:id' element={<PostForm />} />
            <Route path='*' element={<PostError />} />
          </Routes>
        </PostContextProvider>
      </div>
    </div>
  )
}

export default App
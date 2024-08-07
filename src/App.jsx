import { useState } from 'react'
import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import TransactionDetailsPage from './pages/TransactionDetailsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<TransactionDetailsPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
)
);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

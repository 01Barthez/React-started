import React from 'react'
import Router from '@/routes/router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster />
    </>
  )
}

export default App

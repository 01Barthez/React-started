import React from 'react'
import Router from '@/routes/router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/hooks/use-theme';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={Router} />
      <Toaster />
    </ThemeProvider>
  )
}

export default App

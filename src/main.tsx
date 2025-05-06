import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { AuthProvider } from './components/context/useAuth.tsx'
// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'
import { Toaster } from './components/ui/sonner.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new router instance
const router = createRouter({ routeTree })
const queryClient = new QueryClient()
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode> 
       <QueryClientProvider client={queryClient}>
      <AuthProvider>
      
          <RouterProvider router={router} />
          <Toaster />
          
      </AuthProvider>
    </QueryClientProvider>
    </StrictMode>,
  )
}
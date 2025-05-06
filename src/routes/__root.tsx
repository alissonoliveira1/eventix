import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '../components/context/theme.context' 
export const Route = createRootRoute({
  component: () => (
    <>
    <ThemeProvider defaultTheme="dark" >
      
         <TanStackRouterDevtools />
         <Outlet />
    </ThemeProvider>
    
     
    </>
  ),
})
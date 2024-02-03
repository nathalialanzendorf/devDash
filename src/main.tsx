import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import SignIn from './pages/SignIn.tsx'
import Dashboard from './pages/Dashboard.tsx'
import SignUp from './pages/SignUp.tsx'
import Notfound from './pages/NotFound.tsx'
import GetUser from './pages/User/GetLogin.tsx'
import GetUsers from './pages/User/ListUsers.tsx'

const router = createBrowserRouter([
  
  {path: "/*", element: <Notfound />},
  {path: "/auth/signIn", element: <SignIn />},
  {path: "/dashboard", element: <Dashboard />},
  {path: "/auth/signUp", element: <SignUp />},
  {path: "/auth/:username", element: <GetUser />},
  
  {path: "/auth", element: <GetUsers />},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

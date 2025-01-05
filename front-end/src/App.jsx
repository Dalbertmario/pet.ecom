import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Customercare from './pages/Customercare'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'
import {Toaster} from 'react-hot-toast'
import Applayout from './pages/Applayout'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import CreateRole from './pages/CreateRole'
import { useEffect, useState } from 'react'
import UseTokenValidation from './features/signUp/tokenvalidation'
import SignUp from './pages/SignUp'
import Userdash from './features/dashboard/Userdash'
import ViewProducts from './pages/ViewProducts'
import DisplaySingleProduct from './pages/DisplaySingleProduct'

function App() {
const {validData}=UseTokenValidation()
const [userIndentification,setuserIdentity]=useState(null)
useEffect(function(){
  if(validData){
  setuserIdentity(validData)
  }
},[validData])

const route = createBrowserRouter([
  {path:'login',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {element:<Applayout/>,children:[
    {path:'/customercare',element:<Customercare/>},
    {path:'/',element:<Dashboard/>},
    {path:'/cart',element:<Cart/>},
    {path:'/admin',element:<AdminPage/>},
    {path:'/createRole',element:<CreateRole/>},
    {path:'/userdash',element:<Userdash/>},
    {path:'/products/:animal',element:<ViewProducts/>},
    {path:'/products/:productname/:id',element:<DisplaySingleProduct/>}
  ]}
])
  return (
    <div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 2000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'gray',
            color: 'white',
          },
        }}
      />
   <RouterProvider router={route}/>
   </div>
  )
}

export default App
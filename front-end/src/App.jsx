import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Customercare from './pages/Customercare'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'
import {Toaster} from 'react-hot-toast'
import Applayout from './pages/Applayout'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'
import CreateRole from './pages/CreateRole'
import SignUp from './pages/SignUp'
import Userdash from './features/dashboard/Userdash'
import ViewProducts from './pages/ViewProducts'
import DisplaySingleProduct from './pages/DisplaySingleProduct'
import Shopbybrand from './pages/Shopbybrand'
import ShopBypets from './pages/ShopBypets'
import ProtectedRoute from './service/ProtectedRoute'
import AdminLayout from './ui/AdminLayout'
import Unauthorized from './pages/Unauthorized'
import Profile from './ui/Profile'

function App() {


const route = createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/unauthorized',element:<Unauthorized/>},
  {
    element:<AdminLayout/>,
    children:[
      {path:'/admin',element:
      (<ProtectedRoute allowedRoles={['admin']}> <AdminPage/> </ProtectedRoute>)},
    ]
  },
  {element:<Applayout/>,children:[
    {path:'/customercare',element:<ProtectedRoute allowedRoles={['admin','customer-care']}>
      <Customercare/>
    </ProtectedRoute>}
  ]},
  {element:<Applayout/>,children:[
    {path:'/createRole',element:<CreateRole/>},
    {path:'/userdash',element:<Userdash/>},
    {path:'/products/:animal',element:<ViewProducts/>},
    {path:'/products/:productname/:id',element:<DisplaySingleProduct/>},
    {path:'/shopbybrand/:brand',element:<Shopbybrand/>},
    {path:'/shopybypets/:petname',element:<ShopBypets/>},
    {path:'/profile',element:<Profile/>}
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
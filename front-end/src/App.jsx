import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Customercare from './pages/Customercare'
import {Toaster} from 'react-hot-toast'
import Applayout from './pages/Applayout'
import Login from './pages/Login'
import AdminPage from './pages/admin/AdminPage'
import CreateRole from './pages/CreateRole'
import SignUp from './pages/SignUp'
import Userdash from './features/dashboard/Userdash'
import ViewProducts from './pages/ViewProducts'
import DisplaySingleProduct from './pages/DisplaySingleProduct'
import Shopbybrand from './pages/Shopbybrand'
import ShopBypets from './pages/ShopBypets'
import ProtectedRoute from './service/ProtectedRoute'
import AdminLayout from './pages/admin/AdminLayout'
import Unauthorized from './pages/Unauthorized'
import Profile from './ui/Profile'
import SearchViewPage from './pages/SearchViewPage'
import Addresspage from './pages/Addresspage'
import CheackOut from './pages/CheackOut'
import Successpage from './pages/Successpage'
import UserOrder from './pages/UserOrder'
import HeaderProducts from './pages/HeaderProducts'
import Wishlist from './pages/Wishlist'
import Errorpage from './pages/Errorpage'
import AdminAddproduct from './pages/admin/AdminAddproduct'

function App() {


const route = createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/signup',element:<SignUp/>},
  {path:'/success',element:<Successpage/>},
  {path:'/unauthorized',element:<Unauthorized/>},
  {
    element:<AdminLayout/>,
    children:[
      {path:'/admin',element:
      (<ProtectedRoute allowedRoles={['admin']}> <AdminPage/> </ProtectedRoute>)},
      {path:'/addproduct',element:<ProtectedRoute allowedRoles={['admin']}> <AdminAddproduct/></ProtectedRoute>}
    ]
  },
  {element:<Applayout/>,children:[
    {path:'/customercare',element:<ProtectedRoute allowedRoles={['admin','customer-care']}>
      <Customercare/>
    </ProtectedRoute>}
  ]},
  {element:<Applayout/>,children:[
    {path:'/wishlist',element:<Wishlist/>,errorElement:<Errorpage/>},
    {path:'/headerpro/:animal',element:<HeaderProducts/>,errorElement:<Errorpage/>},
    {path:'/createRole',element:<CreateRole/>,errorElement:<Errorpage/>},
    {path:'/customer',element:<Customercare/>,errorElement:<Errorpage/>},
    {path:'/userdash',element:<Userdash/>,errorElement:<Errorpage/>},
    {path:'/products/:animal',element:<ViewProducts/>,errorElement:<Errorpage/>},
    {path:'/products/:productname/:id',element:<DisplaySingleProduct/>,errorElement:<Errorpage/>},
    {path:'/shopbybrand/:brand',element:<Shopbybrand/>,errorElement:<Errorpage/>},
    {path:'/shopybypets/:petname',element:<ShopBypets/>,errorElement:<Errorpage/>},
    {path:'/profile',element:<Profile/>,errorElement:<Errorpage/>},
    {path:'/addressForm',element:<Addresspage/>,errorElement:<Errorpage/>},
    {path:'/search/:el',element:<SearchViewPage/>,errorElement:<Errorpage/>},
    {path:'/checkout',element:<CheackOut/>,errorElement:<Errorpage/>},
    {path:'/order',element:<UserOrder/>,errorElement:<Errorpage/>},

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
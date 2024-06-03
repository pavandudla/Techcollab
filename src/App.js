import logo from './logo.svg';
import './App.css';
import AllCourses from './Components/Courses/AllCourses';
import GetSingleCourse from './Components/Courses/GetSingleCourse';
import { createBrowserRouter } from 'react-router-dom';
import Error from './Components/Error';
import SingleCourse from './Components/Courses/SingleCourse';
import { Outlet } from 'react-router-dom';
import CourseEnroll from './Components/Courses/CourseEnroll';
import MyCourses from './Components/Courses/UserEnrolledCourses'
import MyPayments from './Components/Payments/MyPayments';
// import ForgotPassword from './Components/ForgotPassword';
// import ResetPassword from './Components/ResetPassword'
// import ChangePassword from './Components/ChangePassword';
import Header2 from './Components/Homepagecntnt/Header2';
// import Loginpage from './Components/Authentication/Loginpage';
import Homepage from './Components/Homepagecntnt/Homepage';
import Register_page from './Components/Authentication/Register_page.js'
import Loginpage from './Components/Authentication/Login_page';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ResetPassword from './Components/Authentication/ResetPassword';
import ChangePassword from './Components/Authentication/ChangePassword';


function App() {
  return (
    <div className="App">
         <Header2/>
         {/* <Homepage/> */}
        <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/allCourses',
        element:<AllCourses/>
      },
      // {
      //   path:'/login',
      //   element:<Login/>
      // },
      // {
      //   path:'/register',
      //   element:<Register/>
      // },
      {
        path:'/singleCourse/:id',
        element:<SingleCourse/>
      },
      {
        path:'/getSingleCourse/:id',
        element:<GetSingleCourse/>
      },
      {
        path:'/courseEnroll/:courseName',
        element:<CourseEnroll/>
      },
      {
        path:'/MyCourses',
        element:<MyCourses/>
      },
      {
        path:'/MyPayments',
        element:<MyPayments/>
      },
      {
        path:'/ForgotPassword',
        element:<ForgotPassword/>
      },
       {
        path:'/reset_password/:reset_password_token_from_url',
        element:<ResetPassword/>
       },
       {
        path:'/change_password/',
        element:<ChangePassword/>
       },
      {
        path:'/Register_page',
        element:<Register_page/>
      },
      {
        path:'/Loginpage',
        element:<Loginpage/>
      },
      // {
      //   path:'/Logout',
      //   element:<Logout/>
      // },
      
    ]
  },
  
])

export default appRouter;

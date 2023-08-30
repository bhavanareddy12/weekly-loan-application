import { Route, Routes } from "react-router-dom";
import Login from '../Pages/login/Login';
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const PrivateRoutes = () => {
    const pageRoutes = <>
    <Route index  path='/login' element={<Login/>} />
    <Route  path='/' element={<Login/>} />
    <Route  path='*' element={<PageNotFound/>} />
    </>
  
    return <Routes>{pageRoutes}</Routes>;
  };
  
  export default PrivateRoutes
  export {PrivateRoutes}
import { Route, Routes } from "react-router-dom";
import { pagesData } from "./pagesData";
import MainLayout from "../layout/MainLayout";
import Login from '../Pages/login/Login';
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const PublicRoutes = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
      return <Route key={title} path={`/${path}`} element={element} />;
    });
  
    return <Routes>
      <Route element={<MainLayout/>}>{pageRoutes}</Route>
      <Route  path='*' element={<PageNotFound/>} />
      {/* <Route index  path='/login' element={<Login/>} />
      <Route  path='/' element={<Login/>} /> */}
      </Routes>;
  };
  
  export default PublicRoutes
  export {PublicRoutes}
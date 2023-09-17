import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE } from '../../config/router/paths';
import { useAuthContext } from '../../context/authContex';
import { Footer } from '../../components/common/footer';

export default function PublicRoute() {
  const { isAuthenticated, role } = useAuthContext();

  if (isAuthenticated && role === 'client') {

    return <Navigate to={PRIVATE} />;
  }

  else if (!isAuthenticated) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Outlet />
        <Footer/>
      </div>
    );
  }
}
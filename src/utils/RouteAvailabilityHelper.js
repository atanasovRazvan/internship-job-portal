import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export default function isRouteAvailable(path) {
  const { userRole } = useContext(AuthContext);

  if ((path === '/jobs' || path === '/job/:id') && userRole === 'user') {
    return true;
  }

  if (path === '/users' && userRole === 'sys_admin') {
    return true;
  }

  if (path === '/yourjobs' && userRole === 'company_user') {
    return true;
  }

  return false;
}


import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useAuthModal } from '@/hooks/useAuthModal';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const { openModal } = useAuthModal();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      openModal('login');
    }
  }, [isAuthenticated, openModal, location.pathname]);

  return <>{children}</>;
};

export default ProtectedRoute;

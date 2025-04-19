
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useAuthModal } from '@/hooks/useAuthModal';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const { openModal } = useAuthModal();

  useEffect(() => {
    if (!isAuthenticated) {
      openModal('login');
    }
  }, [isAuthenticated, openModal]);

  return <>{children}</>;
};

export default ProtectedRoute;

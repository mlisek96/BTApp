import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '$/contexts/AuthContext';

export type UserState  = 'authenticated' | 'unauthenticated'

export const CurrentUserValidator = (props: {requireUserState: UserState; children: ReactNode;}) => {
  const { currentUser } = useAuth();

  const authenticated = currentUser !== null;

  switch (props.requireUserState) {
    case 'authenticated': {
      if (authenticated) {
        return <Navigate to="/" />;
      }
      break;
    }
    case 'unauthenticated': {
      if (!authenticated) {
        return  <Navigate to="/login" />;
      }
      break;
    }
  }

  return (
    <>
      {props.children}
    </>
  );
};

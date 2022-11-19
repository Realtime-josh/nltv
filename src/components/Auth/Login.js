import React, { lazy, Suspense }  from 'react';
import Loader from '../Loader/Loader';

const LoginHeader = lazy(() => import('./LoginHeader'));
const LoginForm = lazy(() => import('./LoginForm'));
const Footer = lazy(() => import('../Footer'));

const Login = () => {
  return (
    <div className='login-div'>
      <Suspense fallback={<Loader />}>
        <LoginHeader />
        <LoginForm />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>       
    </div>
  )
}

export default Login;
import React, { lazy, Suspense, }  from 'react';
import Loader from '../Loader/Loader';

const SignUpHeader = lazy(() => import('./SignUpHeader'));
const SignUpForm = lazy(() => import('./SignUpForm'));
const Footer = lazy(() => import('../Footer'));

const SignUp = () => {
  return (
    <div className='sign-up'>
      <Suspense fallback={<Loader />}>
        <SignUpHeader />
        <SignUpForm />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default SignUp;
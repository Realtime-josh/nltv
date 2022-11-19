import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';


const DashBoardHeader = lazy(() => import('./DashBoardHeader'));
const DashBoardGreet = lazy(() => import('./DashBoardGreet'));
const ListCards = lazy(() => import('./ListCards'));
const SalesRecent = lazy(() => import('./SalesRecent'));


const DashBoardBody = () => {
  return (
    <div className='product_main_body'>
      <Suspense fallback={<Loader />}>
        <DashBoardHeader />
        <DashBoardGreet />
        <ListCards />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <SalesRecent />
      </Suspense>
    </div>
  )
};


export default DashBoardBody;

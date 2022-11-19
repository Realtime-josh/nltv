import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';


const OrdersHeader = lazy(() => import('./OrdersHeader'));
const OrdersSubHeader = lazy(() => import('../Orders/OrdersSubHeader'));
const OrderActions = lazy(() => import('./OrdersActions'));

const GenresBody = () => {
  return (
    <div className='product_main_body'>
      <Suspense fallback={<Loader />}>
        <OrdersHeader />
        <OrdersSubHeader />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <OrderActions />
      </Suspense>
    </div>
  )
};


export default GenresBody;

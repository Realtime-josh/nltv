import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';


const CategoriesHeader = lazy(() => import('./CategoriesHeader'));
const CategoriesSubHeader = lazy(() => import('./CategoriesSubHeader'));
const CatActions = lazy(() => import('./CatActions'));

const CategoriesBody = () => {
  return (
    <div className='product_main_body'>
      <Suspense fallback={<Loader />}>
        <CategoriesHeader />
        <CategoriesSubHeader />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CatActions />
      </Suspense>
    </div>
  )
};


export default CategoriesBody;

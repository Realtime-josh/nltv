import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';

const ProductHeader = lazy(() => import('./ProductHeader'));
const ProductSubHeader = lazy(() => import('./ProductSubHeader'));
const FilmBoard = lazy(() => import('./FilmBoard'));
const ProductPagination = lazy(() => import('./ProductPagination'));

const ProductMainBody = () => {
  return (
    <div className='product_main_body'>
      <Suspense fallback={<Loader />}>
        <ProductHeader />
        <ProductSubHeader />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FilmBoard />
        <ProductPagination />
      </Suspense>
    </div>
  )
};


export default ProductMainBody;

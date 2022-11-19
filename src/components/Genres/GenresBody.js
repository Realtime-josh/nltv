import React, { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';

const GenresHeader = lazy(() => import('./GenresHeader'));
const GenreSubHeader = lazy(() => import('./GenreSubHeader'));
const CatActions = lazy(() => import('../Categories/CatActions'));

const GenresBody = () => {
  return (
    <div className='product_main_body'>
      <Suspense fallback={<Loader />}>
        <GenresHeader />
        <GenreSubHeader />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CatActions />
      </Suspense>
    </div>
  )
};


export default GenresBody;

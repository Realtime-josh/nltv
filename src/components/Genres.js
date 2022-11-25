import React, { Suspense, Fragment} from 'react';
import { useSelector }  from 'react-redux';
import ProductSideBar from './Products/ProductSideBar';
import GenresBody from './Genres/GenresBody';
import GenreModal from './Genres/AddGenre';
import Loader from '../components/Loader/Loader';
import SmallScreen from './ModalMenu/SmallScreen';
import AddSection from '../components/Products/AddSection';
import AddSectionBoard from './Products/SectionBoard';

const Genres = () => {
  const { genreState } = useSelector(state => state.genreModal)
  const { loginState } = useSelector(state => state.auth);
  const { menuState } =  useSelector(state => state.menuModal);
  return (
    <Fragment>
      {loginState === 'STATE_LOGGED_IN' ? (
        <Fragment>
          <AddSection />
          {true && <AddSectionBoard />}
          <Suspense fallback={<Loader />}>
            {genreState && <GenreModal />}
          </Suspense>
          <div className='dashboard'>
            {menuState && <SmallScreen />}
            <ProductSideBar />
            <GenresBody />
          </div>
        </Fragment>
      ) : (
        <div>
          <p>You do not have permissions to view this page.</p>
        </div>
      )}
     
    </Fragment>
  )
};


export default Genres;

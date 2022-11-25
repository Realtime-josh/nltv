import React, { Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import {getToken, getUserDetails, getAuthState, } from '../helpers/auth';
import { setUser, setLoginState, } from '../actions/auth';
import ProductSideBar from './Products/ProductSideBar';
import CategoriesBody from './Categories/CategoriesBody';
import CategoryModal from './Categories/AddCategory';
import SmallScreen from './ModalMenu/SmallScreen';
import AddSection from '../components/Products/AddSection';
import AddSectionBoard from './Products/SectionBoard';


class Categories extends React.Component{
  componentDidMount (){
    const { dispatch } = this.props;
    const userDetails = getUserDetails();
    const token = getToken();
    const authState = getAuthState();
    if(!(userDetails === 'undefined') || !(token === 'undefined') || !(authState === 'undefined')){
      dispatch(setUser(JSON.parse(userDetails)));
      dispatch(setLoginState(authState));
    };
  };
  render(){
    const { loginState } = this.props.auth;
    const { categoryState } = this.props.categoryModal;
    const { menuState } = this.props.menuModal;
    return (
      <Fragment>
        <AddSection />
        {true && <AddSectionBoard />}
        {loginState === 'STATE_LOGGED_IN' ? (
          <Fragment>
            <Suspense>
              {categoryState && <CategoryModal />}
            </Suspense>
            <div className='dashboard'>
             { menuState && <SmallScreen />}
              <ProductSideBar />
              <CategoriesBody />
            </div>
          </Fragment>
        ): (
          <div>
            <p>You do not have permissions to view this page.</p>
          </div>
        )}
      </Fragment>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Categories);

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {getToken, getUserDetails, getAuthState, } from '../helpers/auth';
import { setUser, setLoginState, } from '../actions/auth';
import { getCategories } from '../actions/category';
import {getProducts, setProductResponse } from '../actions/product';
import { getSeries } from '../actions/series';
import { getSections } from '../actions/section';
import DeleteProduct  from './Products/DeleteProduct';
import ProductSideBar from './Products/ProductSideBar';
import ProductMainBody from './Products/ProductMainBody';
import AddProductModal from './Products/AddProduct';
import UpdateProductModal from './Products/UpdateProduct';
import AddSeriesModal from './Products/AddSeries';
import AddSeasonModal from './Products/AddSeason';
import AddEpisodeModal from './Products/AddEpisode';
import AddSectionModal from './Products/AddSection';
import AddSectionBoard from './Products/SectionBoard';
import SmallScreen from './ModalMenu/SmallScreen';



class ProductPage extends React.Component{
  componentDidMount (){
    const { dispatch } = this.props;
    const userDetails = getUserDetails();
    const token = getToken();
    const authState = getAuthState();
    if(!(userDetails === 'undefined') || !(token === 'undefined') || !(authState === 'undefined')){
      dispatch(setProductResponse(''));
      dispatch(setUser(JSON.parse(userDetails)));
      dispatch(setLoginState(authState));
      dispatch(getCategories());
      dispatch(getProducts());
      dispatch(getSeries());
      dispatch(getSections());
    };
  };
  render(){
    const { loginState } = this.props.auth;
    const { menuState } =  this.props.menuModal;
    return (
      <Fragment>
        { loginState === 'STATE_LOGGED_IN' ? (
         <Fragment>
          {true && <AddProductModal />}
          {true && <DeleteProduct />}
          {true && <AddSeriesModal />}
          {true && <AddSeasonModal />}
          {true && <AddEpisodeModal />}
          {true && <UpdateProductModal />}
          {true && <AddSectionModal />}
          {true && <AddSectionBoard />}
          <div className='product_page'>
            {menuState && <SmallScreen />}
            <ProductSideBar />
            <ProductMainBody />
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
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ProductPage);


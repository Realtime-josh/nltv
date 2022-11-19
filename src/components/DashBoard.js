import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import AddSection from '../components/Products/AddSection';
import {getToken, getUserDetails, getAuthState, } from '../helpers/auth';
import {getProducts } from '../actions/product';
import { getSeries } from '../actions/series';
import { getCategories } from '../actions/category';
import { setUser, setLoginState, } from '../actions/auth';
import ProductSideBar from './Products/ProductSideBar';
import DashBoardBody from './DashBoard/DashBoardBody';
import SmallScreen from './ModalMenu/SmallScreen';


class DashBoard extends React.Component{
  componentDidMount (){
    const { dispatch } = this.props;
    const userDetails = getUserDetails();
    const token = getToken();
    const authState = getAuthState();
    if(!(userDetails === 'undefined') || !(token === 'undefined') || !(authState === 'undefined')){
      dispatch(setUser(JSON.parse(userDetails)));
      dispatch(setLoginState(authState));
      dispatch(getProducts());
      dispatch(getCategories());
      dispatch(getSeries());
    };
  };
  render(){
    const { loginState } = this.props.auth;
    const { menuState } = this.props.menuModal;
    return (
      <Fragment>
        <AddSection />
        {loginState === 'STATE_LOGGED_IN' ? (
          <div className='dashboard'>
            {menuState && <SmallScreen />}
            <ProductSideBar />
            <DashBoardBody />
          </div>
        ): (
          <div>
            <p>You do not have permissions to view this page.</p>
          </div>
        )}
      </Fragment>
    )
  };
};

// render(){
//   const { loginState } = this.props.auth;
//   return (
//     <Fragment>
//       <div className='dashboard'>
//           <ProductSideBar />
//           <DashBoardBody />
//         </div>
//     </Fragment>
//   )
//   }
// };



const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashBoard);
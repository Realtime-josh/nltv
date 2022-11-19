import React, { Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import {getToken, getUserDetails, getAuthState, } from '../helpers/auth';
import { setUser, setLoginState, } from '../actions/auth';
import ProductSideBar from './Products/ProductSideBar';
import OrdersBody from './Orders/OrdersBody';
import OrderModal from './Orders/AddOrders';
import SmallScreen from './ModalMenu/SmallScreen';
import AddSection from '../components/Products/AddSection';


class Orders extends React.Component{
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
    const { orderState } = this.props.orderModal;
    const { menuState } =  this.props.menuModal;
    return (
      <Fragment>
        <AddSection />
        { loginState === 'STATE_LOGGED_IN' ? (
          <Fragment>
            <Suspense fallback={<p>Loading...</p>}>
              {orderState && <OrderModal />}
            </Suspense>
            <div className='dashboard'>
              {menuState && <SmallScreen />}
              <ProductSideBar />
              <OrdersBody />
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

export default connect(mapStateToProps)(Orders);
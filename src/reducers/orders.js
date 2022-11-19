const defaultState = {
  orderState: false,
};

const OrderReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_ORDER_STATE':
      return {
        ...state,
        orderState: action.orderState,
      };
      default:
        return state;
  };
};

export default OrderReducer;
const defaultState = {
  menuState: false,
  toggleBigScreen: true,
};

const MenuReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_MENU_STATE':
      return {
        ...state,
        menuState: action.menuState,
      };
    case 'SET_TOOGLE_BIGSCREEN':
      return {
        ...state,
        toggleBigScreen: action.toggleBigScreen,
      };
      default:
        return state;
  };
};

export default MenuReducer;

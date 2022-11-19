const defaultState = {
  categoryState: false,
  catDeleteState: false,
  catDeleteValue: '',
  categoryid: "",
  categories: [],
  categoriesResponse: '',
};

const CategoryReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_CATEGORY_STATE':
      return {
        ...state,
        categoryState: action.categoryState,
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
      };
    case 'SET_CATEGORIES_RESPONSE':
      return {
        ...state,
        categoriesResponse: action.categoriesResponse,
      };
    case 'SET_CATDELETE_STATE':
      return {
        ...state,
        catDeleteState: action.catDeleteState,
      };
    case 'SET_CATEGORY_ID':
      return {
        ...state,
        categoryid: action.categoryid,
      };
    case 'SET_CATDELETE_VALUE':
      return {
        ...state,
        catDeleteValue: action.catDeleteValue,
      };
      default:
        return state;
  };
};

export default CategoryReducer;

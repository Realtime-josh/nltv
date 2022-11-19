const defaultState = {
  productState: false,
  productStateTwo: false,
  updateState: false,
  products: [],
  proUpdateValue: '',
  productid: '',
  proDeleteValue: '',
  productResponse: '',
  sectionResponse: '',
  fileContent: undefined,
  fileContentTwo: undefined,
};

const ProductReducer = (state = defaultState, action) => {
  switch(action.type){
    case 'SET_PRODUCT_STATE':
      return {
        ...state,
        productState: action.productState,
      };
    case 'SET_PRODUCT_STATETWO':
      return {
        ...state,
        productStateTwo: action.productStateTwo,
      };
    case 'SET_UPDATE_STATE':
      return {
        ...state,
        updateState: action.updateState,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    case 'SET_PRODUCT_UPDATE':
      return {
        ...state,
        proUpdateValue: action.proUpdateValue,
      };
    case 'SET_PRODUCT_ID':
      return {
        ...state,
        productid: action.productid,
      };
    case 'SET_PRODUCT_DELETE':
      return {
        ...state,
        proDeleteValue: action.proDeleteValue,
      };
    case 'SET_PRODUCT_RESPONSE':
      return {
        ...state,
        productResponse: action.productResponse,
      };
    case 'SET_SECTION_RESPONSE':
      return {
        ...state,
        sectionResponse: action.sectionResponse,
      };
    case 'SET_FILE_CONTENT':
      return {
        ...state,
        fileContent: action.fileContent,
      };
    case 'SET_FILE_CONTENT_TWO':
      return {
        ...state,
        fileContentTwo: action.fileContentTwo,
      };
    default:
      return state;
  };
};

export default ProductReducer;
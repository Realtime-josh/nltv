import axios from 'axios';
import { getToken, } from '../helpers/auth';


const categoriesURL = 'https://newlabel-api-staging.herokuapp.com/categories';
const addCategoriesURL = 'https://newlabel-api-staging.herokuapp.com/categories';

export const setCategoryStatus = (categoryState) => (
  {
    type: 'SET_CATEGORY_STATE',
    categoryState,
  }
);

export const setCatDeleteState = (catDeleteState) => (
  {
    type: 'SET_CATDELETE_STATE',
    catDeleteState,
  }
);

export const setCatDeleteValue = (catDeleteValue) => (
  {
    type: 'SET_CATDELETE_VALUE',
    catDeleteValue,
  }
);

export const setCategoryId = (categoryid) => (
  {
    type: 'SET_CATEGORY_ID',
    categoryid,
  }
);

export const setCategories = (categories) => (
  {
    type: 'SET_CATEGORIES',
    categories  
  }
);

export const setCategoriesResponse = (categoriesResponse) => (
  {
    type: 'SET_CATEGORIES_RESPONSE',
    categoriesResponse  
  }
);


export const getCategories = () => dispatch => {
  dispatch(setCategoriesResponse('loading...'));
  return axios({
    method: 'get',
    url: categoriesURL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    if(response.data.data){
      dispatch(setCategories(response.data.data));
      dispatch(setCategoriesResponse('Categories Retrieved.'));
    }else{
      this.props.dispatch(setCategories([]));
    }
  })
  .catch((error) =>{
    dispatch(setCategoriesResponse(!!error.data.message ? error.data.error : 'An error occured. Please ensure that your internet connection is stabe.'));
  });
};

export const addCategory = (name) => dispatch => {
  dispatch(setCategoriesResponse('creating...'));
  return axios({
    method: 'post',
    url: addCategoriesURL,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: {
      "name": name,
    },
})
  .then((response) => {
    dispatch(setCategoriesResponse('Category Created.'));
    window.location.href = '/category';
  })
  .catch((error) =>{
    dispatch(setCategoriesResponse('An error occurred'));
  });
};


export const deleteCategory = (name) => dispatch => {
  dispatch(setCategoriesResponse('deleting...'));
  return axios({
    method: 'delete',
    url: `${addCategoriesURL}/${name}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setCategoriesResponse('Category deleted.'));
    window.location.href = '/category';
  })
  .catch((error) =>{
    dispatch(setCategoriesResponse('Category already deleted'));
  });
};
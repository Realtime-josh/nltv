import axios from 'axios';
import { getToken} from '../helpers/auth';

// const baseURL = 'https://newlabel-api-staging.herokuapp.com';
const productURL = 'https://newlabel-api-staging.herokuapp.com/movies';
const uploadURL = 'https://newlabel-api-staging.herokuapp.com/upload';


export const setProductStatus = (productState) => (
  {
    type: 'SET_PRODUCT_STATE',
    productState
  }
);

export const setProductStatusTwo = (productStateTwo) => (
  {
    type: 'SET_PRODUCT_STATETWO',
    productStateTwo
  }
);

export const setUpdateStatus = (updateState) => (
  {
    type: 'SET_UPDATE_STATE',
    updateState
  }
);

export const setProducts = (products) => (
  {
    type: 'SET_PRODUCTS',
    products  
  }
);

export const setProductUpdate = (proUpdateValue) => (
  {
    type: 'SET_PRODUCT_UPDATE',
    proUpdateValue  
  }
);

export const setProductID = (productid) => (
  {
    type: 'SET_PRODUCT_ID',
    productid  
  }
);

export const setProductDelete = (proDeleteValue) => (
  {
    type: 'SET_PRODUCT_DELETE',
    proDeleteValue  
  }
);

export const setProductResponse = (productResponse) => (
  {
    type: 'SET_PRODUCT_RESPONSE',
    productResponse  
  }
);


export const setSectionResponse = (sectionResponse) => (
  {
    type: 'SET_SECTION_RESPONSE',
    sectionResponse  
  }
);

export const setFileContent = (fileContent) => (
  {
    type: 'SET_FILE_CONTENT',
    fileContent
  }
);

export const setFileContentTwo = (fileContentTwo) => (
  {
    type: 'SET_FILE_CONTENT_TWO',
    fileContentTwo
  }
);



export const addProduct = (movieName, videoURL, price,
  catID, description, year, runtime, cast, file, file2) => dispatch => {
  dispatch(setProductResponse('creating...'));
  let urlHolder = [];
  let formData = new FormData();
  formData.append("file", file)
  return axios({
    method: 'post',
    formData,
    url: uploadURL,
    headers: {
      'content-Type': 'multipart/form-data',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: formData,
})
  .then((result) => {
    let formData2 = new FormData();
    formData2.append("file", file2);
    urlHolder.push(result.data.data.url);
    return axios({
      method: 'post',
      formData2,
      url: uploadURL,
      headers: {
        'content-Type': 'multipart/form-data',
        'a-authorization': `Bearer ${getToken()}`
      },
      data: formData2,
     
  })
  .then((feedback) => {
    return axios({
      method: 'post',
      url: productURL,
      headers: {
        'Content-Type': 'application/json',
        'a-authorization': `Bearer ${getToken()}`
      },
      data: {
        "name": movieName,
        "categories": [catID],
        "price": Number(price),
        "description": description,
        "banner": urlHolder[0],
        "poster": feedback.data.data.url,
        "videoUrl": videoURL,
        "year": year,
        "runtime": runtime,
        "cast": [cast],
        "isInStock": true,
        "isOnSale": true
      },
    })
})
  .then(() => {
    dispatch(setProductResponse('Product Created.'));
  })
  .catch((error) =>{
    dispatch(setProductResponse('Could not add movie'));
  });
})
  .catch((error) =>{
    dispatch(setProductResponse('Could not add movie'));
  });
};


export const getProducts = () => dispatch => {
  dispatch(setProductResponse('retrieving...'));
  return axios({
    method: 'get',
    url: productURL,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setProducts(response.data.data));
    dispatch(setProductResponse(''));
  })
  .catch((error) =>{
    dispatch(setProductResponse('Could not fetch movies'));
  });
};

export const updateProduct = (movieName, price, 
  description, proUpdateValue, isonsale, isinstock) => dispatch => {
  dispatch(setProductResponse('creating...'));
  return axios({
    method: 'patch',
    url: `${productURL}/${proUpdateValue}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: {
      "name": movieName,
      "price": Number(price),
      "description": description,
      "isInStock": Boolean(isonsale),
      "isOnSale": Boolean(isinstock),
    },
})
  .then(() => {
    dispatch(setProductResponse('Movie Updated.'));
  })
  .catch((error) =>{
    dispatch(setProductResponse('Could not update movie'));
  });
};




export const deleteProduct = (product) => dispatch => {
  dispatch(setProductResponse('deleting...'));
  return axios({
    method: 'delete',
    url: `${productURL}/${product}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setProducts(response.data.data));
    dispatch(setProductResponse('Product deleted.'));
  })
  .catch((error) =>{
    dispatch(setProductResponse('Could not delete movie'));
  });
};

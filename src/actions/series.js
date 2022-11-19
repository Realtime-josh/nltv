import axios from 'axios';
import { getToken} from '../helpers/auth';

const seriesURL = 'https://newlabel-api-staging.herokuapp.com/series';
const uploadURL = 'https://newlabel-api-staging.herokuapp.com/upload';


export const setSeriesStatus = (seriesState) => (
  {
    type: 'SET_SERIES_STATE',
    seriesState
  }
);

export const setSeriesStatusTwo = (seriesStateTwo) => (
  {
    type: 'SET_SERIES_STATETWO',
    seriesStateTwo
  }
);

export const setSeries = (series) => (
  {
    type: 'SET_SERIES',
    series  
  }
);

export const setSeriesId = (seriesid) => (
  {
    type: 'SET_SERIES_ID',
    seriesid,
  }
);

export const setSeriesDelete = (serDeleteValue) => (
  {
    type: 'SET_SERIES_DELETE',
    serDeleteValue  
  }
);

export const setSeriesResponse = (seriesResponse) => (
  {
    type: 'SET_SERIES_RESPONSE',
    seriesResponse  
  }
);


export const addSeries = (movieName, cast, catID, description, file, file2) => dispatch => {
  dispatch(setSeriesResponse('creating...'));
  let urlHolder = []
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
        url: seriesURL,
        headers: {
          'Content-Type': 'application/json',
          'a-authorization': `Bearer ${getToken()}`
        },
        data: {
          "name": movieName,
          "cast": [cast],
          "categories": [catID],
          "description": description,
          "banner": urlHolder[0],
          "poster": feedback.data.data.url,
        },
    })
      .then(() => {
        dispatch(setSeriesResponse('Series Created.'));
      })
      .catch(() => {
        dispatch(setSeriesResponse('Could not add series'));
      })
    })
    .catch(() => {
        dispatch(setSeriesResponse('Could not upload poster'));
      });
    })
    .catch(() => {
      dispatch(setSeriesResponse('An error occured!'));
    });
  };



export const getSeries = () => dispatch => {
  dispatch(setSeriesResponse('retrieving...'));
  return axios({
    method: 'get',
    url: seriesURL,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setSeries(response.data.data));
    dispatch(setSeriesResponse('Product Created.'));
  })
  .catch((error) =>{
    dispatch(setSeriesResponse('An error occurred'));
  });
};


export const deleteSeries = (series) => dispatch => {
  dispatch(setSeriesResponse('deleting...'));
  return axios({
    method: 'delete',
    url: `${seriesURL}/${series}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setSeries(response.data.data));
    dispatch(setSeriesResponse('Product deleted.'));
  })
  .catch((error) =>{
    dispatch(setSeriesResponse('An error occurred'));
  });
};
